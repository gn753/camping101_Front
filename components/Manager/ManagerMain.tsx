import styled from "@emotion/styled";
import {useEffect, useState} from 'react';

export const ManagerMain = () => {
    const [mounted, setMounted] = useState<Boolean>(false);

    useEffect(() => {
        setMounted(!mounted);
    }, [])
    return (mounted &&
        <MainDiv>
            <SideUl>
                <SideLi><TagA href="/manage/:id">회원관리</TagA></SideLi>
                <SideLi><TagA>추천 태그 관리</TagA></SideLi>
                <SideLi><TagA>캠핑장 관리</TagA></SideLi>
            </SideUl>
            <BoardDiv>
                <BoardContentDiv>
                    <TitleText>회원관리</TitleText>
                    <SubTitleText>회원 관리 메뉴에서 회원을 조회하고 상태를 수정할 수 있습니다.</SubTitleText>
                    <BoardTop>
                        <BoardCountDiv>
                            <BoardCountText>전체</BoardCountText>
                            <BoardCount>100</BoardCount>
                        </BoardCountDiv>
                        <BoardMemberSelect>
                            <BoardMemberOptions>멤버타입</BoardMemberOptions>
                            <BoardMemberOptions>일반</BoardMemberOptions>
                            <BoardMemberOptions>주인</BoardMemberOptions>
                            <BoardMemberOptions>관리자</BoardMemberOptions>
                        </BoardMemberSelect>
                    </BoardTop>
                    <BoardTable>
                        <BoardTableThead>
                            <BoardTableTr>
                                <BoardTableHead>이메일</BoardTableHead>
                                <BoardTableHead>닉네임</BoardTableHead>
                                <BoardTableHead>멤버타입</BoardTableHead>
                                <BoardTableHead>멤버상태</BoardTableHead>
                                <BoardTableHead>가입일</BoardTableHead>
                            </BoardTableTr>
                        </BoardTableThead>
                        <BoardTableTbody>
                            <BoardTableTr>
                                <BoardTableTd><TagA>a@a.com</TagA></BoardTableTd>
                                <BoardTableTd>a</BoardTableTd>
                                <BoardTableTd>일반</BoardTableTd>
                                <BoardTableTd>사용중</BoardTableTd>
                                <BoardTableTd>2023.02.02</BoardTableTd>
                            </BoardTableTr>
                            <BoardTableTr>
                                <BoardTableTd><TagA>a@a.com</TagA></BoardTableTd>
                                <BoardTableTd>a</BoardTableTd>
                                <BoardTableTd>일반</BoardTableTd>
                                <BoardTableTd>사용중</BoardTableTd>
                                <BoardTableTd>2023.02.02</BoardTableTd>
                            </BoardTableTr>
                            <BoardTableTr>
                                <BoardTableTd><TagA>a@a.com</TagA></BoardTableTd>
                                <BoardTableTd>a</BoardTableTd>
                                <BoardTableTd>일반</BoardTableTd>
                                <BoardTableTd>사용중</BoardTableTd>
                                <BoardTableTd>2023.02.02</BoardTableTd>
                            </BoardTableTr>
                            <BoardTableTr>
                                <BoardTableTd><TagA>a@a.com</TagA></BoardTableTd>
                                <BoardTableTd>a</BoardTableTd>
                                <BoardTableTd>일반</BoardTableTd>
                                <BoardTableTd>사용중</BoardTableTd>
                                <BoardTableTd>2023.02.02</BoardTableTd>
                            </BoardTableTr>
                            <BoardTableTr>
                                <BoardTableTd><TagA>a@a.com</TagA></BoardTableTd>
                                <BoardTableTd>a</BoardTableTd>
                                <BoardTableTd>일반</BoardTableTd>
                                <BoardTableTd>사용중</BoardTableTd>
                                <BoardTableTd>2023.02.02</BoardTableTd>
                            </BoardTableTr>
                            <BoardTableTr>
                                <BoardTableTd><TagA>a@a.com</TagA></BoardTableTd>
                                <BoardTableTd>a</BoardTableTd>
                                <BoardTableTd>일반</BoardTableTd>
                                <BoardTableTd>사용중</BoardTableTd>
                                <BoardTableTd>2023.02.02</BoardTableTd>
                            </BoardTableTr>
                        </BoardTableTbody>
                    </BoardTable>
                </BoardContentDiv>
                <BoardNavUl>
                    <BoardNavLi><TagA>&laquo;</TagA></BoardNavLi>
                    <BoardNavLi><TagA>&lt;</TagA></BoardNavLi>
                    <BoardNavLi><TagA>1</TagA></BoardNavLi>
                    <BoardNavLi><TagA>2</TagA></BoardNavLi>
                    <BoardNavLi><TagA>3</TagA></BoardNavLi>
                    <BoardNavLi><TagA>4</TagA></BoardNavLi>
                    <BoardNavLi><TagA>5</TagA></BoardNavLi>
                    <BoardNavLi><TagA>&gt;</TagA></BoardNavLi>
                    <BoardNavLi><TagA>&raquo;</TagA></BoardNavLi>
                </BoardNavUl>
            </BoardDiv>
        </MainDiv>    
    )
        
}

const MainDiv = styled.section`
    width:100vw;
    height:84.2vh;
    border:1px solid black;
    display:flex;
`

const SideUl = styled.ul`
    border:1px solid black;
    width:15%;
    height:100%;
    background-color:#cecece;
`

const SideLi = styled.li`
    border:1px solid black;
    width:100%;
    height:5vh;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`

const TagA = styled.a`
    border:1px solid black;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    text-decoration:none;
    color:#000;
`

const BoardDiv = styled.div`
    border:1px solid black;
    width:85%;
    height: 100%;
`

const BoardContentDiv = styled.div`
    border:1px solid black;
    width:80%;
    height:60%;
    margin:10vh auto;
`

const TitleText = styled.h1`
    font-size:20px;
    font-weight:600;
`

const SubTitleText = styled.div`
    font-size:14px;
    margin-top:2vh;
`

const BoardTop = styled.div`
    border:1px solid black;
    display:flex;
    justify-content:space-between;
    width:100%;
`

const BoardCountDiv = styled.div`
    border:1px solid black;
    width:10%;
    height:2vh;
    display:flex;
    justify-content:center;
    align-item:center;
`

const BoardCountText = styled.div`
    font-size:14px;
    font-weight:500;
`

const BoardCount = styled.div`
    font-size:14px;
    font-weight:500;
    color:red;
    margin: 0px 1vw;
`

const BoardTable = styled.table`
    border:1px solid black;
    width:100%;
    height:83%;
`

const BoardTableThead = styled.thead`
    border:1px solid black;
    height:10%;
`
const BoardTableTbody = styled.tbody`
    border:1px solid black;
    height:1%;
`

const BoardTableHead = styled.th`
    border:1px solid black;
    height:5%;
    line-height:6vh;
    background-color:#a6a6a6;
    color:#000;
`

const BoardTableTr = styled.tr`
    border:1px solid black;
    height:5%;
`

const BoardTableTd = styled.td`
    border:1px solid black;
    height:5%;
    text-align:center;
    line-height:5vh;
`

const BoardMemberSelect = styled.select`
    border:1px solid black;
    width:10%;
    height:2vh;
`
const BoardMemberOptions = styled.option`
    font-size:14px;
`

const BoardNavUl = styled.ul`
    border:1px solid black;
    width:40%;
    height:5%;
    margin: 5vh auto;
    display:flex;
`

const BoardNavLi = styled.li`
    border:1px solid black;
    width:100%;
    height:100%;
`