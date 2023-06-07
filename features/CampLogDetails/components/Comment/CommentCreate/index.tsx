import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import fetchCommnetCreate from "features/CampLogDetails/service/fetchCommnetCreate";
import { MemberInfoState } from "features/AppAuth/hooks/useMemberInfo";
import useComments from "features/CampLogDetails/hooks/useComments";
import { useRouter } from "next/router";

interface FormProps {
  commentContent: string;
  closeCommentReply?: () => void;
}

export default function CommentCreate({
  parentId,
  campLogId,
  closeCommentReply,
}: any) {
  const userInfo = useRecoilValue(MemberInfoState);
  const { getComments } = useComments();
  const { register, handleSubmit } = useForm<FormProps>({
    mode: "onSubmit",
    defaultValues: {
      commentContent: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: any) => {
    if (!userInfo) return null;
    if (!parentId && !closeCommentReply) {
      const params = {
        campLogId: router.query.id,
        content: data.commentContent,
      };

      await fetchCommnetCreate(params);

      await getComments(router.query.id);
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
        <Button>입력</Button>
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
    background-image: url("/icons/user_default.svg");
    border-radius: 30px;
  }
  input {
    width: calc(100% - 100px - 40px);
    padding: 10px 3px;
  }
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
