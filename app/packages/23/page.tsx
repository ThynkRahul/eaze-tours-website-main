'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'DAY 01 - ARRIVE BHUBANESWAR', description: 'On arrival in Bhubaneswar, assistance and transfer to hotel. Rest of the day free for relaxation.' },
        { title: 'DAY 02 - IN BHUBANESWAR', description: 'Guided city tour of Bhubaneswar visiting temples like Brahmeswar, Mukteswar, and Linga Raja temples.' },
        { title: 'DAY 03 - BHUBANESWAR / PURI / KONARK / BHUBANESWAR', description: 'Excursion to Puri (one of the four Dhams of India) and the Sun Temple at Konark.' },
        { title: 'DAY 04 - BHUBANESWAR / BALLIGUDA', description: 'Drive to Balliguda, visiting Oriyan villages on the way. Overnight in Balliguda.' },
        { title: 'DAY 05 - BALLIGUDA / RAYAGADA', description: 'Drive to Rayagada exploring villages of the Kutia Kondh tribe.' },
        { title: 'DAY 06 - IN RAYAGADA', description: 'Visit the market in Kothagarh and explore villages of the Desia Kondh and Dongaria Kondh tribes.' },
        { title: 'DAY 07 - RAYAGADA / CHATIKONA / JEYPORE', description: 'Drive to Jeypore, visiting the weekly market of the Dongaria tribe and the Jharia Paroja village.' },
        { title: 'DAY 08 - IN JEYPORE', description: 'Visit the weekly market of the Bonda tribe at Onkadelli and explore villages of the Gadaba tribe.' },
        { title: 'DAY 09 - JEYPORE / KUNDULI / NANDPUR / JEYPORE', description: 'Visit the tribal markets of the Sanaparoja & Mali tribes and the villages of the Dhuruba tribe.' },
        { title: 'DAY 10 - JEYPORE / JAGDALPUR', description: 'Drive to Jagdalpur, visiting the dyeing and terracotta work in Kotapad village.' },
        { title: 'DAY 11 - JAGDALPUR / CHITRAKUT', description: 'Visit the villages of the Muria tribe and the stunning Chitrakot Waterfalls.' },
        { title: 'DAY 12 - IN CHITRAKUT', description: 'Drive to Kailash Cave in Kanger Valley and visit the Bhadra tribal village.' },
        { title: 'DAY 13 - CHITRAKUT / NARAYANPUR', description: 'Drive to Narayanpur, witnessing the famous tribal artwork of the Maria tribe.' },
        { title: 'DAY 14 - NARAYANPUR / RAIPUR', description: 'Drive to Raipur, visiting the villages of the Maria tribe at Gadbental.' },
        { title: 'DAY 15 - RAIPUR / DEPART', description: 'Transfer to the airport for your departure flight.' },
    ];

    const swiperImages = [
        '/images/23/1.jpg',
        '/images/23/2.jpg',
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
