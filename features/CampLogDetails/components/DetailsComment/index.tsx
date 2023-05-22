import { useEffect } from "react";
import { useRouter } from "next/router";
import useComments from "features/CampLogDetails/hooks/useCommnets";
import fetchComments from "features/CampLogDetails/service/fetchComments";
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";

export default function DetailsComment() {
  const { comments, setComments } = useComments();
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
      <CommentList comments={comments} />
    </section>
  );
}
