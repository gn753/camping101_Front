import Layout from "layouts/Layout";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import SignIn from "components/SignIn";
import Head from "next/head";

export default function SignInPage() {
  return (
    <>
      <Head>dㄴ</Head>
      <Layout header={<Header />} footer={<Footer />} main={<SignIn />} />;
    </>
  );
}
