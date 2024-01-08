import axios from 'axios';

export const userData = async () => {
  const accessToken = window.localStorage.getItem('accessToken');
  if (!accessToken) return alert('토큰 없음');
  try {
    const response = await axios.get('https://www.ugsm.co.kr/api/user/me', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
