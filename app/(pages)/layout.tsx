import Link from 'next/link';
import { auth } from '@/auth';
import { HiHome } from 'react-icons/hi';

import SignIn from '@/components/auth/sign-in';
import SignOut from '@/components/auth/sign-out';
import UserInfo from '@/components/auth/user-info';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <>
      <header className="fixed inset-x-0 top-0 flex h-14 items-center px-3 shadow">
        <Link href="/" className="mr-auto">
          <HiHome size={30} />
        </Link>
        {!session?.user ? (
          <SignIn />
        ) : (
          <div className="flex items-center gap-3">
            <UserInfo />
            <SignOut />
          </div>
        )}
      </header>
      <main className="mt-14 p-3 py-5">{children}</main>
    </>
  );
}
