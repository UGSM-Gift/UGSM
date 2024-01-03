import Typography from '@components/common/Typography';
import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const InputBox = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px;
  border: 1px solid #a2a9ad;
  border-radius: 8px;
`;

// 타이머 위치를 위한 스타일
const TimerTypography = styled(Typography)`
  position: absolute; // 절대 위치
  right: 20px; // 오른쪽 끝에서 10px 떨어진 곳에 배치
  top: 50%; // 수직 중앙에 배치
  transform: translateY(-50%); // 정확한 중앙 정렬을 위해 Y축 기준 50%만큼 이동
`;

interface TextInputProps {
  placeholder?: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  text?: string;
  label?: string;
  timer?: number;
}

const InputType: React.FC<TextInputProps> = ({
  placeholder,
  type,
  value,
  onChange,
  text,
  label,
  timer,
}) => {
  return (
    <Wrapper>
      <Typography variant='subtitle2'>{label}</Typography>
      <InputBox>
        {timer && timer > 0 ? (
          <TimerTypography variant='caption1'>
            {`0:${timer.toString().padStart(2, '0')}`}
          </TimerTypography>
        ) : null}
        <Input type={type} value={value} onChange={onChange} placeholder={placeholder} />
      </InputBox>
      <Typography variant='caption1'>{text}</Typography>
    </Wrapper>
  );
};

export default InputType;
