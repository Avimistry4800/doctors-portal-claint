import React from 'react';
import './TestimonialData.css'
const TestimonialData = ({testimonial}) => {
    return (
        <div className="col-md-4 col-sm-12 testimonial-card" >
            <p style={{paddingTop:"30px", paddingBottom:"20px"}}>{testimonial.quote}</p>
            <div className="d-flex">
                <img src={testimonial.img} alt=""/>
                <div className="testimonial-data justify-content-start">
                    <h5 style={{color:'#51DDDA'}}>{testimonial.name}</h5>
                    <p className="text-secondary">{testimonial.form}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialData;