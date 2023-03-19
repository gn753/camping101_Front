import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import { CampLogMain } from "features/CampLog/CampLogMain";
import Footer from "components/layouts/Footer";

export default function campLog() {
  return (
    <>
      <Layout
        header={<Header />}
        main={<CampLogMain />}
        footer={<Footer />}
      ></Layout>
    </>
  );
}
