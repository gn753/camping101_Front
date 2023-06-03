import "moment/locale/ko"; // 한국어 설정
import moment from "moment";
import { atom, useRecoilState } from "recoil";

const date = moment().format("YYYY-MM-DD");

export const SelectedCalendarDatesState = atom<string[]>({
  key: "SelectedCalendarDatesState",
  default: [date],
});

export default function useIsSelectedDates() {
  const [selectedCalendarDates, setSelectedCalendarDates] = useRecoilState(
    SelectedCalendarDatesState,
  );

  return { selectedCalendarDates, setSelectedCalendarDates };
}
