import React from "react";

export interface IParallaxContainer {
    children?: React.ReactNode | undefined;
    scene?: React.RefObject<HTMLElement> | React.RefObject<HTMLDivElement> | null;
    parallaxItems?: React.RefObject<HTMLElement>[] | React.RefObject<HTMLDivElement>[] | null[];
}

export interface IParallaxItem {
    children?: React.ReactNode | undefined;
    parallaxPosition?: number;
    className?: string | undefined;
}