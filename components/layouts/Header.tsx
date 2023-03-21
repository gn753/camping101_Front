import styled from "@emotion/styled";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <NavWrap>
          <NavList>
            <Link href="/">캠핑 101 로고</Link>
            <Link href="/">캠핑장</Link>
            <Link href="/">캠프로그</Link>
          </NavList>
          <NavList>
            <Link href="/">로그인</Link>
            <Link href="/">회원가입</Link>
          </NavList>
        </NavWrap>
      </Container>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 999;
  background-color: orange;
`;

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 1.2rem 1.6rem;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const NavWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const NavList = styled.div`
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
