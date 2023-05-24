import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";

export default function MyPageMenu() {
  const [menu, setMenu] = useState(false);
  return (
    <MenyWrapper>
      <h2>마이페이지</h2>
      <ul>
        <li>
          <Link href="/myPage/modify">회원정보 수정</Link>
        </li>
        <li>북마크 목록</li>
        <li>내 예약 목록</li>
      </ul>
    </MenyWrapper>
  );
}

const MenyWrapper = styled.div`
  h2 {
    font-size: 26px;
    padding: 20px;
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  li {
    all: unset;
    display: block;
    border: 1px solid black;
    padding: 10px 3px;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    background-color: #bf0909;
    border-color: #35c5f0;
    color: #fff;
    margin-bottom: 20px;
  }
`;
