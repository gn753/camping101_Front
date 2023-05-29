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

export interface Comments {
  campLogId: number;
  comments: [
    {
      commentId: number;
      content: string;
      createdAt: string;
      profileImagePath: string;
      writerEmail: string;
      writerNickName: string;
      reComments: [
        {
          content: string;
          createdAt: string;
          like: number;
          profileImagePath: string;
          reCommentId: number;
          writerEmail: string;
          writerNickName: string;
        },
      ];
    },
  ];
  pageNumber: number;
  recordSize: number;
  total: number;
}

export interface ICommentParent {
  commentId: number;
  content: string;
  createdAt: string;
  profileImagePath: string;
  writerEmail: string;
  writerNickName: string;
  reComments: [];
}

export interface ReComment {
  content: string;
  createdAt: string;
  like: number;
  profileImagePath: string;
  reCommentId: number;
  writerEmail: string;
  writerNickName: string;
}
