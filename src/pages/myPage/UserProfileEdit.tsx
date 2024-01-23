import Input from '@components/common/Input';
import Profile from '@components/mypage/Profile';
import React, { useEffect, useState } from 'react';
import { userData } from 'src/api/userData';
import { ReactComponent as EditIcon } from '@assets/icons/editIcon.svg';
import { common } from 'src/styles/common';
import { UserData } from 'src/types/userData';
import styled from 'styled-components';
import BasicLayout from '../layout/BasicLayout';
import IconBtnWrapper from '@components/common/IconBtnWrapper';
import instance from 'src/api/axios';

const UserProfileEdit = () => {
  const [userSettingData, setUserSettingData] = useState<UserData>({
    birthdate: '',
    name: '',
    gender: '',
    nickname: '',
    mobile: '',
    profileImgFile: '',
  });
  // function PhoneNumber(phoneNumber: string) {
  //   return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
  // }

  const fetchUserData = async () => {
    try {
      const response = await userData();

      const user = response.data;
      const userSettingData = {
        birthdate: user.birthdate,
        gender: user.gender,
        name: user.name,
        nickname: user.nickname,
        mobile: user.mobile,
        profileImgFile: user.profileImageUrl,
      };
      console.log('데이터가져오기', userSettingData);
      setUserSettingData(userSettingData);
    } catch (error) {
      console.error('데이터 가져오기에 실패했습니다.', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // 이름
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingData((prevUserData) => ({ ...prevUserData, name: event.target.value }));
  };
  // 닉네임
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingData((prevUserData) => ({ ...prevUserData, nickname: event.target.value }));
  };

  // 휴대폰 번호
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingData((prevUserData) => ({ ...prevUserData, mobile: event.target.value }));
  };
  // 생일 수정
  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingData((prevUserData) => ({ ...prevUserData, birthdate: event.target.value }));
  };

  // 유저데이터 전송
  const userDataPost = async (userSettingData: UserData) => {
    console.log(userSettingData, 'userSettingData');
    try {
      const response = await instance.put(`/api/user/me`, userSettingData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (userData: UserData) => {
    userDataPost(userData);
  };

  return (
    <BasicLayout>
      <ContentContainer>
        <ProfileEditBox>
          <Profile userData={userSettingData} />
          <IconBtnWrapper>
            <EditIcon />
          </IconBtnWrapper>
        </ProfileEditBox>
        <div onClick={() => handleEdit(userSettingData)}>수정하기</div>
        <Input label='이름'>
          <Input.TextField value={userSettingData.name} onChange={handleNameChange} />
        </Input>
        <Input label='닉네임'>
          <Input.TextField value={userSettingData.nickname} onChange={handleNicknameChange} />
        </Input>
        <Input label='생일'>
          <Input.TextField
            type='date'
            value={userSettingData.birthdate}
            onChange={handleBirthdayChange}
          />
        </Input>
        {/* <TypeButtonBox>
          <TypeButton type='남자' setType={(type) => handleGenderChange(type)} selectedType={gender} />
          <TypeButton type='여자' setType={(type) => handleGenderChange(type)} selectedType={gender} />
        </TypeButtonBox> */}
        <Input label='전화번호'>
          <Input.TextField value={userSettingData.mobile} onChange={handlePhoneChange} />
        </Input>
      </ContentContainer>
    </BasicLayout>
  );
};

export default UserProfileEdit;

const ContentContainer = styled.div`
  ${common.flexCenterColumn}
`;
const ProfileEditBox = styled.div`
  position: relative;
`;

// const TypeButtonBox = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-top: 10px;
//   margin-bottom: 30px;
// `;
