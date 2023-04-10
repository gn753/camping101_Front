import styled from "@emotion/styled";
import Image from "next/image";

import { CampLogDetailsComments } from "features/CampLogDetails/types";

interface Props {
  comment: CampLogDetailsComments;
}

export default function DetailsCommentItem({ comment }: Props) {
  const { writerEmail, writerNickName, content, createdAt } = comment;

  return (
    <CommentItem>
      <Image src="/icons/bookmark-fill.svg" alt="me" width="24" height="24" />
      <div>
        <strong>{writerNickName}</strong>
        <p>{content}</p>
        <footer>
          <span>{createdAt}</span>
          <Image
            src="/icons/bookmark-fill.svg"
            alt="me"
            width="24"
            height="24"
          />
          <span>답글달기</span>
        </footer>
      </div>
    </CommentItem>
  );
}

const CommentItem = styled.div`
  display: flex;
  gap: 10px;

  strong {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 5px;
  }
  span {
    font-size: 12px;
  }
  img {
    display: block;
  }
  i {
    width: 30px;
    height: 30px;
    font-size: 0px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("/icons/bookmark-fill.svg");
  }
  footer {
    display: flex;
  }
`;
