import { axiosSetting } from "api/api";

const fetchCommentPut = async (data: any) => {
  const { campLogId, content, commentId } = data;
  const response = await axiosSetting.put(`/api/camplog/comment/${commentId}`, {
    campLogId,
    content,
  });
  return response;
};

export default fetchCommentPut;
