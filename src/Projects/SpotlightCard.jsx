
import React, { useState } from "react";
import ProjectsDetails from "./ProjectsDetails";

const SpotlightCard = ({
    id = '',
    image = "/project-placeholder.jpg",
    title = "Project Title",
    subtitle = "Project Subtitle",
    description = "A short description of the project goes here.",
    liveLink = "#",
    clientRepo = "#",
    serverRepo = "#",

    spotlightColor = "rgba(0, 229, 255, 0.2)",
    className = "",
}) => {



    let [isOpen, setIsOpen] = useState(false)
    const [storeId,setStoreId] = useState(null)


    function close() {
        setIsOpen(false)
    }
    return (
        <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-400/20 backdrop-blur-lg border border-cyan-300/20 p-0 ${className}`}
            style={{ background: spotlightColor }}
        >

            <div className="w-full h-48 sm:h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>


            <div className="p-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-green-400">{title}</h3>
                <p className="text-sm sm:text-base text-gray-300 font-medium">{subtitle}</p>
                <p className="text-gray-200 text-sm sm:text-base">{description}</p>


                <div className="flex flex-wrap gap-2 mt-4">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 bg-green-400 text-black rounded-lg shadow-md hover:bg-green-500 transition"
                    >
                        Live
                    </a>
                    <a
                        href={clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 bg-green-400 text-black rounded-lg shadow-md hover:bg-green-500 transition"
                    >
                        Client
                    </a>
                    <a
                        href={serverRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 bg-green-400 text-black rounded-lg shadow-md hover:bg-green-500 transition"
                    >
                        Server
                    </a>
                    <button


                        onClick={() => {
                            setIsOpen(!isOpen)
                            setStoreId(id)
                        }}
                        className="px-4 py-1 border flex justify-center items-center border-green-400 text-green-400 rounded-lg hover:bg-green-500 hover:text-black transition"
                    >
                        View More
                    </button>
                    {isOpen && <ProjectsDetails storeId={storeId && storeId} isOpen={isOpen} close={close} ></ProjectsDetails>}

                </div>
            </div>
        </div>
    );
};




export default function SpotlightProjects() {
    const projects = [
        {
            id: 1,
            image: "https://i.ibb.co.com/6Rzks7bw/image.png",
            title: "Blood Donation",
            subtitle: "Role-Based Full-Stack Website",
            description: "A full-stack blood donation platform built with React, Node.js, Express, MongoDB, TailwindCSS, Firebase, JWT authentication, and various npm libraries. Supports multiple user roles with secure login, donation management, and real-time data updates.",
            liveLink: "https://blood-donation-live-link.surge.sh/",
            viewLink: "/projects/portfolio",
            spotlightColor: "rgba(0, 229, 255, 0.15)",
            serverRepo: "https://github.com/adnan683515/server-blood-Donation-A12_PH",
            clientRepo: "https://github.com/adnan683515/blood-donation-client-A12-PH"
        }
        ,
        {
            id: 2,
            image: "https://i.ibb.co.com/G4FPnpT9/image.png",
            title: "Doctors Point (working..)",
            subtitle: "Role-Based Fullstack Appliction",
            description: "A fullstack role-based application built with Node.js, Express, Firebase, JWT, React, Tailwind CSS, and MongoDB. Users can search for doctors and book appointments, while admins have full control via the dashboard. The app is fully functional and running.",
            liveLink: "https://doctor-client-side.vercel.app/",
            viewLink: "/projects/blog",
            spotlightColor: "rgba(0, 255, 128, 0.15)",
            clientRepo: "https://github.com/adnan683515/Doctors_Point_client_side",
            serverRepo: "https://github.com/adnan683515/DOCTORS-POINT-SERVER-SIDE"
        }
        ,
        {
            id: 3,
            image: "https://i.ibb.co.com/Gw5JJH6/image.png",
            title: "B2B Marketplace",
            subtitle: "Fullstack E-commerce App",
            description: "A fullstack MERN e-commerce app for wholesale B2B transactions. Includes cart, authentication, and online payments. Not role-based, but fully functional for buyers and sellers.",
            liveLink: "https://b2b-market-place-6c30f.web.app/",
            viewLink: "/projects/ecommerce",
            spotlightColor: "rgba(255, 0, 229, 0.15)",
            clientRepo: "https://github.com/adnan683515/b2b-clinet-side",
            serverRepo: "https://github.com/adnan683515/b2b-server-site-ph-A11"
        }
    ];

    return (
        <section className="py-12 px-6 border sm:px-12">
            <h2 className="text-center text-4xl sm:text-5xl font-bold text-green-400 mb-12">
                My Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((proj, idx) => (
                    <SpotlightCard key={idx} {...proj} />
                ))}
            </div>
        </section>
    );
}
