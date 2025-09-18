
import React from "react";
import { motion } from "framer-motion";

export default function LanyardCard({
    title = "Golam Faruk Adnan",
    dropDelay = 0.2,
    href = "#",
}) {
    return (
        <section className="relative w-full flex flex-col items-center py-12 sm:py-24 px-4 sm:px-12">


            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-green-400 mb-10 sm:mb-12 text-center">
                About Me
            </h2>


            <div className="relative w-full flex justify-center pointer-events-none mb-8">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0">
                    <div className="w-1.5 h-36 sm:h-72 md:h-96 bg-gradient-to-b from-green-400/80 to-transparent mx-auto rounded-full" />
                </div>


                <motion.div
                    initial={{ y: -200, rotate: -8, opacity: 0 }}
                    whileInView={{ y: 0, rotate: [-8, 5, -3, 0], opacity: 1 }}
                    transition={{
                        delay: dropDelay,
                        y: { type: "spring", stiffness: 60, damping: 12 },
                        rotate: { duration: 1.4, ease: "easeOut" },
                        opacity: { duration: 0.6 },
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="pointer-events-auto relative z-20 mt-12 w-full max-w-md sm:max-w-3xl"
                >
                    <div className="w-full backdrop-blur-sm bg-black/10 border border-green-400/40 rounded-3xl shadow-md shadow-green-400/20 overflow-hidden">


                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 border-b border-green-400/20">
                            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-green-400 flex-shrink-0">
                                <img
                                    src="https://i.ibb.co.com/Kc72JJ2G/444483205-466728589371288-1368563877161540123-n.jpg"
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-lg sm:text-2xl font-bold text-green-300">{title}</h3>
                                <p className="text-sm sm:text-base text-gray-300">Front-end Developer</p>
                            </div>
                            {/* <div className="mt-3 sm:mt-0">
                                <a
                                    href={href}
                                    className="inline-block bg-green-400 text-black text-sm sm:text-base font-medium px-4 sm:px-5 py-2 rounded-xl shadow-lg shadow-white/30 hover:bg-green-500 transition"
                                >
                                    View
                                </a>
                            </div> */}
                        </div>


                        <div className="p-6 sm:p-8 space-y-4 sm:space-y-5 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                            <p>
                                Hi, I’m <span className="text-green-400 font-semibold">Golam Faruk Adnan</span>, a passionate <span className="text-green-400">MERN Stack Developer</span> from Bangladesh 🇧🇩.
                            </p>
                            <p>
                                I completed my <span className="text-green-400">Diploma in Computer Science</span> from <span className="text-green-400">Feni Computer Institute</span> (Session 2021-2022), which gave me a strong foundation in programming and web development.
                            </p>
                            <p>
                                I enjoy solving <span className="text-green-400">LeetCode challenges</span> to sharpen my problem-solving skills. Dedicated to continuous learning, I aim to create clean, user-friendly applications.
                            </p>
                        </div>


                        <div className="h-2 bg-gradient-to-r from-green-400/50 via-green-300/30 to-purple-500/20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
