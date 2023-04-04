import styled from "@emotion/styled";
import Link from "next/link";

export default function FormTitle() {
  return (
    <Title>
      <Link href="/"> 로그인</Link>
    </Title>
  );
}

const Title = styled.h3`
  padding-bottom: 40px;
  text-align: center;
  font-size: 28px;
`;
