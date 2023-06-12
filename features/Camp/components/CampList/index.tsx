import styled from "@emotion/styled";
import nanoid from "features/common/utils/nanoid";
import { useState } from "react";
import Pagination from "components/Pagination";
import CampCard from "./CampCard";
import usePagination from "components/Pagination/hooks/usePagination";

interface Props<T> {
  camps: T[];
}

export default function CampList<T>({ camps }: Props<T>) {
  const { updatePagination, page, prevArrow, nextArrow, offset, limit } =
    usePagination();
  return (
    <>
      <ListView>
        {camps.slice(offset, offset + limit).map((camp: any) => (
          <CampCard key={nanoid()} {...camp} />
        ))}
      </ListView>
      <Pagination
        total={camps.length}
        limit={limit}
        page={page}
        prevArrow={prevArrow}
        nextArrow={nextArrow}
        updatePagination={updatePagination}
      />
    </>
  );
}

const ListView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;
