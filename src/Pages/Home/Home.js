import React from 'react';
import Banner from './Banner';
import Dental from './Dental';
import Info from './Info';
import MakeAppointment from './MakeAppointment';

import Services from './Services';
import Testimonial from './Testimonial';



const Home = () => {
    return (
        <div class="px-12">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Dental></Dental>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;