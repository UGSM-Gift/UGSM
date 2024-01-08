import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyles = createGlobalStyle`

@font-face {
     font-family:'Outfit';
     src: url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
     font-weight: normal;
     font-style: normal;
}

:root {
       --vh: 100%;
   } 

html {
  font-size: 10px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  width: 100%;
  max-width: 480px;
  min-width: 375px;
  font-family: Outfit;
  margin: 0 auto;
  letter-spacing: -0.025em;
  -ms-overflow-style: none;
  
}

body::-webkit-scrollbar {
  display: none;
}

ul,
ol,
li,
dl,
dt,
dd {
  margin: 0;
  padding: 0;
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
figure {
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  border: 0;
  vertical-align: middle;
  font-size: 0;
  max-width: 100%;
  user-select: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

select,
input,
textarea,
button {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  cursor: pointer;
  outline: none;
  &:hover {
    border: 1px solid ${colors.sub[300]}; // 마우스 오버 시 적용될 색상
  }
  &:active {
    border: 1px solid ${colors.sub[400]}; // 활성 상태 시 적용될 색상
  }
}

select,
input,
button {
  vertical-align: middle;
  user-select: none;
}

b,
strong {
  font-weight: normal;
}

address,
em,
i {
  font-style: normal;
  font-weight: 100;
}

hr {
  margin: 0;
  padding: 0;
  border: none;
  display: block;
}

header,
footer,
article,
section,
aside,
nav,
main {
  display: block;
}

button,
input,
select,
textarea {
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  border: none;
}
`;

export default GlobalStyles;
