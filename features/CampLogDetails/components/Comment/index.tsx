import { useEffect } from "react";
import { useRouter } from "next/router";
import { ICommentParent } from "features/CampLogDetails/types";
import fetchComments from "features/CampLogDetails/service/fetchComments";
import useComments from "features/CampLogDetails/hooks/useComments";
import Pagination from "components/Pagination";
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";
import usePagination from "components/Pagination/hooks/usePagination";

export default function Comment() {
  const { comments, setComments } = useComments();
  const { updatePagination, page, prevArrow, nextArrow, offset, limit } =
    usePagination();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getComments = async () => {
        const response = await fetchComments(Number(id));
        const data: ICommentParent[] = response.data.comments;
        setComments(data);
      };

      getComments();
    }
  }, [id, setComments]);

  return (
    <section>
      <strong>댓글 : 16</strong>
      <CommentCreate campLogId={id} />
      <CommentList comments={comments} start={offset} end={offset + limit} />
      <Pagination
        total={comments ? comments.length : 0}
        limit={limit}
        page={page}
        prevArrow={prevArrow}
        nextArrow={nextArrow}
        updatePagination={updatePagination}
      />
    </section>
  );
}
