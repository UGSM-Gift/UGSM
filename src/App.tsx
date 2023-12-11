import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Redirection from "./pages/Redirection";
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
        <Route path="/login/addUserInfo" element={<UserAddInfo />} />
        <Route path="/login/auth" element={<Redirection />} />
      </Routes>
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
