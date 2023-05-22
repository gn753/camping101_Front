import Container from "components/layouts/Container";
import CampingSiteList from "./components/CampingSiteList";
import CampingSiteTitle from "./components/CampingSiteTitle";
import styled from "@emotion/styled";
import { Suspense } from "react";

interface Props {
  camps: any;
}

export default function CampingSite({ camps }: Props) {
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
