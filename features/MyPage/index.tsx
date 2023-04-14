import styled from "@emotion/styled";
import CampLogCard from "features/CampLog/components/CampLogCard";
import Link from "next/link";

const data = [1, 2, 3, 4];
export default function MyPage() {
  return (
    <Wrapper>
      <Header>
        <h1>마이페이지</h1>
        <button>로그아웃 </button>
        <Link href="/myPage/modify">수정하기 </Link>
      </Header>
      <Conetent>
        북마크 리스트
        {data.map((card) => (
          <CampLogCard></CampLogCard>
        ))}
      </Conetent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const Header = styled.header``;

const Conetent = styled.section`
  & > div {
    margin-bottom: 10px;
  }
`;
