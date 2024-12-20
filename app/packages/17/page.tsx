'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'DAY 01 - DELHI', description: 'The luxurious Royal Rajasthan on Wheels takes you through a seven day exploration of the vibrant Rajasthan, beginning from Delhi with ceremonial greetings and a welcome aboard.' },
        { title: 'DAY 02 - JODHPUR', description: 'Arrive in Jodhpur and visit the magnificent Mehrangarh Fort and Jaswant Thada. Lunch at a hotel and dinner on board.' },
        { title: 'DAY 03 - UDAIPUR', description: 'Explore Udaipur, the Venice of the East, with visits to the City Palace and Crystal Gallery.' },
        { title: 'DAY 03 - CHITTORGARH', description: 'In Chittorgarh, visit the historical fort and the Victory Tower. The light and sound program at the fort provides a glimpse into Rajput history.' },
        { title: 'DAY 04 - SAWAI MADHOPUR', description: 'Visit Ranthambore National Park to see majestic tigers and explore the Ranthambore Fort.' },
        { title: 'DAY 04 - JAIPUR', description: 'In Jaipur, enjoy the Hawa Mahal, Amber Fort, and City Palace, followed by a cultural dinner at a hotel.' },
        { title: 'DAY 05 - KHAJURAHO', description: 'Visit the 9th to 12th-century temples in Khajuraho, famous for their architectural brilliance and erotic sculptures.' },
        { title: 'DAY 06 - VARANASI', description: 'Explore the oldest city in the world, Varanasi, with its sacred Ganga Ghats, temples, and spiritual significance.' },
        { title: 'DAY 07 - AGRA', description: 'Visit the iconic Taj Mahal and Agra Fort in this vibrant cultural city.' },
        { title: 'DAY 08 - DELHI', description: 'The tour concludes in Delhi with breakfast on board and check-out.' },
    ];

    const swiperImages = [
        '/images/17/1.jpg',
        '/images/17/2.jpg',
        '/images/17/3.jpg',
        '/images/17/4.jpg',
        '/images/17/5.jpg',
        '/images/17/6.jpg',
        '/images/17/7.jpg',
        '/images/17/8.jpg',
        '/images/17/9.jpg',
        '/images/17/10.jpg',
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
