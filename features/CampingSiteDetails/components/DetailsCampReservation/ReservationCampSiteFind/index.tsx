import nanoid from "features/common/utils/nanoid";
import { SiteInCampList } from "features/CampingSiteDetails/types";
import AvailableCampSiteCard from "./AvailableCampSiteCard";
import useFindAvailableCampSite from "features/CampingSiteDetails/hooks/useFindAvailableCampSite";
import useIsSelectedDates from "features/CampingSiteDetails/hooks/useIsSelectedDates";

interface Props {
  siteInCampList: SiteInCampList;
}

//예약가능한 캠프를 필터링해주는곳
export default function ReservationCampSiteFind({ siteInCampList }: Props) {
  const { selectedCalendarDates } = useIsSelectedDates(); // 예약을 선택한 날짜
  const { availableSites } = useFindAvailableCampSite({
    siteInCampList,
    selectedCalendarDates,
  });

  return (
    <AvailableCampSiteCard
      key={nanoid()}
      campSite={siteInCampList}
      availableSites={availableSites}
    />
  );
}
