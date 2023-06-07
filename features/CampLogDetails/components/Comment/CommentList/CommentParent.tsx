import styled from "@emotion/styled";
import moment from "moment";
import { ICommentParent } from "features/CampLogDetails/types";
import useMemberInfo from "features/AppAuth/hooks/useMemberInfo";
import { useState } from "react";
import useComments from "features/CampLogDetails/hooks/useComments";
import nanoid from "features/common/utils/nanoid";
import CommentPut from "./CommnetPut";
import CommentChildren from "./CommentChildren";
import ReCommentCreate from "../ReCommentCreate";

export default function CommentParent({ ...comment }: ICommentParent) {
  const [isPut, setIsPut] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const { deleteComment } = useComments();
  const { memberInfo } = useMemberInfo();
  const {
    writerNickName,
    content,
    createdAt,
    reComments,
    commentId,
    writerEmail,
  } = comment;

  const date = moment(createdAt).fromNow();
  const isReplyRender = reComments && reComments.length > 0;

  const handleIsPut = () => {
    setIsPut((put) => !put);
  };

  const handleIsReply = () => {
    setIsReply(!isReply);
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
          {!본인확인 && (
            <Button
              role="button"
              onClick={handleIsReply}
              data-name="댓글달기"
            />
          )}
          {본인확인 && (
            <Button
              role="button"
              onClick={() => deleteComment(commentId)}
              data-name="댓글삭제"
            />
          )}
        </Footer>
      </Parent>
      {isReply && (
        <ReCommentCreate parentId={commentId} closeComment={handleIsReply} />
      )}
      {isPut && <CommentPut comment={comment} closeCommentPut={handleIsPut} />}
      {reComments.length > 0 &&
        reComments.map((reComment) => (
          <CommentChildren reComment={reComment} key={nanoid()} />
        ))}
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
  background-image: url("/icons/user_default.svg");
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
