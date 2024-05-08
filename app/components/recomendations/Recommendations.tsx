import Image from "next/image";
import React from "react";
import Section from "../section/Section";

const Recommendations = () => {
    const companies = [
        {
            name: "alt",
            img: "/alt.png",
        },
        {
            name: "billie",
            img: "/billie.png",
        },
        {
            name: "lavende",
            img: "/lavende.png",
        },
        {
            name: "vertical",
            img: "/vertical.png",
        },
    ];

    return (
        <Section bg={""} sectionClass={"sectionGap"}>
            <h1 className="text-4xl font-normal lg:mb-0 mb-10">Trusted By</h1>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-y-20 place-items-center items-end">
                {companies.map((c) => (
                    <Image
                        key={c.name}
                        src={c.img}
                        alt={c.name}
                        width={150}
                        height={100}
                        className="grayscale user-select-none"
                    />
                ))}
            </div>
        </Section>
    );
};

export default Recommendations;
