import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 24/7',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit owr location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+154647689764',
        icon: faPhoneAlt,
        background: 'primary'
    },
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infosData.map(info => <InfoCard info ={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;