import { axiosSetting } from "api/api";

const fetchBookmarks = async (memberId: any) => {
  const response = await axiosSetting.get(`/api/bookmark/${memberId}`);
  console.log("add");
  return response;
};
export default fetchBookmarks;
