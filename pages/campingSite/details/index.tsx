import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import CampingSiteDetails from "features/CampingSiteDetails";

export default function detailsPage() {
  return (
    <>
      <Layout
        header={<Header />}
        main={<CampingSiteDetails />}
        footer={<Footer />}
      />
    </>
  );
}
