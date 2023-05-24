import styled from "@emotion/styled";

export default function CampTitle({ campDetails }: any) {
  const { tel } = campDetails;

  return (
    <Wrapper>
      <div>
        <CampTille> {campDetails.name} 입니다</CampTille>
        <List>
          <li>
            <span>위치</span> <span>{campDetails.location.addr1}</span>
          </li>
          <li>
            <span>환경</span> <span>{campDetails.location.environment}</span>
          </li>
          <li>
            <span>tel </span> <span>{tel}</span>
          </li>
        </List>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  & > img {
    object-fit: cover !important;
    position: relative !important;
    width: 100%;
    height: 200px !important;
  }
`;

const CampTille = styled.h3`
  font-size: 28px;
  margin-top: 10px;
`;

const List = styled.ul`
  span {
    width: 50px;
    font-size: 12px;
  }
`;
