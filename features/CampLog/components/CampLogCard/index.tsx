import styled from "@emotion/styled";
import { CampLogResponse } from "features/CampLog/types";
import formatPostDate from "features/common/utils/monent/formatPostDate";

export default function CampLogCard({ ...data }: CampLogResponse) {
  const { writerNickName, title, description, createdAt } = data;
  return (
    <CardWrapper>
      <CardFigure src="http://placehold.it/400x300" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescritpion>{description}</CardDescritpion>
        <CardFooter>
          <CardUserInfo>
            <i>유저프로필</i>
            <span>{writerNickName}</span>
          </CardUserInfo>
          <CardUserCreated>{formatPostDate(createdAt)}</CardUserCreated>
        </CardFooter>
      </CardBody>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-basis: calc(50% - 10px); /* 가로로 2개씩 쌓기 */
  gap: 20px;
  height: 100px;
  overflow: hidden;
`;

const CardFigure = styled.img`
  width: 100px;
  height: 100%;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardTitle = styled.h3`
  display: block;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const CardDescritpion = styled.p`
  display: block;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CardUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  i {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    background-image: url("/icons/user-default.png");
    background-size: contain;
    font-size: 0;
  }
`;

const CardUserCreated = styled.div`
  font-size: 14px;
`;
