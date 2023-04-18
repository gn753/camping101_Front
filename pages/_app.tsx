import { Global } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import { RecoilRoot, useRecoilState } from "recoil";
import type { AppProps } from "next/app";
import { global } from "styles/global";
import theme from "styles/theme";
import { useEffect } from "react";
import { axiosSetting } from "api/api";
import { AuthState } from "features/SignIn/hooks/useLogin";
import SignInPage from "./signIn";
import { authService } from "features/common/authService";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Setting component={<Component {...pageProps} />} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;

type MyAppProps = {
  component: React.ReactNode;
};

function Setting({ component }: MyAppProps) {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(AuthState);
  const { getJwtToken, getRefreshToken, isTokenValidOrUndefined, setJwtToken } =
    authService();
  useEffect(() => {
    //접속한다
    //토큰이 있는지 파악한다.
    const token = getJwtToken();
    const refreshToken = getRefreshToken();
    const isAccessToken = isTokenValidOrUndefined(token);
    const isRefreshToken = isTokenValidOrUndefined(refreshToken);

    if (isAccessToken === "토큰 없음") {
      setIsLoggedIn(false);
    }

    if (isAccessToken === "토큰 유효") {
      setIsLoggedIn(true);
    }

    if (isAccessToken === "토큰 만료" && isRefreshToken === "토큰 유효") {
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
    }

    if (isAccessToken === "토큰 만료" && isRefreshToken === "토큰 만료") {
      setIsLoggedIn(false);
    }
  }, []);

  if (!isLoggedIn) {
    return <SignInPage />;
  }
  return <>{component}</>;
}
