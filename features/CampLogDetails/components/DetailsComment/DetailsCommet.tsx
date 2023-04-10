import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import {
  CampLogDetailsComments,
} from "../../types";
import { axiosSetting } from "api/api";
import { useRouter } from "next/router";
import DetailsCommentList from "./DetailsCommentList";
import Pagination from "components/Pagination";

const url = "/api/camplog/comment";
export default function DetailsComment() {
  const [formValue, setFormValue] = useState("");
  const [comments, setComments] = useState<CampLogDetailsComments[] | []>([]);
  const router = useRouter();
  const id = router.query.id;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(event.target.value);
  };

  useEffect(() => {
    // 최초 렌더링 시에만 댓글 API 호출
    if (typeof window !== "undefined") {
      axiosSetting
        .get(url, {
          params: {
            campLogId: id,
          },
        })
        .then((response) => {
          setComments(response.data.comments);
        });
    }
  }, [id]);

  return (
    <section>
      <form>
        <strong>댓글 : 16</strong>
        <CommentInputWrapper>
          <i>아이콘</i>
          <input
            value={formValue}
            onChange={handleOnChange}
            placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다:) "
          />
          <button>입력</button>
        </CommentInputWrapper>
      </form>
      {comments.length > 0 && <DetailsCommentList comments={comments} />}
      <Pagination commetns={comments} />
    </section>
  );
}

const CommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
  i {
    width: 30px;
    height: 30px;
    font-size: 0px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("http://placeimg.com/30/30/any");
    border-radius: 30px;
  }
  input {
    width: 70%;
  }
`;
