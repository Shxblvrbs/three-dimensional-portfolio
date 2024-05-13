"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdArrowOutward } from "react-icons/md";    
const MessageForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = "service_pfuwqq7";
        const templateId = "template_ue6hi1p";
        const publicKey = "4pniXPURDEh6BOQbY"; 

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Shahab",
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Message Sent Successfully!', response);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error Sending Message...', error);
        });
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <input
                required
                type="text"
                id="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}

                className = "xl:text-4xl lg:text-4xl text-xl xl:h-16 lg:h-16 xl:w-8/12 lg:w-8/12 bg-transparent border-2 rounded-lg border-white border-opacity-50 outline none focus:border-yellow-300 transition duration-200 mx-14 px-5 my-5 py-5"
            />
            <input
                required
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                className = "xl:text-4xl lg:text-4xl text-xl xl:h-16 lg:h-16 xl:w-8/12 lg:w-8/12 bg-transparent border-2 rounded-lg border-white border-opacity-50 outline none focus:border-yellow-300 transition duration-200 mx-14 px-5 my-5 py-5"
            />
            <textarea
                cols="30"
                rows="10"
                id="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}

                className = "xl:text-4xl lg:text-4xl text-xl bg-transparent border-2 rounded-lg border-white border-opacity-50 outline none focus:border-yellow-300 transition duration-200 mx-14 px-5 my-5 py-5"
            ></textarea>

            <button type="submit" className= "buttonHover xl:text-2xl lg:text-2xl text-xl bg-transparent border-2 rounded-lg border-white border-opacity-50 outline none focus:border-yellow-300 transition duration-200 mx-14 px-5 my-5 py-5">
                Send Message <MdArrowOutward className="inline-block" />
            </button>
            {/* <span className="relative inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span> */}
            {/* <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span> */}
        </form>
    )


}

export default MessageForm