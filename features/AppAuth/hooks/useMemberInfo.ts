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

export const MemberInfoState = atom<null |Props>({
  key: "MemberInfoState",
  default: {
    email: "",
    image: "",
    member_id: 0,
    member_type: "",
    nickname: "",
    phone_number: "",
    sign_up_type: "",
  },
});
export default function useMemberInfo() {
  const [memberInfo, setMemberInfo] = useRecoilState(MemberInfoState);
  return { memberInfo, setMemberInfo };
}
