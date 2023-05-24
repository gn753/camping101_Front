import styled from "@emotion/styled";

export default function CommentBody({
  writerNickName,
  content,
  closeCommentPut,
}: any) {
  console.log(closeCommentPut, "close");

  return (
    <Wrapper>
      <Description>
        <strong>{writerNickName}</strong>
        <p>{content}</p>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`

`;

const Description = styled.div`
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
`;



const CommemtDelete = styled.i`
  position: absolute;
  width: 28px;
  height: 28px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/icons/block.svg");
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0;
`;
