import Footer from "components/layouts/Footer";
import Header from "components/layouts/Header";
import Layout from "components/layouts/Layout";
import CampLogDetails from "features/CampLogDetails";

export default function campLog() {
  return (
    <>
      <Layout
        header={<Header />}
        main={<CampLogDetails />}
        footer={<Footer />}
      ></Layout>
    </>
  );
}
