import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import useMemberInfo from "features/AppAuth/hooks/useMemberInfo";
import { useRouter } from "next/router";
import useComments from "features/CampLogDetails/hooks/useComments";

interface FormProps {
  commentContent: string;
}

interface Props {
  comment: any;
  closeCommentPut: () => void;
}

interface Request {
  campLogId: any;
  content: string;
  commentId: any;
}

export default function CommentPut({ comment, closeCommentPut }: Props) {
  const { putReCommnet, putComment } = useComments();
  const { memberInfo } = useMemberInfo();
  const { commentId, content, reCommentId } = comment;
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormProps>({
    mode: "onSubmit",
    defaultValues: {
      commentContent: content,
    },
  });

  const onSubmit = async (data: FormProps) => {
    if (memberInfo) {
      const params: Request = {
        campLogId: router.query.id,
        content: data.commentContent,
        commentId,
      };
      if (commentId) {
        await putComment(params);
        closeCommentPut();
      } else if (reCommentId) {
        await putReCommnet(reCommentId, data.commentContent);
        closeCommentPut();
      }

      closeCommentPut();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CommentInputWrapper>
        <Profile>아이콘</Profile>
        <Description
          {...register("commentContent")}
          placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다:) "
        />
        <Button>수정</Button>
      </CommentInputWrapper>
    </form>
  );
}

const CommentInputWrapper = styled.div`
  position: relative;
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

const Description = styled.input`
  width: calc(100% - 100px - 40px);
  padding: 10px 3px;
`;

const Button = styled.button`
  all: unset;
  width: 100px;
  border: 1px solid black;
  padding: 10px 3px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
`;
