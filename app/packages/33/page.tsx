'use client';

import { useState } from 'react';

const TravelTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'DAY 01 - ARRIVAL AHMEDABAD', description: 'Assistance on arrival at the airport in Ahmedabad and transfer to the Hotel. Founded in 1411 and known as the Manchester of the East, Ahmedabad is situated on the banks of the river Sabarmati. Overnight at the hotel.' },
        { title: 'DAY 02 - AHMEDABAD', description: 'Sightseeing in Ahmedabad includes visits to the Calico Museum (with prior permission, closed on Wednesday), Jama Masjid, Sidi Mosque, Gandhi Ashram, Adalaj Step Well, and the Evening Market. Overnight at the Ahmedabad hotel.' },
        { title: 'DAY 03 - AHMEDABAD / TARANGA / VIJAYNAGAR (260 KMS)', description: 'Drive to Vijaynagar, visiting Taranga Jain Temples and Idar en route. Taranga has one of the finest clusters of Jain temples in India. Idar is known for its historical sites and natural beauty.' },
        { title: 'DAY 04 - VIJAYNAGAR', description: 'Full-day visit around Vijaynagar, a nature lover’s paradise. Known for wildlife, ancient Jain & Shiv temples, and a rich history. Overnight at the Palace.' },
        { title: 'DAY 05 - VIJAYNAGAR – ZAINABAD (190 KMS)', description: 'Drive to Zainabad/Dasada, visiting Modhera Sun Temple and Patan for Patola silk weaving. In the evening, visit the Little Rann of Kutch. Overnight in the huts.' },
        { title: 'DAY 06 - ZAINABAD – FULL DAY', description: 'Enjoy a game drive in the Little Rann of Kutch to see the Asiatic wild ass. If it’s monsoon season, village visits will replace the drive. Overnight in the huts.' },
        { title: 'DAY 07 - ZAINABAD TO BHUJ (280 KMS)', description: 'Drive to Bhuj, visit the Ferguson Museum and Rao Pragmalji’s Palace. Overnight at the hotel.' },
        { title: 'DAY 08 - BHUJ', description: 'Explore the tribal villages of Bhuj, known for handicrafts like Ahir embroidery, block printing, and tie-and-dye.' },
        { title: 'DAY 09 - BHUJ TO JAMNAGAR (250 KMS)', description: 'Drive to Jamnagar, visit temples in Saurashtra and explore the famous tie-and-dye work. Overnight at the hotel.' },
        { title: 'DAY 10 - JAMNAGAR TO DWARKA (150 KMS)', description: 'Visit the Dwarkadheesh Temple, a five-story temple dedicated to Lord Krishna. Explore Bet Dwarka in the afternoon. Overnight at the hotel.' },
        { title: 'DAY 11 - DWARKA – JUNAGADH (115 KMS)', description: 'Drive to Junagadh via Porbandar, the birthplace of Mahatma Gandhi. Explore Junagadh’s historical sites like Uparkot Fort and the Buddhist caves. Overnight at the hotel.' },
        { title: 'DAY 12 - JUNAGADH – BHAVNAGAR (235 KMS)', description: 'Visit Junagadh’s Girnar Temples (optional). Proceed to Bhavnagar, known for its scenic beauty and rich heritage. Overnight at the hotel.' },
        { title: 'DAY 13 - BHAVNAGAR – PALITANA EXCURSION', description: 'Full-day excursion to Palitana, home to 863 Jain temples built over 900 years. Visit the Shatrunjaya Hill temples. Return to Bhavnagar for a city tour. Overnight at the hotel.' },
        { title: 'DAY 14 - BHAVNAGAR TO AHMEDABAD (220 KMS)', description: 'Drive to Ahmedabad, visit Lothal, an ancient city of the Indus Valley Civilization. Evening at leisure in Ahmedabad. Overnight at the hotel.' },
        { title: 'DAY 15 - DEPARTURE', description: 'Transfer to the airport for your onward destination.' },
    ];

    const swiperImages = [
        '/images/33/1.jpg',
        '/images/33/2.jpg',
        '/images/33/3.jpg',
        '/images/33/4.jpg',
        '/images/33/5.jpg',
        '/images/33/6.jpg'
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

export default TravelTimeline;
