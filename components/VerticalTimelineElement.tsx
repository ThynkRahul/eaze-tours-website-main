import React from "react";

import { PackageImageSwiper } from "./Images";
import PackageSummaryCard from "./PackageSummaryCard";
import Link from "next/link";
import VerticalTimelineElement from './VerticalTimelineElement';
import { IPackageDetailDataType } from "../types/Common";
import packageData from '../data/packages.json'

interface VerticalTimelineProp {
    tourPackage: IPackageDetailDataType;
}

interface VerticalTimelineState {

}

function VerticalTimeline({ tourPackage }: VerticalTimelineProp) {
    const packages = packageData.filter(tourPackage => tourPackage.Id <= 5 && tourPackage.Id > 1);
    return (

        <div className="min-h-screen">

            <div className="mt-[135px] sm:mt-[165px] mx-8 mb-12">
                <p className="text-[14px] text-gray-700 mt-4">
                    <span className="text-[#ccc] hover:text-[#035C7A]">
                        <Link href="/" passHref>Home </Link>
                    </span><span>/ {tourPackage.Name}</span>
                </p>
                <h2 className="text-[42px] font-semibold text-black text-left">
                    <span>{tourPackage.Name}</span>
                </h2>
                <div className="flex gap-2 pt-2 mb-3">
                    <span className="bg-[#025C7A] text-white px-3 py-1 rounded-sm text-sm">{tourPackage.Tags}</span>
                    <span className="bg-[#6E9753] text-white px-3 py-1 rounded-sm text-sm">{tourPackage.Tags}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
                <div className="h-[424px] max-h-screen w-full overflow-auto">
                    <PackageImageSwiper source={tourPackage.Id}></PackageImageSwiper>
                </div>

                <div className="max-h-screen overflow-auto border-2 mx-8 rounded-[20px]">
                    <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-[30px]">
                        <h2 className="text-2xl font-semibold text-black text-center sm:text-left mb-4">Overview</h2>
                        <div className="text-[#4f5e71] font-[16px] leading-[22.4px]">With a maximum of 13 people, this small-group tour takes in the beauty of Antelope Canyon X without the crowds. Travel round-trip by minivan from your Las Vegas hotel to Arizona, and explore the canyon with a Navajo guide. Hike out to the sheer rock face at Horseshoe Bend and stop at a scenic overlook for views of Lake Powell.</div>
                        <ul className="list-disc pl-6 mt-4 grid grid-cols-2 gap-4">
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Spend a day exploring Antelope Canyon X, led by a Navajo guide
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Spend a day exploring Antelope Canyon X, led by a Navajo guide
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Spend a day exploring Antelope Canyon X, led by a Navajo guide
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Spend a day exploring Antelope Canyon X, led by a Navajo guide
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-h-screen overflow-auto border-2 mx-8 rounded-[20px]">
                    <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-[30px]">
                        <h2 className="text-2xl font-semibold text-black text-center sm:text-left mb-4">What’s Included</h2>
                        <ul className="list-disc pl-6 mt-4 grid grid-cols-2 gap-4">
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Tour to Antelope Canyon X and Horseshoe Bend
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Driver/Guide
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Bottled water, soda, fruit and snacks
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Hotel pick-up and dropoff by airconditioned vehicle
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                All Fees and Taxes
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Gratuities (optional)
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Lunch
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-h-screen overflow-auto border-2 mx-8 rounded-[20px]">
                    <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-[30px]">
                        <h2 className="text-2xl font-semibold text-black text-center sm:text-left mb-4">Additional Information</h2>
                        <ul className="list-disc pl-6 mt-4 grid grid-cols-2 gap-4">
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Confirmation will be received at time of booking
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Don’t forget to bring sunscreen, hats, sunglasses, comfortable clothes and hiking or tennis shoes.
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Not recommended for travelers with back problems
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                The tour start at 5:30am but the pickup times will be between 4am and 5:30am
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                May be operated, under request by a multi-lingual guide (Spanish and Portuguese)
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                A moderate amount of walking is involved at both attractions.
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Waiver will need to be signed attesting to good health conditions
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-h-screen overflow-auto border-2 mx-8 rounded-[20px]">
                    <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-[30px]">
                        <h2 className="text-2xl font-semibold text-black text-center sm:text-left mb-4">Cancellation Policy
                        </h2>
                        <ul className="list-disc pl-6 mt-4 grid grid-cols-2 gap-4">
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                For a full refund, you must cancel at least 24 hours before the experience’s start time.
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                If you cancel less than 24 hours before the experience’s start time, the amount you paid will not be refunded.
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                Any changes made less than 24 hours before the experience’s start time will not be accepted.
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                The tour start at 5:30am but the pickup times will be between 4am and 5:30am
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                This experience requires good weather. If it’s canceled due to poor weather, you’ll be offered a different date or a full refund.
                            </li>
                            <li className="text-[#4f5e71] text-[16px] leading-[22.4px]">
                                This experience requires a minimum number of travelers. If it’s canceled because the minimum isn’t met, you’ll be offered a different date/experience or a full refund.
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="max-h-screen overflow-auto border-2 mx-8 rounded-[20px]">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-[30px]">
                        <h2 className="text-2xl font-semibold text-black text-center sm:text-left mx-2 mb-8">Trip That Inspire You</h2>
                        {tourPackage.Itinerary.map(itinerary => (
                            <li key={itinerary.M.Id.N} className="grid gap-1">
                                <VerticalTimelineElement
                                    time={itinerary.M.day.N}
                                    title={itinerary.M.name.S}
                                    description={itinerary.M.description.S}
                                >
                                </VerticalTimelineElement>
                            </li>
                        ))}

                    </ul>
                </div>

                <div className="h-screen overflow-auto border-2 mx-8 rounded-[20px]"><iframe loading="lazy" className="w-full h-full p-[30px]" src="https://maps.google.com/maps?q=Maldives&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="Maldives" aria-label="Maldives"></iframe></div>
                <div className="my-12 max-w-screen-xl mx-8">
                    <h2 className="text-2xl font-semibold text-black text-center sm:text-left mx-2" style={{ fontSize: '32px' }}>
                        Popular Packages
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 mb-[80px] gap-10 mx-8">
                    {packages.map(tourPackage => (
                        <div key={tourPackage.Id} className="h-full">
                            <PackageSummaryCard tourPackage={tourPackage}></PackageSummaryCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default VerticalTimeline;
