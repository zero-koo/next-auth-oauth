import type { NextAuthConfig } from 'next-auth';
import google from 'next-auth/providers/google';
import kakao from 'next-auth/providers/kakao';

export default {
  providers: [google, kakao],
} satisfies NextAuthConfig;
