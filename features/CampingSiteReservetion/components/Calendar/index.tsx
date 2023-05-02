import "moment/locale/ko"; // 한국어 설정
import moment from "moment"; // moment 라이브러리 추가
import styled from "@emotion/styled";
import getDaysInMonth from "features/CampingSiteReservetion/service/getDaysInMonth";
import Header from "./Header";
import useIsSelectedDates from "features/CampingSiteReservetion/hooks/useIsSelectedDates";
import CalendarMonth from "./List/CalendarMonth";

export default function Calendar() {
  const { selectedDates } = useIsSelectedDates();
  const startMonth = moment().month();
  const data = getDaysInMonth();

  const renderMonths = () => {
    return (
      <>
        {data.map(
          (monthDates, index) =>
            index >= startMonth && (
              <CalendarMonth monthDates={monthDates} month={index} />
            ),
        )}
      </>
    );
  };

  const getSelectedDatesPeriod = () => {
    const isRender = selectedDates.length > 0;
    const startDate = moment(selectedDates[0]).format("yyyy년 M월 d일");
    const endDate = moment(selectedDates[selectedDates.length - 1]).format(
      "yyyy년 M월 d일",
    );
    const result = isRender && `${startDate} - ${endDate}`;

    return result;
  };

  return (
    <CalendarContainer>
      <Header />
      <DaysContainer>{renderMonths()}</DaysContainer>
      <SelectedDates>{getSelectedDatesPeriod()}</SelectedDates>
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  height: 100vh;
  overflow: scroll;
`;

const DaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 768px;
`;

const SelectedDates = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
`;
