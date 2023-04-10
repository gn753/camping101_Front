import styled from "@emotion/styled";
import Link from "next/link";

export default function Pagination({ comments }: any) {
  return (
    <PaginationUl>
      <PaginationLi>&lt;</PaginationLi>
      <PaginationLi>
        <Link href="/campLog/details/3?comments=1">1</Link>
      </PaginationLi>
      <PaginationLi>
        <Link href="/campLog/details/3?comments=2">2</Link>
      </PaginationLi>
      <PaginationLi>
        <Link href="/campLog/details/3?comments=3">3</Link>
      </PaginationLi>
      <PaginationLi>4</PaginationLi>
      <PaginationLi>5</PaginationLi>
      <PaginationLi>&gt;</PaginationLi>
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
