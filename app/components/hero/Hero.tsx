import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "../section/Section";

const Hero = () => {
    return (
        <Section
            bg={""}
            className={"w-full lg:h-[80vh] h-auto my-20 lg:p-0 px-4 py-20"}
            sectionClass={""}
        >
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-y-20 w-full h-full">
                <div className="flex flex-col justify-center items-start space-y-10 lg:pl-16 pl-0">
                    <h1 className="xl:text-[60px] sm:text-[50px] text-[40px] font-semibold xl:leading-[70px] sm:leading-[60px] leading-[55px]">
                        Web Design &
                        <br />
                        Development Done Right.
                    </h1>
                    <Link className="btn" href="/">
                        Contact Us
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src="/hero.svg"
                        alt="hero_illustration"
                        width={550}
                        height={550}
                    />
                </div>
            </div>
            <hr />
        </Section>
    );
};

export default Hero;
