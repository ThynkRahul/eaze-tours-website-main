'use client';

import { useState } from 'react';

const TravelItineraryTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Day 01 - Arrival Cochin', description: 'Assistance & Traditional welcome on arrival in India & followed by transfer to Hotel for Overnight. Cochin is the commercial capital of Kerala and boasts a rich history with influences from the British, Arabs, Portuguese, Dutch, and more.' },
        { title: 'Day 02 - Cochin Sightseeing', description: 'Visit St. Francis Church, Chinese Fishing Nets, Mattancherry Palace, and enjoy a Kathakali dance performance in the evening.' },
        { title: 'Day 03 - Cochin to Munnar', description: 'Drive to Munnar, a beautiful hill station known for its tea plantations and exotic flora like Neelakurunji. Enjoy the natural beauty and relaxation in this cool environment.' },
        { title: 'Day 04 - Munnar', description: 'A day to relax and enjoy the scenic beauty of Munnar, including trekking and exploring its lush tea plantations.' },
        { title: 'Day 05 - Munnar to Periyar', description: 'Drive to Periyar Tiger Reserve, known for its wild elephants and boat cruises on the lake. Explore the local market in the evening.' },
        { title: 'Day 06 - Periyar Wildlife Exploration', description: 'Enjoy a boat ride in Periyar Lake, observing wild elephants, birds, and other wildlife, followed by free time for exploration.' },
        { title: 'Day 07 - Periyar to Kumarakom', description: 'Drive to Kumarakom to board a houseboat and enjoy a backwaters cruise through the picturesque Kerala canals.' },
        { title: 'Day 08 - Kumarakom to Kovalam', description: 'Drive to Kovalam and relax on the beautiful beaches of the region, especially the Lighthouse Beach.' },
        { title: 'Day 09 - Kovalam Relaxation', description: 'A full day of leisure on the beach at Kovalam.' },
        { title: 'Day 10 - Kovalam Relaxation', description: 'Another day free for enjoying the stunning beaches and relaxing by the sea.' },
        { title: 'Day 11 - Kovalam to Trivandrum Departure', description: 'After breakfast, relax before transferring to Trivandrum Airport for your onward journey.' }
    ];

    const swiperImages = [
        '/images/11/1.jpeg',
        '/images/11/2.jpeg',
        '/images/11/3.jpeg',
        '/images/11/4.jpeg',
        '/images/11/5.jpeg',
        '/images/11/6.jpeg',
        '/images/11/7.jpeg',
        '/images/11/8.jpeg'
    ];

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? swiperImages.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === swiperImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="md:mx-16 mt-16 sm:mt-[135px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Carousel Section */}
                <div className="relative h-screen max-h-screen w-full overflow-hidden bg-base-200">
                    <div className="relative h-full w-full">
                        {swiperImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index}`}
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
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

export default TravelItineraryTimeline;
