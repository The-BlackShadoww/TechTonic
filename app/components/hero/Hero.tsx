import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section className="container w-full lg:h-[70vh] h-auto mb-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-y-20 w-full h-full">
                <div className="flex flex-col justify-center items-start space-y-10 lg:pl-16 pl-0">
                    <h1 className="text-[60px] font-semibold leading-[70px]">
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
        </section>
    );
};

export default Hero;
