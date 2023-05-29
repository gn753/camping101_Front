import styled from "@emotion/styled";

export default function MyPageFormInputList({ register }: any) {
  return (
    <>
      <FormInputTextFiled>
        <label htmlFor="닉네임">닉네임</label>
        <Input id="닉네임" {...register("name")} />
      </FormInputTextFiled>
      <FormInputTextFiled>
        <label htmlFor="프로필">프로필</label>
        <Input id="프로필" type="file" {...register("file")} />
      </FormInputTextFiled>
      <FormInputTextFiled>
        <label htmlFor="이메일">이메일</label>
        <Input id="이메일" {...register("email")} />
      </FormInputTextFiled>
      <FormInputTextFiled>
        <label htmlFor="패스워드">패스워드</label>
        <Input id="패스워드" {...register("password")} />
      </FormInputTextFiled>
      <FormInputTextFiled>
        <label htmlFor="연락처">연락처</label>
        <Input id="연락처" {...register("phone")} />
      </FormInputTextFiled>
      <Button>
        <span>수정하기</span>
      </Button>
    </>
  );
}

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
