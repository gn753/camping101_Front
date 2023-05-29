import styled from "@emotion/styled";
import nanoid from "features/common/utils/nanoid";
import CommentParent from "./CommentParent";

export default function CommentList({ comments, start, end }: any) {
  if (!comments || comments.length === 0) {
    return null;
  }

  const renderCommentList = () => {
    return (
      <ul>
        {comments.slice(start, end).map((comment: any) => (
          <CommentParent {...comment} key={nanoid()} />
        ))}
      </ul>
    );
  };

  return <ListView>{renderCommentList()}</ListView>;
}

const ListView = styled.div`
  li {
    margin-bottom: 11px;
  }
  li:last-child {
    margin-bottom: 0px;
  }
`;
