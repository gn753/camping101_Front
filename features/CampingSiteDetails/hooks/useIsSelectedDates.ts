import "moment/locale/ko"; // 한국어 설정
import moment from "moment";
import { atom, useRecoilState } from "recoil";
export const SelectedCalendarDatesState = atom<string[]>({
  key: "SelectedCalendarDatesState",
  default: [moment().format("YYYY-MM-DD")],
});

export default function useIsSelectedDates() {
  const [selectedCalendarDates, setSelectedCalendarDates] = useRecoilState(
    SelectedCalendarDatesState,
  );

  return { selectedCalendarDates, setSelectedCalendarDates };
}
