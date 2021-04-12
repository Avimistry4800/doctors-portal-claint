import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DoctorsData.css'

const DoctorsData = ({doctor}) => {
    return (
        <div className="col-md-4 text-center dr-data">
            <img src={doctor.img} alt=""/>
            <h5>{doctor.name}</h5>
            <div className={`d-flex justify-content-center doctor-container`}>
           <div className="ms-3">
                <FontAwesomeIcon className='doctor-icon' style={{color:"#13D1D9"}} icon={doctor.icon}></FontAwesomeIcon>
            </div>
            <div>
                <p className="text-secondary">{doctor.phone}</p>

            </div>
           </div>
            
        </div>
    );
};

export default DoctorsData;