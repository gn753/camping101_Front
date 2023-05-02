//휴일들을 정리한 데이터
export interface Holidays {
  dayType: "HOLIDAY";
  endDate: "2024-02-12";
  id: 220;
  startDate: "2024-02-12";
  title: "설날 대체공휴일";
}

export interface Date {
  checkInNow: boolean; // 체크인여부
  date: string;
  onSale: boolean;
}

export interface IsSelected {
  isSelected: boolean;
}
