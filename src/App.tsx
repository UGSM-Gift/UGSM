import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
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
        <Route path="/addUserInfo" element={<UserAddInfo />}>
          <Route path="/addUserInfo/nickname" element={<Login />} />
          <Route path="/login/gender" element={<Login />} />
          <Route path="/login/phoneNumberAuth" element={<Login />} />
        </Route>

        <Route path="/oauth/callback/kakao" element={<Ouath socialLogin="kakao" />} />
        <Route path="/oauth/callback/naver" element={<Ouath socialLogin="naver" />} />
        <Route path="/oauth/callback/google" element={<Ouath socialLogin="google" />} />
      </Routes>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
