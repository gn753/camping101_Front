import styled from "@emotion/styled";
import Link from "next/link";
//next js hydrate html상 에러 aㅅ
export default function CampItem({ ...rest }: any) {
  const { campId, campName, firstImage, location, intro } = rest;
  console.log(campName);
  return (
    <CardWrapper>
      <LinkWrapper href="/">
        <CardPhoto src="http://placehold.it/50x50" alt="test" />
        <CardBody>
          <CardTitle>{campName}</CardTitle>
          <CardDescription>{intro}</CardDescription>
          <CardComments>캠핑로그(20)</CardComments>
          <CardTag>
            <li>환경 : {location.environment}</li>
            <li>태그 : 킹왕짱</li>
          </CardTag>
        </CardBody>
      </LinkWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  margin: 1.25rem 0;
  flex-basis: 48%;
  border-top-left-radius: calc(0.375rem - 1px);
  border-top-right-radius: calc(0.375rem - 1px);
  cursor: pointer;
`;

const LinkWrapper = styled(Link)`
  display: flex;
`;

const CardPhoto = styled.img`
  min-width: 6.75rem;
  min-height: 6.75rem;
`;
const CardBody = styled.div`
  display: block;
  text-decoration: none;
  background-color: #fff;
  margin-left: 1rem;
`;

const CardTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 5px 0px;
`;

const CardDescription = styled.p`
  margin: 5px 0;
`;

const CardComments = styled.span`
  display: block;
  margin: 5px 0;
`;

const CardTag = styled.ul`
  display: flex;
  gap: 5px;
`;
