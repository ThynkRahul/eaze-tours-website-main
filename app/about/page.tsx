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


const about_us_images = [
  about2,
  about1,
  about3,
  about4,
  about5
]

export default function About() {
    return (
      <div>
          <div className="mt-[135px] m-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="content-center">
                <div className="card card-side bg-base-100 shadow-xl mt-5">
                  <div className="card-body">
                    <h2 className="font-bold text-2xl text-center">About Our Team</h2>
                    <span className="text-xl text-center">
                    <p>Established in 2015, Eaze Tours is driven by three travel professionals, with decades of combined varied experience in Tour industry.</p>
                    <p>Our tours are built on extensive knowledge of our destinations, an outstanding team of professionals, and personalized top-notch service. Our experts completely customize your private tour to match your interests and preferences through their comprehensive knowledge of each destination.</p>
                    <p>Our head office is in Delhi, but we have a wide network of associate offices throughout the country manned by professionals.</p>
                    <p>We have young Team and Tourism professionals who knows values of customers and always gives 100% to satisfy customer needs.</p>
                    </span>
                  </div>
                </div>
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
                    modules={[EffectFade, Autoplay]}
                >
                  {about_us_images.map((about_us_image, index) =>
                    <SwiperSlide key={index}>
                      <div className='h-96 md:h-128'>
                        <Image
                            src={about_us_image}
                            style={{
                              objectFit: "cover",
                              objectPosition: "50% 50%"
                            }}
                            alt="BackgroundImage"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        >
                        </Image>
                      </div>
                    </SwiperSlide>)}
                </Swiper>
              </div>
              </div>
              <div>
                <div className="card card-side bg-base-100 shadow-xl mt-5">
                  <figure>
                    <Image
                      src={manoj}
                      style={{
                        objectFit: "cover",
                        objectPosition: "50% 50%",
                      }}
                      alt="BackgroundImage"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      >
                    </Image>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Manoj Singh Rana</h2>
                    <p>With over 28 years of industry experience, never missing an opportunity to amaze the traveller. His suggestions are backed by extensive research. Truthfulness and simplicity are two main points of his success. </p>
                  </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl mt-5">
                  <div className="card-body">
                    <h2 className="card-title">Harshit Nagar</h2>
                    <p>Harshit has done Masters in Tourism Management and have experience of over 18 years. Travelled and escorted with groups and FIT’s as per requirement.</p>
                  </div>
                  <figure>
                    <Image
                      src={harshit}
                      style={{
                        objectFit: "cover",
                        objectPosition: "50% 50%",
                      }}
                      alt="BackgroundImage"
                      >
                    </Image>
                  </figure>
                </div>
                <div className="card card-side bg-base-100 shadow-xl mt-5">
                  <figure>
                    <Image 
                      className="z-0"
                      src={roshan}
                      style={{
                        objectFit: "cover"
                      }}
                      alt="BackgroundImage"
                      >
                    </Image>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Jagroshan Prajapati</h2>
                    <p>He has an experience of about 25 years in his field. He is the director of both finance and administration. He has a vast experience of Tour and Ticketing and having excellent management skill</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
