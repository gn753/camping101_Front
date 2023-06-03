import { useEffect, useMemo } from "react";
import { setAuthorizationHeader } from "api/api";
import authService from "features/common/authService";
import useLogin from "features/SignIn/hooks/useLogin";
import useMemberInfo from "./hooks/useMemberInfo";

type MyAppProps = {
  component: React.ReactNode;
};

interface Response {
  member_id: 9;
  image: string;
  email: string;
  nickname: string;
  phone_number: string;
  member_type: string;
  sign_up_type: string;
}

export default function AppAuth({ component }: MyAppProps) {
  const { setMemberInfo, getMemberInfo } = useMemberInfo();
  const { updateLogin } = useLogin();
  const { getJwtToken } = authService();

  const accessTooken = useMemo(() => {
    const token = getJwtToken();
    return token;
  }, [getJwtToken]);

  useEffect(() => {
    if (typeof window !== undefined && accessTooken) {
      setAuthorizationHeader(accessTooken);
      getMemberInfo();
      updateLogin(accessTooken, true);
    }
  }, [accessTooken, getMemberInfo, updateLogin]);

  return <>{component}</>;
}
