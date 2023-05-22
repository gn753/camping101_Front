import styled from "@emotion/styled";
import Link from "next/link";

export default function Pagination({ currentPage, totalPages }: any) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationUl>
      {currentPage !== 1 && (
        <PaginationLi>
          <Link href={`/?page=${currentPage - 1}`}>
            <button>Previous</button>
          </Link>
        </PaginationLi>
      )}
      {pages.map((page) => (
        <PaginationLi key={page}>
          <Link href={`/?page=${page}`}>
            <button className={page === currentPage ? "active" : ""}>
              {page}
            </button>
          </Link>
        </PaginationLi>
      ))}
      {currentPage !== totalPages && (
        <PaginationLi>
          <Link href={`/?page=${currentPage + 1}`}>
            <button>Next</button>
          </Link>
        </PaginationLi>
      )}
    </PaginationUl>
  );
}

const PaginationUl = styled.ul`
  border: 1px solid black;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const PaginationLi = styled.li`
  display: inline-block;
  border-right: 1px solid black;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
