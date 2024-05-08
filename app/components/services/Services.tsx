import ServiceCard from "./ServiceCard";
import Section from "../section/Section";

const Services = () => {
    return (
        <Section bg={""} sectionClass={"sectionGap"}>
            <div className="w-full grid grid-cols-12 lg:gap-10 gap-0">
                <div className="py-10 lg:col-span-4 col-span-12">
                    <h1 className="text-5xl leading-[65px] font-normal">
                        Specialized
                        <br /> in Development
                    </h1>
                </div>
                <div className="py-10 lg:col-span-8 col-span-12">
                    <p className="text-2xl font-light max-w-[70%]">
                        Techtonic. We design and develop - websites that convert
                        and impress. Let&apos;s craft your digital experience.
                    </p>
                </div>
            </div>
            <div className="w-1/2 h-[1px] my-8 ms-auto bg-[#000]/50"></div>
            {/* services grid */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-12 mt-16">
                <ServiceCard />
            </div>
        </Section>
    );
};

export default Services;
