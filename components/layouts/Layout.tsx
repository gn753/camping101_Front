import styled from "@emotion/styled";
import { useEffect } from "react";
import { ReactNode } from "types";

type LayoutProps = {
  header?: ReactNode;
  main: ReactNode;
  footer?: ReactNode;
};

export default function Layout({ header, footer, main }: LayoutProps) {
  return (
    <>
      {header}
      <Main id="main">{main}</Main>
      {footer}
    </>
  );
}

const Main = styled.main`
  position: relative;
  min-height: calc(100% - 250px);
  padding: 0 0 1rem 0;
`;
