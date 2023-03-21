import styled from "@emotion/styled";

interface Props {
  title: string;
}

export default function MyPageTitle({ title }: Props) {
  return <Title>{title}</Title>;
}

const Title = styled.strong`
  display: flex;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

const Hr = styled.div``;
