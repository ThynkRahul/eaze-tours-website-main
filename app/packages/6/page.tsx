'use client';

import { useState } from 'react';

const TourTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Arrival Calcutta', description: '' },
        { title: 'Calcutta', description: 'Arrive breakfast tour briefing by Local Staff, followed by half day visit of the “City of Joy” also the Mother Teresa’s city. Palaces to visit are the Jain Temple, Zoological Gardens, Victoria Memorial & drive past Howrah Bridge, Dalhousie Square, Fort Williams, Secretariat Building and Old Court House Street. Overnight at Hotel.' },
        { title: 'Calcutta / Bagdogra / Darjeeling', description: 'After breakfast day free. Provide intime departure & transfer to airport to connect the flight for Bagdogra. On arrival at Bagdogra airport followed by drive to Darjeeling. Darjeeling is one of the most beautiful Hill Stations in Eastern India and has the highest Race Course in the World. Place worth visiting are the Lablong village, the Mountaineering Institute and Tenzing Norgay House – The first Everest Hero. On arrival Check into the Hotel. Overnight at Hotel.' },
        { title: 'Darjeeling', description: 'Early morning tour of Tiger Hill & Ghoom Monastery. At the Tiger Hill, the early morning Sun rise displays a panorama of colours and sunsets are purple and gold. Beyond in the distance are the Himalayan Peaks. Return via the famous Ghoom Monastery. You could spend the rest of the day walking in the bazaars of Darjeeling or visiting one of the Tea gardens. Darjeeling tea is known world over for its fine flavor. Overnight at Hotel.' },
        { title: 'Darjeeling / Pemayangste', description: 'After breakfast drive to Pemayangste. Afternoon visit the Monastery. Pemayangste is situated in Pelling, West Sikkim. It is perched at a height of 2085 mts and is the second oldest and perhaps the most important monastery in Sikkim. This monastery belongs to the Nyigma order & all their Nyigma order monasteries in Sikkim are subordinate to it. Overnight at Hotel.' },
        { title: 'Pemayangste / Gangtok', description: 'After breakfast drive to Gangtok. The capital of Sikkim and a city of great scenic beauty, is surrounded by green forests. On arrival Check into the Hotel. Rest of the day at leisure. Overnight at Hotel.' },
        { title: 'Gangtok', description: 'After breakfast city tour Gangtok. There are a number of monasteries in and around Sikkim, each a symbol of Himalayan Buddhism. Afternoon free. Overnight at Hotel.' },
        { title: 'Gangtok / Rumtek Monastery / Gangtok', description: 'Morning visit Enchey Monastery, The Residency – for an excellent view of the mountains, the White Memorial Hall, Institute of Tibetology and Deer Park. Continue to visit the famous Rumtek Monastery belonging to the RED HAT sect of Tibetan Buddhism. Afternoon free. Overnight at Hotel.' },
        { title: 'Gangtok / Bagdogra / Calcutta', description: 'In time drive to Bagdogra airport to connect the flight for Calcutta. On arrival at Calcutta airport, transfer to hotel. Rest of the day at leisure. Overnight at Hotel.' },
        { title: 'Departure Calcutta', description: 'After breakfast day free. Provide intime departure & transfer to airport to connect the flight for onward journey.' },
    ];

    const swiperImages = [
        '/images/6/1.jpeg',
        '/images/6/2.jpeg',
        '/images/6/3.jpeg',
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
