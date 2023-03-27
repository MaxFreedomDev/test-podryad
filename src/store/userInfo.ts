import { makeAutoObservable } from 'mobx';
import { fetchUserInfo } from '~/services/userInfo';
import { IUserInfo } from '~/types/userInfo';

export class UserInfo {
  company: string = 'Метрострой Инвест';
  name: string = 'Стародубцев И.В.';
  information: IUserInfo | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  async fetchUserInformation() {
    try {
      const response = await fetchUserInfo();
      console.log(response, 'response');
      this.information = response;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new UserInfo();
