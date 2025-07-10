
export type SectionContent = {
    title: string;
    body: string;
    cta?: string;
    image?: string;
};

export type PortfolioItem = {
    title: string;
    description?: string;
    image: string;
    link?: string;
};


export type SectionContentMap = {
    [key: string]: SectionContent;
}

export type NavLink = {
    name: string;
    href: string;
    aka?: string;
};

export type SocialLink = {
    name?: string;
    href: string;
    icon?: string;
};