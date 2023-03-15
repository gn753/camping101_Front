import Head from "next/head";
import Layout from "layouts/Layout";
import Header from "layouts/Header";
import Footer from "layouts/Footer";

import SignUp from "components/SignUp";

export default function SignUpPage() {
  return <Layout header={<Header />} footer={<Footer />} main={<SignUp />} />;
}
