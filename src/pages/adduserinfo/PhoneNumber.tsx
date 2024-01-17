import React from 'react';
import styled, { css } from 'styled-components';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';

const NumberBox = styled.div``;
type PhoneNumberProp = {
  phone: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent) => void;
  onBlur: (event: React.FocusEvent) => void;
};
const PhoneNumber: React.FC<PhoneNumberProp> = ({ phone, onChange, onFocus, onBlur }) => {
  return (
    <NumberBox>
      <Typography
        $variant={'title1'}
        $style={css`
          margin-bottom: 100px;
        `}
      >
        사용하고 있는 <br />
        번호를 알려주세요
      </Typography>
      <Input>
        <Input.TextField
          placeholder='숫자만 입력해주세요'
          $error={false}
          value={phone}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Input>
    </NumberBox>
  );
};

export default PhoneNumber;
