import styled from "styled-components";
import SocialLoginButton from "./SocialLoginButton";

const SocialButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Login = () => {
  return (
    <SocialButtonWrapper>
      <SocialLoginButton socialLogin="네이버" />
      <SocialLoginButton socialLogin="카카오톡" />
      <SocialLoginButton socialLogin="구글" />
    </SocialButtonWrapper>
  );
};

export default Login;
