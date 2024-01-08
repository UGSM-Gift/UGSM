import { ROUTES_PATH } from './routes';

export type SettingItem = {
  name: string;
  path?: string; // `path`는 `ROUTES_PATH`의 키 중 하나거나 없을 수 있습니다.
};

export const settings: SettingItem[] = [
  {
    name: '회원 정보 수정',
    path: ROUTES_PATH.userProfileEdit,
  },
  {
    name: '알림 설정',
    path: ROUTES_PATH.notificationSetting,
  },
  {
    name: '로그아웃',
    // 로그아웃은 경로 대신 로그아웃을 처리할 함수를 호출해야 하므로 path는 없음
  },
  {
    name: '회원 탈퇴',
    path: ROUTES_PATH.accountDelete,
  },
];
