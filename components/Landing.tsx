import React, {useState, useEffect} from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import PackageSummaryCard from './PackageSummaryCard';
import CountriesList from "./CountriesList";
import Testimonial from "./Testimonial";
import backgroundImage from '../public/images/background_2.jpg';
import backgroundImage2 from '../public/images/background_4.jpeg';
import backgroundImage4 from '../public/images/background_5.jpg';
import backgroundImage3 from '../public/images/background_6.jpg';


import packageData from '../data/packages.json'
import testimonialData from '../data/testimonials.json'
import {ITestimonialDataType, IPackageDetailDataType} from "../types/Common"

interface ILandingProps {

}

function Landing (props: ILandingProps) {
    const [tabName, setTabName] = useState("india");
    const packages = packageData.filter(tourPackage => tourPackage.Id <= 9 && tourPackage.Id > 3)
    const testimonials = testimonialData.slice(0,9);

    const handleTabClick = (tab: string)  => () => {
        setTabName(tab);
    };
    
    return (
        <>
        <div>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true
                    }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
            >
                <SwiperSlide>
                    <div className="stack">
                        <div className="text-center bg-opacity-5 bg-transparent text-white text-2xl bg-gradient-to-b from-transparent to-gray-500">
                            <h1 className="text-left ml-10">We welcome you <br/> with open hands...</h1> <h1 className="text-right mr-10"> ..to show you <br/> Colors of India</h1>
                            <br/> <br/>
                        </div>
                        <div className="h-screen w-screen relative">
                            <Image 
                                className="z-0"
                                src={backgroundImage}
                                fill
                                priority
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "50% 50%",
                                }}
                                sizes="(max-width: 2048px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="BackgroundImage"
                                >
                            </Image>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="stack">
                        <div className="text-center bg-opacity-5 bg-transparent text-white text-2xl  bg-gradient-to-b from-transparent to-gray-500">
                            <h1 className="text-right mr-10"> ..to show you <br/> Taste of India</h1>
                            <br/> <br/>
                        </div>
                        <div className="h-screen w-screen relative">
                            <Image 
                                className="z-0"
                                src={backgroundImage2}
                                fill
                                priority
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "50% 50%",
                                }}
                                sizes="(max-width: 2048px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="BackgroundImage"
                                >
                            </Image>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="stack">
                        <div className="text-center bg-opacity-5 bg-transparent text-white text-2xl  bg-gradient-to-b from-transparent to-gray-500">
                            <h1 className="text-right mr-10"> ..to show you <br/> Wonders of India</h1>
                            <br/> <br/>
                        </div>
                        <div className="h-screen w-screen relative">
                            <Image 
                                className="z-0"
                                src={backgroundImage3}
                                fill
                                priority
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "50% 50%",
                                }}
                                sizes="(max-width: 2048px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="BackgroundImage"
                                >
                            </Image>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="stack">
                        <div className="text-center bg-opacity-5 bg-transparent text-white text-2xl  bg-gradient-to-b from-transparent to-gray-700">
                            <h1 className="text-right mr-10"> Lets begin your <br/> Journey of India</h1>
                            <br/> <br/>
                        </div>
                        <div className="h-screen w-screen relative">
                            <Image 
                                className="z-0"
                                src={backgroundImage4}
                                fill
                                priority
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "66% 50%",
                                }}
                                sizes="(max-width: 2048px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt="BackgroundImage"
                                >
                            </Image>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="divider"></div>
        <div className="text-center text-4xl"> Our Presence </div>
        <div className="mt-2">
            <div role="tablist" className="tabs tabs-lifted justify-center">
                <button role="tab" className={"tab " + (tabName == "india" ? "tab-active": "")} onClick={handleTabClick("india")}>India</button> 
                <button role="tab" className={"tab " + (tabName == "srilanka" ? "tab-active": "")} onClick={handleTabClick("srilanka")}>Sri Lanka</button> 
                <button role="tab" className={"tab " + (tabName == "nepal" ? "tab-active": "")} onClick={handleTabClick("nepal")}>Nepal</button>
                <button role="tab" className={"tab " + (tabName == "bhutan" ? "tab-active": "")} onClick={handleTabClick( "bhutan")}>Bhutan</button>
                <button role="tab" className={"tab " + (tabName == "maldives" ? "tab-active": "")} onClick={handleTabClick("maldives")}>Maldives</button>
            </div>
        </div>
        <div className="flex justify-center my-4 pb-4">
            <CountriesList country={tabName} />
        </div>
        <div className="divider"></div>
        <div className="text-center text-4xl"> Packages </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 m-1 place-items-center">
            {packages.map(tourPackage => (
                <div key={tourPackage.Id}>
                    <PackageSummaryCard tourPackage={tourPackage}></PackageSummaryCard>
                </div>
            ))}
        </div>
        <div className="divider"></div>
        <div className="text-center text-4xl mb-6"> What our Customers Say </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 rounded-box">
            {testimonials.map(testimonial => (
                <div className="carousel-item" key={testimonial.Id}>
                    <Testimonial testimonial={testimonial}></Testimonial>
                </div>
            ))}
        </div>
        </>
    )
}

export default Landing;