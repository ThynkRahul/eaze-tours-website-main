'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Day 01 - Arrival Cochin', description: 'Assistance & Traditional welcome on arrival in India followed by transfer to Hotel for Overnight. Cochin, known as the Queen of the Arabian Sea, is famous for its natural harbor and rich history of commerce and trade with various civilizations.' },
        { title: 'Day 02 - Cochin', description: 'Explore Cochin with visits to St. Francis Church, the Chinese Fishing Nets, Mattancherry Palace, and enjoy a Kathakali dance performance in the evening.' },
        { title: 'Day 03 - Cochin to Munnar', description: 'Drive to Munnar, a popular hill station known for its tea plantations, beautiful houses, and the exotic flora like Neelakurunji. It is home to Anamudi, the highest peak of South India.' },
        { title: 'Day 04 - Munnar', description: 'Free day to visit tea and coffee plantations in Munnar and explore the hill station at leisure.' },
        { title: 'Day 05 - Munnar to Periyar', description: 'Drive to Periyar and visit the Periyar Tiger Reserve. Enjoy a boat cruise on the artificial lake to spot wildlife like elephants, deer, and various bird species.' },
        { title: 'Day 06 - Periyar', description: 'Explore the Periyar Wildlife Sanctuary with a boat ride on the lake. Spot various wild animals and birds in this lush, serene environment.' },
        { title: 'Day 07 - Periyar to Kumarakom', description: 'Drive to Kumarakom and board a houseboat for a unique Kerala Backwaters cruise, visiting villages, temples, and scenic landscapes.' },
        { title: 'Day 08 - Kumarakom to Alleppey / Kovalam', description: 'Drive to Kovalam, one of South India’s most famous beach destinations. Spend the day at leisure, enjoying the beautiful beaches.' },
        { title: 'Day 09 - Kovalam', description: 'Relax and enjoy a free day at Kovalam beach. Spend the day resting on the sand and swimming in the clear waters.' },
        { title: 'Day 10 - Kovalam', description: 'Another free day to relax at Kovalam beach. Enjoy the tranquility and beauty of the coastal area.' },
        { title: 'Day 11 - Kovalam to Trivandrum Departure', description: 'After breakfast, enjoy a free day before transferring to Trivandrum Airport for your onward destination.' },
    ];

    const swiperImages = [
        '/images/13/1.jpg',
        '/images/13/2.jpg',
        '/images/13/3.jpg'
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
