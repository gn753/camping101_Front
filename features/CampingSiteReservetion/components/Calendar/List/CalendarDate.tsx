import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

interface DayProps {
  onSale: boolean;
  isSelected: boolean;
}

const holidays = require("/public/data/holidays.json");

export default function CalendarDate({
  data,
  day,
  handleDateClick,
  selectedDates,
}: any) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      {data.isPast ? (
        <NotSale disabled={true}>{day + 1}</NotSale>
      ) : (
        <OnSale
          ref={ref}
          data-testid={data.date}
          data-datetype={data.weekdays}
          onClick={() => handleDateClick(data.date)}
        >
          {day + 1}
          {selectedDates.includes(data.date) && "✅"}
        </OnSale>
      )}
    </>
  );
}

function Saled() {
  return;
}

const NotSale = styled.button`
  width: 50px;
  height: 44px;
  line-height: 40px;
  text-align: center;
  background-color: #f8f8f8;
  color: #bdbdbd;
  cursor: default;
`;

const OnSale = styled.div<any>`
  width: 50px;
  height: 44px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: green;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color:black;
    color: white;
    cursor: default;
  `}
`;
