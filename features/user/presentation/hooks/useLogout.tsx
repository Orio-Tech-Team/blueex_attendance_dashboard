import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    setCookie('token', '');
    window.location.reload();
  };

  return logout;
};

export default useLogout;
