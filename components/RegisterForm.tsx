'use client'

import { registerUser } from '@/actions/auth';
import { useFormState } from "react-dom";
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import {EyeFilledIcon} from "./EyeFilledIcon"
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import Link from 'next/link';

const initialState = { message: "" };

const RegisterForm = () => {

    const [formState, action] = useFormState(registerUser, initialState);

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <form action={action} className='bg-white border border-0.5 shadow-lg rounded-lg p-10 flex flex-col gap-5 justify-center justify-center items-center'>
            <h3 className='mb-3 text-xl font-bold'>REGISTER</h3>
            <Input
                name="email"
                type="email"
                label="Email"
                variant='bordered'
                size="md"
                required
                fullWidth
            />
            <Input
                name="password"
                type={isVisible ? "text" : "password"}
                label="Password"
                variant='bordered'
                size="md"
                required
                fullWidth
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                    {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                    </button>
                }
            />
            <Input
                name="password-confirm"
                type={isVisible ? "text" : "password"}
                label="Password Confirm."
                variant='bordered'
                size="md"
                required
                fullWidth
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                    {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                    </button>
                }
            //   className="max-w-xs"
            />
            {formState?.message && <p>{formState.message}</p>}
            <Button color="secondary" className='mt-5' >Submit</Button>
            <div>
                <Link href='/signin'>Already have an account?</Link>
            </div>
        </form>
    )
}

export default RegisterForm;