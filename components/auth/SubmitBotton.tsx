'use client'

import { Button, ButtonProps } from '@nextui-org/react';
import { useFormStatus } from "react-dom";

interface SubmitButtonProps extends ButtonProps {
    label: string;
}

const SubmitButton = ({ label, ...buttonProps } : SubmitButtonProps) => {
    const { pending } = useFormStatus(); //btn inside a form, will know about the status of that form's action
    return (
        <Button {...buttonProps} type="submit" isLoading={pending} >{label}</Button>
    )
}

export default SubmitButton;