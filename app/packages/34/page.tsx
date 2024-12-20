'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'DAY 01 - ARRIVE DELHI', description: 'Met on arrival and transfer to hotel.' },
        { title: 'DAY 02 - DELHI', description: 'Sightseeing tour of Old Delhi, including Red Fort, Jama Masjid, Rajghat, Qutub Minar, Chhatarpur Temple, Humayun’s Tomb, and Bahai Temple. Evening at leisure.' },
        { title: 'DAY 03 - DELHI to MANDAWA', description: 'Drive to Mandawa, check-in, and explore the painted havelis of the Shekhawati region.' },
        { title: 'DAY 04 - MANDAWA to BIKANER', description: 'Drive to Bikaner, visit Junagarh Fort, and Lallgarh Palace. Evening at leisure.' },
        { title: 'DAY 05 - BIKANER to JAISALMER', description: 'Drive to Jaisalmer, check-in, and evening at leisure.' },
        { title: 'DAY 06 - JAISALMER', description: 'Explore Jaisalmer Fort, Jain temples, Patwon-ki-Haveli, and Sam Sand Dunes with a camel safari.' },
        { title: 'DAY 07 - JAISALMER to JODHPUR', description: 'Drive to Jodhpur, visit Mehrangarh Fort and Jaswant Thada.' },
        { title: 'DAY 08 - JODHPUR to JAIPUR', description: 'Drive to Jaipur, check-in, and evening at leisure.' },
        { title: 'DAY 09 - JAIPUR', description: 'Visit Amber Fort, Jantar Mantar, City Palace, and Hawa Mahal.' },
        { title: 'DAY 10 - JAIPUR to AGRA', description: 'Drive to Agra, en-route visit Fatehpur Sikri. Check-in at the hotel in Agra.' },
        { title: 'DAY 11 - AGRA to DELHI DEPARTURE', description: 'Visit the Taj Mahal and Agra Fort. Transfer to Delhi for departure.' },
    ];

    const swiperImages = [
        '/images/34/1.jpg',
        '/images/34/2.jpg',
        '/images/34/3.jpg',
        '/images/34/4.jpg',
        '/images/34/5.jpg',
        '/images/34/6.jpg',
        '/images/34/7.jpg',
        '/images/34/8.jpg',
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
