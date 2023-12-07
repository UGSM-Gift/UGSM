import styled from "styled-components";

const SocialButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

interface SocialLoginType {
  socialLogin: string;
}
const SocialLoginButton: React.FC<SocialLoginType> = ({ socialLogin }) => {
  return (
    <SocialButton>
      <Icon />
      {socialLogin}
    </SocialButton>
  );
};

export default SocialLoginButton;
