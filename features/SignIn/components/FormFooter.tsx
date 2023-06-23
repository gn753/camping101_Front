import styled from "@emotion/styled";
import Link from "next/link";
import PasswordFind from "./PasswordFind";

export default function FormFooter() {
  return (
    <Navigation>
      <ul>
        <li>
          <Link href="/signUp">회원가입하기</Link>
        </li>
        <li>
          <PasswordFind title="비밀번호 찾기" />
        </li>
      </ul>
    </Navigation>
  );
}

const Navigation = styled.footer`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
  li,
  a,
  button {
    color: black;
    font-size: 15px;
  }
`;
