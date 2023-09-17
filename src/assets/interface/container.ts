import React from "react";

export interface IContainer {
    children: React.ReactNode;
    sm?: string | undefined;
    md?: string | undefined;
    lg?: string | undefined;
    xl?: string | undefined;
    className?: string | undefined
}