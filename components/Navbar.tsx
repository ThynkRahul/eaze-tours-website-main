import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";

const NavBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [activePage, setActivePage] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

    useEffect(() => {
        const currentPath = window.location.pathname;
        setActivePage(currentPath);
    }, []);

    function listenScrollEvent() {
        const scrolled = document.scrollingElement ? document.scrollingElement.scrollTop : 0;
        if (scrolled >= 1) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", listenScrollEvent);
            return () => {
                window.removeEventListener("scroll", listenScrollEvent);
            };
        }
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            {/* Pre-header */}
            <div
                className={`bg-black text-white h-[57px] px-4 hidden md:flex justify-center transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0 -translate-y-full"}`}
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
                className={`flex items-center w-full h-[78px] bg-white text-neutral transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0 -translate-y-full"}`}
            >
                <div className="navbar flex items-center justify-between" style={{ maxWidth: "1270px", margin: "0 auto" }}>
                    {/* Logo */}
                    <div className="navbar-start px-4 flex items-center" style={{ marginTop: "-10px" }}>
                        <Link href="/" passHref>
                            <Image src={logo} width={106} height={40} alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="navbar-center hidden md:flex flex-grow">
                        <div className="flex items-center justify-center gap-4">
                            <Link href="/" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Home</span>
                            </Link>
                            <Link href="/about" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/about" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >About Us</span>
                            </Link>
                            <Link href="/testimonials" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/testimonials" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Testimonials</span>
                            </Link>
                            <Link href="/packages" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/packages" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Packages</span>
                            </Link>
                            <Link href="/gallery" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/gallery" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Gallery</span>
                            </Link>
                            <Link href="/contact" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn hover:bg-gray-100 ${activePage === "/contact" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Contact Us</span>
                            </Link>
                        </div>
                    </div>

                    {/* Contact Us Button (Desktop) */}
                    <div className="navbar-end hidden md:flex px-4 flex items-center">
                        <Link href="/contact" passHref>
                            <button className="btn flex items-center justify-center" style={{
                                width: '173px',
                                height: '46px',
                                borderRadius: '41px',
                                backgroundColor: '#025C7A',
                                padding: '0 6px 0 10px'
                            }}>
                                <span className="mr-2 text-white" style={{
                                    textTransform: "uppercase", fontSize: "16px", fontWeight: "700", lineHeight: "19.2px", textAlign: "left"
                                }}>Contact Us</span>
                                <span className="relative w-8 h-8 flex items-center justify-center rounded-full bg-white">
                                    <i className="fas fa-arrow-right text-[#025C7A] text-lg" />
                                </span>
                            </button>
                        </Link>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden flex items-center pr-3 relative z-50">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#025C7A]">
                            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`} />
                        </button>
                    </div>

                    {/* Mobile Sidebar Menu */}
                    <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} fixed top-0 right-0 w-3/4 bg-white h-screen z-40 shadow-lg transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
                        <div className="flex flex-col items-center gap-4 py-16">
                            <Link href="/" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn ${activePage === "/" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Home</span>
                            </Link>
                            <Link href="/about" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn ${activePage === "/about" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >About Us</span>
                            </Link>
                            <Link href="/testimonials" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn ${activePage === "/testimonials" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Testimonials</span>
                            </Link>
                            <Link href="/packages" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn ${activePage === "/packages" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Packages</span>
                            </Link>
                            <Link href="/gallery" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn ${activePage === "/gallery" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Gallery</span>
                            </Link>
                            <Link href="/contact" passHref>
                                <span
                                    className={`btn btn-ghost btn-sm rounded-btn ${activePage === "/contact" ? "text-[#6E9753]" : "text-[#025C7A]"}`}
                                >Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
