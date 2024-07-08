# Next.js 소셜 로그인 구현 예제

이 레포지토리는 Next.js와 NextAuth.js(AuthJS)를 사용하여 소셜 로그인을 구현한 간단한 예제입니다. 사용자는 Google, Naver, Kakao 계정을 통해 로그인할 수 있습니다. 또한, Next.js 미들웨어를 사용하여 프라이빗 및 퍼블릭 라우트를 효과적으로 관리합니다.

## 주요 기능

- **[NextAuth (AuthJS)](https://authjs.dev/)를 사용한 소셜 로그인**
  - Google, Naver, Kakao 로그인 지원


- **Next.js 미들웨어를 사용한 라우트 핸들링**

  - **프라이빗 라우트:** 인증되지 않은 상태로 접근 시 로그인 페이지로 리디렉션됩니다. 로그인 후 원래 요청한 페이지로 이동합니다.

  - **퍼블릭 라우트:** 로그인/회원가입 페이지 접근 시 이미 로그인된 사용자는 메인 페이지로 리디렉션됩니다.

## 설치 및 설정

1. 레포지토리 클론:
   ```bash
   git clone https://github.com/zero-koo/next-auth-oauth.git
   
   cd next-auth-oauth
   ```

2. 의존성 설치:
   ```bash
   pnpm install
   ```

3. 환경 변수 설정:
   루트 디렉토리에 `.env` 파일을 생성하고 환경 변수를 추가합니다. NextAuth Secret 및 Google, Naver, Kakao 인증에 필요한 KEY, SECRECT 을 추가해야 합니다.

   ```plaintext
   AUTH_SECRET={AUTH_SECRET}

   AUTH_GOOGLE_ID={AUTH_GOOGLE_ID}
   AUTH_GOOGLE_SECRET={AUTH_GOOGLE_SECRET}

   AUTH_NAVER_ID={AUTH_NAVER_ID}
   AUTH_NAVER_SECRET={AUTH_NAVER_SECRET}

   AUTH_KAKAO_ID={AUTH_KAKAO_ID}
   AUTH_KAKAO_SECRET={AUTH_KAKAO_SECRET}
   ```

   AUTH_SECRET은 [NextAuth 공식문서 가이드](https://authjs.dev/getting-started/installation#setup-environment)를 참조하여 생성할 수 있습니다.

4. 개발 서버 실행:
   ```bash
   pnpm run dev
   ```

5. 브라우저에서 [http://localhost:3000](http://localhost:3000) 열기.


## 미들웨어

### Private 라우트

사용자가 프라이빗 라우트에 접근할 때 로그인 여부를 확인합니다. 로그인하지 않은 사용자는 로그인 페이지로 리다이렉션됩니다. 로그인에 성공하면 사용자는 원래 요청한 페이지로 리다이렉션됩니다.

### Authentication 라우트

로그인 또는 회원가입 페이지에 접근하려는 인증된 사용자를 메인 페이지로 리다이렉션합니다.

## 기타 사항

이 프로젝트는 https://github.com/zero-koo/nextjs-base-kit 레포지토리를 degit 하여 생성하였습니다.
