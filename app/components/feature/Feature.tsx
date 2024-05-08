import { IoCheckmarkSharp } from "react-icons/io5";
import Image from "next/image";
import Section from "../section/Section";

const Feature = () => {
    const features = [
        {
            Title: "Conversion-focused Design",
        },
        {
            Title: "Technical Expertise",
        },
        {
            Title: "Beautiful and User-Friendly Experiences",
        },
        {
            Title: "Client Collaboration",
        },
        {
            Title: "Ongoing Support",
        },
    ];

    return (
        <Section bg={""} sectionClass={"relative sectionGap py-16"}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 place-items-center">
                <div>
                    <h1 className="text-4xl font-normal mb-10">
                        Everything You Need for a Successful Website
                    </h1>
                    <ul>
                        {features.map((f) => (
                            <li
                                key={f.Title}
                                className="flex items-center my-4"
                            >
                                <IoCheckmarkSharp color="#673de6" />
                                <span className="ml-3">{f.Title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="place-items-center">
                    <Image
                        src="/feature.svg"
                        alt="agency_features"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className="lg:block hidden absolute top-[25%] left-[50%] w-[1px] h-[150px] my-8 bg-[#673de6]">
                {" "}
            </div>
        </Section>
    );
};

export default Feature;

// import { IoCheckmarkSharp } from "react-icons/io5";
// import Image from "next/image";

// const Feature = () => {
//     const features = [
//         {
//             Title: "Conversion-focused Design",
//         },
//         {
//             Title: "Technical Expertise",
//         },
//         {
//             Title: "Beautiful and User-Friendly Experiences",
//         },
//         {
//             Title: "Client Collaboration",
//         },
//         {
//             Title: "Ongoing Support",
//         },
//     ];

//     return (
//         <section className="container relative sectionGap py-16">
//             <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 place-items-center">
//                 <div>
//                     <h1 className="text-4xl font-normal mb-10">
//                         Everything You Need for a Successful Website
//                     </h1>
//                     <ul>
//                         {features.map((f) => (
//                             <li
//                                 key={f.Title}
//                                 className="flex items-center my-4"
//                             >
//                                 <IoCheckmarkSharp color="#673de6" />
//                                 <span className="ml-3">{f.Title}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="place-items-center">
//                     <Image
//                         src="/feature.svg"
//                         alt="agency_features"
//                         width={500}
//                         height={500}
//                     />
//                 </div>
//             </div>
//             <div className="lg:block hidden absolute top-[25%] left-[50%] w-[1px] h-[150px] my-8 bg-[#673de6]">
//                 {" "}
//             </div>
//         </section>
//     );
// };

// export default Feature;
