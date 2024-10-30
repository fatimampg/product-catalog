'use client';

import { signInUser } from '@/actions/auth';
import { useFormState } from 'react-dom';
import { Input } from '@nextui-org/react';
import { useRef, useState, useEffect } from 'react';
import { EyeFilledIcon } from './EyeFilledIcon';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';
import Link from 'next/link';
import SubmitButton from './SubmitBotton';

const initialState = { success: false, message: '' };

const SignInForm = () => {
  const inputFormRef = useRef<HTMLFormElement>(null);
  const [formState, action] = useFormState(signInUser, initialState);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (formState.message) {
      // inputFormRef.current?.reset();
      setMessage(formState.message);
    }
  }, [formState.message]);

  const clearMessageWhenTyping = () => {
    if (message) {
      setMessage('');
    }
  };

  return (
    <form
      ref={inputFormRef}
      action={action}
      className="bg-white border border-0.5 shadow-lg rounded-lg p-10 flex flex-col justify-center items-center"
    >
      <h3 className="mb-6 text-2xl font-bold">Sign in</h3>
      <Input
        name="email"
        type="email"
        label="Email"
        variant="bordered"
        size="md"
        required
        fullWidth
        className="mb-4"
        onChange={clearMessageWhenTyping}
      />
      <Input
        name="password"
        type={isVisible ? 'text' : 'password'}
        label="Password"
        variant="bordered"
        size="md"
        required
        fullWidth
        className={`${message ? 'mb-4' : 'mb-5'}`}
        onChange={clearMessageWhenTyping}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
      />
      {message && (
        <p className="text-sm bg-red-50 text-gray-400 w-full h-6 flex items-center justify-center">
          {message}
        </p>
      )}

      <SubmitButton
        label={'Continue'}
        color="default"
        className={`${message ? 'mt-3' : 'mt-8'} bg-black text-white text-sm w-full rounded-full p-6 mb-6`}
      />
      <p className="text-sm">
        Don't have an accout?{' '}
        <Link href="/register" className="underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
