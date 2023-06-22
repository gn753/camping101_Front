import styled from "@emotion/styled";
import Container from "components/layouts/Container";

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Text>Camping101</Text>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 200px;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 40px;
  color: #fff;
`;
