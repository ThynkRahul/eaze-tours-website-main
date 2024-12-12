import React from "react";

import {PackageImageSwiper} from "./Images";
import VerticalTimelineElement from './VerticalTimelineElement';
import { IPackageDetailDataType } from "../types/Common";

interface VerticalTimelineProp {
    tourPackage: IPackageDetailDataType;
}

interface VerticalTimelineState {

}

function VerticalTimeline({tourPackage}: VerticalTimelineProp) {
    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="h-svh max-h-screen w-full overflow-auto bg-base-200">
                    <PackageImageSwiper source={tourPackage.Id}></PackageImageSwiper>
                </div>
                <div className="h-svh max-h-screen w-full overflow-auto">
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {tourPackage.Itinerary.map(itinerary => (
                            <li key={itinerary.M.Id.N}>
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
            </div>
        </div>
        
    )
}

export default VerticalTimeline;