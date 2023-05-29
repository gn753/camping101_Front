import { ThemeProvider, Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { global } from "styles/global";
import theme from "styles/theme";
import AppAuth from "features/AppAuth";
import { Suspense } from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Suspense fallback={<div>로딩중입니다</div>}>
          <AppAuth component={<Component {...pageProps} />} />
        </Suspense>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
