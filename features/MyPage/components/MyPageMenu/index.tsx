import styled from "@emotion/styled";
import Link from "next/link";
export default function MyPageMenu() {
  return (
    <MenyWrapper>
      <h2>마이페이지</h2>
      <Link href="/myPage/modify">회원정보 수정</Link>
    </MenyWrapper>
  );
}

const MenyWrapper = styled.div`
  h2 {
    font-size: 26px;
    padding: 20px;
    text-align: center;
  }
  a {
    all: unset;
    display: block;
    margin: 20px 0px;
    width: 100px;
    border: 1px solid black;
    padding: 10px 3px;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    background-color: #35c5f0;
    border-color: #35c5f0;
    color: #fff;
    margin: auto;
    margin-bottom: 20px;
  }
`;
