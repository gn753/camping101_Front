import { atom, useRecoilState } from "recoil";
import { useCallback } from "react";
import fetchBookmarkCreate from "../service/fetchBookmarkCreate";
import fetchBookmarkDelete from "../service/fetchBookmarkDelete";
import fetchMyBookmarks from "features/MyPage/api/fetchMyBookmarks";

interface BookmarkAddData {
  campLogId: any;
  memberId: any;
  title: string;
}

interface Bookmark {
  bookMarkId: number;
  campLogId: number;
  description: string;
  image: string;
  memberId: number;
  nickName: string;
  title: string;
}

const BookmarkListState = atom<BookmarkAddData[]>({
  key: "BookmarkListState",
  default: [],
});

export default function useBookmarks() {
  const [bookmarkList, setBookmarkList] =
    useRecoilState<BookmarkAddData[]>(BookmarkListState);

  const getBookmarks = useCallback(
    async (memberId: any) => {
      const response = await fetchMyBookmarks(memberId);
      setBookmarkList(response.data.content);
    },
    [setBookmarkList],
  );

  const addBookmarks = useCallback(
    async (newBookmark: BookmarkAddData) => {
      setBookmarkList((old) => [...old, newBookmark]);
      await fetchBookmarkCreate(newBookmark);
    },
    [setBookmarkList],
  );

  const deleteBookmarks = async (bookmarkId: any) => {
    const isDeleteBookmark = bookmarkId.bookmarkId;
    console.log(bookmarkId, "bookmarkIdbookmarkId");
    if (isDeleteBookmark) {
      await fetchBookmarkDelete(isDeleteBookmark)
        .then((res) => console.log(res, "성공"))
        .catch((err) => console.log(err));
      setBookmarkList(isDeleteBookmark);
    }
  };

  return {
    addBookmarks,
    bookmarkList,
    deleteBookmarks,
    getBookmarks,
  };
}
