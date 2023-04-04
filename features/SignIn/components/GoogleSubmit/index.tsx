import styled from "@emotion/styled";

export default function GoogleSubmit() {
  return <Button>구글 로그인</Button>;
}

const Button = styled.button`
  all: unset;
  display: block;
  margin: 20px 0px;
  width: 100%;
  border: 1px solid black;
  padding: 10px 3px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #db4a39;
  border-color: #db4a39;
  color: #fff;
`;
