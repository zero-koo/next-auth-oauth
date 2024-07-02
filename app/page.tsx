import SignIn from '@/components/auth/sign-in';
import SignOut from '@/components/auth/sign-out';

export default function Home() {
  return (
    <main>
      <SignIn />
      <SignOut />
    </main>
  );
}
