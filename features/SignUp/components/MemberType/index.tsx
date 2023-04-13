import styled from "@emotion/styled";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form/dist/types";

interface Props {
  register:any;
}

export default function MemberType({ register }:Props) {
  const [memberType, setMemberType] = useState("CUSTOMER");

  return (
    <Wrapper>
      <label>회원 종류</label>
      <MemberTypeList {...register("memberType")}>
        <option value="CUSTOMER">CUSTOMER</option>
        <option value="OWNER">OWNER</option>
        <option value="ADMIN">ADMIN</option>
      </MemberTypeList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  input {
    height: 0;
    opacity: 0;
    overflow: hidden;
    font-size: 0;
  }
`;

const MemberTypeList = styled.select`
  text-align: left;
  width: 300px;
  padding: 10px 10px;
  box-sizing: content-box;
`;
