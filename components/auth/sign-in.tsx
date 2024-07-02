import { signIn } from '@/auth';

function SignIn() {
  return (
    <>
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <form
        action={async () => {
          'use server';
          await signIn('naver');
        }}
      >
        <button type="submit">Signin with Naver</button>
      </form>
      <form
        action={async () => {
          'use server';
          await signIn('kakao');
        }}
      >
        <button type="submit">Signin with Kakao</button>
      </form>
    </>
  );
}

export default SignIn;
