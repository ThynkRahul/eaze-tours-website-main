import React from "react";

interface VerticalTimelineElementProp {
    time: string;
    title: string;
    description: string;

}

function VerticalTimelineElement({ time, title, description }: VerticalTimelineElementProp) {

    const timelineClass = parseInt(time) % 2 == 1 ? "timeline-end md:text-start mb-5 mt-5 ml-5" : "timeline-end md:text-start mb-5 mt-5 ml-5"

    return (

        <>
            <div className="timeline-middle text-[18px] text-[#6E9753] w-[50px] h-[50px] border-2 border-[#6E9753] rounded-full flex items-center justify-center">
                {time}
            </div>

            <div className={timelineClass}>
                <div className="flex gap-2"></div>
                <time className="text-[18px] font-bold font-[urbanist] pt-[8px]">Day {time} : {title}</time>
                <ul className="list-disc pl-6 text-[#4f5e71] mt-4 font-[urbanist] font-[500] font-[16px] leading-[1.5em]" dangerouslySetInnerHTML={{ __html: description }}></ul>

            </div>

            <hr />
        </>
    )

}

export default VerticalTimelineElement;
