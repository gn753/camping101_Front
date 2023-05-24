import styled from "@emotion/styled";
import { useRef } from "react";

interface DayProps {
  onSale: boolean;
  isSelected: boolean;
}

export default function CalendarDate({
  data,
  day,
  handleDateClick,
  selectedCalendarDates,
}: any) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      {data.isPast ? (
        <NotSale disabled={true}>{day + 1}</NotSale>
      ) : (
        <OnSale
          ref={ref}
          data-date={data.date}
          data-datetype={data.weekdays}
          onClick={() => handleDateClick(data.date)}
        >
          {day + 1}
          {selectedCalendarDates.includes(data.date) && "✅"}
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
