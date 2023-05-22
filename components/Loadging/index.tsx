import styled from "@emotion/styled";

interface Props {
  size: "sm" | "md" | "lg";
}

export default function Loading({ size }: Props) {
  const sm = 28;
  const md = 28 * 2;
  const lg = 28 * 3;

  const sizeValue = size === "sm" ? sm : size === "md" ? md : lg;

  return <Animation width={sizeValue} height={sizeValue} />;
}

interface StyleProps {
  width: number;
  height: number;
}

const Animation = styled.div<StyleProps>`
  background-image: url("/icons/loading.svg");
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-repeat: no-repeat;
  background-size: contain;
`;
