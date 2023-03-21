import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import MyPageForm from "./components/MyPageForm";
import MyPageTitle from "./components/MyPageTitle";
Container;
export default function MyPage() {
  return (
    <Wrapper>
      <Container>
        <MyPageForm />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
`;
