import styled from "@emotion/styled";
import Link from "next/link";

export default function Card({ ...rest }: any) {
  const { campId, campName, firstImage, intro } = rest;

  return (
    <CardWrapper>
      <LinkWrapper href="/">
        <CardPhoto src="http://placehold.it/50x50" alt="test" />
        <CardBody>
          <CardTitle>진주 캠핑소사이어티 럭셔리글램핑&피크닉</CardTitle>
          <p>
            <span>구래 성지캠핑장</span>
            <span>4,000원</span>
          </p>
          <Comments>캠핑로그(20)</Comments>
          <Info>
            <li>환경 : 숲</li>
            <li>태그 : 킹왕짱</li>
          </Info>
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
const CardBody = styled.a`
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

const Comments = styled.span`
  display: block;
`;

const Info = styled.ul`
  display: flex;
  gap: 5px;
`;
