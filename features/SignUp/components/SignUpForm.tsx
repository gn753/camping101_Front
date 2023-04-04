import styled from "@emotion/styled";
import { axiosSetting } from "api/api";
import { useState } from "react";
import { SignUpResponse } from "../types";
import MemberType from "./MemberType";
import SignUpType from "./SignUpType";

const defaultValues = {
  nickName: "",
  email: "",
  password: "",
  profileImage: [],
  memberType: "",
  phoneNumber: "",
  signUpType: "",
};

const url = "api/signup/mail";

export default function SignUpForm() {
  const [values, setValues] = useState(defaultValues);
  const [file, setFile] = useState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (files && files.length > 0) setValues({ ...values, [name]: files[0] });
    else setValues({ ...values, [name]: value });
  };

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(values, null, 2));
    console.log(values, "vlaues");
  };

  const fetchAuth = async () => {
    let formData = new FormData();
    formData.append("memberType", "CUSTOMER");
    formData.append("signUpType", "EMAIL");
    formData.append("nickName", values.nickName);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("profileImage", values.profileImage[0]);

    const response = await axiosSetting
      .get(url)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(response, "response");
  };

  return (
    <>
      <Form method="post" onSubmit={onSubmit} id="formElem">
        <MemberType />
        <SignUpType />
        <FormInputTextFiled>
          <label>닉네임</label>
          <Input
            type="text"
            name="nickName"
            placeholder="닉네임"
            value={values.nickName}
            onChange={handleChange}
          />
        </FormInputTextFiled>
        <FormInputTextFiled>
          <label>프로필</label>
          <Input
            type="file"
            name="profileImage"
            placeholder="프로필이미지"
            onChange={handleChange}
          />
        </FormInputTextFiled>
        <FormInputTextFiled>
          <label>이메일</label>
          <Input
            type="text"
            name="email"
            value={values.email}
            placeholder="이메일"
            onChange={handleChange}
          />
        </FormInputTextFiled>
        <FormInputTextFiled>
          <label>패스워드</label>
          <Input
            type="password"
            name="password"
            value={values.password}
            placeholder="비밀번호"
            onChange={handleChange}
          />
        </FormInputTextFiled>
        <FormInputTextFiled>
          <label>연락처</label>
          <Input
            type="text"
            name="phoneNumber"
            value={values.phoneNumber}
            placeholder="연락처"
            onChange={handleChange}
          />
        </FormInputTextFiled>
        <button onClick={fetchAuth}>회원가입하기</button>
      </Form>
      <button onClick={fetchAuth}>회원가입하기</button>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FormInputTextFiled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  width: 300px;
  padding: 10px 10px;
`;
