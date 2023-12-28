import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Ouath from "./pages/Ouath";
import UserAddInfo from "./pages/UserAddInfo";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./styles/theme";
function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  const Wrapper = styled.div`
    border: 1px solid #000;
  `;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addUserInfo" element={<UserAddInfo />} />
          <Route path="/oauth/callback/kakao" element={<Ouath socialLogin="kakao" />} />
          <Route path="/oauth/callback/naver" element={<Ouath socialLogin="naver" />} />
          <Route path="/oauth/callback/google" element={<Ouath socialLogin="google" />} />
        </Routes>
        <GlobalStyle />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
