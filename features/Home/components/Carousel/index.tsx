import styled from "@emotion/styled";
import { useLayoutEffect, useState, useRef } from "react";
import { CampLogDetails, CampSiteDetails } from "features/Home/types";
import nanoid from "features/common/utils/nanoid";
import CarouselControls from "./CarouselControls";
import CarouselItem from "./CarouselItem";

interface CarouselProps {
  slideType: "캠프로그" | "캠핑장";
  slides: any;
}

export default function Carousel({ slideType, slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width, setWidth] = useState(0);
  const slideWidthRef = useRef<HTMLDivElement>(null);
  const slidelength = slides.length; //
  const sumSlideIndexNumber = Math.ceil(slidelength / 4) - 1;

  const handlePrev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : sumSlideIndexNumber;
    setCurrentSlide(index);
  };

  const handleNext = () => {
    const index = currentSlide < sumSlideIndexNumber ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  useLayoutEffect(() => {
    if (slideWidthRef && slideWidthRef.current)
      setWidth(slideWidthRef.current.offsetWidth);
  }, []);

  const slideMoveX = (width + 20) * currentSlide; // 슬라이드 이동간격

  return (
    <Wrapper ref={slideWidthRef}>
      <CarouselInner>
        <CarouselContent slideMoveX={slideMoveX}>
          {slideType === "캠핑장" &&
            slides.map((slide: CampSiteDetails, index: number) => (
              <CarouselItem
                title={slide.campName}
                image={slide.firstImage}
                id={slide.campId}
                key={nanoid()}
                link={`/camp/details/${slide.campId}`}
              />
            ))}
          {slideType === "캠프로그" &&
            slides.map((slide: CampLogDetails, index: number) => (
              <CarouselItem
                title={slide.title}
                image={slide.image}
                id={slide.campLogId}
                key={nanoid()}
                link={`/campLog/details/${slide.campLogId}`}
              />
            ))}
        </CarouselContent>
      </CarouselInner>
      <CarouselControls prev={handlePrev} next={handleNext} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 768px;
  overflow: hidden;
`;
const CarouselContent = styled.div<CarouselContentProps>`
  transform: ${(props) => `translateX(${-props.slideMoveX}px)`};
  transition: 0.5s;
`;
const CarouselInner = styled.div`
  margin: 0px auto;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  transition: ease 1s;
  & > a:last-of-type {
    margin-right: 0px;
  }
`;

interface CarouselContentProps {
  slideMoveX: number;
}
