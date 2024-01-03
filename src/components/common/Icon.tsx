import React from 'react';
import { IconProp } from 'src/types/common';

const Icon: React.FC<IconProp> = ({ onClick, icon }) => {
  return <div onClick={onClick}>{icon}</div>;
};

export default Icon;
