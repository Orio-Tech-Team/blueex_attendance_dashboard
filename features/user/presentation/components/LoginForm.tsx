'use client';

import {
  TextField,
  Button,
  CircularProgress,
  TextFieldProps,
} from '@mui/material';
import useLogin from 'features/user/presentation/hooks/useLogin';
import { useRef } from 'react';

const LoginForm = () => {
  const { login, error, isLoading } = useLogin();
  const usernameRef = useRef<TextFieldProps>();
  const passwordRef = useRef<TextFieldProps>();

  const onSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    await login(
      usernameRef.current?.value as string,
      passwordRef.current?.value as string,
    );
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-[35rem] flex flex-col justify-center items-center gap-4"
    >
      <h1>Login</h1>
      {error && (
        <div className="text-white bg-red-300 p-3 w-[20rem] rounded-sm">
          {error}
        </div>
      )}
      <TextField
        label="Username"
        variant="outlined"
        className="w-[20rem]"
        inputRef={usernameRef}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        className="w-[20rem]"
        inputRef={passwordRef}
        required
      />
      <Button
        variant="contained"
        type="submit"
        className="w-[20rem] h-[3.2rem] bg-blue-500"
      >
        {isLoading ? <CircularProgress sx={{ color: 'white' }} /> : 'Login'}
      </Button>
    </form>
  );
};

export default LoginForm;
