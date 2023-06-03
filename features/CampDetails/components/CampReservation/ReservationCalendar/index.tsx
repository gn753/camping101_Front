import "moment/locale/ko"; // 한국어 설정
import moment from "moment"; // moment 라이브러리 추가
import styled from "@emotion/styled";
import getDaysInMonth from "features/CampDetails/service/getDaysInMonth";
import useIsSelectedDates from "features/CampDetails/hooks/useIsSelectedDates";
import nanoid from "features/common/utils/nanoid";
import Header from "./Header";
import CalendarMonth from "./CalendarMonth";

export default function ReservationCalendar() {
  const { selectedCalendarDates } = useIsSelectedDates();
  const currentMonth = moment().month();
  const data = getDaysInMonth();

  const renderCalendarMonthList = () => {
    return (
      <>
        {data.map(
          (monthDates, index) =>
            index >= currentMonth && (
              <CalendarMonth
                monthDates={monthDates}
                month={index}
                key={nanoid()}
              />
            ),
        )}
      </>
    );
  };

  const getSelectedDatesPeriod = () => {
    const isRender = selectedCalendarDates.length > 0;
    const startDate = moment(selectedCalendarDates[0]).format("YYYY년 M월 D일");
    const endDate = moment(
      selectedCalendarDates[selectedCalendarDates.length - 1],
    ).format("YYYY년 M월 D일");
    const result = isRender && `${startDate} - ${endDate}`;

    return result;
  };

  return (
    <CalendarWrapper>
      <CalendarContainer>
        <Header />
        <MonthsContainer>{renderCalendarMonthList()}</MonthsContainer>
      </CalendarContainer>
      <SelectedDates>{getSelectedDatesPeriod()}</SelectedDates>
    </CalendarWrapper>
  );
}

const CalendarWrapper = styled.div`
  position: relative;
`;
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  height: 360px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MonthsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 768px;
`;

const SelectedDates = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 1.2rem;
`;
