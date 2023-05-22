import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import CampLogList from "./components/DetailsCampLogList";
import CampReservation from "./components/DetailsCampReservation";
import CampDescription from "./components/DetailsCampDescription";
import CampBanner from "./components/DetailsCampBanner";
import CampTitle from "./components/DetailsCampTitle";

export default function CampingSiteDetails({ campDetails }: any) {
  const sites = campDetails.siteInCampList;
  const camplogs = campDetails.campLogInCampList;

  return (
    <Wrapper>
      <CampBanner />
      <Container>
        <CampTitle campDetails={campDetails} />
        <CampDescription intro={campDetails.intro} />
        <CampReservation campSites={sites} />
        <CampLogList camplogs={camplogs} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  section {
    padding: 20px 10px;
  }
  section:nth-of-type(1) {
    border-bottom: 0;
  }
  h3 {
    margin-bottom: 11px;
  }
`;
