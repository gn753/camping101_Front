import styled from "@emotion/styled";
import moment from "moment";
import { ReComment } from "features/CampLogDetails/types";
import useMemberInfo from "features/AppAuth/hooks/useMemberInfo";
import { useState } from "react";
import useComments from "features/CampLogDetails/hooks/useComments";
import CommentPut from "./CommnetPut";

interface Props {
  reComment: ReComment;
}

export default function CommentChildren({ reComment }: Props) {
  const [isPut, setIsPut] = useState(false);
  const { deleteComment } = useComments();
  const { memberInfo } = useMemberInfo();
  const { content, createdAt, reCommentId, writerEmail, writerNickName } =
    reComment;

  const date = moment(createdAt).fromNow();

  const handleIsPut = () => {
    setIsPut((put) => !put);
  };

  const 본인확인 = !!(memberInfo && memberInfo.email === writerEmail);

  return (
    <Wrapper>
      <Parent>
        <Profile>프로필 이미지</Profile>
        <Description>
          <strong>{writerNickName}</strong>
          <p>{content}</p>
        </Description>
        <Footer>
          <span>{date}</span>
          {본인확인 && (
            <Button role="button" onClick={handleIsPut} data-name="수정하기" />
          )}
        </Footer>
        {본인확인 && (
          <Delete
            data-name="댓글 삭제"
            onClick={() => deleteComment(reCommentId)}
          />
        )}
      </Parent>
      {isPut && (
        <CommentPut comment={reComment} closeCommentPut={handleIsPut} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  padding-left: 42px;
  div + form {
    padding-left: 20px;
  }
`;
const Profile = styled.div`
  position: absolute;
  top: 0px;
  left: -42px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("http://placeimg.com/30/30/any");
  font-size: 0;
`;

const Description = styled.div`
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
`;
const Footer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const Parent = styled.div`
  position: relative;
`;

const Button = styled.button`
  &:before {
    content: attr(data-name);
  }
  cursor: pointer;
`;

const Delete = styled.button`
  position: absolute;
  width: 28px;
  height: 28px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/icons/block.svg");
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0;
  &:before {
    content: attr(data-name);
  }
  cursor: pointer;
`;
