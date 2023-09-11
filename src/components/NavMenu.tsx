"use client";

import { MenuIcon, XIcon } from "lucide-react";
import React, { FC, useEffect, useState } from "react";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import Link from "next/link";

interface NavMenuProps { }

const menuItems = [
    {
        name: "Home",
        href: "/",
        // icon: HomeIcon,
    },
    {
        name: "About",
        href: "/#about",
        // icon: HeartHandshakeIcon,
    },
    {
        name: "Locations",
        href: "/#services",
        // icon: PuzzleIcon,
    },
    {
        name: "Resellers",
        href: "/#products",
        // icon: RocketIcon,
    },
    {
        name: "Contact",
        href: "/#contact",
        // icon: PhoneCallIcon,
    },
];

const NavMenu: FC<NavMenuProps> = ({ }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [position, setPosition] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            let moving = window.scrollY;

            setVisible(position > moving);
            setPosition(moving);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const cls = visible ? "visible" : "-translate-y-[3rem] opacity-0";

    return (
        <div className="p-1 w-1/2">
            <div className="flex justify-center lg:hidden ">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2.5 text-white/90"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white" align="end">
                        {menuItems.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <DropdownMenuItem asChild>
                                        <Link href={item.href}>{item.name}</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                </div>
                            );
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <ul className="p-1 hidden lg:flex place-content-between">
                {menuItems.map((item, idx) => {
                    return (
                        <a
                            href={item.href}
                            className="font-semibold leading-6 text-white/70 group-hover:text-white/80"
                            // onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            key={idx}
                        >
                            <li className="group flex w-full items-center rounded-xl px-2 py-2 text-md  hover:ring-1 hover:ring-yellow-400">
                                {/* <item.icon
                            className="mr-2 h-5 w-5 text-white/70 group-hover:text-[#0ea5e9]/80"
                            aria-hidden="true"
                          /> */}
                                {item.name}
                            </li>
                        </a>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavMenu;
