'use client';

import { useState } from 'react';

const TourTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Day 01: Arrive Delhi', description: '' },
        { title: 'Day 02: Delhi to Manali', description: 'Drive the taxi to Manali, passing through the important junction on the salt route to Tibet, Mandi, which is the gateway to the Kullu valley. Highlights include Pandoh Dam, Vaishno Devi Temple, Katrain, Patlikuhl, Nagar, and Roerich Gallery.' },
        { title: 'Day 03: Manali to Keylong', description: 'Drive the taxi toward Leh after local sightseeing of Manali. Explore the northern Kullu Valley and its charming walks, hotels, and restaurants.' },
        { title: 'Day 04: Keylong to Hemis', description: 'Begin the tough journey toward Leh, passing Darcha, Baralachala (4883m), Sarchu, Lachlung La (5060m), and Taglang La (5328m), the second-highest motorable road in the world. Enjoy the breathtaking landscape and valleys as you enter Ladakh.' },
        { title: 'Day 05: Hemis to Pangong Lake / Tso Moriri Lake', description: 'Morning visit to Hemis Monastery. Travelers can choose between visiting Pangong Lake or Tso Moriri Lake. Hemis Monastery, the biggest and most important in Ladakh, was built in the 17th century and serves as the headquarters of the Drukpa order.' },
        { title: 'Day 06: Pangong Lake / Tso Moriri Lake to Leh', description: 'Return to Leh with sightseeing at Thiksey and Shey Palace along the way.' },
        { title: 'Day 07: Rest Day', description: 'Complete rest in the hotel in Leh.' },
        { title: 'Day 08: Local Sightseeing', description: 'Explore Leh Bazaar, Leh Palace, Sankar Gompa, and the women’s vegetable market. Evening visit to Sankar Monastery.' },
        { title: 'Day 09: Leh to Khardung-la Top', description: 'Visit Khardung-la, the highest motorable road in the world at 18,380 feet, and explore Nubra Valley with its monasteries such as Sumor, Tigar, and Diskit.' },
        { title: 'Day 10: Shopping and Cultural Programme', description: 'A day for shopping and exploring Ladakhi art and culture, including visits to Tibetan refugee camps and libraries.' },
        { title: 'Day 11: Local Sightseeing', description: 'Explore Lamayuru, Likir, and Alchi, with a night halt at Lamayuru.' },
        { title: 'Day 12: Lamayuru to Kargil', description: 'The journey moves toward Kargil, passing through scenic locales.' },
        { title: 'Day 13: Kargil to Srinagar', description: 'Drive to Srinagar, passing Zoji-la and Sonamarg, and enter the Kashmir Valley.' },
        { title: 'Day 14: Srinagar Local Sightseeing', description: 'Explore Dal Lake, divided into Gagribal, Lokut Dal, and Bod Dal, with picturesque waterways and views.' },
        { title: 'Day 15: Srinagar to Jammu', description: 'Travel to Jammu, visiting Batote, Panitop, Kud, and the Vaishno Devi shrine, with a night halt at Jammu.' },
        { title: 'Day 16: Jammu to Delhi', description: 'Drive back to Delhi with a farewell at Karnal, reflecting on the journey highlights such as Khardung-la, Pangong Lake, monasteries, Ladakhi culture, and more.' },
        { title: 'Day 17: Depart Home', description: '' },
    ];

    const swiperImages = [
        '/images/7/1.jpg',
        '/images/7/2.jpg',
        '/images/7/3.jpg',
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

export default TourTimeline;
