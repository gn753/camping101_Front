import styled from "@emotion/styled";

export default function CardItem() {
  return (
    <CardView>
      <CardHeader>
        <CardPhoto src="http://placehold.it/150x150" alt="test" />
        <CardDetails>
          <div>
            <strong>제목</strong>
            <p>설명</p>
          </div>
          <div>
            <strong>제목</strong>
            <p>설명</p>
          </div>
        </CardDetails>
      </CardHeader>
      <CardBody>
        <ul>
          <li>오토캠핑</li>
          <li>오토캠핑</li>
          <li>오토캠핑</li>
          <li>오토캠핑</li>
          <li>오토캠핑</li>
          <li>오토캠핑</li>
        </ul>
      </CardBody>
    </CardView>
  );
}

const CardView = styled.div`
  flex: 1 1 40%;
`;
const CardHeader = styled.header`
  display: flex;
  gap: 10px;
  border: 1px solid black;
`;
const CardPhoto = styled.img``;
const CardDetails = styled.div`
  width: 100%;
  margin: auto 0;
  div:first-child {
    margin-bottom: 4px;
  }
  div span {
    display: block;
  }
`;
const CardBody = styled.div`
  background-color: #eee;
  padding: 20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 1 1 40%;
    }
  }
`;
