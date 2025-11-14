import React, { useEffect, useRef } from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Project from '../Projects/Project';
import Contact from '../Contact/Contact';
import gsap from 'gsap';
import skillImage from '../assets/skImage.png'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    const leftImageRef = useRef(null);
    const rightImageRef = useRef(null);
    const SkillcontainerRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.fromTo(
                leftImageRef.current,
                { x: 400, opacity: 0 },      // starting
                {
                    x: -500,
                    opacity: 1,
                    duration: 2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: SkillcontainerRef.current,
                        start: "top 80%",
                        end: "top 30%",
                        scrub: true,

                    },
                }
            );

            gsap.fromTo(
                rightImageRef.current,
                { x: 100, opacity: 0 },       // starting
                {
                    x: 500,
                    opacity: 1,
                    duration: 2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: SkillcontainerRef.current,
                        start: "top 80%",
                        end: "top 30%",
                        scrub: true,

                    },
                }
            );

        }, SkillcontainerRef);

        return () => ctx.revert();
    }, []);



    return (
        <div className='mx-auto'>

            <Hero />
            <About />


            <div className='relative' ref={SkillcontainerRef}>

                <img
                    ref={rightImageRef}
                    src={skillImage}
                    className='absolute sm:w-[50%] right-0 sm:bottom-20 z-50'
                    alt=""
                />

                <img
                    ref={leftImageRef}
                    src={skillImage}
                    className='absolute rotate-180 sm:w-[50%] left-0  sm:top-29  z-50'
                    alt=""
                />

                <div className='sm:my-20 z-1 my-10 max-w-[1400px] mx-auto'>
                    <Skill />
                </div>

            </div>


            <div className='sm:my-20 my-10 max-w-[1400px] mx-auto'>
                <Project />
            </div>


            <div className='max-w-[1400px]  border-white mx-auto'>
                <div className='m-2 sm:m-0'>
                    <div className='sm:mt-20 my-10'>
                        <h1 className='text-4xl text-center text-green-400 font-semibold'>
                            Contact Me
                        </h1>
                    </div>
                    <Contact />
                </div>
            </div>

        </div>
    );
};

export default Home;
