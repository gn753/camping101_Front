import styled from "@emotion/styled";
export default function CampingSiteInfo() {
  return (
    <section>
      <h3> 기본정보</h3>
      <List>
        <li>
          <span>환경</span> <span>숲,기타</span>
        </li>
        <li>
          <span>환경</span> <span>숲,기타</span>
        </li>
        <li>
          <span>환경</span> <span>숲,기타</span>
        </li>
      </List>
    </section>
  );
}
const List = styled.ul`
  border: 1px solid black;
  li {
    display: flex;
    justify-content: space-between;
    max-width: 200px;
  }
  span:first-child {
    width: 50px;
  }

  span:last-child {
    color: gray;
  }
`;
