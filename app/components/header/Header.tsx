import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
    const routes = [
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
        <nav className="border w-full flex justify-between items-center px-2 py-3">
            <div>
                <Image
                    src="/Logo.png"
                    width={180}
                    height={180}
                    alt="tecTonic-logo"
                />
            </div>
            <div>
                <ul className="w-full flex justify-between items-center gap-x-5">
                    {routes.map((r) => (
                        <li key={r.name}>
                            <Link href={r.href}>{r.name}</Link>
                        </li>
                    ))}
                    <li>
                        <Link className="bg-[#]" href="/">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
