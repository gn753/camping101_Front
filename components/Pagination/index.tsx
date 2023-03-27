import styled from "@emotion/styled";

export default function Pagination() {
  return (
    <PaginationUl>
      <PaginationLi>&lt;</PaginationLi>
      <PaginationLi>1</PaginationLi>
      <PaginationLi>2</PaginationLi>
      <PaginationLi>3</PaginationLi>
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
`;
