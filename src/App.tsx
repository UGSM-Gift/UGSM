import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import router from './router/router';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  const Wrapper = styled.div`
    border: 1px solid #000;
  `;

  return (
    <Wrapper>
      <RouterProvider router={router} />
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
