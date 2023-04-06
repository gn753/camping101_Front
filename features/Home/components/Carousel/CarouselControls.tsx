import styled from "@emotion/styled";

export default function CarouselControls({ prev, next }: any) {
  return (
    <div>
      <Control className="left" onClick={prev}>
        prev
      </Control>
      <Control className="right" onClick={next}>
        next
      </Control>
    </div>
  );
}

const Control = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
`;
