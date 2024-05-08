"use client";

import Link from "next/link";
import { useState } from "react";
import { LiaConnectdevelop } from "react-icons/lia";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiEjectSimpleBold } from "react-icons/pi";
import { LuWebhook } from "react-icons/lu";
import { TbBrandWebflow } from "react-icons/tb";
import { FaWordpressSimple } from "react-icons/fa6";
import { motion } from "framer-motion";

const ServiceCard = () => {
    const [hoveredService, setHoveredService] = useState("");

    const services = [
        {
            name: "UI/UX Design",
            icon: "MdOutlineDesignServices",
            color: "#673de6",
        },
        {
            name: "Website Development",
            icon: "LiaConnectdevelop",
            color: "#673de6",
        },
        {
            name: "Website Improvement",
            icon: "PiEjectSimpleBold",
            color: "#673de6",
        },
        {
            name: "Website Maintenance",
            icon: "LuWebhook",
            color: "#673de6",
        },
        {
            name: "Webflow",
            icon: "TbBrandWebflow",
            color: "#673de6",
        },
        {
            name: "WordPress",
            icon: "FaWordpressSimple",
            color: "#673de6",
        },
    ];

    const icons = [
        {
            service: "UI/UX Design",
            body: (
                <MdOutlineDesignServices
                    size={60}
                    color={`${
                        hoveredService === "UI/UX Design"
                            ? "#ffffff"
                            : "#673de6"
                    }`}
                />
            ),
            icon: "MdOutlineDesignServices",
        },
        {
            service: "Website Development",
            body: (
                <LiaConnectdevelop
                    size={60}
                    color={`${
                        hoveredService === "Website Development"
                            ? "#ffffff"
                            : "#673de6"
                    }`}
                />
            ),
            icon: "LiaConnectdevelop",
        },
        {
            service: "Website Improvement",
            body: (
                <PiEjectSimpleBold
                    size={60}
                    color={`${
                        hoveredService === "Website Improvement"
                            ? "#ffffff"
                            : "#673de6"
                    }`}
                />
            ),
            icon: "PiEjectSimpleBold",
        },
        {
            service: "Website Maintenance",
            body: (
                <LuWebhook
                    size={60}
                    color={`${
                        hoveredService === "Website Maintenance"
                            ? "#ffffff"
                            : "#673de6"
                    }`}
                />
            ),
            icon: "LuWebhook",
        },
        {
            service: "Webflow",
            body: (
                <TbBrandWebflow
                    size={60}
                    color={`${
                        hoveredService === "Webflow" ? "#ffffff" : "#673de6"
                    }`}
                />
            ),
            icon: "TbBrandWebflow",
        },
        {
            service: "WordPress",
            body: (
                <FaWordpressSimple
                    size={60}
                    color={`${
                        hoveredService === "WordPress" ? "#ffffff" : "#673de6"
                    }`}
                />
            ),
            icon: "FaWordpressSimple",
        },
    ];

    const content = services.map((s, i) => (
        <motion.div
            key={i}
            className={`${
                i % 2 ? "bg-[#fafbff]" : "bg-[#ffffff]"
            } p-12 cursor-pointer row-span-6 hover:bg-[#673de6] hover:text-white`}
            onMouseMove={() => setHoveredService(s.name)}
            onMouseLeave={() => setHoveredService("")}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeInOut" },
            }}
        >
            <div>
                <div className="">
                    {icons.find((item) => item.icon === s.icon)?.body}
                </div>
                <div className="w-full flex flex-col justify-end items-start mt-24">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-normal mb-6">{s.name}</h1>
                        <Link href="/" className="font-semibold">
                            More
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    ));

    return content;
};

export default ServiceCard;
