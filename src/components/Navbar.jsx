"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


export default function Navbar({
    className
}) {
    const [active, setActive] = useState(null);
    return (
       <div className="bg-white dark:bg-black flex items-center  px-10 py-8 justify-between">
        <div>
            <img src="https://hair.nelson.themerex.net/wp-content/uploads/2021/05/Beuaty-Logo2x.png" alt="" className="h-[50px] w-[100px]" />
        </div>
         <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 rounded-full", className)}>
            <Menu setActive={setActive}>
                <Link href="/">
                <MenuItem setActive={setActive} active={active} item="Home">
                    {/* <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">HAIR SALON</HoveredLink>
                        <HoveredLink href="/interface-design">CALENDER</HoveredLink>
                        <HoveredLink href="/seo">BEAUTY SALON</HoveredLink>
                        <HoveredLink href="/branding">BARBERSHOP VIDEO</HoveredLink>
                        <HoveredLink href="/seo">BACKGROUND</HoveredLink>
                        <HoveredLink href="/seo">NAILS ARTIST</HoveredLink>
                    </div> */}
                </MenuItem>
                </Link>
                <Link href="/our-services"><MenuItem setActive={setActive} active={active} item="Services"></MenuItem></Link>

                <Link href="/about"><MenuItem setActive={setActive} active={active} item="About US"></MenuItem></Link>

                <MenuItem setActive={setActive} active={active} item="Pages">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/seo">TOOLS</HoveredLink>
                        <HoveredLink href="/gallery">GALLERY</HoveredLink>
                        <HoveredLink href="/seo">SIMPLE GALLERY</HoveredLink>
                        <HoveredLink href="/seo">OUR TEAM</HoveredLink>
                    </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="News">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/seo">ALL POSTS</HoveredLink>
                        <HoveredLink href="/seo">CLASSIC</HoveredLink>
                        <HoveredLink href="/seo">PORTFOLIO</HoveredLink>
                        <HoveredLink href="/seo">CHESS</HoveredLink>
                    </div>
                </MenuItem>

                {/* <MenuItem setActive={setActive} active={active} item="Shop"></MenuItem> */}

               <Link href="/contact"> <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem></Link>

                <Link href="/appointment"> <MenuItem setActive={setActive} active={active} item="Appointment"></MenuItem></Link>

            </Menu>
        </div>
       </div>
    );
}
