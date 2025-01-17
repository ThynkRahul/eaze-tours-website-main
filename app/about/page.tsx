'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from "swiper/modules";

import about1 from '../../public/images/gallery/18.jpg';
import about2 from '../../public/images/gallery/28.jpg';
import about3 from '../../public/images/gallery/30.jpg';
import about4 from '../../public/images/gallery/6.jpg';
import about5 from '../../public/images/gallery/13.jpg';
import harshit from '../../public/images/aboutus/harshit.jpg';
import roshan from '../../public/images/aboutus/jagroshan.jpg';
import manoj from '../../public/images/aboutus/Manoj.jpg';

const about_us_images = [about2, about1, about3, about4, about5];

export default function About() {
  return (
    <>
      <div className="mt-[78px] sm:mt-[165px] mx-8 mb-12">
        <p className="text-[14px] text-gray-700 mt-4">
          <span className="text-[#ccc]">Home</span> / About us
        </p>
        <h2 className="text-[42px] font-semibold text-black text-center sm:text-left">
          About us
        </h2>
        <p className="text-md text-gray-700 mt-1">
          Let’s explore what we do!
        </p>
      </div>

      <div className="relative mt-[10px] max-w-screen-xl mx-8 h-[480px] rounded-[23px] overflow-hidden flex items-center justify-start p-[20px] sm:p-[80px] bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/gallery/8.jpg")' }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-[900px] py-8 pt-[150px] text-left">
          <h2 className="text-white text-[56px] mb-4 font-semibold leading-[1.2em]"></h2>
          {/* Input Field and Subscribe Button */}
        </div>
      </div>

      <div className="mt-[78px] mx-auto mb-12 w-[45%]">
        <h2 className="text-[42px] font-semibold capitalize text-black text-center leading-[1.2em] mb-4">
          Provide the best travel experience for you
        </h2>
        <p className="text-md text-gray-700 mt-1 text-center">
          We understand that every journey has unique needs. Therefore, we offer customized travel packages designed according to your preferences and budget.
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-4 my-12 max-w-screen-xl mb-[120px] mx-auto sm:flex-nowrap w-[80%]">
        {/* First Box */}
        <div className="w-full sm:w-1/2 relative rounded-[25px] overflow-hidden group">
          {/* Content */}
          <div className="relative p-6 z-10 text-white">
            <Image src="/images/info_icon_2.png" alt="Info Icon 1" width={77} height={77} />
            <h3 className="text-[32px] font-semibold mb-2 sm:w-[60%] w-[80%] font-urbanist">Our Vision</h3>
            <div>
              <p className="mb-4 font-urbanist">
                Our vision is to become a leading travel agency company that provides high-quality services and inspiration for our customer.
              </p>
            </div>
          </div>

          {/* Extra div for zoom effect (background) */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
            style={{
              background: `#6e9753`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        {/* Second Box */}
        <div className="w-full sm:w-1/2 relative rounded-[25px] overflow-hidden group">
          {/* Content */}
          <div className="relative p-6 z-10 text-white">
            <Image src="/images/info_icon_1.png" alt="Info Icon 1" width={77} height={77} />
            <h3 className="text-[32px] font-semibold mb-2 sm:w-[60%] w-[80%] font-urbanist">Our Mission</h3>
            <div>
              <p className="mb-4 font-urbanist">
                Our mission is to become a leading travel agency company that provides high-quality services and inspiration for our customer.
              </p>
            </div>
          </div>

          {/* Extra div for zoom effect (background) */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
            style={{
              background: `#6e9753`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>

      <div className="bg-[#025C7A] flex py-[100px] text-[#fff] justify-center items-center">
        <div className="w-[50%] mx-8"><h3 className="text-[52px] font-semibold mb-4 capitalize font-urbanist leading-[1.2em]">Finding your dream destination is our priority</h3>
          <p className="mb-4 font-urbanist font-semibold">With a collection of destinations that include stunning natural landscapes, vibrant cosmopolitan cities and enchanting tropical islands, we take you to the world's most stunning places.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mx-8 w-[50%]">
          <div className="info-box bg-[#fff] p-4 w-full aspect-square rounded-lg flex flex-col items-left justify-center">
            <Image src="/images/info_icon_2.png" alt="Info Icon 2" width={77} height={77} />
            <h2 className="info-heading text-lg font-urbanist font-medium text-black text-left mt-4 mb-2">What's New at Eaze Tours</h2>
            <p className="info-content text-left text-[#4F5E71] font-[16px] leading-[19px]">
              Find out what's happening at Eaze Tours – from special discounts to the latest updates on India tour packages.
            </p>
          </div>
          <div className="info-box bg-[#fff] p-4 w-full aspect-square rounded-lg flex flex-col items-left justify-center">
            <Image src="/images/info_icon_2.png" alt="Info Icon 2" width={77} height={77} />
            <h2 className="info-heading text-lg font-urbanist font-medium text-black text-left mt-4 mb-2">What's New at Eaze Tours</h2>
            <p className="info-content text-left text-[#4F5E71] font-[16px] leading-[19px]">
              Find out what's happening at Eaze Tours – from special discounts to the latest updates on India tour packages.
            </p>
          </div>
          <div className="info-box bg-[#fff] p-4 w-full aspect-square rounded-lg flex flex-col items-left justify-center">
            <Image src="/images/info_icon_2.png" alt="Info Icon 2" width={77} height={77} />
            <h2 className="info-heading text-lg font-urbanist font-medium text-black text-left mt-4 mb-2">What's New at Eaze Tours</h2>
            <p className="info-content text-left text-[#4F5E71] font-[16px] leading-[19px]">
              Find out what's happening at Eaze Tours – from special discounts to the latest updates on India tour packages.
            </p>
          </div>
          <div className="info-box bg-[#fff] p-4 w-full aspect-square rounded-lg flex flex-col items-left justify-center">
            <Image src="/images/info_icon_2.png" alt="Info Icon 2" width={77} height={77} />
            <h2 className="info-heading text-lg font-urbanist font-medium text-black text-left mt-4 mb-2">What's New at Eaze Tours</h2>
            <p className="info-content text-left text-[#4F5E71] font-[16px] leading-[19px]">
              Find out what's happening at Eaze Tours – from special discounts to the latest updates on India tour packages.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-5 md:p-10">
        <div className="m-5">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">About Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="card-body p-6">
                <h2 className="font-bold text-2xl text-center text-gray-800">About Us</h2>
                <p className="text-lg text-gray-700 mt-4">
                  Established in 2015, Eaze Tours is driven by three travel professionals, with decades of combined varied experience in the Tour industry.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  Our tours are built on extensive knowledge of our destinations, an outstanding team of professionals, and personalized top-notch service. Our experts completely customize your private tour to match your interests and preferences through their comprehensive knowledge of each destination.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  Our head office is in Delhi, but we have a wide network of associate offices throughout the country, manned by professionals.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  We have a young team of tourism professionals who understand the values of customers and always give 100% to satisfy customer needs.
                </p>
              </div>
            </div>

            {/* Swiper Section */}
            <div className="h-[100%] overflow-hidden rounded-lg shadow-lg">
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                className="h-full"
              >
                {about_us_images.map((about_us_image, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-full relative">
                      <Image
                        src={about_us_image}
                        alt="About Us Image"
                        layout="fill" // Makes the image fill the div
                        objectFit="cover" // Ensures image covers the box
                        objectPosition="center" // Keeps the image centered
                        className="rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="mt-12 space-y-10">
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center space-x-6 p-6 gap-8">
                <div className="w-[20%]">
                  <Image
                    src={manoj}
                    alt="Manoj Singh Rana"
                    className="w-full h-full aspect-square rounded-full object-cover shadow-xl"
                  />
                </div>
                <div className="w-[80%]">
                  <h3 className="text-xl font-bold text-gray-800">Manoj Singh Rana</h3>
                  <p className="text-gray-600 mt-2">
                    With over 28 years of industry experience, Manoj never misses an opportunity to amaze travelers. His suggestions are backed by extensive research. Truthfulness and simplicity are key points of his success.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center space-x-6 p-6 gap-8">
                <div className="w-[20%]">
                  <Image
                    src={harshit}
                    alt="Harshit Nagar"
                    className="w-full h-full aspect-square rounded-full object-cover shadow-xl"
                  />
                </div>
                <div className="w-[80%]">
                  <h3 className="text-xl font-bold text-gray-800">Harshit Nagar</h3>
                  <p className="text-gray-600 mt-2">
                    Harshit has done a Master's in Tourism Management and has 18 years of experience. He has traveled and escorted groups and FITs as per requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center space-x-6 p-6 gap-8">
                <div className="w-[20%]">
                  <Image
                    src={roshan}
                    alt="Jagroshan Prajapati"
                    className="w-full h-full aspect-square rounded-full object-cover shadow-xl"
                  />
                </div>
                <div className="w-[80%]">
                  <h3 className="text-xl font-bold text-gray-800">Jagroshan Prajapati</h3>
                  <p className="text-gray-600 mt-2">
                    With 25 years of experience, Jagroshan is the director of both finance and administration. He has a vast experience in tour and ticketing, along with excellent management skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
