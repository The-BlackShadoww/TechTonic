import Image from "next/image";
import React from "react";
import Section from "../section/Section";

const About = () => {
    return (
        <>
            <Section
                bg={"#fafbff"}
                className={"sectionGap"}
                sectionClass={"py-16"}
            >
                <div className="w-1/2 h-[1px] my-8 ms-auto bg-[#673de6]/50">
                    {" "}
                </div>

                <div className="grid grid-cols-1 gap-10">
                    <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-0">
                        <div className="py-10">
                            <h1 className="text-5xl leading-[65px] font-normal text-[#5025d1]">
                                Techtonic - <br />
                                Design. Develop. Impress.
                            </h1>
                        </div>
                        <div className="py-10">
                            <p className="text-2xl font-light max-w-[70%]">
                                Techtonic. We design and develop - websites that
                                convert and impress. Let's craft your digital
                                experience.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image
                            src="/company.svg"
                            alt="company"
                            width={550}
                            height={550}
                        />
                    </div>
                </div>
            </Section>
        </>
    );
};

export default About;

// import Image from "next/image";
// import React from "react";

// const About = () => {
//     return (
//         <section className="sectionGap bg-[#fafbff] py-16">
//             <div className="w-1/2 h-[1px] my-8 ms-auto bg-[#673de6]/50"> </div>
//             <div className="container">
//                 <div className="grid grid-cols-1 gap-10">
//                     <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-0">
//                         <div className="py-10">
//                             <h1 className="text-5xl leading-[65px] font-normal text-[#5025d1]">
//                                 Techtonic - <br />
//                                 Design. Develop. Impress.
//                             </h1>
//                         </div>
//                         <div className="py-10">
//                             <p className="text-2xl font-light max-w-[70%]">
//                                 Techtonic. We design and develop - websites that
//                                 convert and impress. Let's craft your digital
//                                 experience.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="flex justify-center items-center">
//                         <Image
//                             src="/company.svg"
//                             alt="company"
//                             width={550}
//                             height={550}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;
