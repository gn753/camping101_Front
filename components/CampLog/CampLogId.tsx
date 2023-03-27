import styled from "@emotion/styled";

export const CampLogId = () => {
  return (
    <>
      <ContentImg></ContentImg>
      <ContentDiv>
        <ContentTitleDiv>제목제목</ContentTitleDiv>
        <ContentWriterDiv>
          <ContentWriterImg></ContentWriterImg>
          <ContentWriterInfoDiv>
            <ContentWriter>밥먹어</ContentWriter>
            <ContentWriterCreated>2002.05.05</ContentWriterCreated>
          </ContentWriterInfoDiv>
        </ContentWriterDiv>
        <ContentDescBack>
          <ContentDescDiv>
            <ContentDescSiteA href="#">aaa 사이트</ContentDescSiteA>
          </ContentDescDiv>
        </ContentDescBack>
      </ContentDiv>
    </>
  );
};

const ContentImg = styled.div`
  width: 100%;
  height: 300px;
  background: silver;
  margin: 50px 0;
`;
const ContentDiv = styled.div`
  width: 80%;
  border: 1px solid black;
  margin: 0 auto;
`;

const ContentTitleDiv = styled.div`
  width: 100%;
  border: 1px solid black;
  font-size: 35px;
  font-weight: 700;
`;

const ContentWriterDiv = styled.div`
  width: 100%;
  height: 30px;
  margin: 20px 0;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
`;

const ContentWriterImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background: silver;
`;

const ContentWriterInfoDiv = styled.div`
  width: 150px;
  border: 1px solid black;
`;

const ContentWriter = styled.div`
  width: 100%;
  font-size: 14px;
`;

const ContentWriterCreated = styled.div`
  width: 100%;
  font-size: 14px;
`;

const ContentDescBack = styled.div`
  width: 92.5%;
  height: 150px;
  background-color: #f4f4f4;

  padding: 30px;
`;

const ContentDescDiv = styled.div`
  width: 80%;
  height: 150px;
  border: 1px solid black;
  margin: 0 auto;
`;

const ContentDescSiteA = styled.a`
  width: 100%;
  font-size: 16px;
  color: black;
`;
