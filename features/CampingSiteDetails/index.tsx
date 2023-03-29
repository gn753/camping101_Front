import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import CampingEtcInfo from "./components/CampingEtcInfo";
import CampingLog from "./components/CampingLog";
import CampingSiteInfo from "./components/CampingSiteInfo";
import CampingSiteIntro from "./components/CampingSiteIntro";
import CampingSiteSelect from "./components/CampingSiteSelect";

export default function CampingSiteDetails() {
  return (
    <Wrapper>
      <Container>
        <Figure />
        <CampingSiteInfo />
        <CampingSiteIntro />
        <CampingEtcInfo />
        <CampingSiteSelect />
        <CampingLog />
      </Container>
    </Wrapper>
  );
}

function Figure() {
  return (
    <section>
      <img src="http://placehold.it/1024x150" alt="test" />
    </section>
  );
}

const Wrapper = styled.div`
  section {
    padding: 20px 10px;
    border-bottom: 1px solid black;
  }
  h3 {
    margin-bottom: 30px;
    max-width: 80%;
  }
`;
