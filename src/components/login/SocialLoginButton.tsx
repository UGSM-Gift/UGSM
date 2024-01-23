import Button from '@components/common/button/Button';
import Typography from '@components/common/Typography';
import { common } from 'src/styles/common';
import { SocialLoginType } from 'src/types/socialLogin';
import styled from 'styled-components';

const SocialButton = styled(Button)<{ style: React.CSSProperties }>`
  ${common.flexCenterRow}
  gap: 20px;
`;

const SocialLoginButton: React.FC<SocialLoginType> = ({ icon, socialLogin, color, style, $variant }) => {
  return (
    <SocialButton $variant={$variant} style={style}>
      {icon}
      <Typography $variant={'button1'} color={color}>
        {socialLogin}
      </Typography>
    </SocialButton>
  );
};

export default SocialLoginButton;
