"use client";

const Hamburger = ({ isOpen, setIsOpen }) => {
    const genericHamburgerLine = `h-[2px] w-8 my-1 bg-[#131313] transition ease transform duration-300`;

    return (
        <>
            <button
                className="flex flex-col h-12 w-12 justify-center items-center group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen
                            ? "rotate-45 translate-y-3 opacity-100 bg-[#ffffff]"
                            : "opacity-100"
                    }`}
                />
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen ? "opacity-0" : "opacity-100 "
                    }`}
                />
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen
                            ? "-rotate-45 -translate-y-2 opacity-100 bg-[#ffffff]"
                            : "opacity-100"
                    }`}
                />
            </button>
        </>
    );
};

export default Hamburger;
