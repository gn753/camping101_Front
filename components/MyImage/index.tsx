import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  url: string;
  alt: string;
}

export default function MyImage({ url, alt }: Props) {
  return (
    <Wrapper>
      <Img src={url} alt={alt} fill priority />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 300px;
  border: 1px solid black;
  width: 100%;
`;

const Img = styled(Image)`
  width: 100%;
  height: 300px;
`;
