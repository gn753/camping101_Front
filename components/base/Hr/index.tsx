import styled from "@emotion/styled";

export default function Hr() {
  return <BolderColor>밑줄선</BolderColor>;
}

const BolderColor = styled.div`
  background-color: #dcdee3;
  box-sizing: border-box;
  height: 1px;
  font-size: 0;
`;
