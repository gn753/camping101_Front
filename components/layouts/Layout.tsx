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
  box-sizing: border-box;
`;

const Main = styled.main`
  padding: 1rem;
  padding-top: 0;
  height: calc(100% - 250px);
`;
