import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import Card from "./components/Card";

export default function CampingSite() {
  return (
    <Container>
      <h1>캠핑장 목록</h1>
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
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
`;
