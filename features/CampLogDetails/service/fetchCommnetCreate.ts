import { axiosSetting } from "api/api";

interface CommentPostRequset {
  campLogId: string | string[] | undefined;
  content: string;
}

const url = "/api/camplog/comment";

const fetchCommnetCreate = async (data: CommentPostRequset) => {
  const response = await axiosSetting.post(url, data);
  return response;
};

export default fetchCommnetCreate;
