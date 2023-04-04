import styled from "@emotion/styled";
import { axiosSetting } from "api/api";

import Container from "components/layouts/Container";
import HomeBanner from "./components/HomeBanner";
import HomeCarousel from "./components/HomeCarousel";

const url = "api/camplog";

export default function Home() {
  const fetchCampLog = async () => {
    const response = await axiosSetting.get(url);
    console.log(response, "response");
  };

  return (
    <Container>
      <h1 onClick={fetchCampLog}>api테스트</h1>
      <HomeBanner />
      <HomeTitle>실시간 캠핑로그</HomeTitle>
      <HomeCarousel />
      <HomeTitle>신규 입점 캠핑장</HomeTitle>
      <HomeCarousel />
    </Container>
  );
}

const HomeTitle = styled.strong`
  display: block;
  font-size: 28px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 27px;
`;
