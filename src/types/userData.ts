export type UserData = {
  birthdate: string;
  gender: string;
  name: string;
  nickname: string;
  mobile: string;
  profileImageUrl: string | null;
};

export type UserProfile = {
  nickname: string;
  profileImageUrl: string | null;
  birthdate: string;
};

export type Anniversary = {
  children: string;
  birthdata: boolean;
  anniversaryCount?: number;
  onClick?: () => void;
};
