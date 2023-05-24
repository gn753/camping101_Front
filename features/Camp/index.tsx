import Container from "components/layouts/Container";
import CampingSiteList from "./components/CampList";
import CampingSiteTitle from "./components/CampTitle";
import styled from "@emotion/styled";

interface Props {
  camps: any;
}

export default function Camp({ camps }: Props) {
  return (
    <Wrapper>
      <CampingSiteTitle />
      <CampingSiteList camps={camps} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 768px;
  margin: auto;
`;
