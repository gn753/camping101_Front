import { atom, useRecoilState } from "recoil";

export const SelectedDatesState = atom<string[]>({
  key: "SelectedDatesState",
  default: [],
});

export default function useIsSelectedDates() {
  const [selectedDates, setSelectedDates] = useRecoilState(SelectedDatesState);

  return { selectedDates, setSelectedDates };
}
