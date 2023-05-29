import { axiosSetting } from "api/api";
import Footer from "components/layouts/Footer";
import Header from "components/layouts/Header";
import Layout from "components/layouts/Layout";
import CampLogDetails from "features/CampLogDetails";
import Head from "next/head";

export default function CampLogDetailsPage({ details }: any) {
  return (
    <>
      <Head>
        <title>캠프리뷰상세페이지</title>
      </Head>
      <Layout
        header={<Header />}
        main={<CampLogDetails details={details} />}
        footer={<Footer />}
      />
    </>
  );
}

const url = `${process.env.BASE_URL}/camplog/`;

export async function getServerSideProps({ query, res }: any) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );

  const { id } = query;
  const dynamicPath = `${url} + ${id}`;
  const response = await axiosSetting.get(dynamicPath);
  const details = await response.data;

  return {
    props: { details },
  };
}
