import React, { useEffect } from 'react';
import BasicLayout from "./layout/BasicLayout";

const GiftList = () => {
  // const fetchUserData = async () => {
  //   try {
  //     const response = await userData();

  //     console.log(response);
  //   } catch (error) {
  //     console.error('데이터 가져오기에 실패했습니다.', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);
  return <BasicLayout>
    <div>GiftList</div>;
  </BasicLayout>
};

export default GiftList;
