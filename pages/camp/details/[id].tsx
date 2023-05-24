import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import { axiosSetting } from "api/api";
import CampDetails from "features/CampDetails";

interface Props {
  campDetails: any;
}

export default function DetailsPage({ campDetails }: Props) {
  return (
    <>
      <Layout
        header={<Header />}
        main={<CampDetails campDetails={campDetails} />}
        footer={<Footer />}
      />
    </>
  );
}

const fetchCampDetails = async (campId: any) => {
  const url = `${process.env.BASE_URL}/camp/detail/customer/${campId}`;
  const response = await axiosSetting.get(url);
  const data = response.data;
  return data;
};

export async function getServerSideProps({ query }: any) {
  const id = query.id;
  const campDetails = await fetchCampDetails(id);
  return {
    props: { campDetails },
  };
}
