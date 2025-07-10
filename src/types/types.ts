
export type sectionContent = {
    title: string;
    body: string;
    cta?: string;
    image?: string;
};

export type portfolioItem = {
    title: string;
    description?: string;
    image: string;
    link?: string;
};


export type sectionContentMap = {
    [key: string]: sectionContent;
}

export type navLink = {
    name: string;
    href: string;
    aka?: string;
};

export type socialLink = {
    name?: string;
    href: string;
    icon?: string;
};