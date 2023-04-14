import styled from "@emotion/styled";

export default function CampLogCard() {
  return (
    <CardWrapper>
      <CardFigure src="http://placehold.it/400x300" />
      <CardBody>
        <CardTitle>온수수영장에 아이들 놀곳</CardTitle>
        <CardDescritpion>
          온수수영장에 아이들 놀곳이 많아 신나게 놀고왔어요. 저녁에 해주시는
          콘서트도 감성돋는 시간이었네요. 두분 모두 어찌나 노래를 잘하시는지…
        </CardDescritpion>
        <CardFooter>
          <CardWriter>
            <WriterImg />
            <span>작성자</span>
          </CardWriter>
          <CardWriterCreated>25분 전</CardWriterCreated>
        </CardFooter>
      </CardBody>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100px;
`;

const CardFigure = styled.img`
  width: 100px;
  height: 100%;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CardBody = styled.div`
  width: 100%;
`;

const CardTitle = styled.h3`
  width: 500px;
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

const CardDescritpion = styled.p`
  display: block;
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CardWriter = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  border: 1px solid black;
  font-size: 14px;
`;
const CardWriterCreated = styled.div`
  font-size: 14px;
`;

const WriterImg = styled.img`
  width: 15px;
  height: 15px;
  border: 1px solid black;
  border-radius: 15px;
`;
