'use server';
import { cookies } from 'next/headers';
import { signin, register } from '@/utils/authUtils';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { COOKIE_NAME } from '@/utils/constants';

const authSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerUser = async (prevState: any, formData: FormData) => {
  try {
    const authData = authSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });
    const { token } = await register(authData);
    cookies().set(COOKIE_NAME, token); // store token on cookies to be able to access it from all of my server side functions
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Please type a valid email address.' };
    }
    return { success: false, message: 'Failed to register' };
  }
  redirect('/');
};

export const signInUser = async (revState: any, formData: FormData) => {
  try {
    const authData = authSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });
    const { token } = await signin(authData);
    cookies().set(COOKIE_NAME, token);
  } catch (error) {
    console.log(error);

    if (error instanceof z.ZodError) {
      return { success: false, message: 'Please type a valid email address.' };
    }
    return { success: false, message: 'Invalid email and/or password.' };
  }
  redirect('/');
};
