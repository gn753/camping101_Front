import { SiteInCampList } from "features/CampDetails/types";
import styled from "@emotion/styled";
import nanoid from "features/common/utils/nanoid";
import ReservationCalendar from "./ReservationCalendar";
import ReservationCampSiteFind from "./ReservationCampSiteFind";

interface Props {
  campSites: SiteInCampList[];
}

export default function CampReservation({ campSites }: Props) {
  const renderCampSiteList = () => {
    const isRender = campSites && campSites.length > 0;

    if (isRender) {
      return null;
    }

    return (
      <>
        {campSites.map((siteInCampList: SiteInCampList) => (
          <ReservationCampSiteFind
            siteInCampList={siteInCampList}
            key={nanoid()}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <ReservationCalendar />
      <ViewCampSite>{renderCampSiteList()}</ViewCampSite>
    </>
  );
}
const ViewCampSite = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
