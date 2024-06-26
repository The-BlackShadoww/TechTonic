import { SectionType } from "@/types";

const Section = ({ children, sectionClass, className, bg }: SectionType) => {
    return (
        <section
            className={`w-full bg-[${bg ? bg : ""}] ${
                sectionClass ? sectionClass : ""
            }`}
        >
            <div
                className={`container lg:p-2 p-4 ${className ? className : ""}`}
            >
                {children}
            </div>
        </section>
    );
};

export default Section;
