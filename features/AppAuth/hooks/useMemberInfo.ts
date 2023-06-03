import { axiosSetting } from "api/api";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

interface Props {
  email: string;
  image: string;
  member_id: number;
  member_type: string;
  nickname: string;
  phone_number: string;
  sign_up_type: string;
}

export const MemberInfoState = atom<null | Props>({
  key: "MemberInfoState",
  default: null,
});
export default function useMemberInfo() {
  const [memberInfo, setMemberInfo] = useRecoilState(MemberInfoState);

  const getMemberInfo = useCallback(async () => {
    const respnose = await axiosSetting.get("/api/member");
    setMemberInfo(respnose.data);
  }, [setMemberInfo]);


  const updateMemberInfo = (data: Props) => {
    setMemberInfo({ ...data });
  };

  return { memberInfo, setMemberInfo, getMemberInfo, updateMemberInfo };
}
