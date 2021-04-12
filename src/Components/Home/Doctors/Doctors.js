import React from 'react';
import doctor from '../../../images/doctor.png';

import DoctorsData from '../DoctorsData/DoctorsData';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'


const Doctors = () => {
    const doctorsData=[
        {
            name: 'Dr. Harami',
            img : doctor,
            phone : '+154647689343',
            icon: faPhoneAlt
        },
        {
            name: 'Dr. Napa',
            img : doctor,
            phone : '+154664545343',
            icon: faPhoneAlt
        },
        {
            name: 'Dr. Napa Extra',
            img : doctor,
            phone : '+1546545454555',
            icon: faPhoneAlt
        },
       
        
    ]

    return (
        <section className="blogs my-5 py-5 mt-5">
        <div className="container">
        <div className="section-header text-center">
        <h4 style={{color:'#51DDDA'}}>OUR Doctors</h4>
        </div>
        <div className="card-deck mt-5 row"> 
        {
            doctorsData.map(doctor => <DoctorsData doctor ={doctor}></DoctorsData>)
        }
    </div>
        </div>
    </section>
    );
};

export default Doctors;