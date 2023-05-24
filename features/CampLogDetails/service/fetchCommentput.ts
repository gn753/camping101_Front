import { axiosSetting } from "api/api";

const url = "api/camplog/comment";

const fetchCommentPut = async (data: any) => {
  const response = await axiosSetting.put("/api/camplog/comment", {
    ...data,
  });
  return response;
};

export default fetchCommentPut;
