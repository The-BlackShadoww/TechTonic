"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import { motion, AnimatePresence, MotionConfig, animate } from "framer-motion";

const Mobile = ({ routes }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-y-hidden");
        } else {
            document.body.classList.remove("overflow-y-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-y-hidden");
        };
    }, [isOpen]);

    const popUpAnimation = {
        initial: {
            opacity: 0,
            y: 100,
        },
        effect: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * i,
            },
        }),
    };

    return (
        <>
            <div className={`lg:hidden block z-20`}>
                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <MotionConfig
                        transition={{
                            type: "spring",
                            bounce: 0.1,
                        }}
                    >
                        <motion.div
                            key="mobile-nav" // is required or not?
                            variants={{
                                hide: {
                                    x: "100%",
                                    transition: {
                                        type: "spring",
                                        bounce: 0.1,
                                        when: "afterChildren",
                                        staggerChildren: 0.25,
                                    },
                                },
                                show: {
                                    x: "0%",
                                    transition: {
                                        type: "spring",
                                        bounce: 0.1,
                                        when: "beforeChildren",
                                        staggerChildren: 0.25,
                                    },
                                },
                            }}
                            initial="hide"
                            animate="show"
                            exit="hide"
                            className="w-full h-screen fixed left-0 right-0 top-0 p-5 z-10 overflow-hidden bg-[#131313]"
                        >
                            <motion.div className="m-28 p-8">
                                <motion.ul
                                    variants={{
                                        hide: {
                                            y: "25%",
                                            opacity: 0,
                                            transition: {
                                                when: "afterChildren",
                                                staggerChildren: 0.25,
                                            },
                                        },
                                        show: {
                                            y: "0%",
                                            opacity: 1,
                                            transition: {
                                                when: "beforeChildren",
                                                staggerChildren: 0.25,
                                            },
                                        },
                                    }}
                                    className="w-full h-full text-[24px] text-white flex flex-col justify-between items-center gap-y-8"
                                >
                                    {routes.map((r, i) => (
                                        <motion.li
                                            key={r.name}
                                            variants={popUpAnimation}
                                            initial="initial"
                                            animate="effect"
                                            custom={i}
                                        >
                                            <Link
                                                className="relative font-medium w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#673de6] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left"
                                                href={r.href}
                                            >
                                                {r.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                    <li>
                                        <Link
                                            className="border border-[#673de6] py-4 px-8 relative hover:text-white font-medium w-fit block after:block after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[#673de6] after:scale-x-0 after:origin-right after:transition after:duration-300 after:hover:scale-x-100 after:hover:origin-left after:hover:-z-10"
                                            href="/"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </motion.ul>
                            </motion.div>
                        </motion.div>
                    </MotionConfig>
                )}
            </AnimatePresence>
        </>
    );
};

export default Mobile;

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import Hamburger from "./Hamburger";
// import { motion, AnimatePresence, MotionConfig, animate } from "framer-motion";

// const Mobile = ({ routes }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const popUpAnimation = {
//         initial: {
//             opacity: 0,
//             y: 100,
//         },
//         effect: (i: number) => ({
//             opacity: 1,
//             y: 0,
//             transition: {
//                 delay: 0.05 * i,
//             },
//         }),
//     };

//     return (
//         <>
//             <div className={`lg:hidden block z-20`}>
//                 <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
//             </div>

//             <AnimatePresence>
//                 {isOpen && (
//                     <MotionConfig
//                         transition={{
//                             type: "spring",
//                             bounce: 0.1,
//                         }}
//                     >
//                         <motion.div
//                             key="mobile-nav" // is required or not?
//                             variants={{
//                                 hide: {
//                                     x: "100%",
//                                     transition: {
//                                         type: "spring",
//                                         bounce: 0.1,
//                                         when: "afterChildren",
//                                         staggerChildren: 0.25,
//                                     },
//                                 },
//                                 show: {
//                                     x: "0%",
//                                     transition: {
//                                         type: "spring",
//                                         bounce: 0.1,
//                                         when: "beforeChildren",
//                                         staggerChildren: 0.25,
//                                     },
//                                 },
//                             }}
//                             initial="hide"
//                             animate="show"
//                             exit="hide"
//                             className="w-full h-screen fixed left-0 right-0 top-0 p-5 z-10 overflow-hidden bg-[#131313]"
//                         >
//                             <motion.div className="m-28 p-8">
//                                 <motion.ul
//                                     variants={{
//                                         hide: {
//                                             y: "25%",
//                                             opacity: 0,
//                                             transition: {
//                                                 when: "afterChildren",
//                                                 staggerChildren: 0.25,
//                                             },
//                                         },
//                                         show: {
//                                             y: "0%",
//                                             opacity: 1,
//                                             transition: {
//                                                 when: "beforeChildren",
//                                                 staggerChildren: 0.25,
//                                             },
//                                         },
//                                     }}
//                                     className="w-full h-full text-[24px] text-white flex flex-col justify-between items-center gap-y-8"
//                                 >
//                                     {routes.map((r, i) => (
//                                         <motion.li
//                                             key={r.name}
//                                             variants={popUpAnimation}
//                                             initial="initial"
//                                             animate="effect"
//                                             custom={i}
//                                         >
//                                             <Link
//                                                 className="relative font-medium w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#673de6] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left"
//                                                 href={r.href}
//                                             >
//                                                 {r.name}
//                                             </Link>
//                                         </motion.li>
//                                     ))}
//                                     <li>
//                                         <Link
//                                             className="border border-[#673de6] py-4 px-8 relative hover:text-white font-medium w-fit block after:block after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[#673de6] after:scale-x-0 after:origin-right after:transition after:duration-300 after:hover:scale-x-100 after:hover:origin-left after:hover:-z-10"
//                                             href="/"
//                                         >
//                                             Contact
//                                         </Link>
//                                     </li>
//                                 </motion.ul>
//                             </motion.div>
//                         </motion.div>
//                     </MotionConfig>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// };

// export default Mobile;
