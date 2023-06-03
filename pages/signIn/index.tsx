import ResetLayout from "components/layouts/ResetLayout";
import SignIn from "features/SignIn";
import Head from "next/head";

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>로그인 페이지</title>
      </Head>
      <ResetLayout main={<SignIn />} />;
    </>
  );
}
