import { axiosSetting } from "api/api";
import { useRouter } from "next/router";
const url = "/api/bookmark";

interface PostBoomark {
  campLogId: string | string[] | undefined;
  memberId: number;
  title: string;
}

const fetchBookmarkCreate = async (postData: PostBoomark) => {
  const response = await axiosSetting.post(url, postData);
  return response;
};

export default fetchBookmarkCreate;
