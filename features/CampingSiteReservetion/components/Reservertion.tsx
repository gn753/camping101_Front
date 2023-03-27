import styled from "@emotion/styled";
import { useState } from "react";
import Scheduling from "./Scheduling";

export default function Reservertion() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen((open) => !open);
  };
  return (
    <section>
      <Title>캠핑존 세부정보</Title>
      <InfoList>
        <li>
          <div>체크인 ' 체크아웃</div> <div>오후 12:00 ~ 15:00</div>
        </li>
        <li>
          <div>기본인원</div> <div>오후 12:00 ~ 15:00</div>
        </li>
        <li>
          <div>기본주차</div> <div>오후 12:00 ~ 15:00</div>
        </li>
        <li>
          <div>제한인원</div> <div>오후 12:00 ~ 15:00</div>
        </li>
        <li>
          <div>체크인</div> <div>오후 12:00 ~ 15:00</div>
        </li>
      </InfoList>
      <OpenButton onClick={handleOpen}>펼치기</OpenButton>
      {isOpen && <Scheduling />}
    </section>
  );
}

const Title = styled.h3`
  font-size: 28px;
`;

const Wrapper = styled.section``;

const InfoList = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    width: 50%;
    padding: 10px 0;
  }
`;

const OpenButton = styled.button`
  display: block;
  margin: auto;
  font-size: 20px;
`;
