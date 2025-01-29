import React from "react";

interface VerticalTimelineElementProp {
    time: string;
    title: string;
    description: string;

}

function VerticalTimelineElement({ time, title, description }: VerticalTimelineElementProp) {

    const timelineClass = parseInt(time) % 1 == 1 ? "timeline-end flex flex-col gap-2 md:text-start mb-10" : "timeline-end flex flex-col gap-2 md:text-start mb-10"

    return (
        <>
            <div className="timeline-middle text-[18px] text-[#6E9753] w-[50px] h-[50px] border-2 border-[#6E9753] rounded-full flex items-center justify-center">
                {time}
            </div>

            <div className={timelineClass}>
                <div className="flex gap-2"></div>
                <time className="text-[18px] font-bold font-urbanist pt-[8px]">Day {time} : {title}</time>
                <div className="text-[#4f5e71] font-[16px] leading-[22.4px]">{description}</div>

            </div>
            <hr />
        </>
    )

}

export default VerticalTimelineElement;
