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

const { getRefreshToken } = authService();

export const setAuthorizationHeader = (accessToken: string) => {
  if (accessToken) {
    const token = `Bearer ${accessToken}`;
    axiosSetting.defaults.headers.common.Authorization = token;
  } else {
    delete axiosSetting.defaults.headers.common.Authorization;
  }
};

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
