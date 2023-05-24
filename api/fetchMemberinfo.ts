import { axiosSetting } from "./api";

 const fetchMemberinfo = async (token: any) => {
    const response = await axiosSetting.get("/api/member", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };
  export default fetchMemberinfo