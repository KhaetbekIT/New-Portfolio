import React from "react";

export interface IForm {
    className?: string | undefined;
    children?: React.ReactNode | undefined;
    type?: string | undefined;
    title?: string | undefined;
    inputRef?: React.LegacyRef<HTMLInputElement> | undefined;
    textareaRef?: React.LegacyRef<HTMLTextAreaElement> | undefined;

}