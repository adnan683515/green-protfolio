import React, { useContext, useEffect, useRef } from 'react';
import CircularText from './CircularText';
import photo from '../assets/adnanPhoto.png'
import TextType from './TextType';
import ShinyText from './ShinyText';
import { Link } from 'react-router';
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AuthContext } from '../Context/AuthContext';
import greenLeaf from '../assets/greenLeaf.png'
import YellowLeaf from '../assets/yellow.png'
import gsap from 'gsap';

const Hero = () => {


    const { homeRef, contactRef, goToProjectSection } = useContext(AuthContext)
    const leavesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(leavesRef.current, {
                y: 200,          // start below
                opacity: 0,
                stagger: 0.15,   // one by one
                duration: 1.5,
                ease: "power3.out",
            });

            gsap.to(leavesRef.current, {
                x: (i) => gsap.utils.random(-850, 850),
                y: (i) => gsap.utils.random(-200, -800),
                rotate: (i) => gsap.utils.random(-20, 100),
                duration: 4,
                delay: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.2
            });



        });

        return () => ctx.revert();
    }, []);



    return (
        <div ref={homeRef} className="flex relative  flex-col px-4 sm:px-0 md:flex-row mt-10 justify-between items-center max-w-[1400px] mx-auto ">



            {[YellowLeaf, greenLeaf, YellowLeaf, greenLeaf, YellowLeaf, greenLeaf, greenLeaf, greenLeaf].map((src, index) => (
                <img
                    key={index}
                    ref={(el) => (leavesRef.current[index] = el)}
                    src={src}
                    className="absolute w-20 h-20 bottom-0 left-0 sm:bottom-0 sm:left-1/2"
                />
            ))}

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

                <div className="flex items-center gap-3">
                    <a
                        href="https://www.linkedin.com/in/golam-faruk-adnan-bb7794352/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex items-center justify-center p-2 rounded-full shadow-md bg-white/10 text-green-400 hover:bg-green-500 hover:text-black transition"
                    >
                        <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>


                    <a
                        href="https://github.com/adnan683515"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex items-center justify-center p-2  shadow-md bg-white/10 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition"
                    >
                        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>


                    <a
                        href="https://www.facebook.com/golam.faruk.adnan"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex items-center justify-center p-2 shadow-md bg-white/10 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition"
                    >
                        <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>


                    <a
                        href="https://leetcode.com/u/Golam_Faruk_Adnan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LeetCode"
                        className="flex items-center justify-center shadow bg-white/10  p-2 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition"
                    >
                        <SiLeetcode className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <a
                        href="https://drive.google.com/file/d/1XSQxAI_RwonvghV6mtSdy9iYxvyVcB7F/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LeetCode"
                        className="px-3 sm:px-6 py-1 sm:py-2 bg-green-400 shadow-lg shadow-white/30 text-black rounded-lg hover:bg-green-600 transition text-sm sm:text-base"
                    >
                        Resume
                    </a>
                    <button
                        onClick={() => goToProjectSection(contactRef)}
                        className="px-3 sm:px-6 py-1 sm:py-2 border border-green-400  shadow-lg shadow-white/30 text-green-400 rounded-lg hover:bg-green-500 hover:text-black transition text-sm sm:text-base"
                    >
                        Contact Me
                    </button>
                </div>
            </div>



            <div className="flex-1 sm:py-10 py-0    flex justify-center items-center relative w-full  mt-12 md:mt-0 overflow-hidden">
                <div className="relative w-full mt-10  h-[60vh] md:w-[540px] md:h-[450px]">
                    <CircularText
                        text="REACT*BITS*COMPONENTS*"
                        spinDuration={20}
                        className="absolute top-0 left-0 w-[20%] mx-auto h-full"
                    />
                    <img
                        src={photo}
                        alt="center"
                        className="absolute top-1/2 left-1/2 shadow-lg shadow-green-400  w-[80%] sm:w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    />
                </div>
            </div>



        </div>
    );
};

export default Hero;
