import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import MyPageModify from "features/MyPageModify";

export default function MyPageModifyPage() {
  return (
    <Layout header={<Header />} footer={<Footer />} main={<MyPageModify />} />
  );
}
