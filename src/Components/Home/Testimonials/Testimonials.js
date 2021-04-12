import React from 'react';
import pt1 from '../../../images/Ellipse 1.png';
import pt2 from '../../../images/Ellipse 2.png';
import pt3 from '../../../images/Ellipse 3.png';
import TestimonialData from '../TestimonialData/TestimonialData';


const testimonialData=[
    {
        quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quidem consequuntur non neque ipsam?`,
        img : pt1,
        name: 'John Sammy',
        form : 'California'
    },
    {
        quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quidem consequuntur non neque ipsam?`,
        img : pt2,
        name: 'Freasesca FuFua',
        form : 'Alabama'
    },
    {
        quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quidem consequuntur non neque ipsam?`,
        img : pt3,
        name: 'Ema Watson',
        form : 'New York'
    },
    
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5 mt-5">
            <div className="container">
            <div className="section-header">
            <h4 style={{color:'#51DDDA'}}>Testimonial</h4>
            <h2 style={{color:'#3F475B'}}>Whats Our Patients <br/>Says</h2>
            </div>
            <div className="card-deck mt-5"> 
            {
                testimonialData.map(testimonial => <TestimonialData testimonial ={testimonial}></TestimonialData>)
            }
        </div>
            </div>
        </section>
    );
};

export default Testimonials;