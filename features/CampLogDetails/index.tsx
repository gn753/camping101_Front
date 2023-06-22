import styled from "@emotion/styled";
import Hr from "components/base/Hr";
import Container from "components/layouts/Container";
import DetailsCampLogBody from "./components/CampLogBody";
import CampLogBookmarkOnOff from "./components/CampLogBookmarkOnOff";
import CampLogWriterProfile from "./components/CampLogWriterProfile";
import { CampLogDetailsResponse } from "./types";
import CampLogPhoto from "./components/CampLogPhoto";
import Comment from "./components/Comment";

interface Props {
  details: CampLogDetailsResponse;
}

export default function CampLogDetails({ details }: Props) {
  return (
    <Wrapper>
      {details && (
        <>
          <CampLogPhoto image={details.image} />
          <Container>
            <CampLogWriterProfile details={details} />
            <CampLogBookmarkOnOff title={details.title} like={details.like} />
            <Hr />
            <DetailsCampLogBody details={details} />
            <Comment />
          </Container>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  section {
    padding-bottom: 20px;
  }
`;
