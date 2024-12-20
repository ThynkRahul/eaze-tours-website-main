'use client';

import { useState } from 'react';

const TourTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { 
            title: 'Arrival NJP Railway Station / (IXB) Bagdogra Airport – Darjeeling', 
            description: 'On arrival at NJP Railway Station / (IXB) Bagdogra Airport, you will be met by our office Executive who will assist you to board your vehicle to Darjeeling (7380 Ft / 2250 Mts, 100 Kms / 3 Hrs). Overnight at Hotel.' 
        },
        { 
            title: 'Darjeeling', 
            description: 'Early morning tour to Tiger Hills (8364 Ft / 2550 Mts at around 4 AM) to view sunrise over Kanchendzonga Peak (subject to clear weather). On way back visit Ghoom Monastery, Batasia Loop. After breakfast go for a half-day sightseeing of Japanese Temple, Peace Pagoda, Padmaja Naidu Himalayan Zoological Park & Himalayan Mountaineering Institute (Closed on Thursday), Tenzing & Gombu Rock, Tibetan Refugee Self-Help Center (Closed on Sunday) & Tea Estate OR visit Rock Garden & Ganga Maya Lake. Overnight at Hotel.' 
        },
        { 
            title: 'Darjeeling – Excursion to Mirik', 
            description: 'After breakfast transfer to Mirik (5800 Ft / 1768 Mts / 50 Kms / 02 Hrs one way). Full day excursion to Pashupati Nagar (Indo-Nepal border) for shopping & Mirik Lake (Horse riding & boating around the lake are available on direct payment basis). Evening back to Darjeeling and overnight at Hotel.' 
        },
        { 
            title: 'Darjeeling – NJP Railway Station / (IXB) Bagdogra Airport', 
            description: 'After breakfast proceed to NJP Railway Station / (IXB) Bagdogra Airport (100 Kms / 3 Hrs), for your onward connection.' 
        },
    ];

    const swiperImages = [
        '/images/4/1.jpeg',
        '/images/4/2.jpeg',
        '/images/4/3.jpeg',
        '/images/4/4.jpeg',
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

export default TourTimeline;
