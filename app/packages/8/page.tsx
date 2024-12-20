'use client';

import { useState } from 'react';

const TourTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Day 01: Arrival Delhi', description: '' },
        { title: 'Day 02: Delhi', description: '' },
        { title: 'Day 03: Delhi / Leh', description: 'Provide intime departure & transfer to airport to connect the flight for Leh. After a breathtaking flight over the trans Himalayas and equally beautiful and breathtaking landing you will be welcomed and escorted to our hotel where room has been booked for your ready occupancy. A little briefing on the day\'s program and a breakfast, you are advised to rest for the first half of the day. After lunch we will go for an easy and relaxed orientation drive of Leh market. Overnight in the hotel.' },
        { title: 'Day 04: Leh', description: 'After breakfast we will visit the Spituk monastery. Enjoy your first encounter with the beautiful Buddhist monastery and understand ” the Buddhist life”. Buddhism in this part of the world is also part of the social life. We live religion in this part of the world. Also visit the ” Much famed Kali Temple ” also known as the Temple of Palden Lhamo ( by Buddhist). You will see Buddhist as well Hindus( Indian army) worshipping there. Return to hotel for lunch. Post lunch we will visit the market and Shanti stupa( Japanese peace Pagoda) on the nearby Hillock of Leh town. We will visit Shanti stupa at sunset. Enjoy the scintillating view of the Leh town, upper Leh towards khardunglha and the part of upper Indus valley. Light at sunset or sunrise is just perfect for perfect pictures with the Himalayan mountain ranges at the background. Evening dinner at hotel.' },
        { title: 'Day 05: Leh / Lamayuru / Uleytopko (160 Kms)', description: 'Post breakfast drive to Lamayuru; enroute visits Liker Monastery and Gurudwara Pathar Sahib. Check in Camp at Alchi or Ule and enjoy your hot Lunch. After Lunch drive to visit the mesmerizing Moon landscapes and the Lamayuru monastery (Oldest Monastery in Ladakh). Overnight Camp or Hotel.' },
        { title: 'Day 06: Uleytopko / Alchi / Leh (70 Kms)', description: 'Post breakfast drive to Leh en-route visit Alchi monastery, Basgo Palace and Hall of Fame. Arrive at Leh by afternoon. Hot Lunch at Hotel. After the free at your leisure. Overnight Hotel.' },
        { title: 'Day 07: Leh / Nubra Valley (120 Kms)', description: 'After Breakfast drive to Nubra Valley via Khardungla (Highest Motorable road in the World, 18,380 ft). Arrive at Deskit by Afternoon. Rest of the day free to explore Deskit, Hunder Villages. Overnight Hotel.' },
        { title: 'Day 08: Nubra Valley / Leh (120 Kms)', description: 'After Breakfast visit Deskit Monastery and drive back to Leh by same Route, crossing Khardungla Pass. Overnight Hotel.' },
        { title: 'Day 09: Leh / Pangong Lake (160 Kms)', description: 'After Breakfast leave for Pangong Lake 14,500 ft, through Changla Pass 17,350 ft. (third Highest Motorable road in the world.) Overnight Camp.' },
        { title: 'Day 10: Pangong Lake / Leh (160 Kms)', description: 'After Breakfast drive back to Leh, enroute visit Hemis, Thikse Monastery and Shey Palace . Overnight Hotel.' },
        { title: 'Day 11: Leh / Delhi', description: 'Provide intime departure & transfer to airport to connect the flight for Delhi . On arrival at Delhi airport, transfer to hotel. Overnight at hotel.' },
        { title: 'Day 12: Dep. Delhi', description: 'After Breakfast day free. Intime departure & transfer to airport to connect the flight for onward journey.' },
    ];

    const swiperImages = [
        '/images/8/1.jpg',
        '/images/8/2.jpg',
        '/images/8/3.jpg',
        '/images/8/4.jpg',
        '/images/8/5.jpg',
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
