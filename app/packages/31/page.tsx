'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Day 01 - Arrive Delhi', description: 'Meet on arrival and transfer to hotel.' },
        { title: 'Day 02 - Delhi – Bikaner (Bikaner Mail)', description: 'Sightseeing tour of Old and New Delhi including the Red Fort, Jama Masjid, Qutub Minar, Humayun’s Tomb, and the Bahai Temple. Overnight train to Bikaner.' },
        { title: 'Day 03 - Bikaner – Gajner', description: 'Arrive at Gajner Palace, explore the surroundings on buggies or jeeps, or enjoy a nature walk in the nearby forest.' },
        { title: 'Day 04 - Gajner – Bikaner – Gajner', description: 'Visit Junagarh Fort, Devi Kund Sagar, Deshnoke Temple, and enjoy the architectural wonders and sacred rodents within the temple.' },
        { title: 'Day 05 - Gajner – Mandawa', description: 'Drive to Mandawa, check-in at Hotel Castle Mandawa, explore the havelis with beautiful frescos.' },
        { title: 'Day 06 - Mandawa – Nawal Garh – Mandawa', description: 'Visit Nawalgarh’s 18th-century havelis and forts. Return to Mandawa.' },
        { title: 'Day 07 - Mandawa – Dundlod – Mandawa', description: 'Visit Dundlod Fort and explore its beautiful architecture. Return to Mandawa.' },
        { title: 'Day 08 - Mandawa – Jaipur', description: 'Drive to Jaipur, check-in at the hotel. Explore the Pink City and visit landmarks such as City Palace and the Hawa Mahal.' },
        { title: 'Day 09 - Jaipur', description: 'Excursion to Amber Fort, followed by a city tour visiting City Palace, Jantar Mantar, and Hawa Mahal.' },
        { title: 'Day 10 - Jaipur – Delhi', description: 'Drive back to Delhi and transfer to the international airport for your onward flight.' }
    ];

    const swiperImages = [
        '/images/31/1.jpg',
        '/images/31/2.jpg',
        '/images/31/3.jpg',
        '/images/31/4.jpg',
        '/images/31/5.jpg',
        '/images/31/6.jpg'
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
