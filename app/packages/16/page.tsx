'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Day 01 - Bangalore (Monday)', description: 'Check-in at Taj West End, followed by high tea, presentation on The Golden Chariot tour, visit to Chitrakala Parishad, cultural show, and dinner onboard The Golden Chariot.' },
        { title: 'Day 02 - Mysore/Kabini/Bandipur (Tuesday)', description: 'Depart for Kabini/Bandipur, enjoy a jungle safari, boat safari, and wildlife film. Dinner and stay overnight at Jungle Lodge.' },
        { title: 'Day 03 - Mysore (Wednesday)', description: 'Breakfast and depart for Mysore sightseeing, visit Mysore Palace and Srirangapatnam. Return to The Golden Chariot for lunch and depart for Lalitha Mahal Palace for cultural show.' },
        { title: 'Day 04 - Hassan (Thursday)', description: 'Visit Shravanabelagola, Belur, and Halebid for sightseeing. Depart to Hospet in the evening for dinner onboard The Golden Chariot.' },
        { title: 'Day 05 - Hospet (Friday)', description: 'Sightseeing in Hampi, including Virupaksha Temple, Elephant Stables, Royal Enclosure, Hazara Rama Temple, and Vittala Temple.' },
        { title: 'Day 06 - Badami (Saturday)', description: 'Sightseeing in Badami and Pattadakal. Enjoy the facilities onboard The Golden Chariot before departing for Goa.' },
        { title: 'Day 07 - Goa (Sunday)', description: 'Sightseeing in Goa, including visits to famous churches, Portuguese houses, and Majorda Beach Resort. Enjoy an Ayurvedic massage and return to The Golden Chariot.' },
        { title: 'Day 08 - Bangalore (Monday)', description: 'Breakfast onboard The Golden Chariot and farewell at Yeswanthpur Railway Station.' },
    ];

    const swiperImages = [
        '/images/16/1.jpg'
    ];

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? swiperImages.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === swiperImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="mt-16 md:mx-16 mt-[135px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Carousel Section */}
                <div className="relative h-screen max-h-screen w-full overflow-hidden bg-base-200">
                    <div className="relative h-full w-full">
                        {swiperImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index}`}
                                className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                                style={{
                                    top: '50%', // Centers vertically
                                }}
                            />
                        ))}
                    </div>
                    <button
                        onClick={prevSlide}
                        className="swiper-button-prev absolute left-5 top-1/2 transform -translate-y-1/2 text-[#007AFF] p-2 rounded-full"
                    >
                    </button>
                    <button
                        onClick={nextSlide}
                        className="swiper-button-next absolute right-5 top-1/2 transform -translate-y-1/2 text-[#007AFF] p-2 rounded-full"
                    >
                    </button>
                </div>

                {/* Timeline Section */}
                <div className="h-screen max-h-screen w-full overflow-auto">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {timelineData.map((item, index) => (
                            <li key={index} className={index % 2 === 0 ? 'timeline-start' : 'timeline-end'}>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 000-1.293l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10`}>
                                    <time className={`text-2xl font-mono italic ${index % 2 === 0 ? 'text-right ml-[300px]' : 'text-left'}`}>
                                        {index + 1}
                                    </time>
                                    <div className={`text-lg font-black ${index % 2 === 0 ? 'text-right  ml-[35px]' : 'text-left'}`}>
                                        {item.title}
                                    </div>
                                    <p className={`text-md ${index % 2 === 0 ? 'text-right ml-[35px]' : 'text-left'}`}>
                                        {item.description}
                                    </p>
                                </div>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TravelTimeline;
