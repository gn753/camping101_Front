import Head from "next/head";
import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import Home from "features/Home";


function HomePage() {
  return (
    <>
      <Head>ds</Head>
      <Layout header={<Header />} footer={<Footer />} main={<Home />} />
    </>
  );
}

export default HomePage;
