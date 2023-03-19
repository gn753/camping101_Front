import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import SignIn from "features/SignIn";
import Head from "next/head";

export default function SignInPage() {
  return (
    <>
      <Head>dㄴ</Head>
      <Layout header={<Header />} footer={<Footer />} main={<SignIn />} />;
    </>
  );
}
