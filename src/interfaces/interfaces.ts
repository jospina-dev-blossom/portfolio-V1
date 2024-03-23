export interface Experience {
    id: number;
    startedDate: string;
    endDate: string;
    position: string;
    description: string;
    tools: string[];
    link: string
}

export interface Project {
    id: number;
    title: string;
    company: string;
    description: string;
    img: string;
    tools: string[];
    link: string;
}

export interface SocialMedia {
    id: number;
    title: string;
    icon: React.ReactNode;
    link: string;
}