'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'DAY 01 - ARRIVE MUMBAI', description: 'Met on arrival and transfer to hotel.' },
        { title: 'DAY 02 - MUMBAI', description: 'Half-day city tour of Mumbai, including a visit to the Prince of Wales Museum, Marine Drive, Mani Bhawan, Flora Fountain, Kamla Nehru Park, and the Hanging Gardens.' },
        { title: 'DAY 03 - MUMBAI to BANGALORE', description: 'Fly to Bangalore, where you will proceed for a sightseeing tour, including the Vidhana Soudha, Cubbon Park, Lalbagh Gardens, Tipu Sultan’s Palace, and Bull Temple.' },
        { title: 'DAY 04 - BANGALORE to HASSAN', description: 'Drive to Hassan, en route visit Shravanbelgola and later explore Belur and Halebid, known for their ancient temples and sculptures.' },
        { title: 'DAY 05 - HASSAN to MYSORE', description: 'Drive to Mysore, visit the Maharaja’s Palace, Jaganmohan Palace, and Brindavan Gardens.' },
        { title: 'DAY 06 - MYSORE to OOTY', description: 'Drive to Ooty, a scenic hill station, known for its tea estates and botanical gardens.' },
        { title: 'DAY 07 - OOTY', description: 'Explore Ooty’s scenic beauty, visit botanical gardens, Rose Garden, and the Ooty Lake.' },
        { title: 'DAY 08 - OOTY to COCHIN', description: 'Drive to Cochin, check in at the hotel, and spend the evening at leisure.' },
        { title: 'DAY 09 - COCHIN to KUMARAKOM', description: 'Explore Cochin, visit the Jewish Synagogue, Mattancherry Palace, and Chinese fishing nets before heading to Kumarakom.' },
        { title: 'DAY 10 - KUMARAKOM to PERIYAR', description: 'Travel to Periyar, enjoy a boat cruise on Periyar Lake, and explore the sanctuary’s wildlife.' },
        { title: 'DAY 11 - PERIYAR to MADURAI', description: 'Drive to Madurai, visit the Meenakshi Sundareswarar Temple and Tirumalai Nayak Palace.' },
        { title: 'DAY 12 - MADURAI to TIRUCHIRAPALI', description: 'Drive to Tiruchirapalli, visit Rock Fort Temple and Sri Ranganathaswamy Temple.' },
        { title: 'DAY 13 - TIRUCHIRAPALI to THANJAVUR', description: 'Drive to Thanjavur, visit Brihadeeswara Temple, the palace, and Saraswathi Mahal.' },
        { title: 'DAY 14 - THANJAVUR to PONDICHERRY', description: 'Drive to Pondicherry, visit Aurobindo Ashram and Auroville.' },
        { title: 'DAY 15 - PONDICHERRY to MAMMALAPURAM', description: 'Explore Mammalapuram, visiting the Shore Temple, Five Rathas, and Arjuna’s Penance.' },
        { title: 'DAY 16 - MAMMALAPURAM to KANCHIPURAM to CHENNAI', description: 'Visit Kanchipuram’s ancient temples, then drive to Chennai.' },
        { title: 'DAY 17 - CHENNAI to MUMBAI DEPARTURE', description: 'Tour Chennai’s cultural highlights including Kapaleeswarar Temple, Parthasarthy Temple, and Fort St. George before departing for Mumbai.' },
    ];

    const swiperImages = [
        '/images/32/1.jpg',
        '/images/32/2.jpg',
        '/images/32/3.jpg',
        '/images/32/4.jpg',
        '/images/32/5.jpg',
        '/images/32/6.jpg',
        '/images/32/7.jpg',
        '/images/32/8.jpg',
        '/images/32/9.jpg',
        '/images/32/10.jpg',
        '/images/32/11.jpg',
        '/images/32/12.jpg',
        '/images/32/13.jpg',
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
