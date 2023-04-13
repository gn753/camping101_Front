import styled from "@emotion/styled";
import { useState } from "react";
import MemberType from "./MemberType";
import SignUpType from "./SignUpType";
import { useForm } from "react-hook-form";

const url = "api/signup/mail";

interface useFormProps {
  memberType: string;
  signUpType: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  file: [];
}

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, formState, handleSubmit, getValues } =
    useForm<useFormProps>({
      mode: "onSubmit",
      defaultValues: {
        memberType: "CUSTOMER",
        signUpType: "EMAIL",
        email: "",
        password: "",
        passwordConfirm: "",
        phone: "",
        file: [],
      },
    });

  // const getSignUp = async () => {
  //   if (isLoading) return;
  //   setIsLoading(true);
  //   let formData = new FormData();
  //   formData.append("memberType", "CUSTOMER");
  //   formData.append("signUpType", "EMAIL");
  //   formData.append("nickName", formInputs.nickName);
  //   formData.append("email", formInputs.email);
  //   formData.append("password", formInputs.password);
  //   formData.append("phoneNumber", formInputs.phoneNumber);
  //   formData.append("profileImage", formInputs.profileImage[0]);

  //   const response = await axiosSetting
  //     .get(url)
  //     .then(function (response) {
  //       console.log(response);
  //       setIsLoading(false);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       setIsLoading(false);
  //     });
  //   console.log(response, "response");
  // };

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MemberType register={register} />
        <SignUpType register={register} />
        <FormInputTextFiled>
          <label>닉네임</label>
          <Input {...register("name")} />
        </FormInputTextFiled>
        <FormInputTextFiled>
          <label>프로필</label>
          <Input type="file" {...register("file")} />
        </FormInputTextFiled>
        <FormInputTextFiled>
          <label>이메일</label>
          <Input {...register("email")} />
        </FormInputTextFiled>
        <FormInputTextFiled>
          <label>패스워드</label>
          <Input {...register("password")} />
        </FormInputTextFiled>
        <FormInputTextFiled>
          <label>연락처</label>
          <Input {...register("phone")} />
        </FormInputTextFiled>
        <Button disabled={isLoading ? true : false}>
          <span>회원가입하기</span>
        </Button>
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

const Button = styled.button`
  display: block;
  width: 100%;
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
  cursor: pointer;
  span {
    font-size: 18px;
    color: #fff;
  }
`;
