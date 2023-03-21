import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import MyPage from "features/MyPage";

export default function MyPagePage() {
  return <Layout header={<Header />} footer={<Footer />} main={<MyPage />} />;
}
