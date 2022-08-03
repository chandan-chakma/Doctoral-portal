import React from 'react';
import doctor from '../../assets/images/doctor.png';
import MainButton from './../SharePage/MainButton';

const MakeAppointment = () => {
    return (
        <div>
            <section class="flex justify-center items-center px-12 bg-[url('/src/assets/images/appointment.png')]">
                <div class='flex-1 hidden lg:block'>
                    <img class="mt-[-100px] " src={doctor} alt="" />

                </div>
                <div class='flex-1'>
                    <h3 class='font-bold text-secondary'>Appointment</h3>

                    <h2 class="text-2xl text-white">Make an appointment today</h2>
                    <p class="text-white mb-11">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <MainButton ></MainButton>

                </div>
            </section>

        </div>
    );
};

export default MakeAppointment;