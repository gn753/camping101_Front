import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import CampLogList from "./components/CampLogList";
import CampReservation from "./components/CampReservation";
import CampDescription from "./components/CampDescription";
import CampBanner from "./components/CampBanner";
import CampTitle from "./components/CampTitle";

export default function CampDetails({ campDetails }: any) {
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
