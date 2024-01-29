import YearWheel from '@components/datepicker/YearWheel';
import React, { useEffect } from 'react';
import BasicLayout from './layout/BasicLayout';

const Home = () => {
  return (
    <BasicLayout>
      <YearWheel />
      Home
    </BasicLayout>
  );
};

export default Home;
