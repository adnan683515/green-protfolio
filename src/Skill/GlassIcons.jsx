// GlassIconsMarquee.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiFirebase, SiVercel, SiTypescript, SiC, SiCplusplus } from "react-icons/si";

// All skill icons
const skillIcons = [
    { icon: <FaHtml5 />, label: "HTML", color: "orange-500" },
    { icon: <FaCss3Alt />, label: "CSS", color: "blue-500" },
    { icon: <SiTailwindcss />, label: "Tailwind", color: "cyan-400" },
    { icon: <SiJavascript />, label: "JavaScript", color: "yellow-400" },
    { icon: <FaReact />, label: "React", color: "blue-400" },
    { icon: <FaPython />, label: "Python", color: "green-400" },
    { icon: <FaNodeJs />, label: "Node.js", color: "green-600" },
    { icon: <SiExpress />, label: "Express.js", color: "gray-500" },
    { icon: <SiMongodb />, label: "MongoDB", color: "green-500" },
    { icon: <SiC />, label: "C", color: "blue-600" },
    { icon: <SiCplusplus />, label: "C++", color: "blue-700" },
    { icon: <FaGitAlt />, label: "Git", color: "red-500" },
    { icon: <FaGithub />, label: "GitHub", color: "black" },
    { icon: <SiFirebase />, label: "Firebase", color: "yellow-500" },
    { icon: <SiVercel />, label: "Vercel", color: "gray-300" },
    { icon: <SiTypescript />, label: "TypeScript", color: "blue-500" },
];

// Split array into 2 halves
const half = Math.ceil(skillIcons.length / 2);
const firstRow = skillIcons.slice(0, half);
const secondRow = skillIcons.slice(half);

const GlassIconsMarquee = () => {
    return (
        <div className="space-y-6 py-12 bg-black/60">

            <Marquee speed={40} gradient={false} className="   ">
                <div className="flex gap-6">
                    {firstRow.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg hover:scale-110 transition-transform duration-300"
                        >
                            <div className={`text-3xl sm:text-4xl text-${item.color} mb-2`}>
                                {item.icon}
                            </div>
                            <span className="text-gray-200 text-xs sm:text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>
            </Marquee>


            <Marquee speed={50} gradient={false} direction="right">
                <div className="flex gap-6">
                    {secondRow.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg hover:scale-110 transition-transform duration-300"
                        >
                            <div className={`text-3xl sm:text-4xl text-${item.color} mb-2`}>
                                {item.icon}
                            </div>
                            <span className="text-gray-200 text-xs sm:text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default GlassIconsMarquee;
