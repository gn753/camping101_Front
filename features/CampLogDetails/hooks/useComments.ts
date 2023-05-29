import { axiosSetting } from "api/api";
import { atom, useRecoilState } from "recoil";
import fetchComments from "../service/fetchComments";
import fetchCommentPut from "../service/fetchCommentput";
import { ICommentParent } from "../types";

const CommentsState = atom<ICommentParent[] | null>({
  key: "CommentListState",
  default: [],
});

export default function useComments() {
  const [comments, setComments] = useRecoilState(CommentsState);

  const getComments = async (campLogId: number | string) => {
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
    await axiosSetting.delete(`/api/camplog/comment/${commentId}`);
    return null;
  };

  return { comments, setComments, getComments, putComment, deleteComment };
}
