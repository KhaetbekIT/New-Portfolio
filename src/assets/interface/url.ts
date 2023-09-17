import React from "react";

export interface IUrl {
    to?: string | undefined;
    children?: React.ReactNode | undefined;
    target?: React.HTMLAttributeAnchorTarget | undefined;
    download?: any;
    className?: string | undefined;
}