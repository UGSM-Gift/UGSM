"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Ouath = ({ socialLogin }: { socialLogin: string }) => {
  const navigate = useNavigate();
  const AUTH_CODE = new URL(window.location.href).searchParams.get("code");
  const AUTH_STATUS = new URL(window.location.href).searchParams.get("state");

  //   인가 코드 전송
  async function getUser() {
    try {
      const response = await axios.get(
        `https://www.ugsm.co.kr/api/login/oauth2/code/${socialLogin}?code=${AUTH_CODE}&state=${AUTH_STATUS}`
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return <div>로그인중ㅇㅇ</div>;
};

export default Ouath;
