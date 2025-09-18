import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Project from '../Projects/Project';
import Contact from '../Contact/Contact';



const Home = () => {
    return (
        <div className='max-w-[1500px] mx-auto'>

            <Hero></Hero>


            <About></About>

            <div className='sm:my-20 my-10'>
                <Skill></Skill>
            </div>

            <div className='sm:my-20 my-10'>
                <Project></Project>
            </div>


         <div>

            <div className='sm:mt-20 my-10'>
                <h1 className='text-4xl text-center text-green-400 font-semibold'>Contact Me</h1>
            </div>
             <Contact></Contact>
         </div> 


        </div>
    );
};

export default Home;