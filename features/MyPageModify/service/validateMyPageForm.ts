interface initialValuesProps {
  [key: string]: string;
}
export default function validateMyPageForm(values: initialValuesProps) {
  const errors = {
    email: "",
    password: "",
    nickName: "",
    phoneNumber: "",
  };

  if (!values.email) {
    errors.email = "이메일을 입력하세요";
  }
  if (!values.password) {
    errors.password = "비밀번호를 입력하세요";
  }
  if (!values.nickName) {
    errors.nickName = "닉네임을 입력하세요";
  }

  if (!values.phoneNumber) {
    errors.nickName = "전화번호 입력하세요";
  }

  return errors;
}
