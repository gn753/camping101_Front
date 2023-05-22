import Head from "next/head";
import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import Home from "features/Home";
import { axiosSetting } from "api/api";
import { CampLogDetails, CampSiteDetails } from "features/Home/types";
interface Props {
  camplogs: CampLogDetails[];
  campsites: CampSiteDetails[];
}

function HomePage({ camplogs, campsites }: any) {
  return (
    <>
      <Head>d</Head>
      <Layout
        header={<Header />}
        footer={<Footer />}
        main={<Home camplogs={camplogs} campsites={campsites} />}
      />
    </>
  );
}

export default HomePage;

const fetchCampSiteList = async () => {
  const url = `${process.env.BASE_URL}/camp`;
  const response = await axiosSetting.get(url);
  const data = await response.data.content;
  return data;
};
const fetchCampLogList = async () => {
  const url = `${process.env.BASE_URL}/camplog`;

  const response = await axiosSetting.get(url);
  const data = await response.data.campLogs;
  return data;
};

export async function getServerSideProps() {
  const campsites = await fetchCampSiteList();
  const camplogs = await fetchCampLogList();
  return {
    props: { camplogs, campsites },
  };
}
