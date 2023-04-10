import styled from "@emotion/styled";
import { CampLogDetailsResponse } from "../types/index";

interface Props {
  details: CampLogDetailsResponse | null;
}

export default function DetailsHeader({ details }: Props) {
  if (!details) {
    return null;
  }
  const { title, writerNickName, createdAt } = details;

  return (
    details && (
      <Wrapper>
        <h1>{title}</h1>
        <UserProfile>
          <img src="http://placeimg.com/30/30/any" alt="샘플이미지" />
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
  margin: 20px 0;
`;

const UserProfile = styled.div`
  display: flex;
  gap: 10px;
  img {
    display: block;
    border-radius: 50%;
  }
  span {
    display: block;
  }
`;
