import styled from "@emotion/styled";

interface Props {
  hanldePrevIndex:() => void
}

export default function PrevButton({ hanldePrevIndex}: Props) {

  return <Arrow onClick={hanldePrevIndex}>Prev</Arrow>;
}

const Arrow = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid #ddd;
  justify-content: center;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(63, 71, 77, 0.15);
  cursor: pointer;
`;
