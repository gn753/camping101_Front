import styled from "@emotion/styled";
import Carousel from "features/Carousel";

export default function HomeCarousel() {
  return (
    <section>
      <HomeTitle>실시간 캠핑로그</HomeTitle>
      <Carousel />
      <HomeTitle>신규 입점 캠핑장</HomeTitle>
      <Carousel />
    </section>
  );
}

const HomeTitle = styled.strong`
  display: block;
  font-size: 28px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 27px;
`;
