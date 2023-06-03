import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import MyPageModify from "features/MyPageModify";
import Head from "next/head";

export default function MyPageModifyPage() {
  return (
    <>
      <Head>
        <title>마이페이지 수정페이지</title>
      </Head>
      <Layout header={<Header />} footer={<Footer />} main={<MyPageModify />} />
    </>
  );
}
