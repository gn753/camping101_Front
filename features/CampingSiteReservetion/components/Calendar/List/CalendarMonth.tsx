import { useRef, useState } from "react";
import moment from "moment"; // moment 라이브러리 추가
import "moment/locale/ko"; // 한국어 설정
import styled from "@emotion/styled";
import useIsSelectedDates from "features/CampingSiteReservetion/hooks/useIsSelectedDates";
import CalendarDate from "./CalendarDate";

interface Response {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
}

interface Props {
  monthDates: any;
  month: number;
}

export default function CalendarMonth({ monthDates, month }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { selectedDates, setSelectedDates } = useIsSelectedDates();

  const firstDay = moment(monthDates[0].date).day();

  function handleDateClick(date: string) {
    if (selectedDates.length === 0) {
      // 이전에 선택한 날짜가 없으면 바로 추가
      setSelectedDates([date]);
      // UI 업데이트
    } else {
      // 이전에 선택한 날짜가 있으면 인접한 날짜인지 확인
      const prevSelectedDate = moment(selectedDates[selectedDates.length - 1]);
      const isAdjacent = moment(date).diff(prevSelectedDate, "days") === 1;
      const maxNumberSelectables = selectedDates.length <= 7;

      if (isAdjacent && maxNumberSelectables) {
        // 인접한 날짜가 맞고 예약갯수가 7개 이하면 추가
        setSelectedDates((pre) => [...pre, date]);
      } else {
        // 인접한 날짜가 아니면 이전에 선택한 날짜들 모두 취소
        setSelectedDates([date]);
        // UI 업데이트
      }
    }
  }

  return (
    <Wrapper>
      <Title>{month + 1}</Title>
      <CalendarMonthWrapper ref={ref}>
        {[...Array(firstDay)].map(() => (
          <Blank />
        ))}
        {monthDates.map((data: any, index: number) => (
          <CalendarDate
            data={data}
            day={index}
            key={data.date}
            handleDateClick={handleDateClick}
            selectedDates={selectedDates}
          />
        ))}
      </CalendarMonthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 360px;
  padding-bottom: 20px;
`;

const CalendarMonthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  [data-datetype="토요일"] {
    color: blue;
  }
  [data-datetype="일요일"],
  [data-datetype="공휴일"] {
    color: rgb(222, 46, 95);
  }
`;

const Title = styled.strong`
  flex: none;
  display: block;
  font-size: 28px;
`;
const Blank = styled.div`
  width: 50px;
  height: 44px;
  line-height: 40px;
  text-align: center;
`;
