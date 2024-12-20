'use client';

import { useState } from 'react';

const TourTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
        { title: 'Arrival Leh', description: 'Upon arrival at Leh airport meet to our representative and transfer to hotel, during the check-in time you will get tea, coffee, snacks, etc. Complete the check formalities. We suggest you, AM free to get used to the rare air of Ladakh. After lunch commence walking tour in the market or visit Shanti Stupa, Tsomo Castle. Overnight at hotel. (B/D)' },
        { title: 'Leh Sightseeing', description: 'After breakfast full day sightseeing of Lamayuru, Rizong, Alchi, Gurudwara Pathar Saheb, Nimmo (Confluence of Indus and Zanskar River). Drive back to Leh, rest of the time free for individual activities. Overnight at hotel (B/D).' },
        { title: 'Leh – Spituk (Kali Temple) – Zinchen: 4-5 H. Trek', description: 'After the breakfast drive to Spituk Bridge behind the Spituk monastery, around 7 kms from Leh town. From Spituk bridge starts the trekking along Indus River walking through flat and desolate plain at the foot of the Stok Mountain. Gradually, you will leave the view of busy Leh-Srinagar highway and move towards wilderness of Himalaya. Soon you arrive at Zingchen through a gorge, which gives you a feeling of complete isolation. Stay overnight in Camp at Zingchen. (B/D)' },
        { title: 'Zinchen – Yurutse: 5-6 H. Trek', description: 'Leave Zingchen for Rumbak through a straightforward road; leaving village, you enter Hemis national park for the preservation of Snow leopard, Baharal, marmot, wolf etc. Walk through a narrow trail and valley widens as you arrive Rumbak and camp at Yurutse below Gandala Pass. Overnight in Camp. (B/D)' },
        { title: 'Yurutse – Gondala (4350m) – Shingo – Skyu: 7-8 H. Trek', description: 'From Yurutse follow the path along the mountain side, then cross a small valley and follow zig-zag steep path. Thereafter cross Gandala pass (4380m). Then walk the long descent towards Shingo for 2 hrs that will lead to the valley of Markha and after a few hundred meters you reach Skyu. Overnight halt in tents. (B/D)' },
        { title: 'Skyu – Markha Village: 7-8 H. Trek', description: 'After breakfast commence trek to Markha village, follow a good path on the right bank of Markha where one can find great vegetation. Then cross the right bank of river then the barren plain and arrive at Chaluk. Thereafter, walk along the left bank of river and after another crossing climb towards Markha village. Towards the end of the village there are good camp site near the river. Overnight stay in tents. (B/D)' },
        { title: 'Markha Village – Hankar – Thachunche: 7-8 H. Trek', description: 'Right after breakfast you start trekking in the morning to reach Tchatchutse via Hankar village. Overnight in tents. (B/D)' },
        { title: 'Thachunche – Nimaling: 5-6 H. Trek', description: 'After breakfast start trekking to reach Nimaling. Nimaling (4900 M) has a sweeping pasture where thousands of sheep, goats and yaks graze during the summer months. Rising to the south is 6400 M high Kang Yatse (Nimaling Peak), a lovely mountain, but not an easy one to climb. Overnight in tents. (B/D)' },
        { title: 'Nimaling – Shang Sumdo: 7-8 H. Trek', description: 'After breakfast start trekking to reach Kongmaru La (5100 M). The trek to Kongmaru la passes through narrow gorges. From the top of the pass, you can have a view of Ladakh ranges and the sight of villages to the north of Indus valley is excellent. Cross the pass and proceed to Shang. Overnight in tents. (B/D)' },
        { title: 'Shang Sumdo Village – Hemis – Leh: 2 H. Trek /Drive', description: 'Walk along the stream down to Hemis monastery, which is one of the oldest and richest monasteries in Ladakh. Visit Hemis monastery and drive to Leh, enroute visit Thiksey Monastery, Shey Palace and Stok Palace cum museum. On arrival at Leh check in hotel, rest of the time free for individual activities. (B/D)' },
        { title: 'Leh Departure', description: 'After breakfast in time departure transfer to airport, board onward flight.' },
    ];

    const swiperImages = [
        '/images/5/1.jpeg',
        '/images/5/2.jpeg',
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
