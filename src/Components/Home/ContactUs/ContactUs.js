import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <section className="container ">
            <div  className=" contact-us ">
            <h4 style={{color:'#51DDDA'}}>CONTACT US</h4>
            <h2>Always Connect with Us</h2>
            <div className="d-flex contact-form">
                <form className='justify-content-start'>
                    <div class="form-row">
                        <div class=" col-md-8 ">
                            <label for="inputEmail"></label>
                            <input
                                type="email"
                                class="form-control form-control-lg"
                                id="inputEmail"
                                placeholder="Email"
                            />
                        </div>

                        <div class=" col-md-8 mt-3">
                            <label for="Subject"></label>
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                id="Subject"
                                placeholder="Subject"
                            />
                        </div>

                        <div class="col-md-8 mt-3">
                            <label for="Message">
                            </label>
                            <textarea
                                class="form-control form-control-lg"
                                id="Message"
                                placeholder="Your Message"
                                rows="4"
                            ></textarea>
                        </div>                      

                    </div>

                </form>
                
            </div>
            <button type="submit" style={{backgroundColor:'#51DDDA',color:'white'}} class="btn mt-3 d-flex justify-content-start button" >
                        SUBMIT
                        </button>
            </div>
        </section>
    );
};

export default ContactUs;
