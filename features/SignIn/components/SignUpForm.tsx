import styled from "@emotion/styled";
import useForm from "features/common/hooks/useForm";
import validateSignUpForm from "features/SignIn/service/validateSignUpForm";

const props = {
  initialValues: { email: "", password: "", passwordConfirm: "", nickName: "" },
  validate: validateSignUpForm,
  onSubmit: (values: any) => {
    alert(JSON.stringify(values, null, 2));
  },
};

export default function SignUpForm() {
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
        <FormInput
          type="password"
          name="passwordConfirm"
          value={values.passwordConfirm}
          placeholder="비밀번호확인"
          onChange={handleChange}
        />
        <FiledText>{errors.passwordConfirm}</FiledText>
        <FormInput
          type="text"
          name="nickName"
          placeholder="닉네임"
          value={values.nickName}
          onChange={handleChange}
        />
        <FiledText>{errors.nickName}</FiledText>
        <button>회원가입하기</button>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FormInput = styled.input`
  width: 300px;
  padding: 10px 10px;
`;

const FiledText = styled.p`
  color: red;
`;
