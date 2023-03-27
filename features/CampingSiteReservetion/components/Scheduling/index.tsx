import styled from "@emotion/styled";
import { useState } from "react";
import ScheduleItem from "./ScheduleItem";
import { nanoid } from "nanoid";
type Data = [{ date: string; isCheck: number }];

let makeNumber = Array(31)
  .fill(0)
  .map((_, index) => index + 1);

const dummy = makeNumber.map((date) => {
  return {
    date: date,
    isCheck: false,
  };
});

export default function Scheduling() {
  const [isCheckList, setIsCheckList] = useState<any>(dummy);
  console.log(isCheckList, "isCheckList");

  return (
    <Wrapper>
      <TopBar>
        <div>
          <Price>가격 : 28000원 / 1박</Price>
          <ResvPeople>성인 2명</ResvPeople>
        </div>
        <Button>사이트 예약하기</Button>
      </TopBar>
      <List>
        {makeNumber.map((number, index) => (
          <ScheduleItem
            date={number}
            isCheckList={isCheckList}
            setIsCheckList={setIsCheckList}
            key={index}
          />
        ))}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  transition: 0.5s;
`;

const Price = styled.strong`
  font-size: 20px;
`;

const Button = styled.button`
  font-size: 28px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const ResvPeople = styled.span`
  display: block;
  font-size: 20px;
`;
