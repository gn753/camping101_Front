import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import { axiosSetting } from "api/api";
import Camp from "features/Camp";
import Head from "next/head";

export default function CampPage({ camps }: any) {
  return (
    <>
      <Head>
        <title>캠핑장 페이지</title>
      </Head>
      <Layout
        header={<Header />}
        main={<Camp camps={camps} />}
        footer={<Footer />}
      />
    </>
  );
}

const fetchCampList = async () => {
  const url = `${process.env.BASE_URL}/camp`;
  const response = await axiosSetting.get(url);
  const data = response.data.content;
  return data;
};

export async function getServerSideProps() {
  const camps = await fetchCampList();
  return {
    props: { camps },
  };
}
