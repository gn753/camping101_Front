import styled from "@emotion/styled";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <Wrapper>
      <Img
        src="/imgs/img-banner-01.png"
        alt="배너"
        sizes="(max-width: 768px) 100vw"
        fill
        priority
      />
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
