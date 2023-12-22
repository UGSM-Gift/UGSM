"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Ouath = ({ socialLogin }: { socialLogin: string }) => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const login = searchParams.get("login");
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    if (!login || !accessToken || !refreshToken) return;

    window.localStorage.setItem("accessToken", accessToken);
    window.localStorage.setItem("refreshToken", accessToken);

    getUser();
  }, [searchParams]);

  //   인가 코드 전송
  async function getUser() {
    const accessToken = window.localStorage.getItem("accessToken");

    if (!accessToken) return alert("토큰 없음");

    try {
      const response = await axios.get(`https://www.ugsm.co.kr/api/user/me`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log("login");
      navigate("/addUserInfo");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return <div>로그인중ㅇㅇ</div>;
};

export default Ouath;
