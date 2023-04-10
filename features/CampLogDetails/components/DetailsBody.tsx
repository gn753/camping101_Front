import styled from "@emotion/styled";
import { CampLogDetailsResponse } from "../types/index";

interface Props {
  details: CampLogDetailsResponse;
}

export default function DetailsBody({ details }: Props) {
  const { visitedAt, recTags, visitedWith, description } = details;
  return (
    <>
      <section>
        <div>
          <CampingSiteSummary>
            <strong>XXXX ZZZZ사이트</strong>
            <ul>
              <li>날짜 : {visitedAt}</li>
              <li>인원 : {visitedWith}</li>
              <li>
                추천태그 :
                {recTags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </li>
            </ul>
          </CampingSiteSummary>
        </div>

        <EditorIntroduce>
          <strong>에디터 소개</strong>
          <p>{description}</p>
        </EditorIntroduce>
      </section>
    </>
  );
}

const CampingSiteSummary = styled.div`
  background-color: #eee;
  padding: 10px;
  border-radius: 10px;
`;

const EditorIntroduce = styled.div`
  min-height: 200px;
  margin: 10px 0;

  border-bottom: 1px solid black;
  strong {
    display: block;
    margin-bottom: 10px;
    font-size: 20px;
  }
  p {
    line-height: 2rem;
  }
`;
