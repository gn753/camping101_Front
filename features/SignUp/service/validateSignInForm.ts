interface initialValuesProps {
  [key: string]: string;
}
export default function validateSignInForm(values: initialValuesProps) {
  const errors = {
    email: "",
    password: "",
  };

  if (!values.email) {
    errors.email = "이메일을 입력하세요";
  }
  if (!values.password) {
    errors.password = "비밀번호를 입력하세요";
  }

  return errors;
}
