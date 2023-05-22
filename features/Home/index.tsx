import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import HomeBanner from "./components/HomeBanner";
import { CampLogDetails, CampSiteDetails } from "features/Home/types";
import Carousel from "./components/Carousel";

interface Props {
  camplogs: CampLogDetails[];
  campsites: CampSiteDetails[];
}

export default function Home({ camplogs, campsites }: Props) {
  return (
    <>
      <HomeBanner />
      <Container>
        <HomeTitle>실시간 캠핑로그</HomeTitle>
        <Carousel slideType="캠프로그" slides={camplogs} />
        <HomeTitle>실시간 캠핑장</HomeTitle>
        <Carousel slideType="캠핑장" slides={campsites} />
      </Container>
    </>
  );
}

const HomeTitle = styled.strong`
  display: block;
  font-size: 28px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 27px;
`;
