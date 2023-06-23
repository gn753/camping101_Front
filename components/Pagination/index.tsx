import styled from "@emotion/styled";
import { useEffect } from "react";

interface Props {
  total: number;
  limit: number;
  page: number;
  updatePagination: (i: number) => void;
  nextArrow: () => void;
  prevArrow: () => void;
}

export default function Pagination({
  total,
  limit,
  page,
  updatePagination,
  nextArrow,
  prevArrow,
}: Props) {
  const totalPageNumber = Math.ceil(total / limit);

  const totalPages = Array.from(
    Array(totalPageNumber),
    (_, index) => index + 1,
  );

  return (
    <Nav>
      <Button onClick={prevArrow} disabled={page === 1}>
        &lt;
      </Button>
      {totalPages.map((num: number) => (
        <Button
          key={`${num}-번호`}
          onClick={() => updatePagination(num)}
          data-page={page === num + 1 ? "page" : "none"}
        >
          {num}
        </Button>
      ))}
      <Button onClick={nextArrow} disabled={page === totalPageNumber}>
        &gt;
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[data-page="page"] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
  &[data-page="none"] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
`;
