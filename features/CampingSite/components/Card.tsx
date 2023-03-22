import styled from "@emotion/styled";

export default function Card() {
  return (
    <CardWrapper>
      <CardPhoto src="http://placehold.it/400x300" alt="test" />
      <CardBody>
        <h3>진주 캠핑소사이어티 럭셔리글램핑&피크닉</h3>
        <CardTitle>
          <strong>구래 성지캠핑장</strong>
          <span>4,000원</span>
        </CardTitle>
        <Comments>캠핑로그(20)</Comments>
      </CardBody>
      <CardFooter>
        <CardFooterInfo>
          <li>환경 : 숲 강</li>
          <li>태그 : ??</li>
        </CardFooterInfo>
      </CardFooter>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border: 1px solid #dee2e6;
  max-width: 400px;
  border-top-left-radius: calc(0.375rem - 1px);
  border-top-right-radius: calc(0.375rem - 1px);
`;
const CardPhoto = styled.img``;
const CardBody = styled.div`
  background-color: #fff;
  padding: 12px;
`;
const CardFooter = styled.footer``;

const CardTitle = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
`;

const Comments = styled.span`
  display: block;
`;

const CardFooterInfo = styled.ul`
  padding: 12px;
  background-color: #fff;
  border-top: 1px solid #dee2e6;
`;
