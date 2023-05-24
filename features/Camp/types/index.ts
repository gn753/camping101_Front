export interface Response {
  content: [
    {
      animalCapable: string;
      campId: number;
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
    },
  ];
  empty: true;
  first: true;
  last: true;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: true;
    sort: {
      empty: true;
      sorted: true;
      unsorted: true;
    };
    unpaged: true;
  };
  size: number;
  sort: {
    empty: true;
    sorted: true;
    unsorted: true;
  };
  totalElements: number;
  totalPages: number;
}
