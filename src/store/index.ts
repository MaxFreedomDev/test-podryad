import userInfo, { UserInfo } from '~/store/userInfo';

export type RootStore = {
  userInfo: UserInfo;
};

const rootStore: RootStore = {
  userInfo,
};

export default rootStore;
