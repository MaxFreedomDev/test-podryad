import { IUserInfo } from '~/types/userInfo';

const BASE = 'http://localhost:3004/userInfo';

export async function fetchUserInfo(): Promise<IUserInfo> {
  const res = await fetch(BASE);

  if (!res.ok) throw new Error('Failed to fetch userInfo!');

  return res.json();
}
