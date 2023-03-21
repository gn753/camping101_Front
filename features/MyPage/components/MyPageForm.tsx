import styled from "@emotion/styled";
import MyPageButton from "components/Button/Button";
import useForm from "features/common/hooks/useForm";
import validateMyPageForm from "../service/validateMyPageForm";
import MyPageFormInputList from "./MyPageFormInputList";
import MyPageTitle from "./MyPageTitle";

const props = {
  initialValues: { email: "", password: "", passwordConfirm: "", nickName: "" },
  validate: validateMyPageForm,
  onSubmit: (values: any) => {
    alert(JSON.stringify(values, null, 2));
  },
};
export default function MyPageForm() {
  const { values, errors, handleChange, handleSubmit } = useForm({
    ...props,
  });
  return (
    <Form onSubmit={handleSubmit}>
      <MyPageTitle title="내 정보 수정" />
      <MyPageFormInputList
        values={values}
        handleChange={handleChange}
        errors={errors}
      />
      <MyPageButton title="수정하기" />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
