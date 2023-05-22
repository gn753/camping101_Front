import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import CampingSite from "features/CampingSite";
import { axiosSetting } from "api/api";

export default function CampingSitePage({ camps }: any) {
  return (
    <>
      <Layout
        header={<Header />}
        main={<CampingSite camps={camps} />}
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
