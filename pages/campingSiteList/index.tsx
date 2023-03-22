import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import { CampLogMain } from "features/CampLog/CampLogMain";
import Footer from "components/layouts/Footer";
import CampingSiteList from "features/CampingSiteList";

export default function campingSiteListPage() {
  return (
    <>
      <Layout
        header={<Header />}
        main={<CampingSiteList />}
        footer={<Footer />}
      ></Layout>
    </>
  );
}
