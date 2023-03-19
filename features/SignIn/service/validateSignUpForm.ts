interface initialValuesProps {
  [key: string]: string;
}
export default function validateSignUpForm(values: initialValuesProps) {
  const errors = {
    email: "",
    password: "",
    passwordConfirm: "",
    nickName: "",
  };

  if (!values.email) {
    errors.email = "이메일을 입력하세요";
  }
  if (!values.password) {
    errors.password = "비밀번호를 입력하세요";
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "비밀번호 확인을 입력하세요";
  }

  if (!values.nickName) {
    errors.nickName = "닉네임을 입력하세요";
  }

  return errors;
}
