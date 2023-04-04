import styled from "@emotion/styled";
import SignInForm from "features/SignIn/components/SignInForm";
import FormFooter from "./components/FormFooter";
import FormTitle from "./components/FormTitle";

export default function SignIn() {
  return (
    <LoginWrapper>
      <Content>
        <FormTitle />
        <SignInForm />
        <FormFooter />
      </Content>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  max-width: 300px;
  height: 100vh;
  margin: auto;
  margin-top: -70px;
`;

const Content = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 80px;
  box-sizing: border-box;
`;
