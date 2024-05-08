import { IoStarSharp } from "react-icons/io5";
import Image from "next/image";
import Section from "../section/Section";

const Testimonial = () => {
    const testimonials = [
        {
            name: "Mike Alen",
            txt: "Techtonic took my website vision and made it a reality. They're a dream team – professional, talented, and results-oriented. Highly recommend!",
            company: "Retro",
            role: "Senior Web Designer",
            img: "/men-client-1.jpg",
        },
        {
            name: "Stive Smith",
            txt: "Techtonic took my website vision and made it a reality. They're a dream team – professional, talented, and results-oriented. Highly recommend!",
            company: "Retro",
            role: "Co-founder of ALT.",
            img: "/men-client-2.jpg",
        },
        {
            name: "Rabika Dogs",
            txt: "Techtonic took my website vision and made it a reality. They're a dream team – professional, talented, and results-oriented. Highly recommend!",
            company: "Retro",
            role: "CEO of Billie Tree",
            img: "/women-client.jpg",
        },
    ];

    return (
        <Section bg={""} sectionClass={"sectionGap"}>
            <h1 className="text-4xl text-center font-normal mb-12">
                Client Stories
            </h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {testimonials.map((t, i) => (
                    <div key={i} className="flex justify-center items-center">
                        <div className="border border-[#673de6]/10 w-full">
                            <div className="py-8 px-10">
                                <div className="flex justify-end">
                                    <IoStarSharp size={20} color="#673de6" />
                                    <IoStarSharp size={20} color="#673de6" />
                                    <IoStarSharp size={20} color="#673de6" />
                                    <IoStarSharp size={20} color="#673de6" />
                                    <IoStarSharp size={20} color="#673de6" />
                                </div>
                                <div className="my-12 relative">
                                    <div className="">
                                        <p className="text-sm">{t.txt}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex bg-[#fafbff] py-8 px-10 border-t border-t-[#673de6]/10">
                                <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center overflow-hidden">
                                    <Image
                                        src={t.img}
                                        alt={t.name}
                                        width={50}
                                        height={60}
                                        className="bg-center object-cover"
                                    />
                                </div>
                                <div className="text-sm ml-3">
                                    <h5 className="font-semibold text-base text-[#673de6]">
                                        {t.name}
                                    </h5>
                                    <p className="text-sm">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Testimonial;

// import { IoStarSharp } from "react-icons/io5";
// import { CgQuote } from "react-icons/cg";
// import Image from "next/image";

// const Testimonial = () => {
//     const testimonials = [
//         {
//             name: "Mike Alen",
//             txt: "Techtonic took my website vision and made it a reality. They're a dream team – professional, talented, and results-oriented. Highly recommend!",
//             company: "Retro",
//             role: "Senior Web Designer",
//             img: "/men-client-1.jpg",
//         },
//         {
//             name: "Stive Smith",
//             txt: "Techtonic took my website vision and made it a reality. They're a dream team – professional, talented, and results-oriented. Highly recommend!",
//             company: "Retro",
//             role: "Co-founder of ALT.",
//             img: "/men-client-2.jpg",
//         },
//         {
//             name: "Rabika Dogs",
//             txt: "Techtonic took my website vision and made it a reality. They're a dream team – professional, talented, and results-oriented. Highly recommend!",
//             company: "Retro",
//             role: "CEO of Billie Tree",
//             img: "/women-client.jpg",
//         },
//     ];

//     return (
//         <section className="container sectionGap">
//             <h1 className="text-4xl text-center font-normal mb-12">Client Stories</h1>
//             <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
//                 {testimonials.map((t, i) => (
//                     <div key={i} className="flex justify-center items-center">
//                         <div className="border border-[#673de6]/10 w-full">
//                             <div className="py-8 px-10">
//                                 <div className="flex justify-end">
//                                     <IoStarSharp size={20} color="#673de6" />
//                                     <IoStarSharp size={20} color="#673de6" />
//                                     <IoStarSharp size={20} color="#673de6" />
//                                     <IoStarSharp size={20} color="#673de6" />
//                                     <IoStarSharp size={20} color="#673de6" />
//                                 </div>
//                                 <div className="my-12 relative">
//                                     <div className="">
//                                         <p className="text-sm">{t.txt}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex bg-[#fafbff] py-8 px-10 border-t border-t-[#673de6]/10">
//                                 <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center overflow-hidden">
//                                     <Image
//                                         src={t.img}
//                                         alt={t.name}
//                                         width={50}
//                                         height={60}
//                                         className="bg-center object-cover"
//                                     />
//                                 </div>
//                                 <div className="text-sm ml-3">
//                                     <h5 className="font-semibold text-base text-[#673de6]">
//                                         {t.name}
//                                     </h5>
//                                     <p className="text-sm">{t.role}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Testimonial;
