import styled from "@emotion/styled";
import DetailsCommentItem from "./DetailsCommentItem";
import { CampLogDetailsComments } from "features/CampLogDetails/types";
import nanoid from "features/common/utils/nanoid";

interface Props {
  comments: CampLogDetailsComments[];
}


export default function DetailsCommentList({ comments }: Props) {

  return (
    <ListView>
      {comments.length > 0 &&
        comments.map((comment: CampLogDetailsComments) => (
          <DetailsCommentItem comment={comment} key={nanoid()} />
        ))}

   </ListView>
  );
}

const ListView = styled.ul`
  margin-bottom: 20px;
`;
