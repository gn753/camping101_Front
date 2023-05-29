import styled from "@emotion/styled";
import { ReactNode } from "types";

type LayoutProps = {
  main: ReactNode;
};

export default function ResetLayout({ main }: LayoutProps) {
  return <Main>{main}</Main>;
}

const Main = styled.main`
  position: relative;
  height: 100vh;
`;
