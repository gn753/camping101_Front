import styled from "@emotion/styled";
import CampingSiteItem from "./CampingSiteItem";

export default function CampingSiteList() {
  return (
    <ListView>
      <CampingSiteItem />
      <CampingSiteItem />
      <CampingSiteItem />
      <CampingSiteItem />
      <CampingSiteItem />
      <CampingSiteItem />
      <CampingSiteItem />
      <CampingSiteItem />
    </ListView>
  );
}

const ListView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
