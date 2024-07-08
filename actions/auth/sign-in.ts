'use server';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const socialLogin = (
  site: Parameters<typeof signIn>[0],
  redirectTo?: string
) => {
  return signIn(site, {
    redirectTo: redirectTo ?? DEFAULT_LOGIN_REDIRECT,
  });
};
