import Image from "next/image";
import Link from "next/link";
import React from "react";
import Mobile from "./Mobile";

const Header = () => {
    const routes = [
        {
            name: "About",
            href: "/",
        },
        {
            name: "Team",
            href: "/",
        },
        {
            name: "Services",
            href: "/",
        },
        {
            name: "Blog",
            href: "/",
        },
    ];

    return (
        <header className="w-full backdrop-blur-sm bg-[#fafbff]/20 fixed top-0 left-0 right-0 z-10 border-b">
            <nav className="container relative w-full flex justify-between items-center px-2 py-3">
                <div className="user-select-none z-20">
                    <Link href="/">
                        <Image
                            src="/Logo.png"
                            width={180}
                            height={180}
                            alt="tecTonic-logo"
                        />
                    </Link>
                </div>
                <div className="lg:block hidden">
                    <ul className="w-full flex justify-between items-center gap-x-6">
                        {routes.map((r) => (
                            <li key={r.name}>
                                <Link
                                    className="relative font-medium w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#673de6] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left"
                                    href={r.href}
                                >
                                    {r.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                className="border border-[#673de6] py-3 px-6 relative hover:text-white font-medium w-fit block after:block after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[#673de6] after:scale-x-0 after:origin-right after:transition after:duration-300 after:hover:scale-x-100 after:hover:origin-left after:hover:-z-10"
                                href="/"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Mobile */}
                <Mobile routes={routes} />
            </nav>
        </header>
    );
};

export default Header;
