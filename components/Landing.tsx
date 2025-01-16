import React, { useState, useEffect, useRef, FormEvent } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import PackageSummaryCard from './PackageSummaryCard';
import Testimonial from "./Testimonial";
import backgroundImage from '../public/images/background_2.jpg';
import backgroundImage2 from '../public/images/background_4.jpeg';
import backgroundImage4 from '../public/images/background_5.jpg';
import backgroundImage3 from '../public/images/background_6.jpg';
import packageData from '../data/packages.json'
import testimonialData from '../data/testimonials.json'
import Image from 'next/image';

const images = [
    '/images/gallery/12.jpg',
    '/images/gallery/20.jpg',
    '/images/gallery/10.jpg',
    '/images/gallery/8.jpg',
    '/images/gallery/19.jpg',
    '/images/gallery/16.jpg',
    '/images/gallery/26.jpg',
    '/images/gallery/28.jpg'
];

interface ILandingProps {
}

function Landing(props: ILandingProps) {
    const packages = packageData.filter(tourPackage => tourPackage.Id <= 9 && tourPackage.Id > 1);
    const testimonials = testimonialData.slice(0, 9);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalBoxes = 4; // Number of info boxes
    const [visibleBoxes, setVisibleBoxes] = useState(1);
    const boxWidth = useRef<number>(0);
    const infoSliderRef = useRef<HTMLDivElement>(null);
    const slideToIndex = (sliderRef: React.RefObject<HTMLDivElement>, index: number) => {
        if (sliderRef.current) {
            sliderRef.current.style.transition = 'transform 0.4s ease-in-out';
            sliderRef.current.style.transform = `translateX(-${boxWidth.current * index}px)`;
        }
    };

    const handleNextInfoBox = () => {
        setCurrentIndex((prevIndex) => (prevIndex < totalBoxes - visibleBoxes ? prevIndex + 1 : 0));
    };

    const handlePrevInfoBox = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalBoxes - visibleBoxes));
    };

    // Resize event handler
    useEffect(() => {
        const updateBoxWidth = () => {
            if (infoSliderRef.current) {
                const box = infoSliderRef.current.querySelector('.slider-box') as HTMLElement;
                if (box) {
                    boxWidth.current = box.offsetWidth + 16; // Added margin width
                }
            }

            const currentWidth = window.innerWidth;
            if (currentWidth <= 640) {
                setVisibleBoxes(1);
            } else if (currentWidth <= 1024) {
                setVisibleBoxes(2);
            } else {
                setVisibleBoxes(3);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', updateBoxWidth);
            updateBoxWidth(); // Initial width calculation
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', updateBoxWidth);
            }
        };
    }, []);

    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState('hidden');

    async function handleSubscription(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({ email: email }),
        });

        setEmail('');
        setShowToast('');

        const timeoutId = setTimeout(() => {
            setShowToast('hidden');
        }, 5000);

        return () => clearTimeout(timeoutId);
    }

    const testimonialSliderRef = useRef<HTMLDivElement>(null);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const handleNextTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
    };

    const handlePrevTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
    };

    const testimonialToIndex = (sliderRef: React.RefObject<HTMLDivElement>, index: number) => {
        if (sliderRef.current) {
            // Get the current screen width
            const screenWidth = window.innerWidth;
            // Determine the width of each slide based on screen size
            let slideWidth;
            if (screenWidth <= 768) {
                // Mobile view
                slideWidth = 100; // Adjust for padding/margins
            } else {
                // Desktop view
                slideWidth = 33.3; // Default width for desktop
            }
            // Apply the transformation
            sliderRef.current.style.transition = 'transform 0.4s ease-in-out';
            sliderRef.current.style.transform = `translateX(-${index * slideWidth}%)`;
        }
    };

    useEffect(() => {
        testimonialToIndex(testimonialSliderRef, testimonialIndex); // Slide to the current index for testimonials
    }, [testimonialIndex]);

    useEffect(() => {
        slideToIndex(infoSliderRef, currentIndex); // Slide to the current index for info boxes
    }, [currentIndex]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <>
            <div className="mt-[78px] sm:mt-[135px]">
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    fadeEffect={{ crossFade: true }}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                >
                    {[{ src: backgroundImage, heading: "Discover Your Next Adventure Create Memories", para: "Unforgettable journeys, curated just for you. Explore breathtaking destinations, exclusive deals, and seamless travel experiences." },
                    { src: backgroundImage2, heading: "Discover Your Next Adventure Create Memories", para: "Unforgettable journeys, curated just for you. Explore breathtaking destinations, exclusive deals, and seamless travel experiences." },
                    { src: backgroundImage3, heading: "Discover Your Next Adventure Create Memories", para: "Unforgettable journeys, curated just for you. Explore breathtaking destinations, exclusive deals, and seamless travel experiences." },
                    { src: backgroundImage4, heading: "Discover Your Next Adventure Create Memories", para: "Unforgettable journeys, curated just for you. Explore breathtaking destinations, exclusive deals, and seamless travel experiences." },
                    ].map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-[700px] w-full">
                                <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={slide.src}
                                        alt="Background Image"
                                        layout="fill"
                                        objectFit="cover"
                                        priority
                                    />
                                </div>

                                <div className="absolute inset-0 z-20 flex flex-col justify-center items-start text-left text-white max-w-screen-lg mx-auto px-6 md:px-0">
                                    <h1 className="text-[44px] sm:text-[56px] font-urbanist font-semibold text-shadow mb-6 leading-[1.2em] sm:leading-[65px] w-full sm:w-[90%]">
                                        {slide.heading}
                                    </h1>
                                    <p className="text-lg md:text-xl font-urbanist mb-12 max-w-lg">{slide.para}</p>
                                    <a href="/contact"><button className="px-6 py-3 font-urbanist text-white font-semibold bg-transparent border-2 border-white rounded-full shadow-lg hover:shadow-xl hover:text-[#025C7A] hover:bg-[#fff] hover:border-[#025c7a] focus:outline-none focus:ring-4 focus:ring-blue-500 transform transition-transform hover:scale-105 duration-300 uppercase">
                                        Contact Us
                                    </button></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom arrows, placed outside Swiper */}
                <div className="swiper-button-next hidden sm:block" style={{ color: "white", position: "absolute", top: "450px", right: "30px", transform: "translateY(-50%)", zIndex: 10 }}></div>
                <div className="swiper-button-prev hidden sm:block" style={{ color: "white", position: "absolute", top: "450px", left: "30px", transform: "translateY(-50%)", zIndex: 10 }}></div>
            </div>
            {/* Info Boxes Section with animation */}
            <div className={`info-container flex justify-center gap-12 my-[70px] max-w-screen-xl mx-8 flex-wrap sm:flex-nowrap`}>
                <div className="info-box p-0 rounded-lg w-72 flex flex-col items-center">
                    <Image src="/images/info_icon_1.png" alt="Info Icon 1" width={77} height={77} />
                    <h2 className="info-heading text-lg font-urbanist font-medium text-black text-center mt-4 mb-2">Book Your Tours Now!</h2>
                    <p className="info-content text-center text-[#4F5E71] font-[16px] leading-[19px]">
                        Find amazing deals for your travel plans on luxury holiday packages in India, select your holiday package now!
                    </p>
                </div>

                <div className="info-box p-0 rounded-lg w-72 flex flex-col items-center">
                    <Image src="/images/info_icon_2.png" alt="Info Icon 2" width={77} height={77} />
                    <h2 className="info-heading text-lg font-urbanist font-medium text-black text-center mt-4 mb-2">What's New at Eaze Tours</h2>
                    <p className="info-content text-center text-[#4F5E71] font-[16px] leading-[19px]">
                        Find out what's happening at Eaze Tours – from special discounts to the latest updates on India tour packages.
                    </p>
                </div>

                <div className="info-box p-0 rounded-lg w-72 flex flex-col items-center">
                    <Image src="/images/info_icon_3.png" alt="Info Icon 3" width={77} height={77} />
                    <h2 className="info-heading text-lg font-urbanist font-medium text-black text-center mt-4 mb-2">Eaze Tours Spotlight</h2>
                    <p className="info-content text-center text-[#4F5E71] font-[16px] leading-[19px]">
                        Discover our featured destinations, top-rated tours, unforgettable journeys, and the exceptional experiences we offer.
                    </p>
                </div>

                <div className="info-box p-0 rounded-lg w-72 flex flex-col items-center">
                    <Image src="/images/info_icon_4.png" alt="Info Icon 4" width={77} height={77} />
                    <h2 className="info-heading text-lg font-urbanist font-medium text-black text-center mt-4 mb-2">Extremely Happy Travellers</h2>
                    <p className="info-content text-center text-[#4F5E71] font-[16px] leading-[19px]">
                        Eaze Tours holds record of great customer satisfaction and all customers are retained with us. Happy Travelling!
                    </p>
                </div>
            </div>

            {/* Heading Before the Hover Slider */}

            <div className="my-12 max-w-screen-xl mx-8 pt-[30px]">

                <div className="flex items-center mb-0 flex-wrap mx-4 justify-center gap-4 sm:justify-between sm:gap-0">
                    <h2 className="text-2xl font-semibold text-black capitalize text-center sm:text-left" style={{ fontSize: '32px' }}>
                        Top Destination for your next vacation
                    </h2>


                    {/* Arrow buttons */}

                    <div className="flex gap-4">
                        <button onClick={handlePrevInfoBox} className="bg-[#E4F8FF] text-2xl text-[#025C7A] py-[10px] px-5 rounded-full hover:bg-gray-700 hover:text-[#fff] transition-all duration-300">
                            &#10094;
                        </button>
                        <button onClick={handleNextInfoBox} className="bg-[#E4F8FF] text-2xl text-[#025C7A] py-[10px] px-5 rounded-full hover:bg-gray-700 hover:text-[#fff] transition-all duration-300">
                            &#10095;
                        </button>

                    </div>
                </div>

                {/* Hover Boxes Slider */}
                <div className="slider-container my-8 w-[317px] sm:w-full">
                    <div className="slider relative overflow-hidden mx-auto">
                        <div className="slider-wrapper flex gap-4 sm:gap-0  transition-transform duration-300 ease-in-out" ref={infoSliderRef}>
                            {[{ id: 1, title: "India", content: "Explore the cultural diversity of India.", bg: "/images/india.png" },
                            { id: 2, title: "Maldives", content: "Relax on the pristine beaches of Maldives.", bg: "/images/maldives.png" },
                            { id: 3, title: "Nepal", content: "Discover the Himalayan beauty in Nepal.", bg: "/images/nepal.png" },
                            { id: 4, title: "Bhutan", content: "Experience the peace and serenity of Bhutan.", bg: "/images/bhutan.png" },
                            { id: 5, title: "Sri Lanka", content: "Discover the stunning beaches and rich heritage of Sri Lanka.", bg: "/images/SRI_LANKA.webp" }
                            ].map((box, index) => (
                                <div
                                    key={index}
                                    className="slider-box relative flex-shrink-0 sm:mx-3 mx-0 sm:w-[calc(25%-25px)] w-full bg-cover bg-center rounded-[23px] shadow-lg overflow-hidden group"
                                    style={{
                                        height: '394px',
                                    }}
                                >
                                    {/* Extra div for zoom effect */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-[23px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${box.bg})`,
                                        }}
                                    ></div>

                                    {/* Default Heading that is hidden on hover */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/70 to-transparent text-white z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                        <h3 className="text-[32px] font-semibold mb-4 transform transition-all duration-500 ease-in-out">
                                            {box.title}
                                        </h3>
                                    </div>

                                    {/* Hover Content and New Heading */}
                                    <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/70 to-transparent text-white opacity-0 transform translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-20">
                                        <h3 className="text-[32px] font-semibold mb-4 transform group-hover:translate-y-[-10px] transition-all duration-500 ease-in-out">{box.title}</h3>
                                        <p className="mb-4 transform group-hover:translate-y-[-10px] transition-all duration-500 ease-in-out">{box.content}</p>
                                        <a href="/packages">
                                            <button className="px-4 py-2 font-normal bg-white text-[#025C7A] rounded-full hover:bg-gray-100 transition-all duration-300 w-[150px]">
                                                See All Tours
                                            </button></a>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* "See All Destinations" Button */}
                <div className="text-center my-12">
                    <a href="/packages">
                        <button className="px-8 py-4 mt-8 mb-12 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                            See All Destinations
                        </button>
                    </a>
                </div>
            </div>

            {/* Heading for the next section */}

            <div className="my-12 max-w-screen-xl mx-8">
                <h2 className="text-2xl font-semibold text-black text-center sm:text-left mx-2" style={{ fontSize: '32px' }}>
                    Trip  Ideas To Inspire You
                </h2>

            </div>

            {/* Two Horizontal Boxes */}
            <div className="flex flex-wrap justify-between gap-4 my-12 max-w-screen-xl mb-[120px] mx-8 sm:flex-nowrap">
                {/* First Box */}
                <div className="w-full sm:w-1/2 h-[430px] sm:h-[323px] relative rounded-[35px] overflow-hidden group">
                    {/* Extra div for zoom effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                        style={{
                            background: `linear-gradient(90deg, rgba(2, 92, 122, 0.8) 30%, rgba(3, 130, 173, 0.4) 60.32%, rgba(4, 169, 224, 0.4) 100%), url('/images/tajmahal.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-between justify-between text-white text-left p-6">
                        <h3 className="text-[32px] font-semibold mb-2 sm:w-[60%] w-[80%] font-urbanist">India (Delhi, Varanasi, Agra)</h3>
                        <div>
                            <p className="mb-4 sm:w-[60%] w-[80%] font-urbanist">Embark on a royal journey through India, exploring Delhi's majestic monuments, Varanasi's spiritual ghats, and Agra's iconic Taj Mahal treasures.</p>
                            <a href="/packages/17"><button className="px-4 py-4 font-normal bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-[#fff] transition-all duration-300 w-[160px]">
                                See All Activities
                            </button></a>
                        </div>
                    </div>
                </div>

                {/* Second Box */}
                <div className="w-full sm:w-1/2 h-[430px] sm:h-[323px] relative rounded-[35px] overflow-hidden group">
                    {/* Extra div for zoom effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
                        style={{
                            background: `linear-gradient(270deg, rgba(110, 151, 83, 0.6) 30%, rgba(110, 151, 83, 0.6) 60.32%, rgba(110, 151, 83, 0.95) 100%), url('/images/goldentemple.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-between justify-between text-white text-left p-6">
                        <h3 className="text-[32px] font-semibold mb-2 sm:w-[60%] w-[80%] font-urbanist">Explore the Rich Heritage of Amritsar</h3>
                        <div>
                            <p className="mb-4 sm:w-[60%] w-[80%] font-urbanist">Explore Amritsar beyond the Golden Temple with curated tour packages that uncover hidden gems, vibrant culture, and historical treasures of this iconic city.</p>
                            <a href="/packages/21"><button className="px-4 py-4 font-normal bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-[#fff] transition-all duration-300 w-[160px]">
                                See All Activities
                            </button></a>
                        </div>
                    </div>
                </div>
            </div>


            {/* Heading for the next section */}
            <div className="my-12 max-w-screen-xl mx-8">
                <h2 className="text-2xl font-semibold text-black text-center sm:text-left mx-2" style={{ fontSize: '32px' }}>
                    Popular Packages
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-8">
                {packages.map(tourPackage => (
                    <div key={tourPackage.Id} className="h-full">
                        <PackageSummaryCard tourPackage={tourPackage}></PackageSummaryCard>
                    </div>
                ))}
            </div>

            {/* "See All Destinations" Button */}
            < div className="text-center my-12" >
                <a href="/packages">
                    <button className="px-8 py-4 mt-8 mb-12 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                        See All Packages
                    </button>
                </a>
            </div >

            < div className="my-12 max-w-screen-xl mx-auto mx-8 sm:mx-auto" >
                <div className="flex text-center sm:text-left mb-4 flex-wrap justify-center gap-4 mx-8 sm:justify-between sm:gap-0">
                    <h2 className="text-2xl font-semibold text-black" style={{ fontSize: '32px' }}>
                        What Clients Say About Us
                    </h2>

                    {/* Arrow buttons */}
                    <div className="flex gap-4">
                        <button onClick={handlePrevTestimonial} className="bg-[#E4F8FF] text-2xl text-[#025C7A] py-[10px] px-5 rounded-full hover:bg-gray-700 hover:text-[#fff] transition-all duration-300">
                            &#10094;
                        </button>
                        <button onClick={handleNextTestimonial} className="bg-[#E4F8FF] text-2xl text-[#025C7A] py-[10px] px-5 rounded-full hover:bg-gray-700 hover:text-[#fff] transition-all duration-300">
                            &#10095;
                        </button>
                    </div>
                </div>
                <div className="testimonial-slider-container mb-12 relative">
                    <div className="testimonial-slider relative overflow-hidden mx-8 sm:mx-4">
                        <div className="testimonial-slider-wrapper flex transition-transform duration-300 ease-in-out" ref={testimonialSliderRef}>
                            {testimonials.map(testimonial => (
                                <div className="carousel-item flex flex-col w-[calc(100%-24px)] sm:w-[392px] p-3" key={testimonial.Id}>
                                    <Testimonial testimonial={testimonial}></Testimonial>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* "See All Testimonials" Button */}
            < div className="text-center my-12" >
                <a href="/testimonials">
                    <button className="px-8 py-4 mt-4 mb-12 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                        View All
                    </button>
                </a>
            </div >
            {/* New Section - Subscribe Section */}
            <div className="max-w-screen-xl mx-8 h-[500px] rounded-[23px] flex items-center justify-start p-[20px] sm:p-[80px]" style={{ backgroundImage: 'url("/images/suscribe_bg.png")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="w-[600px] bg-black p-8 pb-12 rounded-[23px] text-left">
                    <h2 className="text-white text-[40px] mb-4 font-semibold leading-[1.2em]">Subscribe & Get 20% off</h2>
                    <p className="text-white mb-6">Subscribe to our newsletter and get the latest updates and exclusive offers.</p>

                    {/* Toast Notification */}
                    <div className={showToast}>
                        <div className="toast toast-center toast-center mt-16 z-[100]">
                            <div className="alert alert-success">
                                <span>Subscription successful! Check your inbox for updates.</span>
                            </div>
                        </div>
                    </div>

                    {/* Subscription Form */}
                    <form onSubmit={handleSubscription}>
                        <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 w-full max-w-[350px] rounded-2xl text-[#000] bg-white focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#025C7A] text-white rounded-2xl hover:bg-[#023e56] transition duration-300 w-full sm:w-auto"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Gallery Section */}
            <div className="w-full py-16 bg-white">
                <div className="my-12 max-w-screen-xl mx-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-semibold text-black text-center sm:text-left" style={{ fontSize: '32px' }}>
                            The Unforgettable Tour Gallery
                        </h2>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-screen-xl mx-8">
                    {images.map((image, index) => (
                        <div key={index} className="relative group">
                            <Image
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                                className="aspect-square object-cover rounded-[23px] transition-all duration-300 transform group-hover:scale-110 group-hover:opacity-90 cursor-pointer"
                                width={300}
                                height={300}
                                onClick={() => openModal(index)} // Open modal on click
                            />
                        </div>
                    ))}
                </div>

                {/* Modal for Full-Screen Image */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                        <div className="relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
                            >
                                ×
                            </button>
                            <div className="relative max-w-full max-h-full">
                                <Image
                                    src={images[currentImageIndex]}
                                    alt="Full-Screen Image"
                                    className="object-contain max-w-full max-h-screen"
                                    width={1200}
                                    height={800}
                                />
                            </div>

                            {/* Navigation buttons */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                            >
                                &#60;
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                            >
                                &#62;
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* "See All Destinations" Button */}
            < div className="flex justify-center items-center mb-[80px] gap-4 mx-8 sm:mx-auto" >
                <a href="/gallery">
                    <button className="px-3 sm:px-8 h-[50px] border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                        View All
                    </button>
                </a><a href="https://www.instagram.com/eazetourpackages/">
                    <button className="px-3 sm:px-6 h-[50px] border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                        <i className="fab fa-instagram text-lg" /> Follow On Instagram
                    </button>
                </a>
            </div >

            {/* Heading Before the Testimonial Slider */}
            < div className="my-12 max-w-screen-xl mx-8 sm:mx-auto" >
                <h2 className="text-2xl font-semibold text-black mt-12" style={{ fontSize: '32px' }}>
                    Latest Blog & Articles
                </h2>

                {/* Swiper for the Trip Ideas */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3} // Show all 3 boxes in a row
                    pagination={{ clickable: true }} // Enable pagination
                    modules={[Pagination]} // Include Pagination module
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // 1 slide per view on small screens
                        },
                        640: {
                            slidesPerView: 2, // 2 slides per view on tablets
                        },
                        1024: {
                            slidesPerView: 3, // 3 slides per view on desktops
                        },
                    }}
                    className="mt-8"
                >
                    {[
                        { title: "India", content: "5 Ways to Select India Tour Packages from the USA", bg: "/images/blog_box1.png" },
                        { title: "India", content: "5 Reasons to Have Your Honeymoon Tour in India", bg: "/images/blog_box2.webp" },
                        { title: "India", content: "A Perfect Blend of History and Adventure with Eaze Tours", bg: "/images/blog_box3.jpg" },
                        { title: "India", content: "5 Ways to Select India Tour Packages from the USA", bg: "/images/blog_box1.png" },
                        { title: "India", content: "5 Reasons to Have Your Honeymoon Tour in India", bg: "/images/blog_box2.webp" }
                    ].map((box, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-[23px] shadow-[0px_0px_2px_1px_#00000040] flex flex-col ml-1 mb-[100px]">
                                <div
                                    className="w-full h-[262px] bg-cover bg-center rounded-t-[23px]"
                                    style={{ backgroundImage: `url(${box.bg})` }}
                                ></div>
                                <div className="w-full px-4 py-10 flex flex-col justify-center gap-5">
                                    <div className="flex items-start space-x-2">
                                        <p className="text-[16px] text-[#666666BF]">Admin</p>
                                        <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#666666BF] marker:text-[#025C7A]">
                                            <li>{box.title}</li>
                                        </ul>
                                    </div>

                                    <p className="text-[22px] text-[#04000B] font-semibold">{box.content}</p>
                                    <div>
                                        <a href="#" className="flex items-start space-x-2">
                                            <p className="text-md text-[#04000B]">Continue Reading</p>
                                            <i className="fa fa-arrow-right text-lg text-[#025C7A] -mt-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >

            {/* "See All Testimonials" Button */}
            < div className="text-center my-12" >
                <button className="px-8 py-4 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                    View All
                </button>
            </div >
        </>
    )
}

export default Landing;
