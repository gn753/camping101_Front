import styled from "@emotion/styled";
import useForm from "features/common/hooks/useForm";
import validateSignInForm from "features/SignInForm/service/validateSignInForm";

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
        <button>로그인하기</button>
      </Form>
    </>
  );
}

const Form = styled.form``;
const FormInput = styled.input`
  display: block;
  padding: 10px 3px;
  margin: 10px 0;
  width: 200px;
`;

const FormButton = styled.button`
  all: unset;
  display: block;
  width: 200px;
  border: 1px solid black;
  padding: 10px 3px;
  text-align: center;
  cursor: pointer;
`;

const FiledText = styled.p`
  color: red;
`;
