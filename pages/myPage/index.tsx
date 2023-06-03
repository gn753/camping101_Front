import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import MyPage from "features/MyPage";
import Head from "next/head";

export default function MyPagePage() {
  return (
    <>
      <Head>
        <title>마이페이지</title>
      </Head>
      <Layout header={<Header />} footer={<Footer />} main={<MyPage />} />;
    </>
  );
}
