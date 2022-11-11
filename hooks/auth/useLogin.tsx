import { setCookie } from 'cookies-next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    if (username === 'anam' && password === 'anam123') {
      setCookie('token', '1234');
      setIsLoading(false);
      router.push('/dashboard');
    } else {
      setIsLoading(false);
      setError('Username or password is incorrect');
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
