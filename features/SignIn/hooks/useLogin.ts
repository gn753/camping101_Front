import { useRouter } from "next/router";
import { axiosSetting } from "api/api";
import { useRecoilState, atom } from "recoil";

export const AuthState = atom<boolean>({
  key: "AuthState",
  default: false,
});
const url = "/api/signin/mail";

interface useFormProps {
  email: string;
  password: string;
}

export default function useLogin() {
  const [isLogin, setIsLogin] = useRecoilState(AuthState);
  const router = useRouter();
  //로그인 전송

  function tokenWithoutBearer(token: string) {
    return token.replace("Bearer ", "");
  }

  function setJwtToken(token: string) {
    sessionStorage.setItem("jwt", token);
  }
  function setRefreshToken(token: string) {
    return sessionStorage.setItem("refresh_token", token);
  }

  const getLoginToken = async (data: useFormProps) => {
    await axiosSetting
      .post(url, data)
      .then((res) => {
        console.log(res, "토큰확인요");
        const accesToken = tokenWithoutBearer(res.headers.access_token);
        const refreshToken = tokenWithoutBearer(res.headers.refresh_token);
        setJwtToken(accesToken);
        setIsLogin(true);
        setRefreshToken(refreshToken);
        router.push("/");
        console.log(res, "res");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 로그인이 200상태이면  전역상태로 처리

  //로그인 에러 처리

  return {
    isLogin,
    getLoginToken,
  };
}
