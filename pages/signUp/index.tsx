import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import SignUp from "features/SignUp";
export default function SignUpPage() {
  return <Layout header={<Header />} footer={<Footer />} main={<SignUp />} />;
}
