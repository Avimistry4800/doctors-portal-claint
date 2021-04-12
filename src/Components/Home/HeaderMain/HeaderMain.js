import React from 'react';
import chair from '../../../images/chair.png';
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} class="row d-flex align-items-center">
            <div class="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Strats Here </h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus exercitationem dolor iste veniam ipsa.</p>
                <button style={{backgroundColor:'#51DDDA', color:'white'}} className="btn">GET APPOINTMENT</button>
            </div>
            <div class="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>

        </main>
        );
};

export default HeaderMain;