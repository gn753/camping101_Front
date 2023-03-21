import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import MyPageForm from "./components/MyPageForm";

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
  box-sizing: border-box;
  padding-top: 40px;
  height: 100%;
`;
