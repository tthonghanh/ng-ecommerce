import { CanMatchFn } from '@angular/router';

export const CanMatchUserGuard: CanMatchFn = (route, segments) => {
  const isUserLogin = sessionStorage.getItem('user');
  if (isUserLogin) return true;
  else return false;
};
