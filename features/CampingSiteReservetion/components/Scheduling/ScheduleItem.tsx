import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  date: number;
}

export default function ScheduleItem({
  date,
  isCheckList,
  setIsCheckList,
}: any) {
  const [isCheck, setIsCheck] = useState<any>(false);

  const handleCheckColor = () => {
    setIsCheck(!isCheck);
  };

  const handleCheckList = () => {
    const isCheckCopy = JSON.parse(JSON.stringify(isCheckList));
    const checkFind = isCheckCopy.map((value: any) => {
      return value.date === date ? { date: date, isCheck: true } : { ...value };
    });
    setIsCheckList(checkFind);
  };

  return (
    <button onClick={handleCheckList}>
      <ListItem onClick={handleCheckColor} isCheck={isCheck}>
        {date}
      </ListItem>
    </button>
  );
}

interface ListItemProps {
  isCheck: boolean;
}

const ListItem = styled.li<ListItemProps>`
  width: 20px;
  height: 20px;
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
  background-color: ${(props) => (props.isCheck ? "red" : "none")};
`;
