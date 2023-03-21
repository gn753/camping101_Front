import styled from "@emotion/styled";
import SignInForm from "features/SignUp/components/SignInForm";
import Container from "components/layouts/Container";
import Link from "next/link";

export default function SignIn() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <FormTitle>로그인 로고</FormTitle>
          <SignInForm />
          <FormFooter>
            <nav>
              <Link href="/">회원가입하기</Link>
              <Link href="/">비밀번호 찾기</Link>
            </nav>
          </FormFooter>
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  border: 1px solid black;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px solid blue;
`;

const FormTitle = styled.h3`
  margin-top: 20px;
  font-size: 28px;
`;

const FormFooter = styled.footer`
  nav {
    display: flex;
    gap: 20px;
    align-items: center;
    height: 40px;
  }
  a {
    color: black;
  }
`;
