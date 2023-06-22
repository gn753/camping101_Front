import { SiteInCampList } from "features/CampDetails/types";
import styled from "@emotion/styled";
import ReservationCalendar from "./ReservationCalendar";
import ReservationCampSiteFind from "./ReservationCampSiteFind";

interface Props {
  campSites: SiteInCampList[];
}

export default function CampReservation({ campSites }: Props) {
  const isRenderCampSiteList = () => {
    const isRender = campSites && campSites.length > 0;

    return (
      <>
        {isRender ? (
          campSites.map((siteInCampList: SiteInCampList) => (
            <ReservationCampSiteFind
              siteInCampList={siteInCampList}
              key={siteInCampList.siteId}
            />
          ))
        ) : (
          <div>등록된 캠핑장이 없습니다</div>
        )}
      </>
    );
  };

  return (
    <>
      <ReservationCalendar />
      <ViewCampSite>{isRenderCampSiteList()}</ViewCampSite>
    </>
  );
}
const ViewCampSite = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
