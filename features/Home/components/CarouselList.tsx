import styled from "@emotion/styled";
import CarouselItem from "features/Home/components/CarouselItem";

interface Props {
  data: any;
  slideMoveX: number;
  slideMargin: number;
}

export default function CarouselList({ data, slideMoveX, slideMargin }: Props) {
  return (
    <CarouselView slideMoveX={slideMoveX}>
      {data.map((it: any, index: number) => (
        <CarouselItem key={index} margin={slideMargin} data={it} />
      ))}
    </CarouselView>
  );
}

interface CarouselViewProps {
  slideMoveX: number;
}

const CarouselView = styled.div<CarouselViewProps>`
  display: flex;
  width: 100%;
  transition: 0.5s;
  transform: translateX(${(props) => -props.slideMoveX + "px"});

  & > div:last-of-type {
    margin-right: 0px;
  }
`;
