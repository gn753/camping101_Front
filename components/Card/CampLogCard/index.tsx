import styled from "@emotion/styled";
import useBookmarks from "features/CampLogDetails/hooks/useBookmarks";
import formatPostDate from "features/common/utils/monent/formatPostDate";

export default function CampLogCard({ ...data }: any) {
  const { nickName, title, description, createdAt, bookMarkId } = data;
  const { deleteBookmarks } = useBookmarks();

  return (
    <CardWrapper>
      <CardFigure src="http://placehold.it/400x300" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescritpion>{description}</CardDescritpion>
        <CardFooter>
          <CardUserInfo>
            <i>유저프로필</i>
            <span>{nickName}</span>
          </CardUserInfo>
          <CardUserCreated>{formatPostDate(createdAt)}</CardUserCreated>
        </CardFooter>
      </CardBody>
      <CardDelete onClick={() => deleteBookmarks(bookMarkId)} role="button" />
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  position: relative;
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

const CardDelete = styled.i`
  position: absolute;
  width: 28px;
  height: 28px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/icons/block.svg");
  right: 25px;
  top: 0;
  right: 0;
  font-size: 0;
  cursor: pointer;
`;
