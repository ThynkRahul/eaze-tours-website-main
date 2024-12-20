'use client';

import { useState } from 'react';

const TourTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        {
            title: 'Arrival Manali',
            description: 'Very early in the morning arrival Manali, on arrival meet to our staff and transfer to hotel (We try to provide early check in, it depends on the season; normally check-in time is 12:00). Morning free to relax. Afternoon explore Manali by testing biking, visit Naggar Castle, Jagatsukh Temple, and Vashist Hot Spring. Overnight at hotel. (B)'
        },
        {
            title: 'Manali',
            description: 'After breakfast, full-day biking tour in and around Manali includes Manikaran, Hadimba Temple, and Kullu Valley. Overnight at hotel. (B)'
        },
        {
            title: 'Manali – Keylong – Jispa (136 Km)',
            description: 'After breakfast commence biking tour to Leh via Rohtang Pass (3990M). Enjoy the biking via Gulaba, Marhi, Rani Nala, Rohtang Jyot, Koksar, Gondla, Tandi (Confluence of Chandra and Bhaga River), Keylong, and finally reach Jispa. On arrival, check in at hotel or fixed tent. (B/D)'
        },
        {
            title: 'Jispa – Darcha – Suraj Tal – Baralachala Pass (4890m) – Sarchu (110 Km)',
            description: 'Breakfast at hotel or fixed tent. Prepare your bike for the next destination through high passes and scenic landscapes. Cross Darcha (the first TRC checking point), ascend toward the Indian Plateau, and cross Baralachala Pass. Spot wild animals and unforgettable landscapes. Overnight at Sarchu in fixed tents. (B/D)'
        },
        {
            title: 'Sarchu – Pang – Dibiring – Tsokar (180 Km)',
            description: 'After breakfast, embark on a biking tour to Tsokar (Salt) Lake. Enjoy the breathtaking landscapes and take photo breaks. On arrival at Tsokar, check in to fixed tents. Explore the surroundings and capture wild animals on camera. Overnight at Tsokar. (B/D)'
        },
        {
            title: 'Tsokar – Sumdah – Tsomoriri (145 Km)',
            description: 'After breakfast, proceed to Tsomoriri via Sumdah Village. Enjoy the ride through stunning landscapes and sulfur water springs. Visit the Tibetan refugee village and cross Namshang La (4920m) and Thachung Karo Lake. Arrive at Karzok (Tsomoriri), check in at fixed tents, and enjoy a walking tour around the crystal-clear lake (bikes not allowed). Overnight at Tsomoriri. (B/D)'
        },
        {
            title: 'Tsomoriri – Mahay Bridge – Chumathang – Leh (145 Km)',
            description: 'After breakfast, ride through the Indus River and small villages to reach Chumathang, known for its hot springs. Continue to Leh, visiting Hemis Monastery en route. On arrival, check in at the hotel. Free time to relax. (B/D)'
        },
        {
            title: 'Nubra Valley Over Khardung La Pass (120 Km)',
            description: 'After breakfast, ride to Nubra Valley via Khardung La Pass (5602m), the highest motorable road in the world. Enjoy views of snow-capped mountains, glaciers, and the green Nubra Valley. Continue to Diskit and check in at the guest house. Optional: Enjoy a camel ride on the sand dunes between Hunder and Diskit Village. Overnight at Diskit. (B/D)'
        },
        {
            title: 'Diskit – Leh',
            description: 'After breakfast, visit Diskit Monastery, known for its tallest statue of Maitreya Buddha in Ladakh. Visit Sumoor village and drive back to Leh. Check in at the hotel, visit Shanti Stupa for sunset views, and enjoy free time for shopping. Overnight at Leh. (B/D)'
        },
        {
            title: 'Leh – Lamayuru (240 Km) – Leh',
            description: 'After breakfast, ride to Lamayuru Monastery, known for its moon-like landscapes. Visit Rizong Gompa, Alchi Choskor, Likir, Basgo Palace, and Nimmo (confluence of Indus and Zanskar River). Return to Leh, stopping for photos at Gurudwara Pathar Sahib. Free time at Leh market. (B/D)'
        },
        {
            title: 'Leh',
            description: 'Full day free for individual activities or shopping. Overnight at the hotel. (B/D)'
        },
        {
            title: 'Leh Departure',
            description: 'Early morning transfer to the airport for your flight to Delhi or onward destination.'
        }
    ];

    const swiperImages = [
        '/images/4/5.jpeg',
        '/images/4/6.jpeg',
        '/images/4/7.jpeg',
        '/images/4/8.jpeg',
        '/images/4/9.jpeg',
        '/images/4/10.jpeg',
        '/images/4/11.jpeg',
        '/images/4/12.jpeg',
        '/images/4/13.jpeg',
        '/images/4/14.jpeg',
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
                                    <div className={`text-lg font-black ${index % 2 === 0 ? 'text-right ml-[35px]' : 'text-left'}`}>
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
