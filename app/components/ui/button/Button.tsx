import React from "react";
import "./button.css";
import Link from "next/link";

const Button = ({ title, href }) => {
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
