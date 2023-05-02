import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import Calendar from "./components/Calendar";

interface Props {
  siteType: any;
  stieTtiem: string;
  siteIntro: string;
}

export default function CampingSiteReservetion() {

  return (
    <Wrapper>
      <Container>
        <section>
          <figure>
            <img src="http://placehold.it/1024x150" alt="test" />
          </figure>
        </section>
        <Introduce>
          <Title>캠핑장 이름</Title>
          <strong>캠핑장 소개</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            expedita, quod incidunt iste, iusto est laboriosam officiis ipsa
            sint nobis nam, recusandae a sunt at reprehenderit. Vitae odio
            quidem blanditiis!
          </p>
        </Introduce>
        <Calendar />
      </Container>
    </Wrapper>
  );
}
const Introduce = styled.section`
  strong {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Title = styled.h3`
  font-size: 28px;
`;
const Wrapper = styled.div`
  section {
    padding-bottom: 5rem;
  }
`;
