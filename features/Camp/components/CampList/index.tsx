import styled from "@emotion/styled";

import nanoid from "features/common/utils/nanoid";
import { useState } from "react";
import Pagination from "components/Pagination";
import CampItem from "./CampItem";

export default function CampList({ camps }: any) {
  const [page, setPage] = useState(1);
  const limit = 3;
  const offset = (page - 1) * limit;
  return (
    <>
      <ListView>
        {camps.slice(offset, offset + limit).map((camp: any) => (
          <CampItem key={nanoid()} {...camp} />
        ))}
      </ListView>
      <Pagination
        total={camps.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

const ListView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
