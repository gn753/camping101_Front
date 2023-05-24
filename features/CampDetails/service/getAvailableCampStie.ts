import moment from "moment";

// 다른 예약 데이터들...

const compareStartDate = (캘린더선택시작날짜: any, 예약가능한날짜: any) => {
  if (캘린더선택시작날짜.isBefore(예약가능한날짜)) {
    // startDate가 endDate보다 이전인 경우
    // console.log("예약가능한날짜보다 이전이므로 예약이 불가능합니다.");
    return false;
  } else if (캘린더선택시작날짜.isSame(예약가능한날짜)) {
    // startDate와 endDate가 동일한 경우
    // console.log(
    //   "예약선택시작날짜와 에약가능한 시작날짜가 동일하므로 예약이가능합니다.",
    // );
    return true;
  } else {
    // startDate가 endDate보다 이후인 경우
    // console.log(
    //   "예약선택날짜는 예약가능한시작날짜보다 이후이므로 예약이가능합니다.",
    // );
    return true;
  }
};
const compareEndDate = (캘린더종료날짜: any, 예약가능한날짜: any) => {
  if (캘린더종료날짜.isBefore(예약가능한날짜)) {
    // startDate가 endDate보다 이전인 경우
    // console.log(
    //   "예약선택종료날짜는 에약가능한 시작종료날짜보다 이전입니다.",
    //   "종료날짜는 예약이가능합니다",
    // );
    return true;
  } else if (캘린더종료날짜.isSame(예약가능한날짜)) {
    // startDate와 endDate가 동일한 경우
    // console.log("종료날짜는 예약이 가능합니다.");
    return true;
  } else {
    // console.log("종료날짜는 예약이 불가능합니다 ");
    return false;
  }
};

const getAvailableCampSite = (
  selectedCalendarDates: any,
  reservationData: any,
) => {
  let result;
  if (!selectedCalendarDates) {
    return null;
  }
  const 예약선택시작날짜 = moment(selectedCalendarDates[0].substr(0, 10));
  const 예약선택종료날짜 = moment(selectedCalendarDates[1].substr(0, 10));
  const 예약가능한시작날짜 = moment(reservationData.startDate.substr(0, 10));
  const 예약가능한종료날짜 = moment(reservationData.endDate.substr(0, 10));

  if (
    compareStartDate(예약선택시작날짜, 예약가능한시작날짜) &&
    compareEndDate(예약선택종료날짜, 예약가능한종료날짜)
  ) {
    console.log(reservationData);
    return (result = reservationData);
  } else {
    return null;
  }
};

interface SiteData {
  endDate: string;
  reservationId: number;
  startDate: string;
}

export default getAvailableCampSite;
