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
    <div className="bg-gray-50 p-5 md:p-10">
      <div className="mt-16 m-5">
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
            <div className="flex items-center space-x-6 p-6">
              <Image
                src={manoj}
                alt="Manoj Singh Rana"
                className="w-32 h-32 rounded-full object-cover shadow-xl"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Manoj Singh Rana</h3>
                <p className="text-gray-600 mt-2">
                  With over 28 years of industry experience, Manoj never misses an opportunity to amaze travelers. His suggestions are backed by extensive research. Truthfulness and simplicity are key points of his success.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center space-x-6 p-6">
              <Image
                src={harshit}
                alt="Harshit Nagar"
                className="w-32 h-32 rounded-full object-cover shadow-xl"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">Harshit Nagar</h3>
                <p className="text-gray-600 mt-2">
                  Harshit has done a Master's in Tourism Management and has 18 years of experience. He has traveled and escorted groups and FITs as per requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center space-x-6 p-6">
              <Image
                src={roshan}
                alt="Jagroshan Prajapati"
                className="w-32 h-32 rounded-full object-cover shadow-xl"
              />
              <div>
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
  );
}
