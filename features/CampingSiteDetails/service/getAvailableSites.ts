import moment from "moment";
import { SiteInCampList } from "../types";

type SelectedDates = string[];

const getAvailableSites = (
  campSites: SiteInCampList,
  selectedDates: SelectedDates,
) => {
  const startDate = moment(selectedDates[0]).startOf("day");
  const endDate = moment(selectedDates[1]).startOf("day");

  const reservationInSite = campSites.reservationInSiteList;
  const siteReservations = reservationInSite.map((reservation) => ({
    reservationId: reservation.reservationId,
    startDate: moment(reservation.startDate),
    endDate: moment(reservation.endDate),
  }));

  // 선택한 날짜 범위와 예약된 날짜 범위를 비교하여 예약 가능한 캠핑장 필터링
  const reservationAvailableDates = siteReservations.filter(
    (siteReservation) => {
      const isDate =
        siteReservation.startDate.isSameOrBefore(endDate) &&
        siteReservation.endDate.isSameOrAfter(startDate);
      if (isDate) {
        return siteReservation;
      }
    },
  );

  return reservationAvailableDates[0];
};
export default getAvailableSites;
