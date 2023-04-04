import styled from "@emotion/styled";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderWrapper>
      <Gnb>
        <GnbList>
          <Link href="/">캠핑 101 로고</Link>
          <Link href="/campingSite">캠핑장</Link>
          <Link href="/campLog">캠프로그</Link>
        </GnbList>
        <GnbList>
          <Link href="/signIn">로그인</Link>
          <Link href="/signUp">회원가입</Link>
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
  background-color: orange;
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
  }
`;
