
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const Contact = () => {

    const {contactRef} = useContext(AuthContext)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section ref={contactRef} className="py-16 px-2 sm:px-0 mx-2 sm:px-0  text-gray-200 min-h-screen">
            <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center">


                <div className="space-y-6">
                    <h2 className="text-4xl sm:text-5xl font-bold text-green-400">Contact Me</h2>
                    <p className="text-lg sm:text-xl text-gray-300">
                        Got a question or want to work together? I’d love to hear from you. Fill out the form and I’ll get back to you as soon as possible.
                    </p>
                    <p className="text-gray-400">
                        You can also reach me via email: <span className="text-green-400">your-email@example.com</span>
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-black/70 w-full mx-auto backdrop-blur-md border border-green-400/30 rounded-2xl p-8 space-y-4 shadow-lg shadow-green-400/20"
                >
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="flex-1 p-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none focus:border-green-400"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="flex-1 p-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none focus:border-green-400"
                        />
                    </div>

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none focus:border-green-400"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                        className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none focus:border-green-400"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full py-3 bg-green-400 text-black font-semibold rounded-lg shadow-lg hover:bg-green-500 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
