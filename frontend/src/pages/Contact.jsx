import React, { useState } from 'react';

function Contact() {
    const [toast, setToast] = useState({ visible: false, type: '', message: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.message) {
            setToast({
                visible: true,
                type: 'success',
                message: 'Message sent successfully!',
            });
        } else {
            setToast({
                visible: true,
                type: 'error',
                message: 'Please fill in all fields before submitting.',
            });
        }

        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
            setToast({ visible: false, type: '', message: '' });
        }, 2000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="page-container px-8 py-12 bg-[#f9f9f9]">
            <h1 className="text-4xl font-bold text-center mb-6 text-[#333]">Contact Us</h1>
            <p className="text-lg text-center mb-8 text-[#555]">
                We'd love to hear from you! Reach out with any questions, comments, or feedback.
            </p>
            <div className="flex justify-between px-[100px] my-20">
                <div className="">
                    <section className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-[#444]">Get in Touch</h2>
                        <p className="text-lg leading-relaxed text-[#666] mb-4">
                            You can contact us through the following methods:
                        </p>
                        <ul className="list-disc pl-6 text-lg text-[#666]">
                            <li className="mb-2">📧 Email: support@petify.com</li>
                            <li className="mb-2">📞 Phone: +1 (234) 567-890</li>
                            <li className="mb-2">📍 Address: 123 Pet Lane, Animal City, PA 12345</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold mb-4 text-[#444]">Follow Us</h2>
                        <p className="text-lg leading-relaxed text-[#666] mb-4">
                            Stay connected with us on social media:
                        </p>
                        <ul className="flex list-none gap-[20px] text-[#666] text-lg">
                            <li className="cursor-pointer">🌐 <a href="https://www.instagram.com/petify" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li className="cursor-pointer">🌐 <a href="https://www.facebook.com/petify" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li className="cursor-pointer">🌐 <a href="https://www.twitter.com/petify" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </section>
                </div>

                <section className="w-[450px]">
                    <h2 className="text-3xl font-semibold mb-4 text-[#444]">Send Us a Message</h2>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="p-3 border border-gray-300 rounded-md"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="p-3 border border-gray-300 rounded-md"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="p-3 border border-gray-300 rounded-md"
                            rows="4"
                            required
                        />
                        <button
                            type="submit"
                            className="self-center px-6 py-2 bg-[#ff6b6b] text-white font-semibold rounded-md hover:bg-[#ff4d4d]"
                        >
                            Send Message
                        </button>
                    </form>
                </section>
            </div>

            {/* Toast Message */}
            {toast.visible && (
                <div
                    className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center max-w-[400px] w-full p-4 rounded-md shadow-lg ${
                        toast.type === 'success' ? 'bg-green-100 border-l-4 border-green-500' : 'bg-red-100 border-l-4 border-red-500'
                    }`}
                >
                    <div className="mr-4">
                        {toast.type === 'success' ? (
                            <span className="text-green-500 text-xl font-bold">✔</span>
                        ) : (
                            <span className="text-red-500 text-xl font-bold">✖</span>
                        )}
                    </div>
                    <div className="flex-1">
                        <h4 className={`text-lg font-semibold ${toast.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                            {toast.type === 'success' ? 'Success' : 'Error'}
                        </h4>
                        <p className="text-sm text-[#555]">{toast.message}</p>
                    </div>
                    <button
                        onClick={() => setToast({ visible: false, type: '', message: '' })}
                        className="text-[#555] ml-4 text-xl font-bold cursor-pointer"
                    >
                        ✖
                    </button>
                </div>
            )}
        </div>
    );
}

export default Contact;
