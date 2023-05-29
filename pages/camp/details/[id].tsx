import Layout from "components/layouts/Layout";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import { axiosSetting } from "api/api";
import CampDetails from "features/CampDetails";
import Head from "next/head";
import { AxiosResponse } from "axios";

interface Props<T> {
  campDetails: T;
}

export default function DetailsPage<T>({ campDetails }: Props<T>) {
  return (
    <>
      <Head>
        <title>캠핑 101 상세페이지</title>
        <meta
          name="description"
          content="국내 오토캠핑 글램핑 카라반 등 이벤트 캠핑여행상품을 지금 바로 실시간으로 예약하세요."
        />
      </Head>
      <Layout
        header={<Header />}
        main={<CampDetails campDetails={campDetails} />}
        footer={<Footer />}
      />
    </>
  );
}

const fetchCampDetails = async (campId: any) => {
  const url = `${process.env.BASE_URL}/camp/detail/customer/${campId}`;
  const response = await axiosSetting.get(url);
  const { data } = response;
  return data;
};

export async function getServerSideProps({ query }: any) {
  const { id } = query;
  const campDetails = await fetchCampDetails(id);
  return {
    props: { campDetails },
  };
}
