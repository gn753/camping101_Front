import styled from "@emotion/styled";

export const ManagerHeader = () => {
    return <>
        <Header>
            <ImgBox></ImgBox>
            <TitleBox>관리자 페이지</TitleBox>
        </Header>
    </>
}

const Header = styled.header`
    width:100vw;
    height:5vh;
    border: 1px solid black;
    display:flex;
    justify-content:flex-start;
    background-color:#000;
`
const ImgBox = styled.img`
    width:50px;
    height:100%;
    border: 1px solid black;
`

const TitleBox = styled.div`
    width:100px;
    height:100%;
    border:1px solid black;
    color:#fff;
    display:flex;
    align-items:center;
`