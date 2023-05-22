import { axiosSetting } from "api/api";

const fetchBookmarkDelete = async (bookmarkId: any) => {
  const response = await axiosSetting.delete(`/api/bookmark${bookmarkId}`);

  return response;
};

export default fetchBookmarkDelete;
