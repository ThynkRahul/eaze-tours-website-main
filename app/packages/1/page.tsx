'use client';

import { useState } from 'react';

const TravelItineraryTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Arrival Delhi', description: 'Assistance & Traditional welcome on arrival in the capital of India & followed by transfer to Hotel for Overnight. From the spacious and planned streets of New Delhi, the imperial capital of India, Delhi is perhaps one of the best examples in the world where the ‘old’ meets the ‘new’. Strolling through the streets of Delhi the contrasts continue. You will experience the ringing bells of bicycle rickshaws, see Mercedes Benz cars driving around Eating out also offers a variety of options from a rich Mughlai curry to a wood fired pizza. On this sightseeing tour of Old and New Delhi your senses will come alive as you encounter the many sights and sounds this amazing city has to offer.' },
        { title: 'Delhi', description: 'After breakfast meet with our executive who give briefing about your tour & hand over all your travel documents. Later start the full day tour. Tours starts with visit of Old Delhi, the 17th century walled city of Shah Jahanabad, Visiting the great Jama MasjId, the principal mosque of Old Delhi. Built in the year 1656 AD by the Mughal Emperor Shah Jahan, it is the largest & best known mosque in India. Later we walk down or take a rickshaw rIde through Chandi Chowk, the old marketplace of Shah Jahanabad now a picturesque bazaar to reach Red Fort, built in the year 1648 by Shah Jehan. Later you will visit New Delhi. In New Delhi you will visit sights such as the impressive Qutub Minar, listed as a UNESCO World Heritage Site. built by Qutub-ud-Din Aibek in 1199 from sandstone and marble, Humayun’s Tomb, memorial of Mughal Emperor Humayun, built in the year 1562. The complex is a World Heritage Site & the first example of this type of Mughal architecture in India., India Gate (War Memorial Arch) and Lakshminarayan Temple, a modern Hindu Temple. You will drive past the PresIdent’s House, Parliament House, Government Secretariat Buildings and Connaught Place shopping centre.' },
        { title: 'Delhi / Mandawa ( Shekhawati)', description: 'After breakfast drive to Mandawa, lunch n the way . On arrival, check in at hotel . late afternoon visit the havelis around this area . The small little beautiful town of Mandawa is in the heart of the Shekhavati region. Known throughout for its wonderful castle and magnificent havelis, Mandawa gives the impression of living in the bygone era. Mandawa can be transcribed as surprise at every turn. No single room either, in the havelis, is similar to that f the other. Most of the buildings are dated from 18th century to early 20th century. Overnight at Hotel.' },
        { title: 'Mandawa / Bikaner', description: 'After breakfast drive to Bikaner. On the way visit Fathepur and see some wonderful Fresco example at here. Arrive Bikaner. BIKANER – The royal fortified city with a timeless appeal. Lying in the north of the Desert State, the city is dotted with many sand dunes. Bikaner retains the medieval splendor that pervades the city’s lifestyle. More popularly called the camel country, the city is renowned for the best rIding camels in the world. The ship of the desert is an inseparable part of life here. Be it pulling heavy carts, transporting grains or working on wells, camels are the prime helpers. The wells of Bikaner – an important source of water are other attractions of the city. These are built on high plinths with slender minareted towers on each of the Four Corners and can be noticed even from a distance. Overnight stay at Hotel.' },
        { title: 'Bikaner / Jaisalmer', description: 'After breakfast drive to Jaisalmer. Rising from the heart of the Thar Desert like a golden mirage is the city of Jaisalmer. A commanding fort etched in yellow sandstone stands, with its awesome splendor, dominating the amber-hued city. The city has an interesting legend associated with it, according to which, Lord Krishna-the head of the Yadav Clan, foretold Arjuna that a remote descendent of the Yadav Clan would build his kingdom atop the Trikuta Hill. His prophecy was fulfilled in 1156 AD when Rawal Jaisal, a descendent of the Yadav Clan and a Bhatti Rajput, abandoned his fort at Lodurva and founded a new capital -Jaisalmer, perched on the Trikuta Hill. On arrival, check in at hotel . Overnight stay at Jaisalmer.' },
        { title: 'Jaisalmer', description: 'After a relaxed breakfast proceed for full day sightseeing tour of The Golden City – Jaisalmer. It is in the heart of the Great Indian Desert. Its temple, fort and palaces are all built of yellow stone. The city is a mass of intricately carved buildings, facades and elaborate balconies. Visit the JAISALMER FORT – The oldest living Fort in the world. (This is the highlight of the tour) See the Patwon-Ki-Havelies, Salim-Singh-Ki-Haveli and Gandhi Sagar Tank. Also visit Barabagh Hill. In the afternoon, proceed to the SAM SAND DUNES for visiting the typical Rajasthani Desert Village. View the sunset from the dunes, as the sky is set on fire. Return to hotel. Overnight stay at Jaisalmer.' },
        { title: 'Jaisalmer / Jodhpur / Luni', description: 'Breakfast at hotel. Drive to Jodhpur. Set at the edge of the Thar Desert, the imperial city of Jodhpur echoes with tales of antiquity in the emptiness of the desert. Once the capital of the Marwar state, On arriva sightseeing of Jodhpur- gateway to the desert beyond, home of the Rathors of Marwar, visit the Mehrangarh Fort, rising up a hilly scarp, built on the advice of a hermit, overlooking the city in the image of a long sentinel. InsIde the Fort are a number of palaces added by successive rulers. In this palace you would see different miniature paintings & cradle room. After this you would visit Jaswant Thada Memorial. After visit continue to Luni & on arrival check in to at Fort Chanwa, Fort Chanwa of Luni is an exceptional example of elegance and symmetry in Indian architecture of the last century. The entire fortress is carved out of the famous red sandstone of Jodhpur and with its ornately carved lattice work friezes and intricate “Jharokas”, it exquisitely captures the romance and grace of a bygone age. Overnight at Hotel.' },
        { title: 'Jodhpur / Ranakpur / Udaipur', description: 'Today we drive to Udaipur, en-route we visit Ranakpur where you will find over 500 year old temples which are well preserved almost in perfect condition. These temples are the most complex and extensive in design, interestingly no two pillars are alike. The temple has 29 halls, 80 domes and the pavilions include 1,444 pillars, each of them so intricately and artistically carved that they’ll leave a lasting impression. The figures of dancing goddesses, beautifully engraved on these pillars are an utmost architectural wonder. The Later we continue our journey and stay overnight at hotel in Udaipur.' },
        { title: 'Udaipur', description: 'After breakfast we proceed for sightseeing tour of the most beautiful Lakes cities in Rajasthan. Visit City Palace which has several carved balconies, arches and decorated pillars, Zanana Mahal, Durbar Hall and Shambhu Niwas. Evening we witness sunset while enjoying boat rIde on picturesque Lake Pichola. The lake is surrounded by hills, palaces, temples, bathing ghats and embankments. Overnight at hotel.' },
        { title: 'Udaipur / Pushkar', description: 'After breakfast drive to Pushkar, Pushkar is all about a semicircular lake with 52 ‘ghats’. The maximum depth of the lake is 10mteres. It is a holy place and is known as king of all ‘tiraths’. A holy dip in this lake on Karthik Purnima is saId to wash all the sins and leads to salvation. It is saId that the one who bathes in this holy water during the brighter fortnight of the Hindu calendar month Karthik and sees a Varah (an incarnation of Vishnu), will not take a rebirth on this planet again and can enjoy the heavenly bliss forever. The Karthik Purnima holy dip in this lake gives one a blessing equal to hundred penances. There are many yojana spots which can not be counted by the teacher of gods, Brihaspati. Ovrnight at Hotel.' },
        { title: 'Pushkar / Jaipur', description: 'Today we drive to Jaipur, The Pink city of Jaipur is the capital of the Indian State of Rajasthan, famous forits forts, palaces, lakes, sand and colorful culture. Jaipur would have been part of the Thar desert but for the Aravalli hills that cover it from one sIde. Overnight at Hotel.' },
        { title: 'Jaipur', description: 'Today we take an excursion to Amber Fort, the palace complex which stands to this date was commenced under the reign of Raja Man Singh. We take an Elephant rIde to reach the Fort situated on the hill, an overwhelming experience. Later we visit the City Palace, a perfect blend of Rajasthani & Mughal architecture. The center of the palace is a seven-storied building called Chandra Palace, with fine views over the gardens & the city. Further we visit Jantar Mantar (Solar Observatory), an astronomical treasure house, with solar devices that give accurate predictions till date. We also visit Hawa Mahal (Palace of Winds), a five-storied structure of pink sandstone. It was built in the year 1799 so that veiled royal women could peer down the busy street market unseen by the world through its 593 stone Jharokas (mini windows).' },
        { title: 'Jaipur / Fatehpur Sikri / Agra', description: 'Today we drive to Agra, en route we will visit Fatehpur Sikri (Ghost Capital), the political capital of India’s Mughal Empire under Akbar’s reign, from the year 1571 until 1585, when it was abandoned, ostensibly due to lack of water. We visit Emperor Akbar’s ResIdential complex, Mosque & Tomb of Salim Chisti. Further we continue drive to Agra. located on the West Bank of Yamuna, developed as a great center of architecture, art and Mughal culture. A number of forts, buildings and tombs were constructed during the 16th century, which was the peak period of Mughal glory in Agra , India . The city of Agra is one of the oldest cities in the country that is known for being home to the Taj Mahal, which is one of the Seven Wonders of the World . We find the mention of this great city as ‘Agraban’ in one of the oldest epics of India , Mahabharata. On arrival check in to Hotel. Overnight at Hotel.' },
        { title: 'Agra / Delhi Departure', description: 'Early morning sun rise visit the Monument of Love Taj Mahal, The Mughal emperor Shah Jahan built this lovely dream in white marble as a tomb for his wife Mumtaz Mahal, later he was also buried alongsIde his wife in the same tomb. It took 20,000 workers to complete this monument in a period of 22 years. The white marble blocks used for the construction of this great monument was carted down all the way from Makrana in Rajasthan , India . The intricate inlay work with precious and semi-precious stones that was done on the walls of the Taj Mahal is one of the finest specimens of Mughal architecture in India. After visit return back to Hotel for breakfast Later visit other spots of this great city. Mughal ruler Akbar’s tomb, Sikandra. Sikandra is located at a distance of 3 kilometers from the main Agra city. Akbar ascended the throne at the age of 13. He started building this tomb during his lifetime and his successor and son Jehangir completed this monument after he passed away. The architecture of the tomb at Sikandra is similar to that of the Taj Mahal that was constructed later. This tomb is built in the Indo-Saracenic architectural style and is an interesting place to visit during your tours. The tomb of Itmad-Ud-Daulah is another one of the important tourist destinations in Agra . This tomb was personally designed by Itmad-Ud-Daulah in the Charbagh architectural style. The inlay work and intricate patterns on the walls of the tomb have a common theme depicting a wine flask with snakes for handles. There are several tombs insIde this complex that belong to the other members of the family. In the end visit Grat Fort of Agra followed by drive to Delhi, upon arrival in Delhi Transfer to Airport for onward Destination.' },
    ];

    const swiperImages = [
        '/images/1/1.jpeg',
        '/images/1/2.jpeg',
        '/images/1/3.jpeg',
        '/images/1/4.jpeg',
        '/images/1/5.jpeg',
        '/images/1/6.jpeg',
        '/images/1/7.jpeg',
        '/images/1/8.jpeg'
        '/images/1/9.jpeg'
    ];

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? swiperImages.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === swiperImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="md:mx-16 mt-16 sm:mt-[135px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Carousel Section */}
                <div className="relative h-screen max-h-screen w-full overflow-hidden bg-base-200">
                    <div className="relative h-full w-full">
                        {swiperImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index}`}
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
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

export default TravelItineraryTimeline;
