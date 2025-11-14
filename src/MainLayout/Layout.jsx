import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router';
import Navber from './Navber';
import { Footer } from './Footer';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const Layout = () => {
    const wrapperRef = useRef(null)
    const contentRef = useRef(null)



    useEffect(() => {
        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 2,
            effects: true
        })

        return () => {
            smoother.kill()
        }
    }, [])

    return (
        <div ref={wrapperRef} className='bg-black'>
            <div ref={contentRef}>
                <Navber></Navber>
                <div className='min-h-screen'>
                    <Outlet></Outlet>
                </div>

                <Footer></Footer>
            </div>

        </div>
    );
};

export default Layout;