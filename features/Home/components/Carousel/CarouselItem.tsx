import styled from "@emotion/styled";

interface Props {
  title: string;
  image: string;
  id: number;
}

export default function CarouselItem({ title, id, image }: Props) {
  return (
    <Slide href={`{/campLog/${id}}`}>
      <img src={image} />
      <Title>{title}</Title>
    </Slide>
  );
}

const Slide = styled.a`
  display:inline-block;
  width: calc((100% - 60px) / 4);
  margin-right:20px;
  img {
    width:100%:
  }
`;

const Title = styled.h5`
  font-size: 18px;
  margin-top: 10px;
`;
