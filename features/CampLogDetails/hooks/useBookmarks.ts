import { atom, useRecoilState } from "recoil";
import { useCallback } from "react";
import fetchMyBookmarks from "features/MyPage/api/fetchMyBookmarks";
import fetchBookmarkCreate from "../service/fetchBookmarkCreate";
import fetchBookmarkDelete from "../service/fetchBookmarkDelete";

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

export const BookmarkListState = atom<Bookmark[]>({
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

  const addBookmarks = useCallback(async (newBookmark: BookmarkAddData) => {
    const { memberId } = newBookmark;
    if (memberId) {
      await fetchBookmarkCreate(newBookmark);
    } else alert("로그인을 해주세요");
  }, []);

  const deleteBookmarks = async (bookmarkId: any) => {
    if (!bookmarkId) return null;
    await fetchBookmarkDelete(bookmarkId);

    const update = bookmarkList.filter(
      (bookmark) => bookmark.bookMarkId !== bookmarkId,
    );
    setBookmarkList(update);
    return null;
  };

  return {
    addBookmarks,
    bookmarkList,
    deleteBookmarks,
    getBookmarks,
  };
}
