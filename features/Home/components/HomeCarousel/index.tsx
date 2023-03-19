import styled from "@emotion/styled";
import CarouselList from "features/Home/components/CarouselList";
import NextButton from "features/Home/components/NextButton";
import PrevButton from "features/Home/components/PrevButton";
import { useState } from "react";
import { data } from "../../data/dummy";

interface Props {
  slidesPerView: number; // 몇개의 슬라이드를 보여줄것인가
  slideMargin: number; // 슬라이드의 마진은?
  sectionWidth: number; // 슬라이드 섹션의 너비는?
}

export default function HomeCarousel({
  slidesPerview = 4,
  slideMargin = 20,
  sectionWidth = 1024,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidelength = data.length; //
  const sumSlideIndexNumber = Math.ceil(slidelength / slidesPerview) - 1;
  const slideMoveX = (sectionWidth + 20) * currentIndex;

  const handleNextIndex = () => {
    setCurrentIndex((currentLocation: number) =>
      currentLocation === sumSlideIndexNumber ? 0 : currentLocation + 1,
    );
  };

  const hanldePrevIndex = () => {
    setCurrentIndex((index: number) => (index > 0 ? index - 1 : 0));
  };

  return (
    <Wrapper>
      <CarouselListWrapper>
        <PrevButton hanldePrevIndex={hanldePrevIndex} />
        <CarouselList
          data={data}
          slideMoveX={slideMoveX}
          slideMargin={slideMargin}
        />
        <NextButton handleNextIndex={handleNextIndex} />
      </CarouselListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  max-width: 1024px;
  overflow: hidden;
`;

const CarouselListWrapper = styled.div`
  margin: 0px auto;
  box-sizing: border-box;
`;
