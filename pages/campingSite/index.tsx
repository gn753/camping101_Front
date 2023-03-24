import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";

import Footer from "components/layouts/Footer";
import CampingSite from "features/CampingSite";


export default function campingSitePage() {
  return (
    <>
      <Layout header={<Header />} main={<CampingSite />} footer={<Footer />} />
    </>
  );
}
