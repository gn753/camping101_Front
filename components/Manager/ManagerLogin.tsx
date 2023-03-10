import styled from "@emotion/styled";

export const ManagerLogin = () => {
    return <>
        <MainDiv>
            <LoginBox>
                <ImgBox/>
                <InputBox>
                    <Input placeholder="아이디"/>
                    <Input placeholder="비밀번호"/>
                </InputBox>
                <LoginButton>
                    로그인
                </LoginButton>
            </LoginBox>
        </MainDiv>

    </>
}

const MainDiv = styled.div`
    width:100vw;
    height: 84.2vh;
    border: 1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
`

const LoginBox = styled.div`
    width:300px;
    height:40%;
    border: 1px solid black;
    margin: 0 auto;
`

const ImgBox = styled.div`
    width:50px;
    height:50px;
    border:1px solid black;
    margin:0 auto;
`

const InputBox = styled.div`
    width:250px;
    height:100px;
    border:1px solid black;
    margin: 20px auto;
`

const Input = styled.input`
    width:97%;
    height:30px;
    font-size:15px;
    margin: 5px 0px;
`

const LoginButton = styled.button`
    width:250px;
    height:50px;
    margin: 0 25px;
`