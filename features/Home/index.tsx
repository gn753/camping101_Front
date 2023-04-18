import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import HomeBanner from "./components/HomeBanner";
import HomeCampLog from "./components/HomeCampLog";


const url = "/api/signin/mail";

export default function Home() {


  return (
    <Container>
      <HomeBanner />
      <HomeTitle>실시간 캠핑로그</HomeTitle>
      <HomeCampLog />
      <HomeTitle>실시간 캠핑장</HomeTitle>
      {/* <HomeCampingSite /> */}
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
