import styled from "@emotion/styled";
import SignUpForm from "features/SignUp/components/SignUpForm";
import FormFooter from "./components/FormFooter";
import FormTitle from "./components/FormTitle";

export default function SignUp() {
  return (
    <Container>
      <FormTitle />
      <SignUpForm />
      <FormFooter />
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  margin: auto;
  padding: 0 50px;
`;
