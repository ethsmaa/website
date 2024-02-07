'use client'

import React, { useState } from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { Menu } from "./Menu";
import { menuElements } from "../utils/constants";






export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav className="fixed top-0 left-0 right-0 bg-primary-100 bg-opacity-90 z-10 ">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-8">
                <Link className="text-2xl text-white font-extrabold" href={'/'}>kvothe</Link>

                <div className="mobile-menu block md:hidden">
                    {
                        isOpen ? <IoCloseOutline className="text-4xl text-white" onClick={() => setIsOpen(!isOpen)} /> :
                            <IoIosMenu className="text-4xl text-white" onClick={() => setIsOpen(!isOpen)} />
                    }

                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-10 mt-0">
                        {
                            menuElements.map((el, i) => (
                                <li key={i}>
                                    <NavLink href={el.href} title={el.title} />
                                </li>
                            ))

                        }
                    </ul>
                </div>
            </div>

            {isOpen ? <Menu links={menuElements} /> : null}
        </nav>

    )
}

