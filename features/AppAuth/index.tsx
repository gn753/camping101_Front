import { axiosSetting } from "api/api";
import { AuthState } from "features/SignIn/hooks/useLogin";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import fetchMemberinfo from "api/fetchMemberinfo";
import useMemberInfo from "./hooks/useMemberInfo";
import authService from "features/common/authService";

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
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(AuthState);
  const { setMemberInfo } = useMemberInfo();
  const { getJwtToken, getRefreshToken, isTokenValidOrUndefined, setJwtToken } =
    authService();

  useEffect(() => {
    //접속한다
    //토큰이 있는지 파악한다.
    const token = getJwtToken();
    const refreshToken = getRefreshToken();
    const isAccessToken = isTokenValidOrUndefined(token);
    const isRefreshToken = isTokenValidOrUndefined(refreshToken);

    if (isAccessToken === "토큰 없음") setIsLoggedIn(false);
    else if (isAccessToken === "토큰 유효") {
      setIsLoggedIn(true);
      fetchMemberinfo(token).then((res) => setMemberInfo(res));
    } else if (
      isAccessToken === "토큰 만료" &&
      isRefreshToken === "토큰 유효"
    ) {
      const fetchRereshToken = async () => {
        await axiosSetting
          .post("/api/signin/refresh", {
            refresh_token: `Bearer ${refreshToken}`,
          })
          .then((res) => {
            console.log(res, "성공 리프레시토큰");
            setJwtToken(res.data.access_token);
            setIsLoggedIn(true);
          })
          .catch((err) => {
            console.log(err, "err");
            setIsLoggedIn(false);
          });
      };
      fetchRereshToken();
      setIsLoggedIn(true);
    } else if (
      isAccessToken === "토큰 만료" &&
      isRefreshToken === "토큰 만료"
    ) {
      setIsLoggedIn(false);
    }
  }, []);

  // // if (!isLoggedIn) {
  // //   // 로그인하지 않은 사용자가 페이지 접근 시, 로그인 페이지로 이동
  // //   if (router.pathname !== "/signIn" && router.pathname !== "/signUp") {
  // //     router.push("/signIn");
  // //     return null;
  // //   }

  // //   return <SignInPage />;
  // // }

  return <>{component}</>;
}
