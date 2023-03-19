import styled from "@emotion/styled";
import Container from "components/layouts/Container";

export default function HomeBanner() {
  return (
    <Wrapper>
      <Container>
        <img src="http://placehold.it/1024x300" />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 300px;
  border: 1px solid black;
  margin-top: 20px;
`;
