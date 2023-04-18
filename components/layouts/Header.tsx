import styled from "@emotion/styled";
import { AuthState } from "features/SignIn/hooks/useLogin";
import Link from "next/link";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

useCallback;

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(AuthState);

  const removeToken = useCallback(() => {
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("refresh_token");
  }, []);

  const handleLgout = useCallback(async () => {
    removeToken();
    setIsLoggedIn(false);
  }, []);

  return (
    <HeaderWrapper>
      <Gnb>
        <GnbList>
          <Link href="/">캠핑 101 로고</Link>
          <Link href="/campingSite">캠핑장</Link>
          <Link href="/campLog">캠프로그</Link>
        </GnbList>
        <GnbList>
          {isLoggedIn ? (
            <>
              <Link href="/myPage">마이페이지</Link>
              <Link href="/signIn">
                <button onClick={handleLgout}>로그아웃</button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/signIn">로그인</Link>
              <Link href="/signUp">회원가입</Link>
            </>
          )}
        </GnbList>
      </Gnb>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  border: 1px solid #eee;
`;

const Gnb = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
  height: 50px;
  box-sizing: border-box;
`;

const GnbList = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    width: 150px;
    height: 55px;
    text-decoration: none;
    color: black;
  }
  button {
    font-size: 16px;
  }
`;
