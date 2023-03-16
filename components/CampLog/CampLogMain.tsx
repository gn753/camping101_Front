import styled from "@emotion/styled"

export const CampLogMain = () => {
    return <>
        <Wrapper>
            <CountDiv>전체 {'1,200'}</CountDiv>
            <TopDiv>
                <ContentDiv>
                    <ImgBox/>
                    <TitleDiv>
                    온수수영장에 아이들 놀곳이 많아 신나게 놀고왔어요. …
                    </TitleDiv>
                    <WriterDiv>
                        <WriterImg></WriterImg>
                        <WriterText>작성자</WriterText>
                    </WriterDiv>
                    <WriterCreated>
                        25분 전
                    </WriterCreated>
                </ContentDiv>
                <ContentDiv>
                    <ImgBox/>
                    <TitleDiv>
                    온수수영장에 아이들 놀곳이 많아 신나게 놀고왔어요. …
                    </TitleDiv>
                    <WriterDiv>
                        <WriterImg></WriterImg>
                        <WriterText>작성자</WriterText>
                    </WriterDiv>
                    <WriterCreated>
                        25분 전
                    </WriterCreated>
                </ContentDiv>
                <ContentDiv>
                    <ImgBox/>
                    <TitleDiv>
                    온수수영장에 아이들 놀곳이 많아 신나게 놀고왔어요. …
                    </TitleDiv>
                    <WriterDiv>
                        <WriterImg></WriterImg>
                        <WriterText>작성자</WriterText>
                    </WriterDiv>
                    <WriterCreated>
                        25분 전
                    </WriterCreated>
                </ContentDiv>
            </TopDiv>
            <BottomDiv>
                <ContentDiv>
                    <ImgBox/>
                    <TitleDiv>
                    온수수영장에 아이들 놀곳이 많아 신나게 놀고왔어요. …
                    </TitleDiv>
                    <WriterDiv>
                        <WriterImg></WriterImg>
                        <WriterText>작성자</WriterText>
                    </WriterDiv>
                    <WriterCreated>
                        25분 전
                    </WriterCreated>
                </ContentDiv>
                <ContentDiv>
                    <ImgBox/>
                    <TitleDiv>
                    온수수영장에 아이들 놀곳이 많아 신나게 놀고왔어요. …
                    </TitleDiv>
                    <WriterDiv>
                        <WriterImg></WriterImg>
                        <WriterText>작성자</WriterText>
                    </WriterDiv>
                    <WriterCreated>
                        25분 전
                    </WriterCreated>
                </ContentDiv>
                <ContentDiv>
                    <ImgBox/>
                    <TitleDiv>
                    온수수영장에 아이들 놀곳이 많아 신나게 놀고왔어요. …
                    </TitleDiv>
                    <WriterDiv>
                        <WriterImg></WriterImg>
                        <WriterText>작성자</WriterText>
                    </WriterDiv>
                    <WriterCreated>
                        25분 전
                    </WriterCreated>
                </ContentDiv>
            </BottomDiv>
            <PaginationUl>
                <PaginationLi>&lt;</PaginationLi>
                <PaginationLi>1</PaginationLi>
                <PaginationLi>2</PaginationLi>
                <PaginationLi>3</PaginationLi>
                <PaginationLi>4</PaginationLi>
                <PaginationLi>5</PaginationLi>
                <PaginationLi>&gt;</PaginationLi>
            </PaginationUl>
        </Wrapper>
    </>
}

const Wrapper = styled.div`
    width: 1024px;
    margin: auto;
`;

const TopDiv = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-between;
`
const BottomDiv = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-between;
`
const ContentDiv = styled.div`
    width:300px;
`

const CountDiv = styled.div`
    width:auto;
    font-size:16px;
    margin: 30px 0;
`

const ImgBox = styled.div`
    width:300px;
    height:300px;
    background-color:silver;
    margin-bottom:20px;
    cursor:pointer;
`

const TitleDiv = styled.div`
    width:300px;
    height:auto;
    font-size:18px;
    font-weight:700;
    margin-bottom:10px;
    border:1px solid black;
    display:block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    cursor:pointer;
`

const WriterDiv = styled.div`
    border:1px solid black;
    width:100px;
    margin:5px 100px;
    font-size:14px;
    display:flex;
    justify-content:sapce-between;
    cursor:pointer;
`

const WriterImg = styled.img`
    width:15px;
    height:15px;
    border:1px solid black;
    border-radius:15px;
`

const WriterText = styled.div`
    width:70px;
    margin-left:10px;
    font-size:14px;
    line-height:17px;
`

const WriterCreated = styled.div`
    margin-top:5px;
    margin-bottom: 30px;
    margin-left:120px;
    margin-right:120px;
    font-size:14px;
    border:1px solid black;
    width:auto;
`

const PaginationUl = styled.ul`
    border:1px solid black;
    width:150px;
    margin:0 auto;
    display:flex;
    margin-bottom:30px;
`

const PaginationLi = styled.li`
    border:1px solid black;
    width:20px;
    height:20px;
    display:flex;
    justify-content:center;
    align-items:center;
`