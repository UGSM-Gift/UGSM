import React from "react";
import styled from "styled-components";

const QuestionBox = styled.div`
  margin-bottom: 30px;
  line-height: 2.5rem;
  font-size: 2rem;
  font-weight: 600;
`;

interface QuestionProps {
  firstLine: string;
  secondLine: string;
}

const Question: React.FC<QuestionProps> = ({ firstLine, secondLine }) => {
  return (
    <QuestionBox>
      <p> {firstLine}</p>
      <p> {secondLine}</p>
    </QuestionBox>
  );
};

export default Question;
