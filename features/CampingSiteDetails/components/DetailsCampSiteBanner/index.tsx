import styled from "@emotion/styled";
import Image from "next/image";

export default function DetailsCampTag({ campDetails }: any) {
  const { tel } = campDetails;

  return (
    <Wrapper>
      <Image src="http://placehold.it/1024x350" alt="test" fill />
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
