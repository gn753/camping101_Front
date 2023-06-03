import { axiosSetting } from "api/api";

const fetchReCommentCreate = async (postData: any) => {
  try {
    await axiosSetting.post("/api/camplog/recomment", postData);
  } catch (error) {
    console.error(error);
  }
};

export default fetchReCommentCreate;
