import styled from "@emotion/styled";
import Link from "next/link";

export default function FormFooter() {
  return (
    <Footer>
      이미 아이디가 있으신가요 <Link href="/">로그인</Link>
    </Footer>
  );
}

const Footer = styled.div`
  text-align: center;
  margin-top: 20px;
`;
