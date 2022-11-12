'use client';

import LoginForm from 'features/user/presentation/components/LoginForm';

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-blue-500"></div>
      <LoginForm />
    </div>
  );
}
