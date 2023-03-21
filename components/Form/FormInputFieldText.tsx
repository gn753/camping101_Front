import styled from "@emotion/styled";

interface Props {
  errorText: string;
}

export default function FormInputFiledText({ errorText }: Props) {
  return <FiledText>{errorText}</FiledText>;
}

const FiledText = styled.p`
  color: red;
`;
