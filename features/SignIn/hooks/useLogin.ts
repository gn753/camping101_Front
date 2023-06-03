import { useRouter } from "next/router";
import { axiosSetting, setAuthorizationHeader } from "api/api";
import { useRecoilState, atom } from "recoil";
import { useCallback } from "react";

interface Props {
  isLogin: boolean;
  accessToken: string;
}

export const IsAuthState = atom<Props | null>({
  key: "IsAuthState",
  default: null,
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newData) => {
        if (newData) {
          setAuthorizationHeader(newData?.accessToken);
        }
      });
    },
  ],
});

const url = "/api/signin/mail";

interface FormProps {
  email: string;
  password: string;
}

export default function useLogin() {
  const [isLogin, setIsLogin] = useRecoilState(IsAuthState);
  const router = useRouter();

  function tokenWithoutBearer(token: string) {
    return token.replace("Bearer ", "");
  }

  function setJwtToken(token: string) {
    sessionStorage.setItem("access-token", token);
  }
  function setRefreshToken(token: string) {
    return sessionStorage.setItem("refresh-token", token);
  }

  const getLoginToken = async (data: FormProps) => {
    await axiosSetting
      .post(url, data)
      .then((res) => {
        const accessToken = tokenWithoutBearer(res.headers["access-token"]);
        const refreshToken = tokenWithoutBearer(res.headers["refresh-token"]);
        setIsLogin({ accessToken, isLogin: true });
        setJwtToken(accessToken);
        setRefreshToken(refreshToken);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateLogin = useCallback(
    (accessToken: string, loginState: boolean) => {
      setIsLogin({ accessToken, isLogin: loginState });
    },
    [setIsLogin],
  );

  return {
    isLogin,
    getLoginToken,
    updateLogin,
  };
}
