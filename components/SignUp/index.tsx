import styled from "@emotion/styled";
import SignUpForm from "features/SignUpForm";
import Container from "layouts/Container";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <FormTitle>회원가입</FormTitle>
          <SignUpForm />
          <FormFooter>
            이미 아이디가 있으신가요 <Link href="/">로그인</Link>
          </FormFooter>
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 256px);
`;
const FormTitle = styled.h2`
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
  padding-top: 100px;
`;
const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const FormInput = styled.input`
  width: 300px;
  padding: 10px 10px;
`;

const FormFooter = styled.div`
  text-align: center;
  margin-top: 20px;
`;
