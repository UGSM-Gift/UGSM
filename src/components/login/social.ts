const REDIRECT_URI = "http://localhost:3000/login/auth";

// 구글 로그인
const GOOGLE_CLIENT_ID = "백엔드";
const GOOGLE_REDIRECT_URI = "백엔드";
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;

export const googleLogin = () => {
  window.location.href = GOOGLE_AUTH_URL;
};

//네이버 로그인
const NAVER_CLIENT_ID = "opgkZtCOcqRMs0wozjW3";
const STATE = "false";

const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

export const naverLogin = () => {
  window.location.href = NAVER_AUTH_URL;
};

// 카카오 로그인
const REST_API_KEY = "425e2b2591e7b675d665772268b0c0fd";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const kakaoLogin = () => {
  window.location.href = KAKAO_AUTH_URL;
};
