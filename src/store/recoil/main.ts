import { atom } from 'recoil';

export const countState = atom({
  key: 'main/countState',
  default: 0,
});
