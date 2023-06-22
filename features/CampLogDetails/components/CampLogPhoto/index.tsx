import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  image?: string;
}

export default function CampLogPhoto({ image }: Props) {
  return (
    <Figure>
      <Image
        src="/imgs/img-camplogDetails-01.jpg"
        alt="샘플이미지"
        width={1924}
        height={150}
      />
    </Figure>
  );
}

const Figure = styled.figure`
  img {
    width: 100%;
    height: 100px;
  }
`;
