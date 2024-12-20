'use client';

import { useState } from 'react';

const AyurvedaTimeline = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const timelineData = [
    { title: 'Ayurveda – Harmony of body, mind and soul', description: 'Kerala is the only State in India which practises this system of medicine with absolute dedication. Ayurveda believes in the treatment of not just the affected part, but the individual as a whole. Making it the natural way to refresh yourself, eliminate all toxic imbalances from the body and thus regain resistance and good health.' },
    { title: 'The Boons of Nature', description: 'Its equable climate, natural abundance of forests and the cool monsoon season are best suited for Ayurveda’s curative and restorative packages. Kerala is perhaps one of the few places on earth where a temperature of 24-28 degrees is maintained during a period of continuous rain. This prevalence of moisture in the air and on the surface of the skin makes it the ideal place for natural medicines to work at their highest levels of potency. Ayurvedic treatment. We have associated with many Ayurveda hospitals & Ayurvedic Resorts in Kerala for Traditional Special therapy packages are also available for rejuvenation and stress management varying from 3 to 21 days.' },
    { title: 'We Call it a Dental Vacations', description: 'You will find excellent dentists in Kerala with high expertise, treatment technologies meeting global standards at less cost because of the lower cost of living in Kerala. Dental Clinics in Kerala are provided with various kinds of treatment like root canal therapy, dentures, crowns, Dental Implant, Porcelain crowns, Dental Surgery, Teeth Whitening, Cosmetic Dentistry, Braces etc at affordable price. We can offer excellent deals & packages that suit your dental treatment expenses and we propose to you the world-class dental care along with a planned vacation in Kerala.' },
    { title: 'Abhyangam', description: 'Abhyangam means “oil massage”. In Abhyanga, medicated oil is massaged all over the body. Special type of oil massage in which strokes are given according to the diseases for 45 minutes per day. This treatment is very useful for Rheumatism, especially for Diabetic gangrene (a condition due to lack of blood circulation in the extremities of the body).' },
    { title: 'Ilakkizhi (Patrasweda)', description: 'Patra or Ila means leaf. “Kizhi” means “bundle”. “Ilakkizhi” or Patrasweda is a kind of sudation therapy using herbal leaves. Various Herbal Leaves are chopped and mixed with grated coconut and mustard. Prior to fomentation, oil is applied to the crown. In rheumatic pains and associated swelling of the joints, fomentation and massage with Ilakkizhi (bundles containing leaves) bring relief.' },
    { title: 'Podikkizhi (Choornasweda)', description: 'Podikkizhi is a method of therapeutic sweating. The body is fomented thoroughly with linen bags (kizhis) containing herbal drugs in powdered form. Podikkizhi is good for ailments due to disrupted Vata and Kapha doshas.' },
    { title: 'Panchakarma', description: 'Panchakarma is the ayurvedic way of removing accumulated toxins. By cleansing the body of all accumulated toxins, this process restores the lost vitality and improves bodily function. Panchakarma is a group of five treatments – vamana, virechana, snehavasti, kashayavasti and nasya. Vamana is emesis, virechana is purging, vasti is enema which involves usage of two types of medicated oils and medicated decoctions called snehavasti and kashayavasti respectively. Nasya is instillation of medicines through nose. After Panchakarma, a subsequent change in lifestyle helps to maintain an ideal state of health.' },
    { title: 'Abhyangam + Special Face Massage', description: 'Abhyangam mixed with a facial massage based on Ayurvedic principles, this massage rejuvenates your skin and makes it healthy and glowing. The Ayurvedic facial massage revitalizes your skin and provides you with a relaxed feeling momentarily relieving you of your daily tensions. This massage uses natural herbal product extracts and pure essential oils. Ayurvedic facial massage is a combination of applying pressure to different points and as well as applying rhythmic sculpting and contouring strokes.' },
    { title: 'Udvarthanam (Herbal powder massage)', description: 'Udvarthanam (Powder Massage) – This is a special type of Ayurvedic massage done with a special herbal powder in a rhythmic motion (Upward motion). This massage is included in our slimming programme. This treatment is commonly used for Obesity (Removal of excess fat).' },
    { title: 'Navarakkizhi', description: 'Navarakkizhi involves massaging of the body with small linen bags filled with Navara (Shastika), after a liberal application of medicated oils. Navara Kizhi is also of great benefit to those with atrophy of the muscles, arthritis, weakness of the extremities, tremors and fibromyalgia. This treatment will benefit from this treatment\'s anti-aging properties.' },
    { title: 'Ksheeradhara', description: 'Ksheeradhara – with medicated milk is called Ksheeradhara. Usually cow’s milk is used. Decoctions of various herbs are added to the milk. Ksheeradhara for the head alone is called Shirodhara, or for the whole body except the head is called Sarvangadhara. A Sravanga Ksheeradhra is usually prescribed for diseases caused by disorders of the Pitta.' },
    { title: 'Thakradhara', description: 'Thakradhara is a powerful relaxation therapy for the head and mind. It’s commonly used for treating Alzheimer’s disease, insomnia, depression, stress related problems, hypertension, insanity, skin disorders, psoriasis, anemia, etc. Buttermilk, which has tremendous cooling properties, is used as the main ingredient for the treatment. Thakradhara means the profuse pouring of medicine-rich buttermilk on a person’s forehead. The treatment induces coolness to the brain, relaxes the mind, reduces mental stress and increases memory power. Hence Thakradhara is also considered as a good rejuvenating treatment for the mind and body.' },
    { title: 'Pizhichil', description: 'In Pizhichil lukewarm medicated oil is applied on the body of the patient lying on the “Dharapathi”. Oil dipped pieces of cloth are squeezed by hand and the oils rubbed smoothly over the body of the patient by measures on either side. Pizhichil is recommended for diseases caused by a vitiation of the Vata humour- Pakshagliata (Hemiplegia), paralysis and muscle spasms and other degenerative diseases that affect the muscles.' }
];

    const swiperImages = [
        '/images/9/1.jpeg',
        '/images/9/2.jpeg'
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

export default AyurvedaTimeline;
