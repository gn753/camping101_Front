import styled from "@emotion/styled";

export default function CampLogCard() {
  return (
    <CardWrapper>
      <CardFigure />
      <CardTitle>
        온수수영장에 아이들 놀곳이 많아 신나게 놀고왔어요. …
      </CardTitle>
      <CardWriter>
        <WriterImg />
        <span>작성자</span>
      </CardWriter>
      <CardWriterCreated>25분 전</CardWriterCreated>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 300px;
`;

const CardFigure = styled.img`
  width: 300px;
  height: 300px;
  background-color: silver;
  margin-bottom: 20px;
  cursor: pointer;
`;
const CardTitle = styled.h3`
  width: 300px;
  height: auto;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  border: 1px solid black;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const CardWriter = styled.div`
  border: 1px solid black;
  width: 100px;
  margin: 5px 100px;
  font-size: 14px;
  display: flex;
  justify-content: sapce-between;
  cursor: pointer;
`;
const CardWriterCreated = styled.div`
  margin-top: 5px;
  margin-bottom: 30px;
  margin-left: 120px;
  margin-right: 120px;
  font-size: 14px;
  border: 1px solid black;
  width: auto;
`;

const WriterImg = styled.img`
  width: 15px;
  height: 15px;
  border: 1px solid black;
  border-radius: 15px;
`;
