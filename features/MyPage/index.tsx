import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import { MemberInfoState } from "features/AppAuth/hooks/useMemberInfo";
import { useRecoilValue } from "recoil";
import MyPageBookmark from "./components/MyPageBookmark";
import CampResv from "./components/CampResv";
import Container from "components/layouts/Container";

export default function MyPage() {
  const [menu, setMenu] = useState(true);
  const memberInfo = useRecoilValue(MemberInfoState);
  const memberId = memberInfo?.member_id;

  const handleBookmarkOn = () => {
    setMenu(true);
  };
  const handleCampResvOn = () => {
    setMenu(false);
  };

  return (
    <Wrapper>
      <Container>
        <MenyWrapper>
          <h2>마이페이지</h2>
          <ul>
            <li>
              <Link href="/myPage/modify">회원정보 수정</Link>
            </li>
            <li>
              <button onClick={handleBookmarkOn}>북마크 목록</button>
            </li>
            <li>
              <button onClick={handleCampResvOn}>내 예약목록</button>
            </li>
          </ul>
        </MenyWrapper>
        {menu ? <MyPageBookmark /> : <CampResv memberId={memberId} />}
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: auto;
  width: 100%;
`;
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
