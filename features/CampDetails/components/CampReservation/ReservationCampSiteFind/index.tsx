import nanoid from "features/common/utils/nanoid";
import { SiteInCampList } from "features/CampDetails/types";
import AvailableCampSiteCard from "./AvailableCampSiteCard";
import useFindAvailableCampSite from "features/CampDetails/hooks/useFindAvailableCampSite";
import useIsSelectedDates from "features/CampDetails/hooks/useIsSelectedDates";

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
  console.log(siteInCampList, "site");
  return (
    <AvailableCampSiteCard
      key={nanoid()}
      campSite={siteInCampList}
      availableSites={availableSites}
    />
  );
}
