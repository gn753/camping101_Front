import styled from "@emotion/styled";

export default function MyPageFormInputList({ register }: any) {
  return (
    <>
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
      <Button>
        <span>수정하기</span>
      </Button>
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
