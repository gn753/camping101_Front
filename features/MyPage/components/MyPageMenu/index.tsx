import styled from "@emotion/styled";
import Link from "next/link";
export default function MyPageMenu() {
  return (
    <nav>
      <h1>마이페이지</h1>
      <Link href="/myPage/modify">수정하기</Link>
    </nav>
  );
}
