"use client";
import axios from "axios";
import React, { useEffect } from "react";

const Redirection = () => {
  let AUTH_CODE = new URL(window.location.href).searchParams.get("code");
  const router = useRouter();
  //   인가 코드 전송
  async function postCode() {
    try {
      const response = await axios.post("주소", { AUTH_CODE });
      console.log(response);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(new URL(window.location.href));
    postCode();
  }, []);

  return <div>로그인중</div>;
};

export default Redirection;
