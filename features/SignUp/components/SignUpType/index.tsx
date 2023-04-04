import styled from "@emotion/styled";
import { useState } from "react";

export default function SignUpType() {
  const [signUpType, setSignUpType] = useState("EMAIL"); //회원가입 방식 이메일 or 구글

  const handleSignUptype = (typeText: string) => {
    setSignUpType(typeText);
  };

  return (
    <Wrapper>
      <label>가입방식</label>
      <SignUpTypeList>
        <li className={signUpType === "EMAIL" ? "active" : ""}>
          <div onClick={() => handleSignUptype("EMAIL")}>이메일</div>
        </li>
        <li className={signUpType === "GMAIL" ? "active" : ""}>
          <div onClick={() => handleSignUptype("GMAIL")}>
            <span>구글</span>
          </div>
        </li>
      </SignUpTypeList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SignUpTypeList = styled.ul`
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
