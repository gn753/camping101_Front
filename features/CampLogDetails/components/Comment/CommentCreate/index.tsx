import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import fetchCommnetCreate from "features/CampLogDetails/service/fetchCommnetCreate";
import { MemberInfoState } from "features/AppAuth/hooks/useMemberInfo";
import useComments from "features/CampLogDetails/hooks/useComments";

interface FormProps {
  commentContent: string;
  closeCommentReply?: () => void;
}

export default function CommentCreate({
  parentId,
  content,
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

  const onSubmit = async (data: any) => {
    if (!userInfo) return null;
    const { email, member_id } = userInfo;
    if (!parentId && !closeCommentReply) {
      const params = {
        campLogId, //캠프로그 아이
        content: data.commentContent,
        writerEmail: email,
        parendId: 0,
      };
      await fetchCommnetCreate(params);
      await getComments(member_id);
    }
    if (parentId && closeCommentReply) {
      const params = {
        campLogId, //캠프로그 아이
        content: data.commentContent,
        writerEmail: email,
        parendId: parentId,
      };
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
    background-image: url("http://placeimg.com/30/30/any");
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
