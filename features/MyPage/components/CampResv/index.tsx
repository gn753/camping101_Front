import { axiosSetting } from "api/api";
import nanoid from "features/common/utils/nanoid";
import { useCallback, useEffect, useState } from "react";

export default function CampResv({ memberId }: any) {
  const [resvs, setResvs] = useState([]);
  const getResv = useCallback(async (memberId: any) => {
    const response = await axiosSetting.get(
      `/api/reservation/customer/${memberId}`,
    );
    setResvs(response.data);
  }, []);
  const deleteResv = useCallback(async (reservationId: any) => {
    const response = await axiosSetting.delete(
      `/api/reservation/${reservationId}`,
    );
    setResvs(response.data);
  }, []);
  useEffect(() => {
    if (typeof window !== undefined && memberId) {
      getResv(memberId);
    }
  }, [getResv, memberId]);

  return (
    <>
      {resvs.length > 0 &&
        resvs.map((it: any) => (
          <div key={nanoid()}>
            <div>
              <strong>{it.siteName}</strong>
              <p>{it.reservationId}</p>
              <p>{it.payment}원</p>
              <p>
                예약기간 : {it.startDate} / {it.endDate}
              </p>
              <p> 인원수 : {it.humanCapacity}</p>
              <button onClick={() => deleteResv(it.reservationId)}>
                예약 취소
              </button>
            </div>
          </div>
        ))}
    </>
  );
}
