import { NavLink, SectionContent, SectionContentMap, PortfolioItem, SocialLink } from "@/types/types"

export const navLinks: NavLink[] = [
    { id: "1", name: 'Home', href: '/', aka: 'Home'},
    { id: "2", name: 'Portfolio', href: '/portfolio', aka: 'My Portfolio'},
    { id: "3", name: 'About', href: '/about', aka: 'About Us'},
    { id: "4", name: 'Contact', href: '/contact', aka: 'Contact Me' }
] as const;

export const socialLinks: SocialLink[] = [
    { id: "1", name: 'Twitter', href: 'https://www.twitter.com', icon: 'twitter' },
    { id: "2", name: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
    { id: "3", name: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
]

export const content: SectionContentMap = {
    home: {
        title: 'Why Solar?',
        body: 'Solar energy is becoming increasingly necessary for homeowners in New Jersey for several reasons.',
        cta: 'Learn More',
        image: '/images/home-banner.jpg'
    },
    portfolio: {
        title: 'Meet Roman Groenland',
        body: 'Explore my recent projects and achievements.',
        cta: 'View Projects',
        image: '/images/portfolio-banner.jpg'
    },
    about: {
        title: 'About Us',
        body: 'Learn more about our mission and values.',
        cta: 'Read More',
        image: '/images/about-banner.jpg'
    },
    contact: {
        title: 'Get in Touch',
        body: 'We would love to hear from you. Reach out to us today!',
        cta: 'Contact Us',
        image: '/images/contact-banner.jpg'
    }
}

export const portfolioItems: PortfolioItem[] = [
    {
        title: 'Project One',
        description: 'Description of project one.',
        image: '/images/project1.jpg',
        link: '/portfolio/project-one'
    },
    {
        title: 'Project Two',
        description: 'Description of project two.',
        image: '/images/project2.jpg',
        link: '/portfolio/project-two'
    },
    {
        title: 'Project Three',
        description: 'Description of project three.',
        image: '/images/project3.jpg',
        link: '/portfolio/project-three'
    }
]
