import { useEffect } from "react";
import { atom, selector, useRecoilState } from "recoil";
import fetchComments from "../service/fetchComments";
import fetchCommentPut from "../service/fetchCommentput";
import fetchBookmarkDelete from "../service/fetchBookmarkDelete";
import { axiosSetting } from "api/api";
const CommentsState = atom<any>({
  key: "CommentListState",
  default: [],
});

const commentSelector = selector({
  key: "commentSelector",
  get: ({ get }) => {
    return get(CommentsState); // 댓글 데이터 반환
  },
  set: ({ set }, updatedComment) => {
    set(CommentsState, updatedComment); // 댓글 데이터 업데이트
  },
});

export default function useComments() {
  const [comments, setComments] = useRecoilState(CommentsState);

  const putComment = async (
    camplogId: any,
    commentId: any,
    content: any,
    requesterEmail: any,
  ) => {
    const response = await fetchCommentPut({
      camplogId,
      commentId,
      content,
      requesterEmail,
    });
  };

  const getComments = async (memberId: any) => {
    const response = await fetchComments(memberId);

    if (response) {
      setComments(response.data.comments); // 새로운 댓글로 댓글 데이터 업데이트
    }
  };

  const deleteComment = async (commentId: any) => {
    const updatedComments = comments.filter(
      (comment: { commentId: any }) => comment.commentId !== commentId,
    );
    await axiosSetting.delete(`/api/camplog/comment/${commentId}`);
    setComments(updatedComments); // 삭제된 댓글로 댓글 데이터 업데이트
  };

  return { comments, setComments, getComments, putComment, deleteComment };
}
