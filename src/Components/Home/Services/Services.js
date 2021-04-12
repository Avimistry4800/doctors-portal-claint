import React from 'react';
import Fluoride from '../../../images/Fluoride.png'
import Cavity from '../../../images/Cavity.png'
import Whitening from '../../../images/Whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData=[
    {
        name: 'Fluoride Treatment',
        img : Fluoride
    },
    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        img : Whitening
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
            <h4 style={{color:'#51DDDA'}}>Our Services</h4>
            <h2 style={{color:'#3F475B'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                serviceData.map(service => <ServiceDetail service ={service}></ServiceDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;