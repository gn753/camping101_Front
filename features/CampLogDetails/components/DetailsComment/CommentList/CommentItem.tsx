import styled from "@emotion/styled";
import moment from "moment";
import { RecrusiveComments } from "features/CampLogDetails/types";
import nanoid from "features/common/utils/nanoid";
import useMemberInfo from "features/AppAuth/hooks/useMemberInfo";
import CommentPut from "./CommnetPut";
import CommnetReply from "../CommnetReply";
import { useState } from "react";

export default function CommentItem({ ...comment }: RecrusiveComments) {
  const [isPut, setIsPut] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const { memberInfo } = useMemberInfo();
  const {
    writerNickName,
    content,
    createdAt,
    reCommentYn,
    children,
    commentId,
    writerEmail,
  } = comment;

  const date = moment(createdAt).fromNow();
  const isReplyRender = children && children.length > 0;

  const renderReply = () => {
    return (
      <>
        {isReplyRender &&
          children.map((comment) => (
            <li key={nanoid()}>
              <CommentItem {...comment} />
            </li>
          ))}
      </>
    );
  };

  const handleIsPut = () => {
    setIsPut((put) => !put);
  };

  const handleIsReply = () => {
    setIsReply(!isReply);
  };
  const 본인확인 =
    memberInfo && memberInfo.email === writerEmail ? true : false;

  return (
    <>
      <Wrapper>
        <Comment>
          <Profile>프로필 이미지</Profile>
          <CommentBody>
            <Description>
              <strong>{writerNickName}</strong>
              <p>{content}</p>
            </Description>
            <CommentFooter>
              <span>{date}</span>
              {본인확인 && (
                <Button
                  role="button"
                  onClick={handleIsPut}
                  data-name={"수정하기"}
                />
              )}
              {!본인확인 && reCommentYn && (
                <Button
                  role="button"
                  onClick={handleIsReply}
                  data-name={"댓글달기"}
                />
              )}
            </CommentFooter>
          </CommentBody>
          <CommemtDelete data-name={"댓글 삭제"} />
        </Comment>

        {isPut && (
          <CommentPut comment={comment} closeCommentPut={handleIsPut} />
        )}

        {isReply && (
          <CommnetReply
            parentId={commentId}
            closeCommentReply={handleIsReply}
          />
        )}
        {renderReply()}
      </Wrapper>
    </>
  );
}

const Profile = styled.i`
  width: 30px;
  height: 30px;
  font-size: 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("http://placeimg.com/30/30/any");
  border-radius: 30px;
`;

const Wrapper = styled.ul`
  li > ul {
    margin-left: 20px;
  }
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

const Comment = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  &:before {
    content: attr(data-name);
  }
  cursor: pointer;
`;

const CommemtDelete = styled.button`
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
const CommentFooter = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const CommentBody = styled.div`
  width: 100%;
`;
