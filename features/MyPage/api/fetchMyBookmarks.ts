import { axiosSetting } from "api/api";

const url = "/api/bookmark";

export default async function fetchMyBookmarks(memberId: number) {
  const urlQuery = `${url}/` + 9;
  const response = await axiosSetting.get(urlQuery);
  return response;
}
