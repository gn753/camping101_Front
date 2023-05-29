import styled from "@emotion/styled";
import nanoid from "features/common/utils/nanoid";
import { Dispatch, SetStateAction } from "react";

interface Props<T extends (p: number) => number> {
  total: number;
  limit: number;
  page: ReturnType<T>;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination<T extends (p: number) => number>({
  total,
  limit,
  page,
  setPage,
}: Props<T>) {
  const numPages = Math.ceil(total / limit);

  return (
    <Nav>
      <Button onClick={() => setPage(page)} disabled={page === 1}>
        &lt;
      </Button>
      {Array.from({ length: numPages }).map((_, i) => (
        <Button
          key={nanoid()}
          onClick={() => setPage(i + 1)}
          data-page={page === i + 1 ? "page" : "none"}
        >
          {i + 1}
        </Button>
      ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
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
