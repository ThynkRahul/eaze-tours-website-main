import React from "react";
import Link from "next/link";
import Image from 'next/image';
import signature from '../public/images/signature.png'

function Footer(){
    return (
      <footer className="footer relative inset-x-0 bottom-0 p-10 bg-base-200 text-base-content">
        <div>
          <h4 className="text-3xl font-semibold">Excited to visit India!</h4>
          <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Come reinvent your travel with us.
          </h5>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/packages">
            Packages
          </Link>
          <Link href="/gallery">
            Gallery
          </Link>
          <Link href="/testimonials">
            Testimonials
          </Link>
        </div>
        <div>
          <div>
              <Image 
                  className="z-0"
                  src={signature}
                  width={392}
                  height={78}
                  alt="SignatureImage"
                  >
              </Image>
          </div>
          <p>Copyright © 2024 - All right reserved by Eaze Tours</p>
           <div>
          <span className="btn btn-square btn-ghost">
              <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" 
                    href="https://www.tripadvisor.in/Attraction_Review-g304551-d17734269-Reviews-EAZE_TOURS-New_Delhi_National_Capital_Territory_of_Delhi.html" >
                      <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-tripadvisor text-lg leading-lg " />
                  </a>
              </span>
            <span className="btn btn-square btn-ghost">
              <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href="https://www.facebook.com/eazetour/">
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
              </a>
              </span>
			  
              <span className="btn btn-square btn-ghost">
              <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" 
                    href="https://www.instagram.com/eazetourpackages/" >
                      <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
                  </a>
              </span>
			  
			  <span className="btn btn-square btn-ghost">
              <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" 
                    href="https://www.pinterest.com/eazetourpackages/" >
                      <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-pinterest text-lg leading-lg " />
                  </a>
              </span>
			  
              <span className="btn btn-square btn-ghost">
              <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href="tel:+919873186168" >
                      <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-phone-alt text-lg leading-lg " />
                  </a>
              </span>
              <span className="btn btn-square btn-ghost">
              <a className="lg:hover:text-primary px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href="mailto:info@eazetours.com;harshit@eazetours.com" >
                      <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-envelope text-lg leading-lg " />
                      </a>
              </span>
            </div>
            
        </div>
      </footer>
    );
  }

  export default Footer;
