'use server'
import { cookies } from "next/headers";
import { signin, register } from "@/utils/authUtils";
import { z } from 'zod';
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils/constants";

const authSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const registerUser = async (prevState: any, formData: FormData) => {
    const authData = authSchema.parse({
        email: formData.get('email'),
        password: formData.get('password')
    });

    try {
        const { token } = await register(authData);
        cookies().set(COOKIE_NAME, token); // store token on cookies to be able to access it from all of my server side functions 
    } catch (error) {
        console.log(error);
        return {message: 'Failed to register'}
    }
    redirect('/home')
}

export const signInUser = async (revState: any, formData: FormData) => {
    const authData = authSchema.parse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    try {
        const { token } = await signin(authData);
        cookies().set(COOKIE_NAME, token);
    } catch (error) {
        console.log(error);
        return {message: 'Failed to sign in'}
    }
    redirect('/home');
 }