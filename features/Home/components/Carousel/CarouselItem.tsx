import styled from "@emotion/styled";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  id: number;
}

export default function CarouselItem({ title, id, image }: Props) {
  console.log(id);
  return (
    <Slide>
      <Link href={`/campLog/details/${id}`}>
        <img src={image} />
        <Title>{title}</Title>
      </Link>
    </Slide>
  );
}

const Slide = styled.div`
  display: inline-block;
  width: calc((100% - 60px) / 4);
  margin-right: 20px;
  img {
    width: 100%;
  }
`;

const Title = styled.h5`
  font-size: 18px;
  margin-top: 10px;
`;
