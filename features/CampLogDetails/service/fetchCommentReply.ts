import { axiosSetting } from "api/api";

const fetchCommentReply = async (data: any) => {
  const response = await axiosSetting
    .post("/api/camplog/comment", {
      ...data,
    })
    .then((res) => res)
    .catch((err) => alert(err.response.data.error_message));
  return response;
};

export default fetchCommentReply;
