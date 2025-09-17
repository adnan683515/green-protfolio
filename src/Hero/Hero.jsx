import React from 'react';
import CircularText from './CircularText';
import photo from '../assets/adnanPhoto.png'
import TextType from './TextType';
import ShinyText from './ShinyText';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center h-screen px-8">


            <div className="flex-1 space-y-6 border md:pr-12 my-4 sm:my-0">
                <h1 className="sm:text-5xl text-3xl font-bold text-green-400">
                    <TextType text={["Golam Faruk Adnan"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"></TextType>
                </h1>
                <h2 className="text-2xl font-semibold text-gray-200">
                    <ShinyText
                        text="Mern Stack Developer"
                        disabled={false}
                        speed={3}
                        className='custom-class'
                    />
                </h2>
                <p className="text-gray-300 text-[14px] sm:text-lg max-w-lg">
                    Web developer from <span className="text-green-400">Bangladesh</span>, building modern & responsive web applications.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <Link
                        to="/projects"
                        className="px-3 sm:px-6 py-1 sm:py-2 bg-green-400 text-black rounded-lg hover:bg-green-600 transition text-sm sm:text-base"
                    >
                        My Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="px-3 sm:px-6 py-1 sm:py-2 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-black transition text-sm sm:text-base"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>



            <div className="flex-1 py-10  flex justify-center items-center relative w-full  mt-12 md:mt-0 overflow-hidden">
                <div className="relative w-96 h-96 md:w-[450px] md:h-[450px]"> 
                    <CircularText
                        text="REACT*BITS*COMPONENTS*"
                        spinDuration={20}
                        className="absolute top-0 left-0 w-full h-full"
                    />
                    <img
                        src={photo}
                        alt="center"
                        className="absolute top-1/2 left-1/2 shadow-lg shadow-green-400  w-[70%] sm:w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    />
                </div>
            </div>

        </div>
    );
};

export default Hero;
