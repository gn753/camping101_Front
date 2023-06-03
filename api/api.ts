import axios from "axios";
import authService from "features/common/authService";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export const axiosSetting = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

axiosSetting.defaults.withCredentials = true;

const { getJwtToken, getRefreshToken } = authService();

export const setAuthorizationHeader = (accessToken: string) => {
  if (accessToken) {
    axiosSetting.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete axiosSetting.defaults.headers.common.Authorization;
  }
};

axiosSetting.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getJwtToken()}`;

    return config;
  },
  (error) => Promise.reject(error),
);

function tokenWithoutBearer(token: string) {
  return token.replace("Bearer ", "");
}

const data: any = {};
createAuthRefreshInterceptor(axiosSetting, (failedRequest) =>
  axiosSetting
    .post(
      "/api/signin/refresh",
      (data["refresh-token"] = ` ${getRefreshToken()}`),
    )
    .then((res) => {
      if (axiosSetting.defaults.headers["refresh-token"]) {
        delete axiosSetting.defaults.headers["refresh-token"];
      }

      const accesToken = res.headers["access-token"];
      const refreshToken = res.headers["refresh-token"];

      const bearer = `${accesToken}`;
      axiosSetting.defaults.headers.Authorization = bearer;

      setRefreshToken(refreshToken);

      failedRequest.response.config.headers.Authorization = bearer;

      return Promise.resolve();
    }),
);

function setRefreshToken(token: string) {
  return sessionStorage.setItem("refresh-token", token);
}
