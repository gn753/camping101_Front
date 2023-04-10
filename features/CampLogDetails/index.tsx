import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import DetailsPhoto from "./components/DetailsPhoto";
import DetailsBody from "./components/DetailsBody";
import DetailsHeader from "./components/DetailsHeader";
import DetailsComment from "./components/DetailsComment/DetailsCommet";
import { CampLogDetailsResponse } from "./types";
import { useState } from "react";

interface Props {
  details: CampLogDetailsResponse;

}

export default function CampLogDetails({ details }: Props) {

  return (
    <Wrapper>
      <DetailsPhoto />
      <Container>
        <DetailsHeader details={details} />
        {details && <DetailsBody details={details} />}
        <DetailsComment />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  section {
    padding-bottom: 20px;
  }
`;
