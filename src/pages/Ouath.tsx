'use client';

import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import instance from 'src/api/axios';

const Ouath = () => {
  const navigate = useNavigate();
  //  user가 있으면 메인페이지로 이동

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const login = searchParams.get('login');
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    if (!login || !accessToken || !refreshToken) return;

    window.localStorage.setItem('accessToken', accessToken);
    window.localStorage.setItem('refreshToken', accessToken);

    getUser();
  }, [searchParams]);

  //   인가 코드 전송
  async function getUser() {
    try {
      const response = await instance.get(`/api/user/me`);
      console.log(response.data.data.mobileVerified);
      const userChecked = response.data.data.mobileVerified;

      if (userChecked) {
        navigate('/');
      } else {
        navigate('/account');
      }
    } catch (error) {
      console.error(error);
    }
  }
  return <div>로그인중</div>;
};

export default Ouath;
