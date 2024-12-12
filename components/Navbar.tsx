import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from 'next/image'
import logo from "../public/images/logo.png"


export default function NavBar() {
    const [scrollClass, setScrollClass] = useState('navbar text-neutral top-0 fixed z-50 backdrop-blur-md bg-white/60')

    function listenScrollEvent() {
        var scrolled = document.scrollingElement? document.scrollingElement.scrollTop: 0;
        if (scrolled >= 1) {
            setScrollClass('navbar text-neutral-content top-0 fixed z-50 bg-neutral')
        }
        else {
            setScrollClass('navbar text-neutral top-0 fixed z-50 backdrop-blur-md bg-white/60')
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', listenScrollEvent)
        }
    }, []);
    
    return (
    <div className={scrollClass}>
        <div className="px-4 navbar-start">
        <Link href="/" passHref>
                <Image
                    className="z-0"
                    src={logo}
                    width={106}
                    height={40}
                    alt="LogoImage"
                >
                </Image>
        </Link>
        
        </div> 
        <div className="hidden px-2 navbar-center md:flex">
        <div className="flex items-stretch">
            <Link href="/about" className="btn btn-ghost btn-sm rounded-btn">
                About Us
            </Link>
            <Link href="/testimonials" className="btn btn-ghost btn-sm rounded-btn">
                Testimonials
            </Link>
            <Link href="/packages" className="btn btn-ghost btn-sm rounded-btn">
                Packages
            </Link>
            <Link href="/gallery" className="btn btn-ghost btn-sm rounded-btn">
                Gallery
            </Link>
            <Link href="/contact" className="btn btn-ghost btn-sm rounded-btn">
                Contact Us
            </Link>
        </div>
        </div> 
        <div className="navbar-end">
            <div className="md:hidden dropdown dropdown-left">
            <button
                className="btn btn-square btn-ghost"
                type="button"
                tabIndex={0}
            >
                <i className="fas fa-bars text-lg leading-lg " />
            </button>
            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-neutral text-neutral-content rounded-box w-52">
                <li>
                <Link href="/about" className="btn btn-ghost btn-sm rounded-btn">
                    About Us
                </Link>
                </li> 
                <li>
                <Link href="/testimonials" className="btn btn-ghost btn-sm rounded-btn">
                    Testimonials
                </Link>
                </li> 
                <li>
                <Link href="/packages" className="btn btn-ghost btn-sm rounded-btn">
                    Packages
                </Link>
                </li>
                <li>
                <Link href="/gallery" className="btn btn-ghost btn-sm rounded-btn">
                    Gallery
                </Link>
                </li>
                <li>
                <Link href="/contact" className="btn btn-ghost btn-sm rounded-btn">
                    Contact Us
                </Link>
                </li>
            </ul>
            </div>
            <div className="hidden lg:flex">

            <span className="btn btn-square btn-ghost">
            <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" 
                    href="https://www.tripadvisor.in/Attraction_Review-g304551-d17734269-Reviews-EAZE_TOURS-New_Delhi_National_Capital_Territory_of_Delhi.html" >
                    <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-tripadvisor text-lg leading-lg " />
                </a>
            </span>
            <span className="btn btn-square btn-ghost">
            <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="https://www.facebook.com/eazetour/">
                <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
            </a>
            </span> 
            <span className="btn btn-square btn-ghost">
            <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" 
                    href="https://www.instagram.com/eazetourpackages/" >
                    <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
                </a>
            </span>
            
            <span className="btn btn-square btn-ghost">
            <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" 
                    href="https://www.pinterest.com/eazetourpackages/" >
                    <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-pinterest text-lg leading-lg " />
                </a>
            </span>
                
            <span className="btn btn-square btn-ghost">
            <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="tel:+919873186168" >
                    <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-phone-alt text-lg leading-lg " />
                </a>
            </span>
            <span className="btn btn-square btn-ghost">
            <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="mailto:info@eazetours.com;harshit@eazetours.com" >
                    <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-envelope text-lg leading-lg " />
                    </a>
            </span>
            </div>
        </div>
    </div>
    )
}

