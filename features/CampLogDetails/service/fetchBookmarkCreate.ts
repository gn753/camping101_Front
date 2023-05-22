import { axiosSetting } from "api/api";
import { useRouter } from "next/router";
const url = "/api/bookmark";

interface PostBoomark {
  campLogId: string | string[] | undefined;
  memberId: number;
  title: string;
}

const fetchBookmarkCreate = async (postData: PostBoomark) => {
  const { memberId } = postData;
  if (memberId) {
    const response = await axiosSetting.post(url, postData);
    return response;
  } else {
    alert("로그인을 해주세요");
  }
};

export default fetchBookmarkCreate;
