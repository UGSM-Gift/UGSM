import Input from '@components/common/Input';
import Profile from '@components/mypage/Profile';

import React, { useEffect, useRef, useState } from 'react';
import { userData, userDataPost } from 'src/api/userData';
import { ReactComponent as EditIcon } from '@assets/icons/editIcon.svg';

import { common } from 'src/styles/common';
import { UserData } from 'src/types/userData';
import styled from 'styled-components';
import BasicLayout from '../layout/BasicLayout';
import IconBtnWrapper from '@components/common/IconBtnWrapper';
import Typography from '@components/common/Typography';
import Button from '@components/common/button/Button';
import { colors } from 'src/styles/colors';
import { RADIUS } from 'src/constants/style';
import { fetchImg, imgSize } from 'src/api/fetchImg';
import { formatPhoneNumber } from 'src/utils/account';

const UserProfileEdit = () => {
  const [imgResize, setImgResize] = useState(84);
  const [uploadImgUrl, setUploadImgUrl] = useState<string>('');
  const [currentImgUrl, setCurrentImgUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [userSettingData, setUserSettingData] = useState<UserData>({
    birthdate: '',
    name: '',
    gender: '',
    nickname: '',
    mobile: '',
    profileImageName: '',
  });
  const [selectedGender, setSelectedGender] = useState(userSettingData.gender || null);
  useEffect(() => {
    const size = imgSize();
    setImgResize(size);
  }, [window.innerWidth]);

  const fetchUserData = async () => {
    try {
      const response = await userData();
      const user = response.data;
      console.log(user, 'user');
      const userSettingData = {
        birthdate: user.birthdate || '',
        gender: user.gender || '',
        name: user.name || '',
        nickname: user.nickname || '',
        mobile: user.mobile || '',
        profileImageName: user.profileImageUrl || null,
      };
      // console.log('데이터가져오기', userSettingData);
      setCurrentImgUrl(user.profileImageUrl);
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

  const handleGenderChange = (selectedGender: string) => {
    setSelectedGender(selectedGender);
    setUserSettingData((prevUserData) => ({ ...prevUserData, gender: selectedGender }));
  };

  const handleEdit = async (userData: UserData) => {
    await userDataPost(userData);
  };

  // img upload

  const onchangeImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imgUrl = e.target.files[0];
      const type = 'PROFILE';
      const img = await fetchImg(imgUrl, type);
      if (img && img.fileName) {
        setUploadImgUrl(img.imageUrl);
        // put 요청할 fileName userData에 담기
        setUserSettingData((prevUserData) => ({
          ...prevUserData,
          profileImageName: img.fileName,
        }));
      }
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <BasicLayout>
      <ContentContainer>
        <ProfileEditBox>
          <Profile userData={currentImgUrl} img={uploadImgUrl} />
          <IconBox>
            <input
              type='file'
              accept='image/*'
              style={{ display: 'none' }}
              onChange={onchangeImageUpload}
              ref={fileInputRef}
            />
            <IconBtnWrapper onClick={handleIconClick}>
              <EditIcon />
            </IconBtnWrapper>
          </IconBox>
        </ProfileEditBox>

        <InputContainer>
          <Input label='이름'>
            <Input.TextField value={userSettingData.name} onChange={handleNameChange} />
          </Input>
          <Input label='닉네임'>
            <Input.TextField value={userSettingData.nickname} onChange={handleNicknameChange} />
          </Input>
          <Divider />
          <Input label='생일'>
            <Input.TextField
              type='date'
              value={userSettingData.birthdate}
              onChange={handleBirthdayChange}
            />
          </Input>
          <GenderInput>
            <Typography $variant='subtitle2'>
              <Label>성별</Label>
            </Typography>
            <ButtonBox>
              <Button
                $variant={userSettingData.gender === 'MALE' ? 'lightPrimary' : 'grayOutline'}
                radius='medium'
                size='small'
                onClick={() => handleGenderChange('MALE')}
              >
                남
              </Button>
              <Button
                $variant={userSettingData.gender === 'FEMALE' ? 'lightPrimary' : 'grayOutline'}
                radius='medium'
                size='small'
                onClick={() => handleGenderChange('FEMALE')}
              >
                여
              </Button>
            </ButtonBox>
          </GenderInput>

          <Input label='전화번호'>
            <Input.TextField
              value={formatPhoneNumber(userSettingData.mobile)}
              onChange={handlePhoneChange}
            />
          </Input>
        </InputContainer>
        <div
          onClick={() => {
            handleEdit(userSettingData);
          }}
        >
          수정하기
        </div>
      </ContentContainer>
    </BasicLayout>
  );
};

export default UserProfileEdit;

const ContentContainer = styled.div`
  padding-bottom: 76px;
  ${common.flexCenterColumn}
`;

const ProfileEditBox = styled.div`
  position: relative;
`;

const IconBox = styled.div`
  position: absolute;
  right: -5px;
  bottom: -5px;
  ${common.flexCenterColumn}
  width: 31px;
  height: 31px;
  border: 3px solid ${colors.white};
  border-radius: ${RADIUS.large};
  background-color: ${colors.sub[900]};
`;

const InputContainer = styled.div`
  width: 100%;
  ${common.flexColumn}
  gap:12px;
`;

const GenderInput = styled.div`
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 9px;
`;

const Label = styled.div`
  margin-bottom: 10px;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: ${colors.gray[10]};
  margin: 24px 0;
`;
