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

                <div className="overflow-auto border-2 mx-8 rounded-[20px]">
                    <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-[30px]">
                        <h2 className="text-2xl font-semibold text-black text-center sm:text-left mb-4">Overview</h2>
                        <div className="text-[#4f5e71] font-[16px] leading-[22.4px]">{tourPackage.Overview}</div>
                    </div>
                </div>
                <div className="overflow-auto border-2 mx-8 rounded-[20px]">
                    <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-[30px]">
                        <h2 className="text-2xl font-semibold text-black text-center sm:text-left mb-4">What’s Included</h2>
                        <ul className="list-disc pl-6 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#4f5e71] text-[16px] leading-[22.4px]" dangerouslySetInnerHTML={{ __html: tourPackage.Whats_Included }} />
                    </div>
                </div>
                <div className="overflow-auto border-2 mx-8 rounded-[20px]">
                    <div className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-[30px]">
                        <h2 className="text-2xl font-semibold text-black text-center sm:text-left mb-4">Additional Information</h2>
                        <ul className="list-disc pl-6 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#4f5e71] text-[16px] leading-[22.4px]" dangerouslySetInnerHTML={{ __html: tourPackage.Additional_Information }} />
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
