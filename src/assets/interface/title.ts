import React from "react";

export interface ITitle {
    children: React.ReactNode | string ;
    heading: string;
    className?: string;
    ref?: React.LegacyRef<HTMLParagraphElement> | undefined;
    hidden?: boolean;
}