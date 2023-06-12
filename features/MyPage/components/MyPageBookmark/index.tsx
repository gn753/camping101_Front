import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useBookmarks from "features/CampLogDetails/hooks/useBookmarks";
import CampLogCard from "components/Card/CampLogCard";
import Pagination from "components/Pagination";
import { MemberInfoState } from "features/AppAuth/hooks/useMemberInfo";
import { useRecoilValue } from "recoil";
import usePagination from "components/Pagination/hooks/usePagination";

export default function MyPageBookmark() {
  const memberInfo = useRecoilValue(MemberInfoState);
  const { updatePagination, page, prevArrow, nextArrow, offset, limit } =
    usePagination();
  const { getBookmarks, bookmarkList } = useBookmarks();

  useEffect(() => {
    const memberId = memberInfo?.member_id;

    if (typeof window !== undefined && memberId) {
      getBookmarks(memberId);
    }
  }, [getBookmarks, memberInfo?.member_id]);

  return (
    <>
      {memberInfo ? (
        <>
          <CampLogList>
            {bookmarkList.slice(offset, offset + limit).map((it, index) => (
              <CampLogCard key={index} {...it} />
            ))}
          </CampLogList>

          <Pagination
            total={bookmarkList.length}
            limit={limit}
            page={page}
            prevArrow={prevArrow}
            nextArrow={nextArrow}
            updatePagination={updatePagination}
          />
        </>
      ) : (
        <NoRender>
          <strong>캠프목록이 없습니다. 북마크를 해주세요!</strong>
        </NoRender>
      )}
    </>
  );
}

const NoRender = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  strong {
    font-size: 40px;
    font-weight: 500;
  }
`;

const CampLogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  article {
    margin-bottom: 10px;
  }
  article:last-of-type {
    margin-bottom: 0;
  }
`;
