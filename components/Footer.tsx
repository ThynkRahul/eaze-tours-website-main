import React from "react";
import Link from "next/link";
import Image from 'next/image';
import signature from '../public/images/logo.png';

function Footer() {
  return (
    <footer className="footer flex flex-col bg-[#0D2000] text-white border-t-2 border-gray-300 gap-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-0 justify-between p-6 md:p-10">
        {/* First Column - Logo, Content, and Social Icons */}
		
      <div className="w-full md:w-1/4 mb-8 text-left pl-1 md:pl-8">
      <Link href="/" passHref><Image className="z-0 mb-4 md:mx-0" src={signature} width={200} height={87} alt="Logo"></Image></Link>
		  
      <p className="text-sm mt-2 mb-4">Established in 2015, Eaze Tours is driven by three travel professionals, with decades of combined varied experience in the tour industry.</p>
        <div className="flex justify-start md:justify-start space-x-4 my-4">
        
		<a href="https://www.tripadvisor.in/Attraction_Review-g304551-d17734269-Reviews-EAZE_TOURS-New_Delhi_National_Capital_Territory_of_Delhi.html" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
        <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300"><i className="fab fa-tripadvisor text-lg leading-lg" /></span></a>
        
		<a href="https://www.facebook.com/eazetour/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
        <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300"><i className="fab fa-facebook-f text-lg leading-lg" /></span></a>
        
		<a href="https://www.instagram.com/eazetourpackages/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors">
        <span className="relative w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300"><i className="fab fa-instagram text-lg leading-lg" /></span></a>
        
		</div>
        </div>

        {/* Second Column - Useful Links */}
        <div className="w-full md:w-1/4 mb-8 pl-1 md:pl-[80px] md:pt-[40px]">
          <h5 className="text-lg font-semibold mb-4">Useful Links</h5>
          <ul className="space-y-4">
            <li><Link href="/about" className="hover:text-[#025c7a] transition-colors">About us</Link></li>
            <li><Link href="/contact" className="hover:text-[#025c7a] transition-colors">Contact us</Link></li>
            <li><Link href="/packages" className="hover:text-[#025c7a] transition-colors">Packages</Link></li>
            <li><Link href="/gallery" className="hover:text-[#025c7a] transition-colors">Gallery</Link></li>
            <li><Link href="/testimonials" className="hover:text-[#025c7a] transition-colors">Testimonials</Link></li>
          </ul>
        </div>

        {/* Third Column - Top Destinations */}
        <div className="w-full md:w-1/4 mb-8 pl-1 md:pl-[80px] md:pt-[40px]">
          <h5 className="text-lg font-semibold mb-4">Top Destinations</h5>
          <ul className="space-y-4">
            <li><Link href="/packages/28" className="hover:text-[#025c7a] transition-colors">Delhi</Link></li>
            <li><Link href="/packages/34" className="hover:text-[#025c7a] transition-colors">Jaipur</Link></li>
            <li><Link href="/packages/35" className="hover:text-[#025c7a] transition-colors">Agra</Link></li>
            <li><Link href="/packages/21" className="hover:text-[#025c7a] transition-colors">Varanasi</Link></li>
            <li><Link href="/packages/16" className="hover:text-[#025c7a] transition-colors">Goa</Link></li>
          </ul>
        </div>

        {/* Fourth Column - Contact Info */}
        <div className="w-full md:w-1/4 mb-8 pl-1 md:pl-8 md:pt-[40px]">
          <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <i className="fa fa-phone-alt text-lg text-white-400 -mt-1" />
              <div>
                <p className="text-sm"><a href="tel:+919873186168" className="hover:text-[#025c7a]">+91 98731 86168</a></p>
                <p className="text-sm"><a href="tel:+919911684818" className="hover:text-[#025c7a]">+91 99116 84818</a></p>
              </div></div>
            <div className="flex items-start space-x-2">
              <i className="far fa-envelope text-lg text-white-400 -mt-1" />
              <div>
                <p className="text-sm"><a href="mailto:info@eazetours.com;harshit@eazetours.com" className="hover:text-[#025c7a]">info@eazetours.com</a></p>
                <p className="text-sm"><a href="mailto:harshit@eazetours.com" className="hover:text-[#025c7a]">harshit@eazetours.com</a></p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <i className="fa fa-map-marker-alt text-lg text-white-400 -mt-1" />
              <p className="text-sm">Eaze House ~2nd Floor, RZP-146 Palam Colony, New Delhi, South West Delhi, 110075</p>
            </div>
			
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full bg-[#0D2000] text-white py-7 text-center justify-center border-t border-white border-opacity-50">
        <p className="text-sm">&copy; Copyright <a href="/" className="hover:text-[#025c7a]">Eaze Tours</a> 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
