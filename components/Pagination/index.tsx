import styled from "@emotion/styled";
import Link from "next/link";

export default function Pagination({currentPage, totalPages }: any) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationUl>
     {currentPage !== 1 && (
        <li>
          <Link href={`/?page=${currentPage - 1}`}>
            <a>Previous</a>
          </Link>
        </li>
      )}
      {pages.map((page) => (
        <li key={page}>
          <Link href={`/?page=${page}`}>
            <a className={page === currentPage ? 'active' : ''}>{page}</a>
          </Link>
        </li>
      ))}
      {currentPage !== totalPages && (
        <li>
          <Link href={`/?page=${currentPage + 1}`}>
            <a>Next</a>
          </Link>
        </li>
      )}
    </PaginationUl>
  );
}

const PaginationUl = styled.ul`
  border: 1px solid black;
  width: 150px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 30px;
`;

const PaginationLi = styled.li`
  border: 1px solid black;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
