import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import fetchCommentPut from "features/CampLogDetails/service/fetchCommentput";
import { RecrusiveComments } from "features/CampLogDetails/types";
import useComments from "features/CampLogDetails/hooks/useCommnets";
import useMemberInfo from "features/AppAuth/hooks/useMemberInfo";
import { useRouter } from "next/router";

interface useFormProps {
  commentContent: string;
}

interface Props {
  comment: RecrusiveComments;
  closeCommentPut: () => void;
}

interface Request {
  campLogId: any;
  requesterEmail: string;
  commentId: number;
  content: string;
}

export default function CommentPut({ comment, closeCommentPut }: Props) {
  const { comments, putComment } = useComments();
  const { memberInfo } = useMemberInfo();
  const { commentId, content } = comment;
  const router = useRouter();

  const { register, handleSubmit } = useForm<useFormProps>({
    mode: "onSubmit",
    defaultValues: {
      commentContent: content,
    },
  });

  const onSubmit = async (data: useFormProps) => {
    if (memberInfo) {
      const params: Request = {
        campLogId: router.query.id,
        requesterEmail: memberInfo && memberInfo.email,
        commentId: commentId,
        content: data.commentContent,
      };

      const response = await fetchCommentPut(params);

      if (response) {
        closeCommentPut();
        putComment(
          router.query.id,
          commentId,
          data.commentContent,
          memberInfo.email,
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CommentInputWrapper>
        <i>아이콘</i>
        <input
          {...register("commentContent")}
          placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다:) "
        />
        <Button>수정</Button>
      </CommentInputWrapper>
    </form>
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
const ContentBotton = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const CommemtDelete = styled.i`
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
`;

const Button = styled.button`
  all: unset;
  width: 100px;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
`;
