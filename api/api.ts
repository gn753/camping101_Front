import axios from "axios";
export const axiosSetting = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

axiosSetting.defaults.withCredentials = true;
