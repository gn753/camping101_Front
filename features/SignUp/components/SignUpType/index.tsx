import styled from "@emotion/styled";

interface Props {
  register: any;
}

export default function SignUpType({ register }: Props) {
  return (
    <Wrapper>
      <label>가입방식</label>
      <SignUpTypeList {...register("signUpType")}>
        <option value="EMAUL">EMAIL</option>
      </SignUpTypeList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SignUpTypeList = styled.select`
  text-align: left;
  width: 300px;
  padding: 10px 10px;
  box-sizing: content-box;
`;
