import { axiosSetting } from "api/api";
const url = "/api/camplog/comment";

const fetchComments = async (campLogId: string | string[] | undefined) => {
  const response = await axiosSetting.get(url, {
    params: {
      campLogId: campLogId,
    },
  });
  return response;
};

export default fetchComments;
