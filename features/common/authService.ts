import { decode } from "jsonwebtoken";

export function authService() {
  function getJwtToken() {
    return sessionStorage.getItem("jwt");
  }

  function setJwtToken(token: string) {
    sessionStorage.setItem("jwt", token);
  }
  function getHeaders() {
    const headers: HeadersInit = {};
    const token = getJwtToken();
    if (token) headers["access_token"] = `Bearer ${token}`;

    return headers;
  }
  //리프레시 토큰을 얻는다
  function getRefreshToken() {
    return sessionStorage.getItem("refresh_token");
  }

  function decodeJWT(token: string) {
    const decodedToken = decode(token);
    return decodedToken;
  }

  const isTokenValidOrUndefined = (token: any) => {
    if (!token) return "토큰 없음"; 

    const decodedToken: any = decodeJWT(token);
    const expirationTimeInSeconds = decodedToken.exp;
    if (expirationTimeInSeconds === undefined) {

      return "토큰 유효";
    }
    const now = new Date();
    const expirationTimeInMilliseconds = expirationTimeInSeconds * 1000;
    const isvalid =
      expirationTimeInMilliseconds >= now.getTime() ? "토큰 유효" : "토큰 만료";
    return isvalid; //토큰이 기간이 유효하다면 true 아니라면 false
  };



  return {
    getJwtToken,
    getRefreshToken,
    setJwtToken,
    isTokenValidOrUndefined,
    getHeaders,
  };
}
