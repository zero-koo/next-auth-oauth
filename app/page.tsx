import { auth } from '@/auth';

import SignIn from '@/components/auth/sign-in';
import SignOut from '@/components/auth/sign-out';
import UserInfo from '@/components/auth/user-info';

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <UserInfo />
      <SignIn />
      {session?.user && <SignOut />}
    </main>
  );
}
