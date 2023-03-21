import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import HomeBanner from "./components/HomeBanner";
import HomeCarousel from "./components/HomeCarousel";

export default function Home() {
  return (
    <Container>
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
