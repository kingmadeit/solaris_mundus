/***
 * This file defines the types used throughout the application.
 * It includes types for navigation links, section content, portfolio items, and social links.
 * These types help ensure type safety and consistency across the application.
 * 
 * @file src/types/types.ts
 * @module types
 * @author kingmadeit (Made with ❤️ by King)
 */

import { IconBrandTwitter } from '@tabler/icons-react';

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
    id: string | number;
    name: string;
    href: string;
    aka?: string;
};


export type TSocialLink = {
    id: string;
    name?: string;
    href: string;
    icon?: typeof IconBrandTwitter; // Using Tabler Icons as an example, can be replaced with any icon type
};