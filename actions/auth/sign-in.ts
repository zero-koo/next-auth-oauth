'use server';

import { signIn } from '@/auth';

export const googleLogin = () =>
  signIn('google', {
    redirectTo: '/',
  });

export const naverLogin = () =>
  signIn('naver', {
    redirectTo: '/',
  });

export const kakaoLogin = () =>
  signIn('kakao', {
    redirectTo: '/',
  });
