import React, { useContext } from 'react';
import LanyardCard from './LanyardCard';
import { AuthContext } from '../Context/AuthContext';
import dal from '../assets/dal.png'


const About = () => {
    const { aboutRef } = useContext(AuthContext)
    return (
        <div className=' relative ' >


            <img src={dal} alt="" className='absolute w-[200px] sm:w-fit  -left-10 top-0' />
            <div ref={aboutRef} className='max-w-[1400px] mx-auto'>



                <LanyardCard title="Golam Faruk Adnan"
                    subtitle="MERN Stack Developer"
                    img="/your-profile.jpg"
                    dropDelay={0.4}
                    href="/about"></LanyardCard>
            </div>
        </div>
    );
};

export default About;