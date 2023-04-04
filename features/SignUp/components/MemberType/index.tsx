import styled from "@emotion/styled";
import { useState } from "react";

export default function MemberType() {
  const [memberType, setMemberType] = useState("CUSTOMER");

  const handleMemberType = (typeText: string) => {
    setMemberType(typeText);
  };

  return (
    <Wrapper>
      <label>회원 종류</label>
      <MemberTypeList>
        <li className={memberType === "CUSTOMER" ? "active" : ""}>
          <div onClick={() => handleMemberType("CUSTOMER")}>
            <span>일반</span>
          </div>
        </li>
        <li className={memberType === "OWNER" ? "active" : ""}>
          <div onClick={() => handleMemberType("OWNER")}>
            <span>기업</span>
          </div>
        </li>
        <li className={memberType === "ADMIN" ? "active" : ""}>
          <div onClick={() => handleMemberType("ADMIN")}>
            <span>관리자</span>
          </div>
        </li>
      </MemberTypeList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MemberTypeList = styled.ul`
  display: flex;
  gap: 10px;
  li {
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    text-align: center;
    background-color: rgb(224, 224, 224);
    transition: 0.2s;
  }
  li.active {
    background-color: rgb(52, 152, 219);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
