import React from "react";
import {ITestimonialDataType} from "../types/Common"

interface ITestimonialProp {
    testimonial: ITestimonialDataType;
}

function Testimonial({testimonial}: ITestimonialProp) {

    return (
        <>
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{testimonial.Content}</p>
                <h3 className="card-title">{testimonial.User}</h3>
                <h4 className="card-title">{testimonial.Location}</h4>
            </div>
        </div>
        </>
    )

}

export default Testimonial;