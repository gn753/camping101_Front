import styled from "@emotion/styled";

import {
  CampLogDetailsComments,
  RecrusiveComments,
} from "features/CampLogDetails/types";
import nanoid from "features/common/utils/nanoid";
import createCommentTree from "features/CampLogDetails/service/createCommentTree";
import CommentItem from "./CommentItem";

interface Props {
  comments: CampLogDetailsComments[];
}

export default function CommentList({ comments }: any) {
  if (!comments || comments.length === 0) {
    return null;
  }

  const renderCommentList = () => {
    const copyComments = JSON.parse(JSON.stringify(comments));
    const commentTree = createCommentTree(copyComments);
    console.log(commentTree, "tree");
    return (
      <>
        {commentTree.map((comment: RecrusiveComments) => (
          <CommentItem {...comment} key={nanoid()} />
        ))}
      </>
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
