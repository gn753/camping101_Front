import styled from "@emotion/styled";
import CampLogCard from "features/CampLog/components/CampLogCard";
import Container from "components/layouts/Container";
import Link from "next/link";
import Pagination from "components/Pagination";
import { CampLogResponse } from "./types";
import usePagination from "components/Pagination/hooks/usePagination";

interface Props {
  camplogs: CampLogResponse[];
}

export default function CampLog({ camplogs }: Props) {
  const { updatePagination, page, prevArrow, nextArrow, offset, limit } =
    usePagination();

  const renderCamplogList = () => {
    return (
      <>
        {camplogs.slice(offset, offset + limit).map((camplog) => (
          <Link
            href={`/campLog/details/${camplog.campLogId}`}
            key={camplog.campLogId}
          >
            <CampLogCard {...camplog} />
          </Link>
        ))}
      </>
    );
  };

  return (
    <Wrapper>
      <Container>
        <Title>캠프 리뷰</Title>
        <CountDiv>전체 1,200</CountDiv>
        <CampLogList>{renderCamplogList()}</CampLogList>
        <Pagination
          total={camplogs.length}
          limit={limit}
          page={page}
          prevArrow={prevArrow}
          nextArrow={nextArrow}
          updatePagination={updatePagination}
        />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 26px;
  margin: 1.75rem 0 2.5rem;
`;

const CountDiv = styled.div`
  width: auto;
  font-size: 16px;
  margin: 30px 0;
`;

const CampLogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  a {
    flex-basis: 48%;
  }
  article {
    margin-bottom: 10px;
  }
  article:last-of-type {
    margin-bottom: 0;
  }
`;
