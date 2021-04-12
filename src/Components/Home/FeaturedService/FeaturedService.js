import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="feature-survice pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                <div className="col-md-5 mb-4 m-md-0">
                    <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on Your terms</h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro cumque hic eum suscipit magni, illo aliquam iusto libero repellat alias esse ea doloremque blanditiis quod optio unde sequi mollitia praesentium dolorum, harum in. Sequi rem eaque ea, amet, deleniti ullam eos rerum consequuntur modi quae sed accusamus, minus dolorem.</p>
                        <button style={{backgroundColor:'#51DDDA', color:'white'}} className="btn">Learn More</button>
                    </div>
                </div>
            
            </div>
        </section>
    );
};

export default FeaturedService;