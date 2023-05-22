import axios from "axios";
import authService from "features/common/authService";

export const axiosSetting = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

axiosSetting.defaults.withCredentials = true;

const { isTokenValidOrUndefined, getJwtToken } = authService();

//액세스 토큰 요청
axiosSetting.interceptors.request.use(
  (config) => {
    const token = getJwtToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
