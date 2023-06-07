import styled from "@emotion/styled";
import { axiosSetting } from "api/api";
import nanoid from "features/common/utils/nanoid";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import Pagination from "components/Pagination";

export default function CampResv({ memberId }: any) {
  const [page, setPage] = useState(1);
  const limit = 3;
  const offset = (page - 1) * limit;
  const [resvs, setResvs] = useState([]);

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
          (resv) => resv.reservationId !== reservationId,
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
      getResv(memberId);
    }
  }, [getResv, memberId]);

  return (
    <>
      {resvs.length > 0 &&
        resvs.slice(offset, offset + limit).map((it: any) => (
          <div key={nanoid()}>
            <div>
              <strong>{it.siteName}</strong>
              <p>{it.reservationId}</p>
              <p>{it.payment}원</p>
              <p>
                예약기간 : {it.startDate} / {it.endDate}
              </p>
              <p>{it.cancelAt && `취소날짜 :${it.cancelAt.slice(0, 10)}`}</p>
              <p> 인원수 : {it.humanCapacity}</p>
              <Button
                onClick={() => {
                  deleteResv(it.reservationId, it.startDate);
                }}
              >
                {devideResvCancel(it.startDate)}
              </Button>
            </div>
          </div>
        ))}
      <Pagination
        total={resvs.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

const Button = styled.button`
  font-size: 20px;
`;