import { useEffect } from "react";
import { atom, selector, useRecoilState } from "recoil";
import fetchComments from "../service/fetchComments";
import fetchCommentPut from "../service/fetchCommentput";

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

const useComments = () => {
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

  const deleteComment = (commentId: any) => {
    const updatedComments = comments.filter(
      (comment: { commentId: any }) => comment.commentId !== commentId,
    );
    setComments(updatedComments); // 삭제된 댓글로 댓글 데이터 업데이트
  };

  useEffect(() => {
    //코멘트 추가
  }, []);

  // const updatedComments = comments.map((comment) => {
  //   if (comment.commentId === commentId) {
  //     // 해당 댓글이 수정되어야 할 댓글인 경우
  //     return {
  //       ...comment,
  //       content: updatedComment.content,
  //       // 필요한 다른 속성들도 업데이트합니다.
  //     };
  //   } else if (comment.children) {
  //     // 자식 댓글이 있는 경우 재귀적으로 수정합니다.
  //     return {
  //       ...comment,
  //       children: modifyComment(commentId, updatedComment, comment.children),
  //     };
  //   } else {
  //     // 수정할 댓글이 아니면 원래의 댓글을 그대로 반환합니다.
  //     return comment;
  //   }
  // });

  return { comments, setComments, getComments, putComment, deleteComment };
};

export default useComments;
