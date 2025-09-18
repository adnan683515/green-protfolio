import React from 'react';
import LanyardCard from './LanyardCard';


const About = () => {
    return (
        <div>
            <LanyardCard title="Golam Faruk Adnan"
                subtitle="MERN Stack Developer"
                img="/your-profile.jpg"
                dropDelay={0.4}
                href="/about"></LanyardCard>
        </div>
    );
};

export default About;