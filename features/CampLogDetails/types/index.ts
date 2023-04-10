export interface CampLogDetailsResponse {
  campLogId: number;
  createdAt: string;
  description: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  like: number;
  recTags: [string];
  siteId: number;
  title: string;
  updatedAt: string;
  view: number;
  visitedAt: string;
  visitedWith: string;
  writerEmail: string;
  writerNickName: string;
}

export interface CampLogDetailsCommentResponse {
  campLogId: number;
  total: number;
  pageNumber: number;
  recordSize: number;
  comments: [
    {
      commentId: number;
      writerEmail: string;
      writerNickName: string;
      profileImagePath: string;
      parentId: number;
      reCommentYn: boolean;
      content: string;
      like: number;
      createdAt: string;
    },
  ];
}

export interface CampLogDetailsComments {
  commentId: number;
  writerEmail: string;
  writerNickName: string;
  profileImagePath: string;
  parentId: number;
  reCommentYn: boolean;
  content: string;
  like: number;
  createdAt: string;
}
