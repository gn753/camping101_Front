import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import SignUp from "features/SignUp";
import Head from "next/head";

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>회원가입 페이지</title>
      </Head>
      <Layout header={<Header />} footer={<Footer />} main={<SignUp />} />;
    </>
  );
}
