import { axiosSetting } from "api/api";

const fetchBookmarks = async (memberId: any) => {
  const response = await axiosSetting.get(`/api/bookmark/${memberId}`);
  return response;
};
export default fetchBookmarks;
