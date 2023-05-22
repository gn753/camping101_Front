import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import DetailsCampLogBody from "./components/DetailsCampLogBody";
import DetailsCampLogHeader from "./components/DetailsCampLogHeader";
import DetailsComment from "./components/DetailsComment";
import DetailsCampLogPhoto from "./components/DetailsCampLogPhoto";
import { CampLogDetailsResponse } from "./types";

import Hr from "components/base/Hr";
import DetailsCampLogBookmark from "./components/DetailsCampLogBookmark";

interface Props {
  details: CampLogDetailsResponse;
}
const CampLogDetailsState = {
  key: "CampLogDetailsState",
  default: null,
};

export default function CampLogDetails({ details }: Props) {
  return (
    <Wrapper>
      <DetailsCampLogPhoto image={details.image} />
      <Container>
        {details && <DetailsCampLogHeader details={details} />}
        {details && (
          <DetailsCampLogBookmark title={details.title} like={details.like} />
        )}
        <Hr />
        {details && <DetailsCampLogBody details={details} />}
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
