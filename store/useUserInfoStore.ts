import create from 'zustand';

type UserInfo = {
  email: string;
  // 다른 사용자 정보 속성들 추가
};

type UserInfoState = {
  userInfo: UserInfo | null;
  setUserInfo: (userInfo: UserInfo | null) => void;
};

const useUserInfoStore = create<UserInfoState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
}));

export default useUserInfoStore;