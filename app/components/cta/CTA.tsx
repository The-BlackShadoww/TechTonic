import React from "react";
import Button from "../ui/button/Button";
import Section from "../section/Section";

const CTA = () => {
    return (
        <Section bg={"#673de6"} sectionClass={"sectionGap lg:px-10 lg:py-24"}>
            
                <div className="container w-full grid grid-cols-12 lg:gap-10 gap-0 text-white">
                    <div className="py-10 lg:col-span-4 col-span-12">
                        <h1 className="text-5xl leading-[65px] font-normal">
                            Together, We Can Make the Web a Better Place
                        </h1>
                    </div>
                    <div className="py-10 lg:col-span-8 col-span-12">
                        <p className="text-2xl font-light max-w-[70%]">
                            A Decade of Expertise: We bring a passion for
                            learning and best practices to every project.
                        </p>
                        <Button title={"Contact Us"} href={"/"} />
                    </div>
                </div>
         
        </Section>
    );
};

export default CTA;
