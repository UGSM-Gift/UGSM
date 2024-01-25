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

export const fetchImg = async (width: number, imgUrl: string) => {
  try {
    const response = await instance.get(
      `https://cloudfront.ugsm.co.kr/user-profile/${imgUrl}3bafd507745-update.gif?w=${width}&f=webp`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
