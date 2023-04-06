export interface RealTimeCampLogList {
  total: number;
  pageNumber: number;
  recordSize: number;
  campLogs: [];
}

export interface RealTimeCampLogDetails {
  campLogId: number;
  writerEmail: string;
  writerNickName: string;
  siteId: number;
  visitedAt: string;
  visitedWith: string;
  recTags: object;
  title: string;
  description: any;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  like: number;
  view: number;
  createdAt: string;
  updatedAt: null;
}

export interface CampinSiteDetails {
  animalCapable: string;
  campId: 0;
  campName: string;
  firstImage: string;
  intro: string;
  location: {
    addr1: string;
    addr2: string;
    environment: string;
    latitude: string;
    longitude: string;
  };
  manageStatus: string;
  memberId: number;
  openSeason: string;
}
