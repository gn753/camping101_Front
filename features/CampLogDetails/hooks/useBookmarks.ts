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

const BookmarkListState = atom<Bookmark[]>({
  key: "BookmarkListState",
  default: [],
});

export default function useBookmarks() {
  const [bookmarkList, setBookmarkList] = useRecoilState(BookmarkListState);

  const getBookmarks = useCallback(
    async (memberId: any) => {
      const response = await fetchMyBookmarks(memberId);
      setBookmarkList(response.data.content);
    },
    [setBookmarkList],
  );

  const addBookmarks = useCallback(
    async (newBookmark: BookmarkAddData) => {
      const response = await fetchBookmarkCreate(newBookmark);
    },
    [setBookmarkList],
  );

  const deleteBookmarks = async (bookmarkId: any) => {
    if (bookmarkId) {
      await fetchBookmarkDelete(bookmarkId)
        .then((res) => console.log(res, "성공"))
        .catch((err) => console.log(err));

      const update = bookmarkList.filter(
        (bookmark) => bookmark.bookMarkId !== bookmarkId,
      );
      setBookmarkList(update);
    }
  };

  return {
    addBookmarks,
    bookmarkList,
    deleteBookmarks,
    getBookmarks,
  };
}