'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { socialLogin } from '@/actions/auth/sign-in';
import { FaGoogle } from 'react-icons/fa';
import { SiKakaotalk, SiNaver } from 'react-icons/si';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import OAuthButton from './o-auth-button';

type AuthFormProps = React.PropsWithChildren<{
  title: string;
  redirect?: boolean;
}>;

const AuthForm = ({ title, redirect }: AuthFormProps) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const login = (site: 'google' | 'naver' | 'kakao') =>
    socialLogin(site, { redirect, redirectTo: callbackUrl ?? undefined });

  return (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle className="px-1 text-xl font-extrabold tracking-widest">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2.5">
        <form action={() => login('google')}>
          <OAuthButton icon={FaGoogle} siteName="구글" />
        </form>
        <form action={() => login('naver')}>
          <OAuthButton icon={SiNaver} siteName="네이버" />
        </form>
        <form action={() => login('kakao')}>
          <OAuthButton icon={SiKakaotalk} siteName="카카오" />
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
