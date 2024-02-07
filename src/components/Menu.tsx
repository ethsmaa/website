
import { link } from "fs/promises";
import React from "react";
import { NavLink } from "./NavLink";

interface Link {
    href: string;
    title: string;
}

interface MenuProps {
    links: Link[];
}

export const Menu: React.FC<MenuProps> = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
           {
                links.map((el,i) => (
                    <li key={i}>
                        <NavLink href={el.href} title={el.title}></NavLink> </li>
                ))
                    
           }
        </ul>

    );
};
