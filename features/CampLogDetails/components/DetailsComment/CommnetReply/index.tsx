import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { MemberInfoState } from "features/AppAuth/hooks/useMemberInfo";
import fetchCommentReply from "features/CampLogDetails/service/fetchCommentReply";
import { useRouter } from "next/router";
import useComments from "features/CampLogDetails/hooks/useCommnets";

interface useFormProps {
  commentContent: string;
}

interface Props {
  parentId: any;
  closeCommentReply: () => void;
}
export default function DetailsCommnetReply({
  parentId,
  closeCommentReply,
}: Props) {
  const userInfo = useRecoilValue(MemberInfoState);
  const { register, handleSubmit } = useForm<useFormProps>({
    mode: "onSubmit",
    defaultValues: {
      commentContent: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: any) => {
    if (userInfo) {
      const params = {
        campLogId: router.query.id,
        content: data.commentContent,
        reCommentYn: false,
        writerEmail: userInfo.email,
        parendId: parentId,
      };

      const response = await fetchCommentReply(params);
      if (response) {
        const data = response.data;
        closeCommentReply();
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
    width: 70%;
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
