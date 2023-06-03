import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import CampLog from "features/CampLog";
import { axiosSetting } from "api/api";
import { CampLogResponse } from "features/CampLog/types";
import Head from "next/head";

interface Props {
  camplogs: CampLogResponse[];
}

export default function CampLogPage({ camplogs }: Props) {
  return (
    <>
      <Head>
        <title>캠프로그페이지입니다</title>
      </Head>
      <Layout
        header={<Header />}
        main={<CampLog camplogs={camplogs} />}
        footer={<Footer />}
      />
    </>
  );
}

export async function getServerSideProps() {
  const url = `${process.env.BASE_URL}/camplog/`;
  const response = await axiosSetting.get(url);
  const camplogs = response.data.campLogs;
  return {
    props: {
      camplogs,
    },
  };
}
