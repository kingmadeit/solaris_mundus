import { IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';

/***
 * 
 * This file holds the data for the entire application.
 * It includes navigation links, social links, section content, and portfolio items.
 * It is used across various components to render the UI dynamically.
 * 
 * If you need to add or modify any data used in the application, this is the file to do it in.
 * 
 * * @file src/lib/data.ts
 * * @module data
 * * @author kingmadeit (Made with ❤️ by King)
 */

import { NavLink, SectionContent, SectionContentMap, PortfolioItem, TSocialLink } from "@/types/types"

/***
 * 
 * Define the navigation links for the application.
 * Each link has an id, name, href, and aka (also known as).
 * This structure allows for easy mapping and rendering of navigation links in the UI.
 */
export const navLinks: NavLink[] = [
    { id: "1", name: 'Home', href: '/', aka: 'Home'},
    { id: "2", name: 'Portfolio', href: '/portfolio', aka: 'My Portfolio'},
    { id: "3", name: 'About', href: '/about', aka: 'About Us'},
    { id: "4", name: 'Contact', href: '/contact', aka: 'Contact Me' }
] as const;

/***
 * 
 * Define the social links for the application.
 * Each link has an id, name, href, and icon.
 * This structure allows for easy mapping and rendering of social links in the UI.
 */
export const socialLinks: TSocialLink[] = [
    { id: "1", name: 'Twitter', href: 'https://www.twitter.com', icon: IconBrandTwitter },
    { id: "2", name: 'Instagram', href: 'https://www.instagram.com', icon: IconBrandInstagram },
    { id: "3", name: 'LinkedIn', href: 'https://www.linkedin.com', icon: IconBrandLinkedin },
]

/***
 * * This section defines the content for different sections of the application.
 */
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

/***
 * * This section defines the portfolio items to be displayed in the portfolio section.
 * * Each item has a title, description, image, and link.
 */
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
