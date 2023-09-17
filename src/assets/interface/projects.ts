export interface IProjects {
    id: number;
    image: string;
    imageWebp: string;
    technologies: string[];
    title: string;
    description: string;
    liveLink: string | undefined;
    repository: string | undefined;
    repositoryName: string | undefined;
    category: string;
}