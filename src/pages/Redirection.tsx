"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
  const navigate = useNavigate();
  let AUTH_CODE = new URL(window.location.href).searchParams.get("code");

  //   인가 코드 전송
  async function postCode() {
    try {
      const response = await axios.post("주소", { AUTH_CODE });
      console.log(response);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(AUTH_CODE);
    console.log(new URL(window.location.href));
    postCode();
  }, []);

  return <div>로그인중</div>;
};

export default Redirection;
