import styled from "@emotion/styled";
import Container from "components/layouts/Container";

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Text>Footer</Text>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 200px;
  background-color: rgb(247, 249, 250);
`;

const Text = styled.h1`
  font-size: 40px;
`;
