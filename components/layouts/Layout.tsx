import styled from "@emotion/styled";
import { ReactNode } from "types";

type LayoutProps = {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

export default function Layout({ header, footer, main }: LayoutProps) {
  return (
    <Wrapper>
      {header}
      <Main id="main">{main}</Main>
      {footer}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Main = styled.main`
  width: 1024px;
  margin: auto;
`;
