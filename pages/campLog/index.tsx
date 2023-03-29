import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import CampLog from "features/CampLog";

export default function campLog() {
  return (
    <>
      <Layout
        header={<Header />}
        main={<CampLog />}
        footer={<Footer />}
      ></Layout>
    </>
  );
}
