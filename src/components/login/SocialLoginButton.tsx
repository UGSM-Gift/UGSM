import styled from "styled-components";

const SocialButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #212727;
  color: #fff;
  font-size: 1.3rem;
  border-radius: 10px;
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
  onClick: () => void;
}

const SocialLoginButton: React.FC<SocialLoginType> = ({ socialLogin, onClick }) => {
  return (
    <SocialButton onClick={onClick}>
      <Icon />
      {socialLogin}
    </SocialButton>
  );
};

export default SocialLoginButton;
