import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import PasswordFindForm from "./PasswordFindForm";

interface Props {
  handleClose: () => void;
}

export default function PasswordFindModal({ handleClose }: Props) {
  const Portal = ReactDOM.createPortal(
    <>
      <ModalBackGround className="modal_root" onClick={handleClose} />
      <ModalWrapper>
        <strong>비밀번호 찾기</strong>
        <PasswordFindForm handleClose={handleClose} />
      </ModalWrapper>
    </>,
    document.body,
  );

  return Portal;
}

const ModalWrapper = styled.section`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 200px;
  border: 1px solid black;
  z-index: 999;
  background-color: #fff;
  strong {
    display: block;
    font-size: 20px;
    text-align: center;
  }
  padding: 20px;
`;

const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid black;
  z-index: 997;
  background: rgba(0, 0, 0, 0.8);
`;
