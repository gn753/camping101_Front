import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import CampingSiteReservetion from "features/CampingSiteReservetion";

export default function ReservetionPage() {
  return (
    <>
      <Layout
        header={<Header />}
        main={<CampingSiteReservetion />}
        footer={<Footer />}
      />
    </>
  );
}
