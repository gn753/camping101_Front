interface initialValuesProps {
  [key: string]: string;
}
export default function validateSignUpForm(values: initialValuesProps) {
  const errors = {
    email: "",
    password: "",
    nickName: "",
    memberType:"",
    phoneNumber:"",
    signUpType:"",
    profileImage:"",
  };

  if (!values.email) {
    errors.email = "이메일을 입력하세요";
  }
  if (!values.password) {
    errors.password = "비밀번호를 입력하세요";
  }
  if (!values.memberType) {
    errors.memberType = "memberType을 입력하세요";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "phoneNumber을 입력하세요";
  }
  if (!values.signUpType) {
    errors.signUpType = "signUpType을 입력하세요";
  }

  if (!values.nickName) {
    errors.nickName = "닉네임을 입력하세요";
  }

  return errors;
}
