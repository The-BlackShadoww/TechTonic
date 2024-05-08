import { ReactNode } from "react";

export type NavLinksType = {
    name: string;
    href: string;
};

export type SectionType = {
    children: ReactNode;
    sectionClass?: string;
    className?: string;
    bg?: string;
};
