// 자주 사용하는 색을 객체로 만들자.
const colors = {
  primary: "#003D87",
  secondary: "#0F62FE",
  sub: "#A6C8FF",
  white: "#ffffff",
  error: "#DA1E28",
  warning: "#DA1E28",
  success: "#DA1E28",
  overlay: "#121619 / 50%",
  gray10: "#f2f4f8",
  gray20: "#dde1e6",
  gray30: "#c1c7cd",
  gray40: "#a2a9b0",
  gray50: "#878d96",
  gray60: "#697077",
  gray70: "#4d5358",
  gray80: "#343a3f",
  gray90: "#21272a",
  gray100: "#121619",
  primary50: "#FFE4EE",
  primary100: "#FEBAD4",
  primary200: "#FF8CB7",
  primary300: "#FF599A",
  primary400: "#FF2882",
  primary500: "#FF0069",
  primary600: "#EE0067",
  primary700: "#D70062",
  primary800: "#C2005F",
  primary900: "#9B0059",
  secondary50: "#DEF1FE",
  secondary100: "#B0DBFD",
  secondary200: "#7EC6FC",
  secondary300: "#4BB0FB",
  secondary400: "#219FFB",
  secondary500: "#0090FA",
  secondary600: "#0081F1",
  secondary700: "#006EDB",
  secondary800: "#0B5DC6",
  secondary900: "#1440A5",
  sub50: "#DEF1FE",
  sub100: "#B0DBFD",
  sub200: "#7EC6FC",
  sub300: "#4BB0FB",
  sub400: "#219FFB",
  sub500: "#0090FA",
  sub600: "#0081F1",
  sub700: "#006EDB",
  sub800: "#0B5DC6",
  sub900: "#1440A5",
};

const typography = {
  largetitle: `
      font-weight: 600;
      font-size: 32px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
  // title
  title1: `
      font-weight: 600;
      font-size: 28px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
  // subtitle
  title2: `
      font-weight: 500;
      font-size: 22px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
  // title,bottom sheets contents title
  title3: `
      font-weight: 500;
      font-size: 20px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
  //label title
  subtitle1: `
      font-weight: 600;
      font-size: 16px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
  //label
  subtitle2: `
      font-weight: 600;
      font-size: 14px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
  //text
  body1: `
      font-weight: 400;
      font-size: 16px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
  // input, placeholder
  // pop-up, model contents text
  // bottom sheets header
  body2: `
      font-weight: 400;
      font-size: 15px;
      line-height: 105%;
      letter-spacing: 0px;
    `,
  // button label :  mainflow
  button1: `
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0px;
    `,
  // button label : user
  button2: `
      font-weight: 500;
      font-size: 15px;
      line-height:20px;
      letter-spacing: 0px;
    `,
  //helper text
  caption1: `
      font-weight: 400;
      font-size: 13px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
  // form action guide
  caption2: `
      font-weight: 400;
      font-size: 12px;
      line-height: 110%;
      letter-spacing: 0px;
    `,
};

// 자주 사용하는 스타일 속성을 theme으로 만들어보자.
const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

// theme 객체에 감싸서 반환한다.
const theme = {
  colors,
  typography,
  common,
};

export default theme;
