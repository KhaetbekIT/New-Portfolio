import React from "react";

export interface IButton {
    className?: string | undefined;
    children?: React.ReactNode | undefined;
    type?: boolean;
    onClick?: (...params: any) => any | undefined | React.MouseEventHandler<HTMLButtonElement>;
    buttonType?: 'submit' | 'reset' | 'button' | undefined;
}