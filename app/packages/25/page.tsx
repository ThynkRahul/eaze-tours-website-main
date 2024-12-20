'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'DAY 01 - ARRIVE MUMBAI', description: 'Meeting and assistance on arrival and transfer to the hotel.' },
        { title: 'DAY 02 - MUMBAI to BARODA', description: 'Breakfast at Hotel & transfer to airport to board flight to Baroda. Visit Chhota Udaipur to see the Rathwa tribes.' },
        { title: 'DAY 03 - AHMEDABAD to UTELLIA', description: 'Transfer to Ahmedabad and drive to Utellia. Stay at Utellia.' },
        { title: 'DAY 04 - EXCURSION TO BHARWAD TRIBAL VILLAGE', description: 'Visit the Bharwad tribes, known for their colorful houses and shepherding life.' },
        { title: 'DAY 05 - UTELLIA to BALARAM', description: 'Drive to Balaram and visit famous Gujarat tourist attractions. Stay at Balaram Palaces Resort.' },
        { title: 'DAY 06 - EXCURSION TO GOWALA and GARACIA TRIBAL REGIONS', description: 'Visit the Gowala and Garacia tribes, known for their unique cultures and traditions.' },
        { title: 'DAY 07 - BALARAM to PATAN to LITTLE RANN OF KUTCH', description: 'Visit the Patola weavers in Patan and drive to the Little Rann of Kutch for a stay at Desert Courser Camp.' },
        { title: 'DAY 08 - LITTLE RANN OF KUTCH', description: 'Explore the Little Rann of Kutch, home to endangered Asiatic Wild Ass and tribal cultures like Rabari and Banjara.' },
        { title: 'DAY 09 - LITTLE RANN OF KUTCH to BHUJ', description: 'Drive to Bhuj, the capital of Kutch, and stay for 4 nights exploring the region’s unique tribes.' },
        { title: 'DAY 10 - BHUJ', description: 'Explore the tribes of the Rann of Kutch region and visit Bhuj’s historical sites and Folk Museum.' },
        { title: 'DAY 11 - LITTLE RANN OF KUTCH', description: 'Excursion to additional tribal regions of Little Rann of Kutch.' },
        { title: 'DAY 12 - LITTLE RANN OF KUTCH', description: 'Another excursion to explore tribal regions of Little Rann of Kutch.' },
        { title: 'DAY 13 - BHUJ to MUMBAI', description: 'Fly from Bhuj to Mumbai and enjoy a free day before departing.' },
        { title: 'DAY 14 - MUMBAI to DEPART', description: 'Transfer to Mumbai airport for departure with wonderful memories of the Gujarat Tribal Tour.' },
    ];

    const swiperImage = '/images/25/1.jpg';

    return (
        <div className="mt-16 md:mx-16 mt-[135px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Carousel Section */}
                <div className="relative h-screen max-h-screen w-full overflow-hidden bg-base-200">
                    <div className="relative h-full w-full">
                        <img
                            src={swiperImage}
                            alt="Slide 1"
                            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 opacity-100 z-10"
                            style={{
                                top: '50%', // Centers vertically
                            }}
                        />
                    </div>
                    <button
                        onClick={() => setCurrentSlide(0)}
                        className="swiper-button-prev absolute left-5 top-1/2 transform -translate-y-1/2 text-[#007AFF] p-2 rounded-full"
                    >
                    </button>
                    <button
                        onClick={() => setCurrentSlide(0)}
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
