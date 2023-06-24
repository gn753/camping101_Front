import styled from "@emotion/styled";
import moment from "moment";
import { axiosSetting } from "api/api";
import { useCallback, useEffect, useState } from "react";
import Pagination from "components/Pagination";
import usePagination from "components/Pagination/hooks/usePagination";

export default function CampResv({ memberId }: any) {
  const [resvs, setResvs] = useState([]);
  const { updatePagination, page, prevArrow, nextArrow, offset, limit } =
    usePagination();
  const devideResvCancel = useCallback((resvStartDate: string) => {
    const currntDay = moment().format("YYYY-MM-DD");
    const isAdjacent = moment(resvStartDate).diff(currntDay, "days");

    if (isAdjacent >= 2) {
      return "예약 취소";
    }
    return null;
  }, []);

  const getResv = useCallback(async () => {
    const response = await axiosSetting.get(
      `/api/reservation/customer/${memberId}`,
    );
    setResvs(response.data);
  }, [memberId]);

  const deleteResv = useCallback(
    async (reservationId: any, startDate: string) => {
      if (devideResvCancel(startDate) !== "예약 취소") return null;
      try {
        await axiosSetting.delete(`/api/reservation/${reservationId}`);
        const resvsfilter = resvs.filter(
          (resv: any) => resv.reservationId !== reservationId,
        );
        setResvs(resvsfilter);
        alert("삭제되었습니다");
      } catch (error) {
        return null;
      }
    },
    [devideResvCancel, resvs],
  );
  useEffect(() => {
    if (typeof window !== undefined && memberId) {
      getResv();
    }
  }, [getResv, memberId]);

  return (
    <>
      {resvs.length > 0 &&
        resvs.slice(offset, offset + limit).map((it: any) => (
          <div key={it.reservationId}>
            <div>
              <strong>{it.siteName}</strong>
              <p>{it.reservationId}</p>
              <p>{it.payment}원</p>
              <p>
                예약기간 : {it.startDate} / {it.endDate}
              </p>
              <p>{it.cancelAt && `취소날짜 :${it.cancelAt.slice(0, 10)}`}</p>
              <p> 인원수 : {it.humanCapacity}</p>
              {!it.cancelAt && (
                <Button
                  onClick={() => {
                    deleteResv(it.reservationId, it.startDate);
                  }}
                >
                  {devideResvCancel(it.startDate)}
                </Button>
              )}
            </div>
          </div>
        ))}
      <Pagination
        total={resvs.length}
        limit={limit}
        page={page}
        prevArrow={prevArrow}
        nextArrow={nextArrow}
        updatePagination={updatePagination}
      />
    </>
  );
}

const Button = styled.button`
  font-size: 20px;
`;
