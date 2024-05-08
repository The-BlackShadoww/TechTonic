import React from "react";
import "./button.css";
import Link from "next/link";

type ButtonType = {
    title: string;
    href: string;
};

const Button = ({ title, href }: ButtonType) => {
    return (
        <Link href={href} className="content__item">
            <button className="button button--hyperion">
                <span>
                    <span>{title}</span>
                </span>
            </button>
        </Link>
    );
};

export default Button;
