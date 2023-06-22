import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MemberInfoState } from "features/AppAuth/hooks/useMemberInfo";
import useBookmarks from "features/CampLogDetails/hooks/useBookmarks";
import { useRecoilValue } from "recoil";

interface Props {
  title: string;
  like: number;
}
export default function CampLogBookmarkOnOff({ title, like }: Props) {
  const [isBookmark, setIsBookmark] = useState(false);
  const memberInfo = useRecoilValue(MemberInfoState);

  const { addBookmarks, bookmarkList, deleteBookmarks, getBookmarks } =
    useBookmarks();

  const memberId = memberInfo && memberInfo.member_id;
  const router = useRouter();
  const id = Number(router.query.id);
  const newBookmark = {
    campLogId: router.query.id,
    title: title,
    memberId: memberId,
  };

  useEffect(() => {
    if (typeof window !== undefined && memberId) {
      getBookmarks(memberId);
    }
  }, [getBookmarks, memberId]);
  const bookmarkId = bookmarkList.find((it) => it.campLogId === id);

  useEffect(() => {
    if (bookmarkId) {
      setIsBookmark(true);
    }
  }, [bookmarkId]);

  const isActiveBookamrk = () => {
    if (!memberInfo) return false;
    setIsBookmark(!isBookmark);
  };

  return (
    <>
      {!isBookmark ? (
        <AddBookmark onClick={() => addBookmarks(newBookmark)}>
          <IsActiveEvent onClick={isActiveBookamrk}>북마크 추가</IsActiveEvent>
        </AddBookmark>
      ) : (
        <DeleteBookmark onClick={() => deleteBookmarks(bookmarkId)}>
          <IsActiveEvent onClick={isActiveBookamrk}>북마크 제거</IsActiveEvent>
        </DeleteBookmark>
      )}
      <LikeNum>{`좋아요 수 :${like}`}</LikeNum>
    </>
  );
}

const AddBookmark = styled.i`
  display: block;
  background-image: url("/icons/bookmark-line.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 28px;
  height: 28px;

  cursor: pointer;
`;

const DeleteBookmark = styled.i`
  display: block;
  background-image: url("/icons/bookmark-fill.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 28px;
  height: 28px;
  font-size: 0;
  cursor: pointer;
`;

const LikeNum = styled.span`
  font-size: 28px;
`;

const IsActiveEvent = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0;
  width: 100%;
`;
