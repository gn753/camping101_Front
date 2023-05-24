import { useEffect, useState } from "react";
import { SiteInCampList } from "../types";
import getAvailableCampSite from "../service/getAvailableCampStie";

interface AvailableSites {
  endDate: moment.Moment;
  reservationId: number;
  startDate: moment.Moment;
}

interface Props {
  siteInCampList?: SiteInCampList;
  selectedCalendarDates: string[];
}

export default function useFindAvailableCampSite({
  siteInCampList,
  selectedCalendarDates,
}: Props) {
  const [availableSites, setAvailableSites] = useState<null | AvailableSites>(
    null,
  ); // 예약가능한 캠핑장 데이터 날짜

  useEffect(() => {
    if (!typeof window !== undefined) {
      const findResv = siteInCampList.reservationInSiteList.find(
        (예약데이터: any) =>
          예약데이터 && getAvailableCampSite(selectedCalendarDates, 예약데이터),
      );

      setAvailableSites(findResv);
    }
  }, [selectedCalendarDates]);
  return { availableSites };
}
