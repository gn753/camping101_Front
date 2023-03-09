import Head from "next/head";
import Layout from "layouts/Layout";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import Home from "components/Home";

function HomePage() {
  return (
    <>
      <Head>ds</Head>

      <Layout header={<Header />} footer={<Footer />} main={<Home />} />
    </>
  );
}

export default HomePage;
