'use client';

import { useState } from 'react';

const SouthIndiaTourTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Day 01 Arrival Chennai', description: 'Assistance & Traditional welcome on arrival in the gateway to southern India & followed by transfer to Hotel for Overnight. Chennai, established in 1639 by the East India Company, is one of the oldest cities of the country.' },
        { title: 'Day 02 Chennai / Mahabalipuram', description: 'After breakfast meet with our executive who give briefing about your tour & hand over all your travel documents. Later proceed for a half day sightseeing tour of Chennai passing thro the famous landmarks like Anna salai, Marina beach, Gandhi Memorial, Kala Kshetra, Mylapore temple and Kapaleshwaran. After visit drive to Mahabalipuram. On arrival check into Hotel for the Overnight.' },
        { title: 'Day 03 Mahabalipuram / Kanchipuram / Mahabalipuram', description: 'After breakfast excursion to Kanchipuram –it is the ancient capital of the Pallavas famous as a city of 1000 Temples and still has 124 shrines. The first temple dedicated to Shiva was built in the 7th and 8th century and has paintings on the walls. Temples of Ekambaswara, Kailasanatha, Sri Kamakshi and Varadarajaswamy are of interest. Kanchipuram is also famous for its silks. Later drive back to Mahabalipuram and then proceed for half day city tour visit the city – built in 7th century, earlier called Mahabalipuram, this ancient Pallava port, is today the sight of several antique sculptural marvels.' },
        { title: 'Day 04 Mahabalipuram / Pondicherry', description: 'After breakfast check out hotel and proceed to Pondicherry on arrival check in hotel and proceed for a half day city tour of Pondicherry visit Aurbindo Ashram, which is 10 kms north of Pondicherry. This ashram promotes Aurbindo’s Ideas in bringing about a synthesis of Yoga and modern science, so as to unite the spirit and matter. After lunch at hotel, visit Auroville – a unique experiment in international living and in creating a new environment where men and women of all nationalities live together in harmony.' },
        { title: 'Day 05 Pondicherry / Chidambaram / Thanjavur', description: 'After breakfast drive to Chidambaram, also called as Thillai, which has the famous Nataraja temple with the root of the sanctum-sanctorum covered with golden plates is located in the centre of the town covering an area of 40 acres. In this temple, postures from the Bharatnatayam form of dance are depicted in sculpture. After visit drive to Thanjavur. On arrival check into Hotel. Rest of the day is free.' },
        { title: 'Day 06 Thanjavur', description: 'After breakfast followed by city tour of Thanjavur, Tanjore once the capital of Chola Kings, has the Brahadeswara temple (or the big temple of God). The temple tower rises to a height of 15mts from a square base of 29 mts and then tapers off, making a total of 66mts.' },
        { title: 'Day 07 Thanjavur / Trichy / Chettinad', description: 'After morning breakfast leave for Trichy, situated on the banks of Kaveri river is a blend of history and tradition. Visit Rock Fort and its temple at a height of over 23mts. Also visit Srirangam and Jambukeshwar Temple. After visit continue to Chettinad, famous for its traditional palaces and mansions.' },
        { title: 'Day 08 Chettinad / Madurai', description: 'After morning breakfast proceed to Madurai, a city with a cultural heritage of 2500 years. On arrival check into the hotel. Overnight at Hotel.' },
        { title: 'Day 09 Madurai', description: 'After breakfast city tour of Madurai visiting the famous Meenakshi temple, an exquisite example of Dravidian architecture. Later visit the Tirumalai Nayak Palace famous for the stuccowork on its domes and arches. Relax in the evening.' },
        { title: 'Day 10 Madurai / Periyar', description: 'After breakfast drive to Periyar Tiger Reserve, one of the famous Wildlife Sanctuaries in India. Enjoy a serene boat ride on the lake to watch the wildlife. Overnight at Hotel.' },
        { title: 'Day 11 Periyar', description: 'After breakfast explore the wildlife inside the Jungle. Enjoy the visiting National Park and provide the Boat ride on the Lake Periyar.' },
        { title: 'Day 12 Periyar / Kumarakom / House Boat', description: 'After breakfast drive to Kumarakom jetty to board the House Boat. Backwaters cruise are a unique nature and are found nowhere else in the world.' },
        { title: 'Day 13 Alleppey / Cochin', description: 'After breakfast finish the backwater cruise & drive to Cochin. Visit St. Francis Church, Chinese Fishing Nets, Mattancherry Palace. In the evening see the Kathakali dance performance.' },
        { title: 'Day 14 Cochin Departure', description: 'After leisurely breakfast day free provide in time Transfer to Cochin Airport for onward Destination.' }
    ];

    const swiperImages = [
        '/images/10/1.jpeg',
        '/images/10/2.jpeg',
        '/images/10/3.jpeg',
        '/images/10/4.jpeg',
        '/images/10/5.jpeg',
        '/images/10/6.jpeg',
        '/images/10/7.jpeg',
        '/images/10/8.jpeg',
        '/images/10/9.jpeg',
        '/images/10/10.jpeg',
        '/images/10/11.jpeg'
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
                                    top: '50%',
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
