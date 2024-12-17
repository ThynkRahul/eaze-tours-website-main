import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import packageData from "../data/packages.json";
import testimonialData from "../data/testimonials.json";
import backgroundImage from "../public/images/background_2.jpg";
import backgroundImage2 from "../public/images/background_4.jpeg";
import backgroundImage3 from "../public/images/background_6.jpg";
import backgroundImage4 from "../public/images/background_5.jpg";

interface ILandingProps { }

function Landing(props: ILandingProps) {
    const [tabName, setTabName] = useState("india");
    const packages = packageData.filter((tourPackage) => tourPackage.Id <= 9 && tourPackage.Id > 3);
    const testimonials = testimonialData.slice(0, 9);

    // Separate state and refs for each slider
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const infoSliderRef = useRef<HTMLDivElement>(null);
    const testimonialSliderRef = useRef<HTMLDivElement>(null);
    const boxWidth = useRef<number>(0);

    const totalBoxes = 5; // Number of info boxes
    const visibleBoxes = Math.floor(window.innerWidth / boxWidth.current);

    const handleTabClick = (tab: string) => () => {
        setTabName(tab);
    };

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

    const handleNextTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
    };

    const handlePrevTestimonial = () => {
        setTestimonialIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
    };

    // Resize event handler
    useEffect(() => {
        const updateBoxWidth = () => {
            if (infoSliderRef.current) {
                const box = infoSliderRef.current.querySelector('.slider-box') as HTMLElement;
                if (box) {
                    boxWidth.current = box.offsetWidth + 20; // Added margin width
                }
            }
        };

        window.addEventListener('resize', updateBoxWidth);
        updateBoxWidth(); // Initial width calculation
        return () => window.removeEventListener('resize', updateBoxWidth);
    }, []);

    useEffect(() => {
        slideToIndex(infoSliderRef, currentIndex); // Slide to the current index for info boxes
    }, [currentIndex]);

    useEffect(() => {
        slideToIndex(testimonialSliderRef, testimonialIndex); // Slide to the current index for testimonials
    }, [testimonialIndex]);

    return (
        <>
            <div>
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
                    { src: backgroundImage2, heading: "Create Memories", para: "Unforgettable journeys, curated just for you. Explore breathtaking destinations, exclusive deals, and seamless travel experiences." },
                    { src: backgroundImage3, heading: "Unforgettable Journeys", para: "Unforgettable journeys, curated just for you. Explore breathtaking destinations, exclusive deals, and seamless travel experiences." },
                    { src: backgroundImage4, heading: "Curated Just for You", para: "Unforgettable journeys, curated just for you. Explore breathtaking destinations, exclusive deals, and seamless travel experiences." },
                    ].map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-screen w-full">
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
                                <div className="absolute inset-0 z-20 flex flex-col justify-center items-start text-left text-white max-w-screen-lg mx-auto px-6 pt-24 md:px-12">
                                    <h1 className="text-5xl md:text-7xl font-urbanist font-semibold text-shadow mb-6" style={{ fontSize: '56px', lineHeight: '75px' }}>
                                        {slide.heading}
                                    </h1>
                                    <p className="text-lg md:text-xl font-urbanist mb-12 max-w-lg">{slide.para}</p>
                                    <button className="px-6 py-3 font-urbanist text-white font-semibold bg-transparent border-2 border-white rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transform transition-transform hover:scale-105 duration-300 uppercase">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom arrows, placed outside Swiper */}
                <div className="swiper-button-next" style={{ color: "white" }}></div>
                <div className="swiper-button-prev" style={{ color: "white" }}></div>
            </div>

            {/* Info Boxes Section */}
            <div className="info-container flex justify-center gap-8 my-[70px] max-w-screen-xl mx-auto flex-wrap">
                <div className="info-box p-0 rounded-lg w-72 flex flex-col items-center">
                    <Image src="/images/info_icon_1.png" alt="Info Icon 1" width={77} height={77} />
                    <h2 className="info-heading text-lg font-urbanist font-light text-black text-center mt-4 mb-2">Book Festive Season Tours Now!</h2>
                    <p className="info-content text-center text-[#4F5E71] font-[16px] leading-[19px]">
                        Find amazing deals for your travel plans on luxury holiday packages in India, select your holiday package now!
                    </p>
                </div>

                <div className="info-box p-0 rounded-lg w-72 flex flex-col items-center">
                    <Image src="/images/info_icon_2.png" alt="Info Icon 2" width={77} height={77} />
                    <h2 className="info-heading text-lg font-urbanist font-light text-black text-center mt-4 mb-2">Adventure, Your Way</h2>
                    <p className="info-content text-center text-[#4F5E71] font-[16px] leading-[19px]">
                        We have a wide range of tour options to meet all your travel needs with our Himalayan Adventure tour package.
                    </p>
                </div>

                <div className="info-box p-0 rounded-lg w-72 flex flex-col items-center">
                    <Image src="/images/info_icon_3.png" alt="Info Icon 3" width={77} height={77} />
                    <h2 className="info-heading text-lg font-urbanist font-light text-black text-center mt-4 mb-2">Eaze Tours Spotlight</h2>
                    <p className="info-content text-center text-[#4F5E71] font-[16px] leading-[19px]">
                        Find out what's happening at Eaze Tours - from the special discounts to the latest india tours packages updates.
                    </p>
                </div>

                <div className="info-box p-0 rounded-lg w-72 flex flex-col items-center">
                    <Image src="/images/info_icon_4.png" alt="Info Icon 4" width={77} height={77} />
                    <h2 className="info-heading text-lg font-urbanist font-light text-black text-center mt-4 mb-2">Extremely Happy Travellers</h2>
                    <p className="info-content text-center text-[#4F5E71] font-[16px] leading-[19px]">
                        Eaze Tours holds record of great customer satisfaction and all customers are retained with us. Happy Travelling!
                    </p>
                </div>
            </div>

            {/* Heading Before the Hover Slider */}
            <div className="my-12 max-w-screen-xl mx-auto pt-[30px]">
                <div className="flex items-center mb-0 flex-wrap justify-center gap-4 sm:justify-between sm:gap-0">
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
                <div className="slider-container my-8 w-[315px] mx-auto sm:w-full">
                    <div className="slider relative overflow-hidden">
                        <div className="slider-wrapper flex gap-0 transition-transform duration-300 ease-in-out" ref={infoSliderRef}>
                            {[{ id: 1, title: "India", content: "Explore the cultural diversity of India.", bg: "/images/india.png" },
                            { id: 2, title: "Maldives", content: "Relax on the pristine beaches of Maldives.", bg: "/images/maldives.png" },
                            { id: 3, title: "Nepal", content: "Discover the Himalayan beauty in Nepal.", bg: "/images/nepal.png" },
                            { id: 4, title: "Bhutan", content: "Experience the peace and serenity of Bhutan.", bg: "/images/bhutan.png" },
                            { id: 5, title: "Custom Box", content: "Add your custom content here.", bg: "/images/india.png" }
                            ].map((box, index) => (
                                <div
                                    key={index}
                                    className="slider-box relative flex-shrink-0 mx-3 w-80 bg-cover bg-center rounded-[23px] shadow-lg overflow-hidden group"
                                    style={{
                                        width: '295px',
                                        height: '394px',
                                        backgroundImage: `url(${box.bg})`,
                                    }}
                                >
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
                                        <button className="px-4 py-2 font-bold bg-white text-[#025C7A] rounded-full hover:bg-gray-100 transition-all duration-300 w-[150px]">
                                            See All Tours
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* "See All Destinations" Button */}
            <div className="text-center my-12">
                <button className="px-8 py-4 mt-8 mb-12 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                    See All Destinations
                </button>
            </div>
            {/* Heading for the next section */}
            <div className="my-12 max-w-screen-xl mx-auto">
                <h2 className="text-2xl font-semibold text-black text-center sm:text-left" style={{ fontSize: '32px' }}>
                    Trip  Ideas To Inspire You
                </h2>
            </div>

            {/* Two Horizontal Boxes */}
            <div className="flex flex-wrap justify-between gap-4 my-12 max-w-screen-xl mb-[120px] mx-8 sm:mx-auto sm:flex-nowrap">
                <div
                    className="w-full sm:w-1/2 h-[500px] sm:h-[323px] bg-cover bg-center rounded-lg relative"
                    style={{
                        background: `linear-gradient(90deg, rgba(2, 92, 122, 0.8) 30%, rgba(3, 130, 173, 0.4) 60.32%, rgba(4, 169, 224, 0.4) 100%), url('/images/tajmahal.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '35px'
                    }}
                >
                    <div className="absolute inset-0 flex flex-col items-between justify-between text-white text-left p-6">
                        <div>
                            <h3 className="text-[32px] font-semibold mb-4 sm:w-[60%] w-[80%] font-urbanist">India (Delhi, Varanasi, Amritsar,Agra)</h3>
                            <p className="mb-4 sm:w-[60%] w-[80%] font-urbanist">Embark on a royal journey through India, exploring Delhi's majestic monuments, Varanasi's spiritual ghats, Amritsar's Golden Temple, and Agra's iconic Taj Mahal.</p>
                        </div>
                        <button className="px-4 py-4 font-bold bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-[#fff] transition-all duration-300 w-[160px]">
                            See All Activities
                        </button>
                    </div>
                </div>

                <div
                    className="w-full sm:w-1/2 h-[450px] sm:h-[323px] bg-cover bg-center rounded-lg relative"
                    style={{
                        background: `linear-gradient(270deg, rgba(110, 151, 83, 0.6) 30%, rgba(110, 151, 83, 0.6) 60.32%, rgba(110, 151, 83, 0.95) 100%), url('/images/goldentemple.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '35px'
                    }}
                >
                    <div className="absolute inset-0 flex flex-col items-between justify-between text-white text-left p-6">
                        <div>
                            <h3 className="text-[32px] font-semibold mb-4 sm:w-[60%] w-[80%] font-urbanist">Beyond the City</h3>
                            <p className="mb-4 sm:w-[60%] w-[80%] font-urbanist">Explore Amritsar beyond the Golden Temple with curated tour packages that uncover hidden gems, vibrant culture, and historical treasures of this iconic city.</p>
                        </div>
                        <button className="px-4 py-4 font-bold bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-[#fff] transition-all duration-300 w-[160px]">
                            See All Activities
                        </button>
                    </div>
                </div>
            </div>


            {/* Heading for the next section */}
            <div className="my-12 max-w-screen-xl mx-auto">
                <h2 className="text-2xl font-semibold text-black" style={{ fontSize: '32px' }}>
                    Popular Packages
                </h2>
            </div>

            {/* Add your new boxes section at the end */}
            <div className="flex justify-center items-center max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
                    <div className="bg-white rounded-[23px] shadow-[0px_0px_2px_1px_#00000040] flex flex-col">
                        <div className="w-full h-48 bg-cover bg-center rounded-t-[23px]" style={{ backgroundImage: 'url("/images/box1.png")' }}></div>
                        <div className="w-full p-4 flex flex-col justify-center gap-2">
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-map-marker-alt text-lg text-400 text-[#4F5E71] -mt-1" />
                                <p className="text-sm text-[#4F5E71]">India</p>
                            </div>
                            <p className="text-black-700 font-urbanist">Delhi-Mandawa Bikaner-Jaisalmer Jodhpur-Luni-Ranakpur-Udaipur</p>
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-star text-lg text-yellow-400 -mt-1" />
                                <p className="text-[16px]">5.00</p>
                                <p className="text-[16px] text-[#4F5E71]">(10 Reviews)</p>
                            </div>
                            <div className="flex items-start space-x-2 pb-5 pt-1">
                                <div className="bg-[#025C7A] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Cultural</p>
                                </div>
                                <div className="bg-[#6E9753] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Traditional</p>
                                </div>
                            </div>
                            <hr />
                            <button className="mt-3 w-32 py-2 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                                More Details
                            </button>
                        </div>
                    </div>


                    <div className="bg-white rounded-[23px] shadow-[0px_0px_2px_1px_#00000040] flex flex-col">
                        <div className="relative w-full h-48 bg-cover bg-center rounded-t-[23px]" style={{ backgroundImage: 'url("/images/box2.png")' }}>
                            <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-2 py-1 rounded">On Sale</span>
                        </div>
                        <div className="w-full p-4 flex flex-col justify-center gap-2">
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-map-marker-alt text-lg text-400 text-[#4F5E71] -mt-1" />
                                <p className="text-sm text-[#4F5E71]">India</p>
                            </div>
                            <p className="text-black-700 font-urbanist">Delhi - Manali - Keylong - Hemis Pangong Lake - Tso Moriri Lake</p>
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-star text-lg text-yellow-400 -mt-1" />
                                <p className="text-[16px]">5.00</p>
                                <p className="text-[16px] text-[#4F5E71]">(10 Reviews)</p>
                            </div>
                            <div className="flex items-start space-x-2 pb-5 pt-1">
                                <div className="bg-[#025C7A] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Adventures</p>
                                </div>
                                <div className="bg-[#6E9753] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Spirituality</p>
                                </div>
                            </div>
                            <hr />
                            <button className="mt-3 w-32 py-2 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                                More Details
                            </button>
                        </div>
                    </div>


                    <div className="bg-white rounded-[23px] shadow-[0px_0px_2px_1px_#00000040] flex flex-col">
                        <div className="w-full h-48 bg-cover bg-center rounded-t-[23px]" style={{ backgroundImage: 'url("/images/box3.png")' }}></div>
                        <div className="w-full p-4 flex flex-col justify-center gap-2">
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-map-marker-alt text-lg text-400 text-[#4F5E71] -mt-1" />
                                <p className="text-sm text-[#4F5E71]">India</p>
                            </div>
                            <p className="text-black-700 font-urbanist">Rishikesh - Haridwar - Pune - Bangalore - Bhubaneswar</p>
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-star text-lg text-yellow-400 -mt-1" />
                                <p className="text-[16px]">5.00</p>
                                <p className="text-[16px] text-[#4F5E71]">(10 Reviews)</p>
                            </div>
                            <div className="flex items-start space-x-2 pb-5 pt-1">
                                <div className="bg-[#025C7A] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Ayurveda</p>
                                </div>
                                <div className="bg-[#6E9753] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Wellness</p>
                                </div>
                            </div>
                            <hr />
                            <button className="mt-3 w-32 py-2 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                                More Details
                            </button>
                        </div>
                    </div>


                    <div className="bg-white rounded-[23px] shadow-[0px_0px_2px_1px_#00000040] flex flex-col">
                        <div className="relative w-full h-48 bg-cover bg-center rounded-t-[23px]" style={{ backgroundImage: 'url("/images/box4.png")' }}>
                            <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-2 py-1 rounded">On Sale</span>
                        </div>
                        <div className="w-full p-4 flex flex-col justify-center gap-2">
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-map-marker-alt text-lg text-400 text-[#4F5E71] -mt-1" />
                                <p className="text-sm text-[#4F5E71]">India</p>
                            </div>
                            <p className="text-black-700 font-urbanist">New Delhi - Mumbai - Goa - Kerala - Ranthambore - Agra - Jodhpur </p>
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-star text-lg text-yellow-400 -mt-1" />
                                <p className="text-[16px]">5.00</p>
                                <p className="text-[16px] text-[#4F5E71]">(10 Reviews)</p>
                            </div>
                            <div className="flex items-start space-x-2 pb-5 pt-1">
                                <div className="bg-[#025C7A] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Luxury</p>
                                </div>
                                <div className="bg-[#6E9753] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Royal</p>
                                </div>
                            </div>
                            <hr />
                            <button className="mt-3 w-32 py-2 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                                More Details
                            </button>
                        </div>
                    </div>



                    <div className="bg-white rounded-[23px] shadow-[0px_0px_2px_1px_#00000040] flex flex-col">
                        <div className="w-full h-48 bg-cover bg-center rounded-t-[23px]" style={{ backgroundImage: 'url("/images/tour_box.webp")' }}></div>
                        <div className="w-full p-4 flex flex-col justify-center gap-2">
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-map-marker-alt text-lg text-400 text-[#4F5E71] -mt-1" />
                                <p className="text-sm text-[#4F5E71]">India</p>
                            </div>
                            <p className="text-black-700 font-urbanist">BAGDOGRA AIRPORT-GANGTOK- KALIMPONG-DARJEELING</p>
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-star text-lg text-yellow-400 -mt-1" />
                                <p className="text-[16px]">5.00</p>
                                <p className="text-[16px] text-[#4F5E71]">(10 Reviews)</p>
                            </div>
                            <div className="flex items-start space-x-2 pb-5 pt-1">
                                <div className="bg-[#025C7A] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Adventure Tours</p>
                                </div>
                            </div>
                            <hr />
                            <button className="mt-3 w-32 py-2 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                                More Details
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-[23px] shadow-[0px_0px_2px_1px_#00000040] flex flex-col">
                        <div className="w-full h-48 bg-cover bg-center rounded-t-[23px]" style={{ backgroundImage: 'url("/images/tour_box2.webp")' }}></div>
                        <div className="w-full p-4 flex flex-col justify-center gap-2">
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-map-marker-alt text-lg text-400 text-[#4F5E71] -mt-1" />
                                <p className="text-sm text-[#4F5E71]">India</p>
                            </div>
                            <p className="text-black-700 font-urbanist">Delhi – Jaipur – Agra – Khajuraho – Varanasi – Delhi</p>
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-star text-lg text-yellow-400 -mt-1" />
                                <p className="text-[16px]">5.00</p>
                                <p className="text-[16px] text-[#4F5E71]">(10 Reviews)</p>
                            </div>
                            <div className="flex items-start space-x-2 pb-5 pt-1">
                                <div className="bg-[#6E9753] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Cultural Tours</p>
                                </div>
                            </div>
                            <hr />
                            <button className="mt-3 w-32 py-2 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                                More Details
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[23px] shadow-[0px_0px_2px_1px_#00000040] flex flex-col">
                        <div className="w-full h-48 bg-cover bg-center rounded-t-[23px]" style={{ backgroundImage: 'url("/images/tour_box3.webp")', backgroundPosition: 'center' }}></div>
                        <div className="w-full p-4 flex flex-col justify-center gap-2">
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-map-marker-alt text-lg text-400 text-[#4F5E71] -mt-1" />
                                <p className="text-sm text-[#4F5E71]">India</p>
                            </div>
                            <p className="text-black-700 font-urbanist">Mumbai-Baroda-Bhuj-Ahmedamad-Utellia-Balaram-Patan-Little Rann of Kutch-Bhuj</p>
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-star text-lg text-yellow-400 -mt-1" />
                                <p className="text-[16px]">5.00</p>
                                <p className="text-[16px] text-[#4F5E71]">(10 Reviews)</p>
                            </div>
                            <div className="flex items-start space-x-2 pb-5 pt-1">
                                <div className="bg-[#025C7A] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Tribals Tours</p>
                                </div>
                            </div>
                            <hr />
                            <button className="mt-3 w-32 py-2 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                                More Details
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[23px] shadow-[0px_0px_2px_1px_#00000040] flex flex-col">
                        <div className="w-full h-48 bg-cover bg-center rounded-t-[23px]" style={{ backgroundImage: 'url("/images/tour_box4.webp")' }}></div>
                        <div className="w-full p-4 flex flex-col justify-center gap-2">
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-map-marker-alt text-lg text-400 text-[#4F5E71] -mt-1" />
                                <p className="text-sm text-[#4F5E71]">India</p>
                            </div>
                            <p className="text-black-700 font-urbanist">Delhi–Jaipur–Ranthambore–Bharatpur–Agra–Umaria–Bandhavgarhh–Kanha–Jabalpur</p>
                            <div className="flex items-start space-x-2">
                                <i className="fa fa-star text-lg text-yellow-400 -mt-1" />
                                <p className="text-[16px]">5.00</p>
                                <p className="text-[16px] text-[#4F5E71]">(10 Reviews)</p>
                            </div>
                            <div className="flex items-start space-x-2 pb-5 pt-1">
                                <div className="bg-[#6E9753] text-white px-3 py-1 rounded-sm">
                                    <p className="text-sm">Wildlife Tours</p>
                                </div>
                            </div>
                            <hr />
                            <button className="mt-3 w-32 py-2 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                                More Details
                            </button>
                        </div>
                    </div>
                </div >
            </div >
            {/* "See All Destinations" Button */}
            <div className="text-center my-12">
                <button className="px-8 py-4 mt-8 mb-12 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                    See All Packages
                </button>
            </div>
            {/* Heading Before the Testimonial Slider */}
            < div className="my-12 max-w-screen-xl mx-auto" >
                <div className="flex justify-between items-center mb-8">
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

                {/* Testimonial Slider */}
                <div className="testimonial-slider-container mb-12 relative">
                    <div className="testimonial-slider relative overflow-hidden">
                        <div className="testimonial-slider-wrapper flex transition-transform duration-300 ease-in-out" ref={testimonialSliderRef}>
                            {[{ id: 1, name: "Julie Victor", designation: "Chicago USA", content: "Manoj and his group created wonderful stress-free experiences for us while traveling in India. He was responsive kind and helpful throughout. I recommend Eaze Tours highly. Julie V traveling with my family from Chicago.", rating: 5, img: "/images/female.svg" },
                            { id: 2, name: "Manish", designation: "USA", content: "We would like to thank you for arranging the Trip so nicely. It was really a good experience. We would specially like to appreciate Manoj for his management throughout the trip.", rating: 4, img: "/images/male.svg" },
                            { id: 3, name: "Bernadette Cognac", designation: "USA", content: "I cannot say enough good things about Eaze Tours. Wonderful, knowledgeable guides, and reliable drivers. Plus they know all the best spots for shopping and lunch!", rating: 5, img: "/images/female.svg" },
                            { id: 4, name: "Liz and Jill Dean", designation: "USA", content: "Hello, this is Liz and Jill from Anchorage, Alaska. Honestly, neither of us could think of anything that had to do with the tour management that could be improved. It all seemed seamless and smooth. The hotels, transportation, and food were all perfect. Thank you for everything, Liz and Jill Dean", rating: 4, img: "/images/male.svg" },
                            { id: 5, name: "Mariane Ewbank Rodrigues Batista", designation: "USA", content: "Very professional service. They made our trip to India unforgettable.", rating: 5, img: "/images/female.svg" },
                            { id: 6, name: "Laura Nitsos", designation: "USA", content: "Hi Manoj, It’s taken me a few days to get an email to you, but I wanted to let you know Tracy and I made it home (along with the rest of the group) Monday night. We were tired, but so happy to have had the opportunity to visit northern India. I also want to thank you for a wonderful, exciting, fascinating experience! We loved it all, and would love to go back to India someday. When we do that, we’ll contact you! Best wishes,", rating: 5, img: "/images/female.svg" },
                            { id: 7, name: "Fran A’Hern Smith", designation: "USA", content: "I am home and yawning. I want to thank you again for your excellent ability to plan and coordinate the superb agenda. And, for your listening and leadership skills. You are one amazing person. I hope we meet again in person but I will always have a spirit connection.", rating: 5, img: "/images/female.svg" },
                            { id: 8, name: "Erika & Karim", designation: "Mexico city", content: "Dear Manoj, Great to meet you and to be in contact with you. Thank you for your timely message and your willingness to accommodate to our schedule. Really appreciated! We would like to thank you for your efficiency to make our tour so comfortable. Looking forwards to meeting you again in near future.", rating: 5, img: "/images/female.svg" },
                            { id: 9, name: "Sandy Sheehy", designation: "USA", content: "The Classic India trip that you arranged so well for the Albuquerque International Association exceeded everyone’s expectations, Manoj. Thank you so much for all the work you and your associates invested in our having an enriching intellectual and aesthetic experience and, especially, for your personal warmth and consideration. The party on our final night was delightful. The Ganesh you gave me now has an honored place on the mantle in my living room.", rating: 5, img: "/images/female.svg" }
                            ].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="testimonial-box relative ml-[2px] mr-[1.7%] flex-shrink-0 w-80 my-3 bg-white rounded-[30px] shadow-[0px_0px_21.9px_0px_#00000029] overflow-visible group p-10"
                                    style={{ width: '32%' }}
                                >
                                    {/* Customer Image */}
                                    <div className="flex justify-start gap-3 items-center mb-4">
                                        <div className="w-[60px] h-[60px] p-2 bg-[#025C7A] rounded-full overflow-hidden">
                                            <img src={testimonial.img} alt={testimonial.name} className="w-full h-full object-cover" />
                                        </div>
                                        {/* Customer Info */}
                                        <div>
                                            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                            <p className="text-sm text-[#000] font-500">{testimonial.designation}</p>
                                        </div>
                                    </div>

                                    {/* Testimonial Content */}
                                    <p className="text-[#777777] mb-4">{testimonial.content}</p>

                                    {/* Rating with Stars */}
                                    <div className="flex justify-start items-center">
                                        <p className="text-gray-700 text-[18px] mr-2">5.0</p>
                                        {Array.from({ length: testimonial.rating }, (_, i) => (
                                            <span key={i} className="text-[#FE7831] font-500 text-[22px]">&#9733;</span>
                                        ))}
                                        {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                                            <span key={i + testimonial.rating} className="text-gray-300 text-[18px]">&#9733;</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >

            {/* "See All Testimonials" Button */}
            < div className="text-center my-12" >
                <button className="px-8 py-4 mt-4 mb-12 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                    View All
                </button>
            </div >
            {/* New Section - Subscribe Section */}
            < div className="max-w-screen-xl mx-auto h-[500px] rounded-[23px] flex items-center justify-start p-[80px]" style={{ backgroundImage: 'url("/images/suscribe_bg.png")', backgroundPosition: 'center', backgroundSize: 'cover' }
            }>
                <div className="w-[600px] bg-black p-8 rounded-[23px] text-left">
                    <h2 className="text-white text-[40px] mb-4 font-semibold">Subscribe & Get 20% off</h2>
                    <p className="text-white mb-6">Subscribe to our newsletter and get the latest updates and exclusive offers.</p>

                    {/* Input Field and Subscribe Button */}
                    <div className="flex items-center justify-start gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 w-full max-w-[350px] rounded-2xl text-[#000] bg-white focus:outline-none"
                        />
                        <button
                            className="px-6 py-3 bg-[#025C7A] text-white rounded-2xl hover:bg-[#023e56] transition duration-300"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div >
            {/* Gallery Section */}
            < div className="w-full py-16 bg-white" >
                <div className="my-12 max-w-screen-xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-semibold text-black" style={{ fontSize: '32px' }}>
                            The Unforgettable Tour Gallery
                        </h2>
                    </div></div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
                    <div className="aspect-square bg-cover bg-center rounded-[23px]" style={{ backgroundImage: 'url(/images/glry_img1.png)' }}></div>
                    <div className="aspect-square bg-cover bg-center rounded-[23px]" style={{ backgroundImage: 'url(/images/glry_img2.png)' }}></div>
                    <div className="aspect-square bg-cover bg-center rounded-[23px]" style={{ backgroundImage: 'url(/images/glry_img3.png)' }}></div>
                    <div className="aspect-square bg-cover bg-center rounded-[23px]" style={{ backgroundImage: 'url(/images/glry_img4.png)' }}></div>
                    <div className="aspect-square bg-cover bg-center rounded-[23px]" style={{ backgroundImage: 'url(/images/glry_img5.png)' }}></div>
                    <div className="aspect-square bg-cover bg-center rounded-[23px]" style={{ backgroundImage: 'url(/images/glry_img6.png)' }}></div>
                    <div className="aspect-square bg-cover bg-center rounded-[23px]" style={{ backgroundImage: 'url(/images/glry_img7.png)' }}></div>
                    <div className="aspect-square bg-cover bg-center rounded-[23px]" style={{ backgroundImage: 'url(/images/glry_img8.png)' }}></div>
                </div>
            </div >
            {/* "See All Destinations" Button */}
            < div className="flex justify-center items-center mb-8 gap-4" >
                <button className="px-8 h-[50px] border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                    View All
                </button>
                <button className="px-6 h-[50px] border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">
                    <i className="fab fa-instagram text-lg" /> Follow On Instagram
                </button>
            </div >
            {/* Heading Before the Testimonial Slider */}
            < div className="my-12 max-w-screen-xl mx-auto" >
                <h2 className="text-2xl font-semibold text-black mt-12" style={{ fontSize: '32px' }}>
                    Latest Blog & Articles
                </h2>

                {/* Swiper for the Trip Ideas */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3} // Show all 3 boxes in a row
                    pagination={{ clickable: true }} // Enable pagination
                    modules={[Pagination]} // Include Pagination module
                    className="mt-8"
                >
                    {[
                        { title: "India", content: "5 Ways to Select India Tour Packages from the USA", bg: "/images/blog_box1.png" },
                        { title: "India", content: "5 Reasons to Have Your Honeymoon Tour in India", bg: "/images/blog_box2.webp" },
                        { title: "India", content: "A Perfect Blend of History and Adventure with Eaze Tours", bg: "/images/blog_box3.jpg" },
                        { title: "Sri Lanka", content: "Colombo-Galle-Kandy", bg: "/images/box3.png" },
                        { title: "Indonesia", content: "Bali-Jakarta-Yogyakarta", bg: "/images/box3.png" },
                        { title: "Vietnam", content: "Hanoi-Ho Chi Minh-Phong Nha", bg: "/images/box3.png" },
                        { title: "Malaysia", content: "Kuala Lumpur-Perhentian Langkawi", bg: "/images/box3.png" },
                        { title: "Cambodia", content: "Siem Reap-Phnom Penh", bg: "/images/box3.png" },
                    ].map((box, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-[23px] shadow-[0px_0px_2px_1px_#00000040] flex flex-col mb-[100px]">
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

    );
}

export default Landing;