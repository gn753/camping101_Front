import styled from "@emotion/styled";
import Link from "next/link";

export default function FormFooter() {
  return (
    <Navigation>
      <nav>
        <Link href="/">회원가입하기</Link>
        <Link href="/">비밀번호 찾기</Link>
      </nav>
    </Navigation>
  );
}

const Navigation = styled.footer`
  nav {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
  a {
    color: black;
  }
`;
