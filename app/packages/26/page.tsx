'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'DAY 01 - ARRIVE CHENNAI', description: 'Met on arrival and transfer to hotel. Afternoon, sightseeing tour of Chennai, captures the cultural kaleidoscope of South India with its ancient traditions, festivals, fine crafts, classical music, and dance.' },
        { title: 'DAY 02 - CHENNAI to KANCHIPURAM to MAMALLAPURAM', description: 'Morning drive to Kanchipuram, one of India’s seven sacred cities. Visit Ekambareswarar Temple and Kamakshi Amman Temple. Later, proceed to Mamallapuram for a relaxing evening.' },
        { title: 'DAY 03 - MAMALLAPURAM', description: 'Visit the Shore Temple, a monument dedicated to both Lord Shiva and Lord Vishnu, and Arjuna’s Penance, the world’s largest bas relief. Enjoy the rest of the day at leisure.' },
        { title: 'DAY 04 - MAMALLAPURAM to PONDICHERRY', description: 'Drive to Pondicherry. Visit Aurobindo Ashram and Auroville, known for its focus on yoga and modern science. Enjoy the evening at leisure.' },
        { title: 'DAY 05 - PONDICHERRY to THANJAVUR', description: 'Proceed to Thanjavur. Visit Brihadeeswara Temple, an architectural marvel, and Saraswathi Mahal Library with thousands of ancient manuscripts.' },
        { title: 'DAY 06 - THANJAVUR to TIRUCHIRAPALLI', description: 'Drive to Tiruchirapalli. Visit Rock Fort, Rock Fort Temple, and Srirangam, one of the largest Vaishnavite temples in South India.' },
        { title: 'DAY 07 - TIRUCHIRAPALLI to MADURAI', description: 'Drive to Madurai. Visit the Meenakshi Sundareswarar Temple, Tirumalai Nayak Palace, and Vandiyur Mariamman Tank.' },
        { title: 'DAY 08 - MADURAI to CHENNAI to BANGALORE', description: 'Fly to Chennai and connect to Bangalore. In the evening, explore the city’s Vidhana Soudha, Cubbon Park, and other attractions.' },
        { title: 'DAY 09 - BANGALORE to MYSORE', description: 'Drive to Mysore, en-route visiting Srirangapattnam. Explore the Maharaja’s Palace and Brindavan Gardens with their famous dancing fountains.' },
        { title: 'DAY 10 - MYSORE to HASSAN', description: 'Visit Shravanbelgola, then proceed to Hassan. Explore the temples of Belur and Halebidu, renowned for their intricate sculptures and historic significance.' },
        { title: 'DAY 11 - HASSAN to BANGALORE', description: 'Drive back to Bangalore and fly to Mumbai for onward departure.' }
    ];

    const swiperImages = [
        '/images/26/1.jpg',
        '/images/26/2.jpg',
        '/images/26/3.jpg',
        '/images/26/4.jpg',
        '/images/26/5.jpg',
        '/images/26/6.jpg',
        '/images/26/7.jpg',
        '/images/26/8.jpg',
        '/images/26/9.jpg',
        '/images/26/10.jpg',
        '/images/26/11.jpg'
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
