import Container from "components/layouts/Container";
import CampingSiteList from "./components/CampingSiteList";
import CampingSiteTitle from "./components/CampingSiteTitle";
import styled from "@emotion/styled";

export default function CampingSite() {
  return (
    <Wrapper>
      <CampingSiteTitle />
      <CampingSiteList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 768px;
  margin: auto;
`;
