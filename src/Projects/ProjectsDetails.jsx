import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";


const projects = [
    {
        id: 1,
        name: "Blood Donation Platform",

        purpose:
            "A MERN stack blood donation platform to connect donors, volunteers, and recipients.",
        roles: {
            admin: [
                "Manage all users (Donor, Volunteer, Recipient)",
                "Block & Unblock users",
                "Access Dynamic Dashboard",
                "Manage Blog CMS system",
                "Monitor Donation Requests",
            ],
            donor: [
                "Create & Manage Donation Requests",
                "View donation history",
                "Edit personal profile",
            ],
            volunteer: [
                "Assist in connecting donors with recipients",
                "Manage donation request status",
                "Support communication between users",
            ],
            recipient: [
                "Request blood from donors",
                "View donor availability",
                "Track request status",
            ],
        },
        keyFeatures: [
            "User-friendly Blood Donation Platform",
            "Role-based access (Admin, Donor, Volunteer, Recipient)",
            "Protected Private Routes using JWT",
            "Tanstack Query for data fetching",
            "Dynamic Dashboard for each role",
            "Blog CMS system",
            "Block & Unblock users",
            "Pagination & Filtering",
            "Create & Manage Donation Requests",
            "Sweet Alerts/Toasts for actions",
            "Fully Responsive Design",
            "Environment Variables for secure keys",
        ],
    },
    {
        id: 2,
        name: "Doctors Point",
        purpose:
            "A complete healthcare system connecting patients, doctors, and admins with real-time chat.",
        roles: {
            admin: [
                "Manage all users (Patients & Doctors)",
                "Approve or remove doctor profiles",
                "Monitor appointments & chat activity",
            ],
            doctor: [
                "Set availability & schedule appointments",
                "Chat with patients",
                "View patient medical history",
            ],
            patient: [
                "Book appointments with doctors",
                "Chat with doctors in real time",
                "Access personal medical history",
            ],
        },
        keyFeatures: [
            "Role-based access (Admin, Doctor, Patient)",
            "Real-time chat between doctor & patient",
            "Appointment booking & scheduling system",
            "Patient medical history tracking",
            "JWT protected routes",
            "Fully responsive design",
            "Notifications & alerts for appointments",
        ],
    },
    {
        id: 3,
        name: "B2B Wholesale Marketplace",

        purpose:
            "A modern B2B wholesale platform connecting bulk buyers and suppliers.",
        roles: {
            admin: [
                "Manage all products & categories",
                "Monitor buyer & supplier accounts",
                "Ensure smooth transactions",
            ],
            supplier: [
                "Add products with image, price, and quantity",
                "Manage inventory",
                "View and manage orders",
            ],
            buyer: [
                "Browse products category-wise",
                "Filter based on availability & minimum quantity",
                "Add products to cart and manage cart system",
            ],
        },
        keyFeatures: [
            "Display products in both card and table formats",
            "Show only available products with filter",
            "Category-wise product section with beautiful UI",
            "User authentication & protected routes",
            "Add products with image, price, and quantity",
            "Cart system with dynamic quantity handling",
            "404 Not Found Page with custom design",
            "Fully responsive layout using Tailwind CSS",
            "Custom theme using cyan-950 and orange-500",
            "Motivational and animated text section using Framer Motion",
        ],
    },
];



const ProjectsDetails = ({ isOpen, close, storeId }) => {
    const [details, setDetails] = useState({});

    useEffect(() => {
        const getProjects = projects.find(
            (item) => parseInt(item.id) === parseInt(storeId)
        );
        setDetails(getProjects);
    }, [storeId]);

    if (!details) return null;

    return (
        <Dialog
            open={isOpen}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={close}
        >

            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />


            <div className="fixed inset-0 z-20 flex min-h-full items-center justify-center p-4">
                <DialogPanel
                    transition
                    className="w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-xl bg-white/10 p-5 backdrop-blur-xl shadow-lg border border-white/20 duration-300 ease-out text-white"
                >

                    <DialogTitle
                        as="h3"
                        className="text-lg font-semibold text-center mb-3"
                    >
                        {details.name}
                    </DialogTitle>


                    <p className="text-white/80 text-sm mb-3">{details.purpose}</p>


                    <div className="mb-3">
                        <h4 className="font-semibold text-base mb-2">Roles & Permissions</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            {Object.entries(details.roles || {}).map(([role, actions]) => (
                                <div key={role} className="bg-white/10 p-2 rounded-lg">
                                    <p className="font-medium capitalize mb-1">{role}</p>
                                    <ul className="list-disc list-inside space-y-1 text-white/70 text-xs">
                                        {actions.map((a, i) => (
                                            <li key={i}>{a}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h4 className="font-semibold text-base mb-2">Key Features</h4>
                        <ul className="list-disc list-inside space-y-1 text-white/70 text-xs">
                            {details.keyFeatures?.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">


                        <button
                            onClick={close}
                            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-xs font-medium"
                        >
                            Close
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default ProjectsDetails;
