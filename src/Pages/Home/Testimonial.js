import React from 'react';
import quote from '../../assets/icons/quote.svg';

const Testimonial = () => {
    return (
        <section class="my-28">
            <div class="flex justify-between">
                <div>
                    <h4 class="font-bold text-secondary">Testimonial</h4>
                    <h1 class="text-2xl ">What Our Patients Says</h1>
                </div>
                <div>
                    <img class="w-24 lg:w-48" src={quote} alt="" />
                </div>

            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonial;