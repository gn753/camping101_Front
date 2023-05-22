import styled from "@emotion/styled";
import CampingSiteItem from "./CampingSiteItem";
import nanoid from "features/common/utils/nanoid";

export default function CampingSiteList({ camps }: any) {
  return (
    <ListView>
      {camps.map((camp: any) => (
        <CampingSiteItem key={nanoid()} {...camp} />
      ))}
    </ListView>
  );
}

const ListView = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
