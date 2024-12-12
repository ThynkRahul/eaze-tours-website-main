'use client';

import React from 'react';
import Image from 'next/image'

import gallery_1 from '../../public/images/gallery/1.jpg';
import gallery_2 from '../../public/images/gallery/2.jpg';
import gallery_3 from '../../public/images/gallery/3.jpg';
import gallery_4 from '../../public/images/gallery/4.jpg';
import gallery_5 from '../../public/images/gallery/5.jpg';
import gallery_6 from '../../public/images/gallery/6.jpg';
import gallery_7 from '../../public/images/gallery/7.jpg';
import gallery_8 from '../../public/images/gallery/8.jpg';
import gallery_10 from '../../public/images/gallery/10.jpg';
import gallery_11 from '../../public/images/gallery/11.jpg';
import gallery_12 from '../../public/images/gallery/12.jpg';
import gallery_13 from '../../public/images/gallery/13.jpg';
import gallery_14 from '../../public/images/gallery/14.jpg';
import gallery_15 from '../../public/images/gallery/15.jpg';
import gallery_16 from '../../public/images/gallery/16.jpg';
import gallery_17 from '../../public/images/gallery/17.jpg';
import gallery_18 from '../../public/images/gallery/18.jpg';
import gallery_19 from '../../public/images/gallery/19.jpg';
import gallery_20 from '../../public/images/gallery/20.jpg';
import gallery_21 from '../../public/images/gallery/21.jpg';
import gallery_22 from '../../public/images/gallery/22.jpg';
import gallery_23 from '../../public/images/gallery/23.jpg';
import gallery_24 from '../../public/images/gallery/24.jpg';
import gallery_25 from '../../public/images/gallery/25.jpg';
import gallery_26 from '../../public/images/gallery/26.jpg';
import gallery_27 from '../../public/images/gallery/27.jpg';
import gallery_28 from '../../public/images/gallery/28.jpg';
import gallery_29 from '../../public/images/gallery/29.jpg';
import gallery_30 from '../../public/images/gallery/30.jpg';


const gallery_images = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_10,
    gallery_11,
    gallery_12,
    gallery_13,
    gallery_14,
    gallery_15,
    gallery_16,
    gallery_17,
    gallery_18,
    gallery_19,
    gallery_20,
    gallery_21,
    gallery_22,
    gallery_23,
    gallery_24,
    gallery_25,
    gallery_26,
    gallery_27,
    gallery_28,
    gallery_29,
    gallery_30
]


export default function Gallery() {
    return (
            <>
            <div className="columns-1 md:columns-2 lg:columns-3 mt-16 mx-5">
            {gallery_images.map((gallery_image, index) =>

                <div className='card w-full shadow-xl m-3' key={index}>
                    <Image
                        className="z-0"
                        src={gallery_image}
                        object-fit="cover"
                        object-position="bottom"
                        alt="BackgroundImage"
                    >
                    </Image>
                </div>)}
                
            </div>
            </>
    )
  }