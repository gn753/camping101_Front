import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useComments from "features/CampLogDetails/hooks/useCommnets";
import fetchComments from "features/CampLogDetails/service/fetchComments";
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";
import Pagination from "components/Pagination";

export default function Comment() {
  const [page, setPage] = useState(1);
  const { comments, setComments } = useComments();
  const limit = 3;
  const offset = (page - 1) * limit;

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const getComments = async () => {
      const response = await fetchComments(id);
      if (response) {
        setComments(response.data.comments);
      }
    };

    if (typeof window !== "undefined") {
      getComments();
    }
  }, [id, setComments]);

  return (
    <section>
      <strong>댓글 : 16</strong>
      <CommentCreate campLogId={id} />
      <CommentList comments={comments} start={offset} end={offset + limit} />
      <Pagination
        total={comments.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </section>
  );
}
