import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { axiosSetting } from "api/api";
import useMemberInfo from "features/AppAuth/hooks/useMemberInfo";
import MyPageFormInputList from "./MyPageFormInputList";
import MyPageTitle from "./MyPageTitle";

interface FormProps {
  nickname: string;
  password: string;
  phoneNumber: string;
  file: FileList | null;
}
export default function MyPageForm() {
  const { register, handleSubmit } = useForm<FormProps>({
    mode: "onSubmit",
    defaultValues: {
      nickname: "",
      password: "",
      phoneNumber: "",
      file: null,
    },
  });
  const { updateMemberInfo } = useMemberInfo();
  const router = useRouter();
  const onSubmit = async (data: FormProps) => {
    const { nickname, password, phoneNumber, file } = data;

    const formData = new FormData();
    if (!file) return null;
    formData.append("nickname", nickname);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber);
    formData.append("profileImage", file[0]);

    try {
      const response = await axiosSetting.put("/api/member", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      updateMemberInfo(response.data);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
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
