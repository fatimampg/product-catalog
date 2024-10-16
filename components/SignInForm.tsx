'use client'

import { signInUser } from '@/actions/auth';
import { useFormState } from "react-dom";
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import {EyeFilledIcon} from "./EyeFilledIcon"
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

const initialState = { message: "" };

const SignInForm = () => {

    const [formState, action] = useFormState(signInUser, initialState);

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <form action={action} className='bg-white border border-0.5 shadow-lg rounded-lg p-10 flex flex-col gap-5 justify-center justify-center items-center'>
            <h3 className='mb-3 text-xl font-bold'>SIGN IN</h3>
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

            //   className="max-w-xs"
            />
            <Button color="secondary" className='mt-5'>Button</Button>

        </form>
    )
}

export default SignInForm;