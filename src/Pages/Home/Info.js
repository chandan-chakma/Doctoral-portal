import React from 'react';
import info1 from '../../assets/icons/clock.svg';
import info2 from '../../assets/icons/marker.svg';
import info3 from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div class='grid grid-cols-1 lg:grid-cols-3 gap-4 text-white'>
            <div class="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                <figure>
                    <img class="pl-3" src={info1} alt="Album" />
                </figure>
                <div class="card-body text-white ">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            {/* =========================================== */}

            <div class="card lg:card-side bg-base-100 shadow-xl bg-accent">
                <figure>
                    <img class="pl-3" src={info2} alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Visit our Location</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>

            {/* ======================================================= */}

            <div class="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
                <figure>
                    <img class="pl-3" src={info3} alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Contact with Us </h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>

        </div>
    );
};

export default Info;    