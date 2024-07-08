import { signOut } from '@/auth';

import { Button } from '../ui/button';

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({
          redirectTo: '/',
        });
      }}
    >
      <Button type="submit">로그아웃</Button>
    </form>
  );
}

export default SignOut;
