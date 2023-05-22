import "moment/locale/ko"; // 한국어 설정
import moment from "moment";

const isHoliday = (date: any) => {
  // const data=require("/public/data/holidays.json");
  // const holidayList = data.map((it) => Object.keys(it.date))
  const holidays = [
    "2023-01-01", // 신정
    "2023-02-28", // 대체공휴일(삼일절)
    "2023-03-01", // 삼일절
    "2023-05-05", // 어린이날
    "2023-05-06", // 대체공휴일(현충일)
    "2023-06-06", // 현충일
    "2023-08-15", // 광복절
    "2023-09-20", // 추석
    "2023-09-21", // 추석
    "2023-09-22", // 추석
    "2023-10-03", // 개천절
    "2023-10-09", // 한글날
    "2023-12-25", // 성탄절
  ];
  return holidays.includes(date);
};

const getDaysInMonth = () => {
  const today = moment();
  const dates = [];
  const firstDay = moment().startOf("year");
  for (let i = 0; i < 12; i++) {
    const monthDates = [];
    let date = moment(firstDay).add(i, "months");

    while (date.month() === i) {
      const isPast = date.isBefore(today, "day");
      const dateFormat = date.clone().format("YYYY-MM-DD");
      if (isHoliday(dateFormat)) {
        monthDates.push({
          date: dateFormat,
          isPast,
          weekdays: "공휴일", // 토요일,일요일,평일
        });
      } else {
        monthDates.push({
          date: dateFormat,
          isPast,
          weekdays: date.format("dddd"), // 토요일,일요일,평일
        });
      }
      date.add(1, "days");
    }

    dates.push(monthDates);
  }

  return dates;
};

export default getDaysInMonth;
