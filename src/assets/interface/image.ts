import { CSSProperties } from "react";

export interface IImage {
    className?: string | undefined;
    srcSet?: string | undefined;
    src?: string | undefined;
    depth?: string | undefined;
    style?: CSSProperties | undefined;
}