import MyPageMenu from "./components/MyPageMenu";
import MyPageBookmark from "./components/MyPageBookmark";
import Container from "components/layouts/Container";
import styled from "@emotion/styled";

export default function MyPage() {
  return (
    <Wrapper>
      <Container>
        <MyPageMenu />
        <MyPageBookmark />
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: auto;
  width: 100%;
`;
