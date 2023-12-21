import React from "react";
import styled from "styled-components";
interface CheckItemProps {
  children: string;
}

const CheckItem: React.FC<CheckItemProps> = ({ children }) => {
  const Item = styled.span`
    padding: 0 20px;
    font-size: 1.5rem;
    color: #878d96;
    text-decoration: underline;
  `;

  return <Item>{children}</Item>;
};

export default CheckItem;
