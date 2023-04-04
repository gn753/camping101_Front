import styled from "@emotion/styled";
import useForm from "features/common/hooks/useForm";
import validateSignInForm from "features/SignIn/service/validateSignInForm";
import GoogleSubmit from "./GoogleSubmit";

const props = {
  initialValues: { email: "", password: "" },
  validate: validateSignInForm,
  onSubmit: (values: any) => {
    alert(JSON.stringify(values, null, 2));
  },
};

export default function SignInForm() {
  const { values, errors, handleChange, handleSubmit } = useForm({
    ...props,
  });

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          value={values.email}
          placeholder="이메일"
          onChange={handleChange}
        />
        <FiledText>{errors.email}</FiledText>
        <FormInput
          type="password"
          name="password"
          value={values.password}
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <FiledText>{errors.password}</FiledText>
        <FormButton>로그인하기</FormButton>
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
