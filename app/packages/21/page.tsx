'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'DAY 01 - ARRIVE DELHI', description: 'On arrival at Indira Gandhi international airport, meeting and assistance on arrival and transfer to the hotel. Sightseeing tour of Old Delhi, including Jama Masjid, Red Fort, Raj Ghat, and a rickshaw ride through Old Delhi. Visit Gurudwara Shri Bangla Sahib.' },
        { title: 'DAY 02 - DELHI to AMRITSAR (Train)', description: 'After breakfast, transfer to railway station for the train to Amritsar. Visit the Golden Temple upon arrival and experience its breathtaking beauty and spiritual significance.' },
        { title: 'DAY 03 - AMRITSAR', description: 'Sightseeing in Amritsar: Golden Temple, Akal Takht, Jallianwala Bagh, and the Wagah Border for the Border Retreat Ceremony.' },
        { title: 'DAY 04 - AMRITSAR to DHARAMSHALA', description: 'Drive to Dharamsala, located on the ridge of the Dhauladhar range. Enjoy the scenic views and the peaceful atmosphere of this hill station.' },
        { title: 'DAY 05 - DHARAMSHALA', description: 'Explore McLeod Ganj, home to the Dalai Lama and the Tibetan Government in Exile. Visit Namgyal Monastery and Tibetan Village School.' },
        { title: 'DAY 06 - DHARAMSHALA to SHIMLA', description: 'Drive to Shimla, and enjoy a sightseeing tour including the Shimla mosque, Vice Regal lodge, Christ Church, and the famous shopping plaza.' },
        { title: 'DAY 07 - SHIMLA to KUFRI', description: 'Excursion to Kufri for its Himalayan National Park, Poney and Yak Ride, and panoramic views. Optionally visit Chail.' },
        { title: 'DAY 08 - SHIMLA to RISHIKESH', description: 'Drive to Rishikesh, a town famous for its ashrams, yoga centers, and spiritual atmosphere on the banks of the Ganga River.' },
        { title: 'DAY 09 - RISHIKESH to HARIDWAR', description: 'Visit famous landmarks in Rishikesh such as Ram Jhula and Laxman Jhula. Then, drive to Haridwar to explore its temples and witness the Ganga Aarti ceremony at Har-ki-Pauri.' },
        { title: 'DAY 10 - RISHIKESH to DELHI', description: 'Drive to Delhi, passing landmarks like India Gate, Rashtrapathi Bhawan, and the Parliament House.' },
        { title: 'DAY 11 - DELHI to VARANASI (Flight)', description: 'Fly to Varanasi. Explore the sacred city, visit the famous markets, and experience the evening prayer at Dasashwamedh Ghat.' },
        { title: 'DAY 12 - VARANASI', description: 'Morning boat ride on the Ganges, followed by a visit to the Benaras Hindu University, Vishwanath Temple, and Sarnath.' },
        { title: 'DAY 13 - VARANASI to DELHI (Flight)', description: 'Fly back to Delhi. Visit the Lotus Temple and experience its tranquil atmosphere.' },
        { title: 'DAY 14 - DELHI to DEPARTURE', description: 'Transfer to the airport for your onward journey.' },
    ];

    const swiperImages = [
        '/images/21/1.jpg'
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
