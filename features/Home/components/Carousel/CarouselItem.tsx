import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  id: number;
  link: any;
}

export default function CarouselItem({ title, id, image, link }: Props) {
  const sample =
    image.length < 15
      ? "https://source.unsplash.com/random/500x500?camping"
      : image;

  return (
    <Slide>
      <Link href={link}>
        <Image src={sample} alt="샘플이미지" height={100} width={177} />
        <Title>{title}</Title>
      </Link>
    </Slide>
  );
}

const Slide = styled.div`
  display: inline-block;
  width: 177px;
  margin-right: 20px;
  vertical-align: middle;
`;

const Title = styled.h5`
  font-size: 18px;
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
