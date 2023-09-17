export interface IProjectCard {
    className?: string | undefined;
    image?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    technologies?: any;
}

export interface ISmallProjectCard {
    buttonTitle?: string | undefined;
    to?: string | undefined;
    [key: string]: any;
}