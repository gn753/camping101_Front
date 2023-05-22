import styled from "@emotion/styled";
import CampLogCard from "features/CampLog/components/CampLogCard";
import { CampLogResponse } from "./types";
import Container from "components/layouts/Container";
import nanoid from "features/common/utils/nanoid";
import Link from "next/link";

interface Props {
  camplogs: CampLogResponse[];
}

export default function CampLog({ camplogs }: Props) {
  const renderCamplogList = () => {
    return (
      <>
        {camplogs.map((camplog) => (
          <Link href={`/campLog/details/${camplog.campLogId}`} key={nanoid()}>
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
        <CountDiv>전체 {"1,200"}</CountDiv>
        <CampLogList>{renderCamplogList()}</CampLogList>
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
  article {
    margin-bottom: 10px;
  }
  article:last-of-type {
    margin-bottom: 0;
  }
`;
