import styled from "@emotion/styled";
import GoogleSubmit from "./GoogleSubmit";
import { useForm } from "react-hook-form";
import { axiosSetting } from "api/api";
import useLogin from "../hooks/useLogin";

const url = "/api/signin/mail";

interface useFormProps {
  email: string;
  password: string;
}

export default function SignInForm() {
  const { getLoginToken } = useLogin();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<useFormProps>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: useFormProps) => {
    await getLoginToken(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors?.email ? (
          <p className="error">{errors.email?.message}</p>
        ) : null}
        <FormInput
          id="password"
          type="password"
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
          })}
        />
        {errors?.email ? (
          <p className="error">{errors.password?.message}</p>
        ) : null}
        <FormButton>로그인</FormButton>
        <GoogleSubmit />
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 100%;
`;
const FormInput = styled.input`
  display: block;
  padding: 13px 15px 14px;
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  all: unset;
  display: block;
  margin: 20px 0px;
  width: 100%;
  border: 1px solid black;
  padding: 10px 3px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
`;

const FiledText = styled.p`
  color: red;
`;
