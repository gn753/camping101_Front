import { decode } from "jsonwebtoken";
import { useCallback } from "react";

export default function authService() {
  const getJwtToken = () => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("access-token");
    }
  };

  const setJwtToken = (token: string) => {
    sessionStorage.setItem("access-token", token);
  };
  const getHeaders = () => {
    const headers: HeadersInit = {};
    const token = getJwtToken();
    if (token) headers["access-token"] = `Bearer ${token}`;

    return headers;
  };

  const getRefreshToken = () => {
    return sessionStorage.getItem("refresh-token");
  };

  const decodeJWT = (token: string) => {
    const decodedToken = decode(token);
    return decodedToken;
  };

  const isTokenValidOrUndefined = (token: any) => {
    if (!token) return "토큰 없음";

    const decodedToken: any = decodeJWT(token);
    const expirationTimeInSeconds = decodedToken.exp;
    const now = new Date();
    const expirationTimeInMilliseconds = expirationTimeInSeconds * 1000;
    const isvalid =
      expirationTimeInMilliseconds >= now.getTime() ? "토큰 유효" : "토큰 만료";
    return isvalid;
  };

  return {
    getJwtToken,
    getRefreshToken,
    setJwtToken,
    isTokenValidOrUndefined,
    getHeaders,
  };
}
