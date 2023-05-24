import styled from "@emotion/styled";
import { CampLogDetailsResponse } from "features/CampLogDetails/types";

interface Props {
  details: CampLogDetailsResponse;
}

export default function CampLogWriterProfile({ details }: Props) {
  const { title, writerNickName, createdAt } = details;

  return (
    details && (
      <Wrapper>
        <Title>{title}</Title>
        <UserProfile>
          <i>프로필아이콘</i>
          <div>
            <span>{writerNickName}</span>
            <span>{createdAt}</span>
          </div>
        </UserProfile>
      </Wrapper>
    )
  );
}

const Wrapper = styled.header`
  padding: 1.5rem 0;
`;

const Title = styled.h3`
  font-size: 28px;
`;

const UserProfile = styled.div`
  display: flex;
  gap: 10px;
  i {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url("http://placeimg.com/30/30/any");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 0;
  }
  span {
    display: block;
  }
`;