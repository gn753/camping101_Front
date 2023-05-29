import styled from "@emotion/styled";
import CampingSiteList from "./components/CampList";
import CampingSiteTitle from "./components/CampTitle";

interface Props<T> {
  camps: T[];
}

export default function Camp<T>({ camps }: Props<T>) {
  return (
    <Wrapper>
      <CampingSiteTitle />
      <CampingSiteList camps={camps} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 768px;
  margin: auto;
`;
