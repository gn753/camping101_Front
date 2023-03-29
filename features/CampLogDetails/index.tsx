import styled from "@emotion/styled";
import Container from "components/layouts/Container";
import Image from "next/image";

export default function CampLogDetails() {
  return (
    <div>
      <figure className="photo">
        <img src="http://placehold.it/2500x150" alt="test" />
      </figure>
      <MainContent>
        <Container>
          <section>
            <div>
              <h1>XXXXX캠프에 다녀왔어요.</h1>
              <UserProfile>
                <img src="http://placeimg.com/30/30/any" alt="샘플이미지" />
                <div className="profile-box">
                  <span>gn753</span>
                  <span>12시간 전</span>
                </div>
              </UserProfile>
              <CampingSiteSummary>
                <strong>XXXX ZZZZ사이트</strong>
                <ul>
                  <li>날짜 : 2022~</li>
                  <li>인원 : </li>
                  <li>추천태그 : </li>
                </ul>
              </CampingSiteSummary>
            </div>
          </section>
          <EditorIntroduce>
            <strong>에디터 소개</strong>
            <p>
              안녕하세요, 캠핏에디터 노랑이입니다. 오늘은 오토캠핑에 처음
              입문하고 싶은데, 방법을 몰라 망설이는 초보 캠퍼 분들에게
              알려드리고 싶은 저의 팁들을 가이드로 적어봤어요. 제가 캠핑을
              시작하고, 캠핑을 하면서 직접 느꼈던 경험을 공유하고자 하니, 제
              글이 캠핑을 처음! 입문하시는 분들에게 조금이나마 도움이 되었으면
              좋겠습니다.캠핑을 입문할 때 한 번쯤은 생각해봐야 하는 내용들, 지금
              바로 시작해볼게요!
            </p>
          </EditorIntroduce>
          <Comment>
            <div>
              <strong>댓글 : 16</strong>
              <CommentInput>
                <i>아이콘</i>
                <input placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다:) " />
                <button>입력</button>
              </CommentInput>
            </div>
            <CommentItem>
              <Image
                src="/icons/bookmark-fill.svg"
                alt="me"
                width="24"
                height="24"
              />
              <div>
                <strong>귤~2</strong>
                <p>좋은 집 잘보고 갑니다</p>
                <footer>
                  <span>1시간 전</span>
                  <Image
                    src="/icons/bookmark-fill.svg"
                    alt="me"
                    width="24"
                    height="24"
                  />
                  <span>답글달기</span>
                </footer>
              </div>
            </CommentItem>
          </Comment>
        </Container>
      </MainContent>
    </div>
  );
}

const MainContent = styled.div`
  section {
    padding-bottom: 20px;
  }
`;

const UserProfile = styled.div`
  display: flex;
  gap: 10px;
  img {
    display: block;
    border-radius: 50%;
  }
  span {
    display: block;
  }
`;
const CampingSiteSummary = styled.div`
  background-color: #eee;
  padding: 10px;
  border-radius: 10px;
`;

const EditorIntroduce = styled.section`
  strong {
    display: block;
    margin-bottom: 10px;
    font-size: 20px;
  }
  p {
    line-height: 2rem;
  }
`;

const Comment = styled.section`
  div {
  }
`;

const CommentInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  i {
    width: 30px;
    height: 30px;
    font-size: 0px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("http://placeimg.com/30/30/any");
    border-radius: 30px;
  }
  input {
    width: 70%;
  }
`;

const CommentItem = styled.div`
  display: flex;
  gap: 10px;
  strong {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 5px;
  }
  span {
    font-size: 12px;
  }
  img {
    display: block;
  }
  i {
    width: 30px;
    height: 30px;
    font-size: 0px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("/icons/bookmark-fill.svg");
  }
  footer {
    display: flex;
  }
`;
