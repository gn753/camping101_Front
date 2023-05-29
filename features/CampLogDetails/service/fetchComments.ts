import { axiosSetting } from "api/api";

const url = "/api/camplog/comment";

const fetchComments = async (campLogId: number | string) => {
  const response = await axiosSetting.get(url, {
    params: {
      campLogId,
    },
  });
  return response;
};

export default fetchComments;
