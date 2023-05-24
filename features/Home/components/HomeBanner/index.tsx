import styled from "@emotion/styled";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <Wrapper>
      <Image src="/imgs/img-banner-01.png" alt="배너" fill />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 300px;
  border: 1px solid black;
  width: 100%;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover !important;
    position: relative !important;
  }
`;
