'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'DAY 01 - ARRIVE DELHI', description: 'Meet and assist upon arrival and transfer to the hotel.' },
        { title: 'DAY 02 - IN DELHI', description: 'After breakfast, proceed with a sightseeing tour of Old and New Delhi. Visit Red Fort, Jama Masjid, Raj Ghat, Chandni Chowk, Qutub Minar, Humayun’s Tomb, India Gate, and more.' },
        { title: 'DAY 03 - DELHI to BHUBANESHWAR', description: 'Transfer to the airport for Bhubaneshwar. Half-day sightseeing includes Lingaraj Temple, Rajarani Temple, Dhauli Peace Pagoda, and Jain Monk Caves.' },
        { title: 'DAY 04 - BHUBANESHWAR to RATNA GIRI', description: 'Excursion to Ratnagir.' },
        { title: 'DAY 05 - BHUBANESHWAR to BALIGUDA', description: 'Drive to Baliguda.' },
        { title: 'DAY 06 - BALIGUDA', description: 'Visit different villages and Desai Kondh.' },
        { title: 'DAY 07 - BALIGUDA to BELGHAR to KOTHAGARGH to RAYAGADA', description: 'Depart to Belghar area, visit tribal villages, and Kothagarh weekly market.' },
        { title: 'DAY 08 - RAYAGADA to JEYPORE', description: 'Visit Onukudelli and the Bonda & Gadhaba tribes markets, then drive to Jeypore.' },
        { title: 'DAY 09 - IN JEYPORE', description: 'Visit the Paraja Tribes at Kundli market.' },
        { title: 'DAY 10 - JEYPORE to LAXMIPUR to RAYAGADA', description: 'Visit Dhuruba Tribe, Jagannath Temple, and Tribal Museum at Koraput.' },
        { title: 'DAY 11 - RAYAGADA to TAPTAOANI to CHILKA', description: 'Drive to Chilka, visiting Taptapani.' },
        { title: 'DAY 12 - CHILKA to PURI', description: 'Drive to Puri and relax on the beach.' },
        { title: 'DAY 13 - PURI', description: 'Full day city tour of Puri, Jagannath Temple, and Konark Sun Temple.' },
        { title: 'DAY 14 - PURI to BHUBANESHWAR to DELHI', description: 'Transfer to Bhubaneshwar airport for flight to Delhi and onward destination.' },
    ];

    const swiperImages = [
        '/images/22/1.jpg',
        '/images/22/2.jpg',
        '/images/22/3.jpg',
        '/images/22/4.jpg',
        '/images/22/5.jpg',
        '/images/22/6.jpg',
        '/images/22/7.jpg',
        '/images/22/8.jpg',
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
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
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
