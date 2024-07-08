'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '../ui/button';

const SignIn = () => {
  const pathname = usePathname();

  return (
    <Link href={`/auth/login?redirect=${pathname}`}>
      <Button>로그인</Button>
    </Link>
  );
};

export default SignIn;
