import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import MyPageFormInputList from "./MyPageFormInputList";
import MyPageTitle from "./MyPageTitle";

interface FormProps {
  memberType: string;
  signUpType: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  file: [];
}
export default function MyPageForm() {
  const { register, handleSubmit } = useForm<FormProps>({
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

  const onSubmit = (data: any) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MyPageTitle title="내 정보 수정" />
      <MyPageFormInputList register={register} />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
