// CircularText.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiLeetcode, SiMongodb, SiNextdotjs, SiExpress } from "react-icons/si";

const CircularText = ({ spinDuration = 20, className }) => {
    const [radius, setRadius] = useState(220);

    // 🔥 Resize on screen change
    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 640) {
                // 📱 Mobile
                setRadius(120);
            } else if (window.innerWidth < 1024) {
                // 📲 Tablet
                setRadius(180);
            } else {
                // 💻 Laptop/Desktop
                setRadius(220);
            }
        };

        updateRadius(); // initial call
        window.addEventListener("resize", updateRadius);

        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    const icons = [
        <FaReact key="react" className="text-blue-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
        <FaHtml5 key="html" className="text-orange-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
        <FaCss3Alt key="css" className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
        <FaJs key="js" className="text-yellow-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
        <FaPython key="python" className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
        <FaGithub key="github" className="text-gray-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
        <SiTailwindcss key="tailwind" className="text-cyan-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
        <SiLeetcode key="leetcode" className="text-orange-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
        <SiMongodb key="mongodb" className="text-green-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
        <FaNodeJs key="node" className="text-green-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
        <SiExpress key="express" className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
        <SiNextdotjs key="nextjs" className="text-blue-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
    ];
    return (
        <motion.div
            className={`relative flex items-center justify-center ${className}`}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: spinDuration, ease: "linear" }}
        >
            {icons.map((icon, i) => (
                <span
                    key={i}
                    style={{
                        position: "absolute",
                        transform: `rotate(${(360 / icons.length) * i}deg) translate(${radius}px) rotate(-${(360 / icons.length) * i
                            }deg)`,
                    }}
                >
                    {icon}
                </span>
            ))}
        </motion.div>
    );
};

export default CircularText;
