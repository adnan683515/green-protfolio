import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Project from '../Projects/Project';
import Contact from '../Contact/Contact';



const Home = () => {
    return (
        <div className='mx-auto'>

            <Hero></Hero>


            <About></About>

            <div className='sm:my-20 my-10 max-w-[1400px] mx-auto'>
                <Skill></Skill>
            </div>

            <div className='sm:my-20 my-10 max-w-[1400px] mx-auto'>
                <Project></Project>
            </div>


         <div className='max-w-[1400px] mx-auto'>

            <div className='sm:mt-20 my-10'>
                <h1 className='text-4xl text-center text-green-400 font-semibold'>Contact Me</h1>
            </div>
             <Contact></Contact>
         </div> 


        </div>
    );
};

export default Home;