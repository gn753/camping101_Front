import styled from "@emotion/styled";
import { axiosSetting } from "api/api";
import { useForm } from "react-hook-form";

interface useFormProps {
  email: string;
}

interface Props {
  handleClose: () => void;
}

const url = "/api/signin/temporal-password";
export default function PasswordFindForm({ handleClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  const fetchPasswordFind = async (data: any) => {
    await axiosSetting.post(url, data).then(() => {
      handleClose();
      alert("성공적으로 보내졌습니다");
    });
  };
  const onSubmit = async (data: useFormProps) => {
    fetchPasswordFind(data);
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <WrapperContainer>
        <EmailInput
          type="email"
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        <Button>제출</Button>
        {errors?.email ? (
          <p className="error">{errors.email?.message}</p>
        ) : null}
      </WrapperContainer>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  box-sizing: content-box;
`;

const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const EmailInput = styled.input`
  display: block;
  padding: 13px 15px 14px;
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  margin-top: 20px;
`;

const Button = styled.button`
  all: unset;
  display: block;
  margin: 20px 0px;
  width: 100px;
  border: 1px solid black;
  padding: 10px 3px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
  margin: auto;
  margin-top: 20px;
`;
