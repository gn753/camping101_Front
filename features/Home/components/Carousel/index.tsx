import styled from "@emotion/styled";
import { useLayoutEffect, useState } from "react";
import { RealTimeCampLogDetails, CampinSiteDetails } from "features/Home/types";
import { useRef } from "react";
import CarouselControls from "./CarouselControls";
import CarouselItem from "./CarouselItem";

interface Props {
  slidesPerView?: number; // 몇개의 슬라이드를 보여줄것인가
  slideMargin?: number; // 슬라이드의 마진은?
  sectionWidth?: number; // 슬라이드 섹션의 너비는?
  data: RealTimeCampLogDetails[];
  CarouselItem: React.ReactNode;
}

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
        <CarouselContent style={{ transform: `translateX(${-slideMoveX}px)` }}>
          {slideType === "캠핑장" &&
            slides.map((slide: CampinSiteDetails, index: number) => (
              <CarouselItem
                title={slide.campName}
                image={slide.firstImage}
                id={slide.campId}
                key={index}
              />
            ))}
          {slideType === "캠프로그" &&
            slides.map((slide: RealTimeCampLogDetails, index: number) => (
              <CarouselItem
                title={slide.title}
                image={slide.image}
                id={slide.campLogId}
                key={index}
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
  max-width: 1024px;
  overflow: hidden;
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

interface CarouselContentProps {}

const CarouselContent = styled.div``;
{
  /* {slideType === "캠프로그" &&
            slides.map((slide, index) => (
              <CampLogItem campName={slide.campName} key={index} />
            ))} */
}
