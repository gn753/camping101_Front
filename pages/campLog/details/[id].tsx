import { axiosSetting } from "api/api";
import Footer from "components/layouts/Footer";
import Header from "components/layouts/Header";
import Layout from "components/layouts/Layout";
import CampLogDetails from "features/CampLogDetails";

export default function CampLogDetailsPage({ details }: any) {
  return (
    <>
      <Layout
        header={<Header />}
        main={<CampLogDetails details={details} />}
        footer={<Footer />}
      ></Layout>
    </>
  );
}

const url = `${process.env.BASE_URL}/camplog/`;

export async function getServerSideProps({ query, res }: any) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );

  const id = query.id;
  const dynamicPath = url + id;
  const response = await axiosSetting.get(dynamicPath);
  const details = await response.data;
  console.log(details, "details");
  return {
    props: { details },
  };
}
