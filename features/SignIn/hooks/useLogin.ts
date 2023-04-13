import { useRouter } from "next/router";
import { axiosSetting } from "api/api";
import { useRecoilState, atom } from "recoil";

const AuthState = atom({
  key: "AuthState",
  default: null,
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

  const getLoginToken = async (data: useFormProps) => {
    await axiosSetting
      .post(url, data)
      .then((res) => {
        const token = res.headers.access_token;
        setIsLogin(token);
        router.push("/");
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
