"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 8847222304",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "geetanshg2@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bathinda, Punjab",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cndpfjg", // Replace with your EmailJS service ID
        "template_en9ohas", // Replace with your EmailJS template ID
        formData,
        "iL93Cf_CMFgdTYzRo" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccess(true);
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
      }}
      className="py-12"
    >
      <div className="container mx-auto">
        {/* Contact Information Section */}
        <div className="flex flex-col xl:flex-row xl:gap-12 mb-10">
          <div className="w-full xl:w-[50%]">
            <h2 className="text-4xl font-bold text-white mb-6">Contact Information</h2>
            {info.map((item, index) => (
              <div key={index} className="flex items-center mb-6 text-white">
                <div className="text-3xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="w-full xl:w-[50%]">
            <h2 className="text-4xl font-bold text-white mb-6">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={sendEmail}>
              {/* Name Input */}
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 text-lg bg-black text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-green-500 rounded-md"
              />

              {/* Email Input */}
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                type="email"
                className="w-full p-4 text-lg bg-black text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-green-500 rounded-md"
              />

              {/* Message Textarea */}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 text-lg bg-black text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-green-500 rounded-md"
              />

              {/* Submit Button */}
              <Button type="submit" className="w-full py-3 text-lg bg-black text-white hover:text-green-500 rounded-md">
                Send Message
              </Button>
            </form>
            {success && (
              <p className="mt-4 text-green-500">Your message has been sent successfully!</p>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
