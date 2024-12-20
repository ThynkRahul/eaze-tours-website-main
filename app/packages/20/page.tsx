'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Day 01 Delhi-Rishikesh', description: 'Upon your arrival in Delhi, our tour representative will meet you and assist you in smooth transfer to Rishikesh via road. Upon arrival in Rishikesh, check in at the hotel. The evening is free to relax and briefing. Dinner and overnight stay at the hotel. Rishikesh: The birthplace of Yoga, Rishikesh is located 24 kilometers away from Haridwar.' },
        { title: 'Day 02 Rishikesh – Barkot', description: 'Post breakfast in the morning; embark on a local sightseeing tour of Rishikesh which include Ramjhula, Laxmanjhula and Swargaashram. Later, drive to Barkot via Mussoorie. On the way, visit Kempty Falls and reach Barkot by late evening. Dinner and overnight stay at the hotel.' },
        { title: 'Day 03 Barkot – Jankichatti – Yamunotri', description: 'Post an early morning breakfast; proceed to Yamunotri and later move up to Jankichatti. Later, enjoy 6 kilometers long trek to Yamunotri. Pilgrims take this cooked rice home as “Prasad”. Return to Barkot for dinner and overnight stay.' },
        { title: 'Day 04 Barkot- Harsil', description: 'Post breakfast, leave by road for Uttarkashi and then drive to Harsil. The evening is free for leisure and local attractions. Dinner and overnight stay at the hotel.' },
        { title: 'Day 05 Harsil – Gangotri', description: 'Post breakfast in the morning; take a road trip to Gangotri. After praying at the temple, have Pooja & Darshan at Gangotri temple. Return to Uttarkashi for dinner and overnight stay.' },
        { title: 'Day 06 Uttarkashi – Guptkashi', description: 'Post breakfast in the morning, leave by road for Guptkashi. En route, see the heritage city of Tehri submerged in the mighty waters of the Ganges. Reach Guptkashi for dinner and overnight stay.' },
        { title: 'Day 07 Guptkashi – Kedarnath – Rudraprayag', description: 'Post breakfast, take a road trip up to Helipad for Kedarnath. Perform early Pooja & Darshan at Kedarnath temple, then return to Helipad and drive back to Rudraprayag for dinner and overnight stay.' },
        { title: 'Day 08 Rudraprayag – Badrinath', description: 'Post breakfast, leave by road for Badrinath. On the way, visit Narsingh Temple and Adi Shankracharya Samadhi at Joshimath. Later, visit Vyas Cave, Ganesh Cave, and Bhim Bridge in Badrinath. Dinner and overnight stay.' },
        { title: 'Day 09 Badrinath – Srinagar', description: 'After Mahaabhishek, go for Pooja and Darshan. Post breakfast, leave for Srinagar. Visit Vishnuprayag, Nandprayag, and Karnprayag on the way. Dinner and overnight stay at the hotel.' },
        { title: 'Day 10 Srinagar – Haridwar', description: 'Post breakfast, leave for Haridwar. Visit Devprayag and arrive in Haridwar. Visit Mansa Devi and Chandi Devi Temples. Attend the Ganga Aarti at Har ki Pauri in the evening. Dinner and overnight stay at the hotel.' },
        { title: 'Day 11 Haridwar – Delhi', description: 'Post breakfast, leave for Delhi. On reaching Delhi, drop at the railway station for onward journey.' }
    ];

    const swiperImages = ['/images/20/1.jpg', '/images/20/2.jpg']; // Using img 1 and img 2 from folder 20

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
                        {/* Using img 1 and img 2 from folder 20 */}
                        <img
                            src={swiperImages[currentSlide]}
                            alt={`Slide ${currentSlide + 1}`}
                            className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 opacity-100 z-10`}
                            style={{
                                top: '50%', // Centers vertically
                            }}
                        />
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
