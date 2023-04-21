import styled from "@emotion/styled";
import PasswordFindModal from "./PasswordFindModal";
import { useState } from "react";
const url = "api/signin/temporal-password";

interface Props {
  title: string;
}

export default function PasswordFind({ title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>{title}</Button>
      {isOpen ? <PasswordFindModal handleClose={handleClose} /> : null}
    </>
  );
}

const Button = styled.button`
  cursor: pointer;
`;
