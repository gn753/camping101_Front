import styled from "@emotion/styled";

interface Props extends ButtonStyleProps {
  title: string;
}

export default function Button({
  title,
  color = "black",
  padding = [10, 10, 10, 10],
  margin,
}: Props) {
  return (
    <ButtonBasic color={color} padding={padding} margin={margin}>
      {title}
    </ButtonBasic>
  );
}

interface ButtonStyleProps {
  color?: string;
  margin?: [number, number, number, number] | string;
  padding?: [number, number, number, number];
}

const ButtonBasic = styled.button<ButtonStyleProps>`
  all: unset;
  display: block;
  background-color: ${(props) => props.color};
  padding-top: ${(props) => props.padding && props.padding[0] + "px"};
  padding-right: ${(props) => props.padding && props.padding[1] + "px"};
  padding-bottom: ${(props) => props.padding && props.padding[2] + "px"};
  padding-left: ${(props) => props.padding && props.padding[3] + "px"};
  color: white;
`;
