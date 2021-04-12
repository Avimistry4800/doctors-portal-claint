import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppoinment.css'

const MakeAppoinment = () => {
    return (
        <section className="make-appoinment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h4 className="textprimary text-uppercase">APPOINTMENT</h4>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum quos, itaque dolores illum voluptas consequuntur expedita reprehenderit earum quam, dicta aliquid maiores incidunt tempora.</p>
                        <button style={{backgroundColor:'#51DDDA',color:'white'}} className="btn ">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;