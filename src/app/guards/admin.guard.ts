import { CanMatchFn } from '@angular/router';

export const CanMatchAdminGuard: CanMatchFn = (route, segments) => {
  const isAdminLogin = sessionStorage.getItem('admin');
  if (isAdminLogin) return true;
  else return false;
};
