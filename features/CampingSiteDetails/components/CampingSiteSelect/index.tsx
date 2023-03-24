import styled from "@emotion/styled";

import CardItem from "./CardItem";

export default function CampingSiteSelect() {
  return (
    <section>
      <h3>사이트 선택</h3>
      <CardList>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </CardList>
    </section>
  );
}

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;
