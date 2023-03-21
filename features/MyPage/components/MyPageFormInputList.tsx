import styled from "@emotion/styled";

import FormInputFiledText from "components/Form/FormInputFieldText";
export default function MyPageFormInputList({
  values,
  handleChange,
  errors,
}: any) {
  return (
    <InputList>
      <FormInput
        type="text"
        name="email"
        value={values.email}
        placeholder="이메일"
        onChange={handleChange}
      />
      <FormInputFiledText errorText={errors.email} />
      <FormInput
        type="password"
        name="password"
        value={values.password}
        placeholder="비밀번호"
        onChange={handleChange}
      />
      <FormInputFiledText errorText={errors.password} />
      <FormInput
        type="file"
        name="profile"
        placeholder="프로필"
        value={values.profile}
        onChange={handleChange}
      />
      <FormInput
        type="text"
        name="nickName"
        placeholder="닉네임"
        value={values.nickName}
        onChange={handleChange}
      />

      <FormInputFiledText errorText={errors.nickName} />
      <FormInput
        type="text"
        name="phoneNumber"
        value={values.phoneNumber}
        placeholder="전화번호 확인"
        onChange={handleChange}
      />
      <FormInputFiledText errorText={errors.phoneNumber} />
    </InputList>
  );
}

const InputList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid black;
  margin-bottom: 20px;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
`;
