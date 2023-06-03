import { axiosSetting } from "api/api";
import { atom, useRecoilState } from "recoil";
import fetchComments from "../service/fetchComments";
import fetchCommentPut from "../service/fetchCommentput";
import { ICommentParent } from "../types";
import { useRouter } from "next/router";

const CommentsState = atom<ICommentParent[] | null>({
  key: "CommentListState",
  default: [],
});

export default function useComments() {
  const [comments, setComments] = useRecoilState(CommentsState);
  const router = useRouter();
  const campLogId = router.query.id;
  const getComments = async (campLogId: any) => {
    try {
      const response = await fetchComments(campLogId);
      const data: ICommentParent[] = response.data.comments;
      setComments(data); // 새로운 댓글로 댓글 데이터 업데이트
    } catch (error) {
      console.log(error, "getComments 댓글에러입니다");
    }
  };

  const putComment = async (data: any) => {
    const { campLogId, commentId, content } = data;
    await fetchCommentPut({
      campLogId,
      commentId,
      content,
    });
    await getComments(campLogId);
  };

  const deleteComment = async (commentId: number) => {
    if (!comments) return null;
    try {
      await axiosSetting.delete(`/api/camplog/comment/${commentId}`);
      const filteredComments = comments.filter(
        (comment) => comment.commentId !== commentId,
      );
      setComments(filteredComments);
    } catch {
      return null;
    }
    return null;
  };

  const deleteReComment = async (commentId: number) => {
    if (!comments) return null;
    try {
      await axiosSetting.delete(`/api/camplog/recomment/${commentId}`);
      await getComments(campLogId);
    } catch {
      return null;
    }
    return null;
  };

  return {
    comments,
    setComments,
    getComments,
    putComment,
    deleteComment,
    deleteReComment,
  };
}
