import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";

const NavBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [activePage, setActivePage] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    // Set active page based on the current pathname
    useEffect(() => {
        const currentPath = window.location.pathname;
        setActivePage(currentPath);
    }, []);

    // Scroll listener to toggle navbar visibility
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 20) {
            // Scrolling down
            setIsVisible(false);
        } else {
            // Scrolling up
            setIsVisible(true);
        }

        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Prevent negative scroll values
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [lastScrollTop]);

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            {/* Pre-header */}
            <div
                className={`bg-black text-white h-[57px] px-[65px] font-urbanist md:flex justify-center transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >
                <div className="flex justify-between items-center text-sm" style={{ maxWidth: "1270px", width: "100%" }}>
                    {/* Contact Details */}
                    <div className="flex gap-4">
                        <span className="flex items-center gap-2">
                            <span className="relative w-6 h-6 flex items-center justify-center rounded-full bg-white text-black">
                                <i className="fas fa-phone fa-flip-horizontal" />
                            </span>
                            <a href="tel:+919873186168" className="text-white hover:underline">+91 987 318 6168</a>
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="fas fa-envelope text-xl" />
                            <span>
                                <a href="mailto:info@eazetours.com" className="text-white hover:underline">info@eazetours.com</a>
                                <a href="mailto:harshit@eazetours.com" className="text-white hover:underline">, harshit@eazetours.com</a>
                            </span>
                        </span>
                    </div>
                    {/* Social Icons */}
                    <div className="flex gap-2">
                        <Link href="https://www.tripadvisor.in/" passHref>
                            <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300">
                                <i className="fab fa-tripadvisor text-lg leading-lg" />
                            </span>
                        </Link>
                        <Link href="https://www.instagram.com/eazetourpackages/" passHref>
                            <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300">
                                <i className="fab fa-instagram text-lg leading-lg" />
                            </span>
                        </Link>
                        <Link href="https://www.facebook.com/eazetour/" passHref>
                            <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300">
                                <i className="fab fa-facebook text-lg leading-lg" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div
                className={`flex items-center w-full font-urbanist h-[78px] bg-white text-neutral transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
            >
                <div className="navbar flex items-center justify-between" style={{ maxWidth: "1270px", margin: "0 auto" }}>
                    {/* Logo */}
                    <div className="navbar-start px-4 flex items-center" style={{ marginTop: "-10px" }}>
                        <Link href="/" passHref>
                            <Image src={logo} width={106} height={40} alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="navbar-center md:flex flex-grow" style={{ display: "flex" }}>
                        <div className="flex items-center justify-center gap-4">
                            <Link href="/" passHref>
                                <span
                                    className={`btn text-[16px] font-urbanist btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Home</span>
                            </Link>
                            <Link href="/about" passHref>
                                <span
                                    className={`btn text-[16px] font-urbanist btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/about" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >About Us</span>
                            </Link>
                            <Link href="/testimonials" passHref>
                                <span
                                    className={`btn text-[16px] font-urbanist btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/testimonials" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Testimonials</span>
                            </Link>
                            <Link href="/packages" passHref>
                                <span
                                    className={`btn text-[16px] font-urbanist btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/packages" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Packages</span>
                            </Link>
                            <Link href="/gallery" passHref>
                                <span
                                    className={`btn text-[16px] font-urbanist btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/gallery" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Gallery</span>
                            </Link>
                            <Link href="/contact" passHref>
                                <span
                                    className={`btn text-[16px] font-urbanist btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/contact" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Contact Us</span>
                            </Link>
                        </div>
                    </div>

                    {/* Contact Us Button (Desktop) */}
                    <div className="navbar-end md:flex px-4 flex items-center" style={{ display: "flex" }}>
                        <Link href="/contact" passHref>
                            <button className="btn flex items-center justify-center w-[173px] h-[46px] rounded-[41px] bg-[#025C7A] pr-[6px] pl-[10px] hover:bg-[#6E9753]">
                                <span className="mr-2 text-white" style={{
                                    textTransform: "uppercase", fontSize: "16px", fontWeight: "700", lineHeight: "19.2px", textAlign: "left"
                                }}>Contact Us</span>
                                <span className="relative w-8 h-8 flex items-center justify-center rounded-full bg-white">
                                    <i className="fas fa-arrow-right text-[#025C7A] text-lg " />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
