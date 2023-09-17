import React from "react";

export interface IParams {
    path?: string | any;
    element?: React.ReactNode | null;
    id: number;
    [key: string]: any;
}