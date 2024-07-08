import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default async function Home() {
  return (
    <div className="space-y-5 text-sm">
      <section>
        <Link href="/public">
          <Button>Go to Public Page</Button>
        </Link>
        <div className="space-y-1 py-2">
          <p>로그인 전에도 접근 가능한 페이지 입니다.</p>
        </div>
      </section>
      <section>
        <Link href="/private">
          <Button>Go to Private Page</Button>
        </Link>
        <div className="space-y-1 py-2">
          <p>로그인한 유저만 접근 가능한 페이지 입니다.</p>
          <p>비로그인 상태로 접근시 로그인 페이지로 이동하며,</p>
          <p>로그인 후 이 페이지로 리다리렉트 됩니다.</p>
        </div>
      </section>
    </div>
  );
}
