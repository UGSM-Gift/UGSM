import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';
import Button from './Button';

type ButtonProps = {
  $variant?: string;
  radius?: string;
  size?: string;
};

type ButtonType = {
  lContent: string;
  rContent: string;
  label: string;
};

const InteractiveButton: React.FC<ButtonType> = ({ lContent, rContent, label }) => {
  return (
    <InteractiveButtonContainer>
      {label && (
        <Typography $variant='subtitle2'>
          <Label>{label}</Label>
        </Typography>
      )}
      <Button $variant={'outline'} radius='medium' size='small' $block={false}>
        {lContent}
      </Button>
      <Button $variant={'outline'} radius='medium' size='small' $block={false}>
        {rContent}
      </Button>
    </InteractiveButtonContainer>
  );
};

export default InteractiveButton;

const InteractiveButtonContainer = styled.div`
  background-color: #ddd;
`;

const Label = styled.div`
  margin-bottom: 10px;
`;
