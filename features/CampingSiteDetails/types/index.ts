export interface Response {
  animalCapable: string;
  businessNo: string;
  campId: number;
  campLogInCampList: [
    {
      campLogId: number;
      campLogName: string;
      createdAt: string;
      description: string;
      image: string;
      memberId: number;
      siteId: number;
      updatedAt: string;
      visitedAt: string;
    },
  ];
  equipmentTools: string;
  facility: string;
  facilityCnt: {
    showerCnt: number;
    toiletCnt: number;
    waterProofCnt: number;
  };
  firstImage: string;
  homepage: string;
  intro: string;
  leisure: string;
  location: {
    addr1: string;
    addr2: string;
    environment: string;
    latitude: string;
    longitude: string;
  };
  manageStatus: string;
  name: string;
  oneLineReserveYn: string;
  openDateOfWeek: string;
  openSeason: string;
  siteInCampList: [
    {
      checkIn: string;
      checkOut: string;
      introduction: string;
      leastScheduling: number;
      name: string;
      openYn: true;
      price: number;
      reservationInSiteList: [
        {
          endDate: string;
          reservationId: number;
          startDate: string;
        },
      ];
      rpImage: string;
      siteCapacity: {};
      siteId: number;
      type: string;
    },
  ];
  tel: string;
}

export interface SiteInCampList {
  checkIn: string;
  checkOut: string;
  introduction: string;
  leastScheduling: number;
  name: string;
  openYn: true;
  price: number;
  reservationInSiteList: [
    {
      endDate: string;
      reservationId: number;
      startDate: string;
    },
  ];
  rpImage: string;
  siteCapacity: {};
  siteId: number;
  type: string;
}

//휴일들을 정리한 데이터
export interface Holidays {
  dayType: "HOLIDAY";
  endDate: string;
  id: number;
  startDate: string;
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

interface 예약을선택한기간 {
  selectedDates: string[];
}

interface 예약이가능한날짜 {
  reservationInSiteList: [
    {
      endDate: "2023-07-09T15:53:52"; //예시이다
      reservationId: number;
      startDate: "2023-07-07T15:54:16"; // 예시이다
    },
  ];
}

interface 결과값 {
  memberSelectedDates: {
    endDate: "2023-07-07T15:53:52"; //예시이다
    reservationId: number;
    startDate: "2023-07-08T15:54:16"; // 예시이다
  };
  bookablePeriod: {
    endDate: "2023-07-09T15:53:52"; //예시이다
    reservationId: number;
    startDate: "2023-07-07T15:54:16"; // 예시이다
  };
}
