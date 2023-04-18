import styled from "@emotion/styled";
import MyPageMenu from "./components/MyPageMenu";
import MyPageBookmark from "./components/MyPageBookmark";


export default function MyPage() {
  return (
    <Wrapper>
      <MyPageMenu/>
      <MyPageBookmark/>
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
