import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faGooglePlusG } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <section className=" container footer ">
            <div className="  d-flex ">
                <div className="col-md-3">
                    <h4></h4>
                    <br/>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment of Personal Diseases</p>
                    <p>Tooth Extraction</p>
                    <p>Checkup</p>
                </div>
                <div className="col-md-3">
                    <h4 style={{color:'#51DDDA'}}>Services</h4>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment of Personal Diseases</p>
                    <p>Tooth Extraction</p>
                    <p>Checkup</p>
                    <p>Checkup</p>
                    <p>Checkup</p>
                </div>
                <div className="col-md-3">
                    <h4 style={{color:'#51DDDA'}}>Oral Health</h4>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment of Personal Diseases</p>
                    <p>Tooth Extraction</p>
                    <p>Checkup</p>
                    <p>Checkup</p>
                </div>
                <div className="col-md-3">
                    <h4 style={{color:'#51DDDA'}}>Our Adress</h4>
                    <p>New York - 101010 Hudson Yards</p>
                    <div className=" d-flex justify-content-center " style={{color: '#51DDDA', fontSize:'2em'}}>
                        <FontAwesomeIcon style={{marginRight:'20'}} icon={faFacebook} />
                        <FontAwesomeIcon style={{marginRight:'20'}} icon={faGooglePlusG} />
                        <FontAwesomeIcon style={{marginRight:'20'}} icon={faTwitter} />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <p>Call Now</p>
                    <button style={{backgroundColor:'#51DDDA',color:'white'}} className="btn ">+2543623562</button>

                    
                </div>
                    
            </div>
            <small className="col-md-12 col-s-12">Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
        </section>
    );
};

export default Footer;