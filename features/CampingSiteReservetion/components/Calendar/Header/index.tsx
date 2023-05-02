import styled from "@emotion/styled";
import Image from "next/image";

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <TopBar>
          <Image src="/icons/block.svg" width={24} height={24} alt="아이콘" />
          <div>
            <div>날짜선택</div>
          </div>
          <button>초기화</button>
        </TopBar>
        <DayList>
          <Day className="sunday">일</Day>
          <Day>월</Day>
          <Day>화</Day>
          <Day>수</Day>
          <Day>목</Day>
          <Day>금</Day>
          <Day className="sturday">토</Day>
        </DayList>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  z-index: 100;
  border-bottom: 1px solid #e6e6e6;
`;

const Container = styled.div`
  width: 768px;
`;

const TopBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 1.2rem;
  width: 100%;
  min-height: 4.8rem;
  justify-content: space-between;
`;

const DayList = styled.div`
  display: flex;
  justify-content: center;

  .sunday {
    color: rgb(220, 3, 40);
  }
  .sturday {
    color: #0152cc;
  }
`;

const Day = styled.div`
  width: 50px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
