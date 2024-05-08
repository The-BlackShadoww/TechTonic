import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Section from "../section/Section";

const Footer = () => {
    const footerNav = [
        { name: "Jobs", href: "/" },
        { name: "Privacy", href: "/" },
        { name: "Terms", href: "/" },
        { name: "Leagal Notice", href: "/" },
    ];

    return (
        <footer>
            <Section bg={"#fafbff"} sectionClass={"mt-20 py-28"}>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div>
                        <h1 className="text-5xl leading-[65px] font-normal">
                            Elevate Your Brand Online - Start Your Web Design
                            Journey with Techtonic.
                        </h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <BiSupport size={220} color="#673de6" />
                    </div>
                </div>
                <hr className="my-20" />
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-20 py-10 text-xl">
                    <div className="space-y-1 [&>p]:font-normal">
                        <h1 className="text-[#673de6] font-bold">TechTonic</h1>
                        <p>Dhaka</p>
                        <p>Bangladesh</p>
                        <br />
                        <p>+088 12345678911</p>
                        <p>hello@techtonic.com</p>
                    </div>
                    <div className="flex flex-col justify-end items-end">
                        <div className="flex gap-4 mb-6">
                            <Link href="/">
                                <FaLinkedin size={30} />
                            </Link>
                            <Link href="/">
                                <FaXTwitter size={30} />
                            </Link>{" "}
                            <Link href="/">
                                <FaYoutube size={30} />
                            </Link>
                        </div>
                        <div>
                            <ul className="w-full flex justify-between items-center gap-x-6">
                                {footerNav.map((r) => (
                                    <li key={r.name}>
                                        <Link
                                            className="relative font-medium w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#673de6] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left"
                                            href={r.href}
                                        >
                                            {r.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </footer>
    );
};

export default Footer;
