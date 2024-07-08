import React from 'react';
import { googleLogin, kakaoLogin, naverLogin } from '@/actions/auth/sign-in';
import { FaGoogle } from 'react-icons/fa';
import { SiKakaotalk, SiNaver } from 'react-icons/si';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import OAuthButton from './o-auth-button';

type AuthFormProps = React.PropsWithChildren<{
  title: string;
}>;

const AuthForm = ({ title }: AuthFormProps) => {
  return (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle className="px-1 text-xl font-extrabold tracking-widest">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2.5">
        <form action={googleLogin}>
          <OAuthButton icon={FaGoogle} siteName="구글" />
        </form>
        <form action={naverLogin}>
          <OAuthButton icon={SiNaver} siteName="네이버" />
        </form>
        <form action={kakaoLogin}>
          <OAuthButton icon={SiKakaotalk} siteName="카카오" />
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
