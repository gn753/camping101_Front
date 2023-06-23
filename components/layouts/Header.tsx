import styled from "@emotion/styled";
import useMemberInfo from "features/AppAuth/hooks/useMemberInfo";
import { BookmarkListState } from "features/CampLogDetails/hooks/useBookmarks";
import { IsAuthState } from "features/SignIn/hooks/useLogin";
import Link from "next/link";
import { useCallback } from "react";
import { useResetRecoilState } from "recoil";

export default function Header() {
  const resetLogin = useResetRecoilState(IsAuthState);
  const resetBookmarkList = useResetRecoilState(BookmarkListState);
  const { setMemberInfo, memberInfo } = useMemberInfo();

  const removeToken = useCallback(() => {
    sessionStorage.removeItem("access-token");
    sessionStorage.removeItem("refresh-token");
  }, []);

  const handleLogout = useCallback(() => {
    removeToken();
    resetLogin();
    resetBookmarkList();
    setMemberInfo(null);
  }, [removeToken, resetLogin, resetBookmarkList, setMemberInfo]);

  return (
    <HeaderWrapper>
      <Gnb>
        <GnbList>
          <Link href="/">Camping101</Link>
          <Link href="/camp">캠핑장</Link>
          <Link href="/campLog">캠프로그</Link>
        </GnbList>
        <GnbList>
          {memberInfo ? (
            <>
              <Link href="/myPage">
                <Profile>
                  <i>프로필</i>
                  <span>{memberInfo && memberInfo.nickname}님</span>
                </Profile>
              </Link>
              <Link href="/signIn">
                <button onClick={handleLogout}>로그아웃</button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/signIn">
                <i>아이콘</i>로그인
              </Link>
              <Link href="/signUp">회원가입</Link>
            </>
          )}
        </GnbList>
      </Gnb>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  border: 1px solid #eee;
  background-color: #fff;
`;

const Gnb = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
  height: 50px;
  box-sizing: border-box;
`;

const GnbList = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    width: 150px;
    height: 55px;
    text-decoration: none;
    color: black;
  }
  button {
    display: flex;
    align-items: center;
    font-size: 16px;
    vertical-align: middle;
  }
  i {
    display: inline-block;
    background-image: url("/icons/log_in.svg");
    background-size: cover;
    width: 30px;
    height: 30px;
    font-size: 0;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;

  i {
    display: inline-block;
    background-image: url("/icons/user_default.svg");
    background-size: contain;
    width: 20px;
    height: 20px;
    font-size: 0;
    margin-right: 5px;
  }
`;
