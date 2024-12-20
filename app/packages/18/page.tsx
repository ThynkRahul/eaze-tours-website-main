'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Day 01 - New Delhi', description: 'The journey of a lifetime begins at the Delhi Safdarjung Railway station where the guests are accorded a warm, traditional welcome before the Palace-on-Wheels pulls out into the night for a week-long luxury cruise through fascinating Rajasthan. Reporting Time 18.00 hrs. Dep. 18.30 hrs.' },
        { title: 'Day 02 - Jaipur', description: 'The first stop of the Palace-on-Wheels is Jaipur, one of the most well planned cities of the world. This capital city of Rajasthan, popularly known as the Pink City, was founded by Maharaja Sawai Jai Singh II, in 1727 A.D. Visit to Hawa Mahal, Amber Fort and City Palace.' },
        { title: 'Day 03 - Sawai Madhopur', description: 'The Palace-on-Wheels arrives in Sawai Madhopur for a visit to the Ranthambhor National Park. The park is home to tigers, hyenas, jackals and foxes. You can also shop for exclusive toys, ethnic ornaments, and costumes.' },
        { title: 'Day 03 - Chittorgarh', description: 'After lunch on board, you are in Chittorgarh. Explore Chittorgarh Fort, known for its history, victory tower, and stories of valor.' },
        { title: 'Day 04 - Udaipur', description: 'Udaipur, the Lake City, was founded in 1559. Visit the Jag Niwas (Lake Palace) and the City Palace, surrounded by the waters of Lake Pichhola.' },
        { title: 'Day 05 - Jaisalmer', description: 'In the heart of the Thar desert lies Jaisalmer. Visit the famous yellow sandstone fort, Nathmalji-ki-haveli, and Patwon-ki-haveli, and shop for pattu shawls, mirror work, and silver jewelry.' },
        { title: 'Day 06 - Jodhpur', description: 'Jodhpur is known for Mehrangarh Fort and royal cenotaphs like Jaswant Thada. Explore the forts and palaces and shop for handicrafts like embroidered shoes and silverware.' },
        { title: 'Day 07 - Bharatpur / Agra', description: 'Visit the Keoladeo Ghana National Park in Bharatpur, followed by the iconic Agra Fort and the Taj Mahal, one of the Seven Wonders of the World.' },
        { title: 'Day 08 - Delhi', description: 'Arrive at Delhi Safdarjung Railway station with breakfast on board. Let the pleasant memories of the journey linger on.' }
    ];

    const swiperImages = [
        '/images/18/1.jpg',
        '/images/18/2.jpg',
        '/images/18/3.jpg',
        '/images/18/4.jpg',
        '/images/18/5.jpg',
        '/images/18/6.jpg',
        '/images/18/7.jpg',
        '/images/18/8.jpg',
        '/images/18/9.jpg',
        '/images/18/10.jpg',
        '/images/18/11.jpg',
        '/images/18/12.jpg',
        '/images/18/13.jpg'
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
