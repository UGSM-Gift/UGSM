import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Gender from "./pages/adduserinfo/Gender";
import Nickname from "./pages/adduserinfo/Nickname";
import PhoneNumber from "./pages/adduserinfo/PhoneNumber";
import PhoneNumberAuth from "./pages/adduserinfo/PhoneNumberAuth";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Ouath from "./pages/Ouath";
import UserAddInfo from "./pages/UserAddInfo";
import GlobalStyle from "./styles/GlobalStyles";
function App() {
  const Wrapper = styled.div`
    border: 1px solid #000;
  `;
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addUserInfo" element={<UserAddInfo />} />
        <Route path="/oauth/callback/kakao" element={<Ouath socialLogin="kakao" />} />
        <Route path="/oauth/callback/naver" element={<Ouath socialLogin="naver" />} />
        <Route path="/oauth/callback/google" element={<Ouath socialLogin="google" />} />
      </Routes>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
