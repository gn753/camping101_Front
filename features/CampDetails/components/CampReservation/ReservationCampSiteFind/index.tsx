import nanoid from "features/common/utils/nanoid";
import { SiteInCampList } from "features/CampDetails/types";
import useFindAvailableCampSite from "features/CampDetails/hooks/useFindAvailableCampSite";
import useIsSelectedDates from "features/CampDetails/hooks/useIsSelectedDates";
import AvailableCampSiteCard from "./AvailableCampSiteCard";

interface Props {
  siteInCampList: SiteInCampList;
}

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
