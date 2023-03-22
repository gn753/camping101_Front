import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import Card from "./components/Card";

export default function CampingSiteList() {
  return (
    <Container>
      <CardList>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </Container>
  );
}

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;
