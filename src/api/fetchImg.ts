import axios from 'axios';
import instance from './axios';

export const imgSize = () => {
  const width = window.innerWidth;
  let maxWidth;
  if (width > 1024) {
    maxWidth = 168;
  } else if (width > 768) {
    maxWidth = 84;
  } else if (width > 480) {
    maxWidth = 56;
  } else {
    maxWidth = 42;
  }
  return maxWidth;
};

export const fetchQueryStringImg = async (width: number, imgUrl: string) => {
  try {
    const response = await axios.get(
      `https://cloudfront.ugsm.co.kr/user-profile/${imgUrl}?w=${width}&f=webp`
    );
    console.log(response);
  } catch (error) {
    console.log(error, 'img fetch 실패');
  }
};

export const fetchImg = async (img: any) => {
  const data = new FormData();
  data.append('image', img);
  data.append('type', 'PROFILE');
  try {
    const response = await instance.post(`/api/image`, data);
    return response.data.data.imageUrl;
  } catch (error) {
    console.log(error, 'img fetch 실패');
  }
};
