import React from 'react';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;