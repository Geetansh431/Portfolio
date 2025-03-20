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
    subject: "New Contact Form Submission",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const validateForm = () => {
    let valid = true;
    const errors = {
      name: "",
      email: "",
      message: ""
    };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus({
      submitted: true,
      success: false,
      message: "Sending your message..."
    });

    // Prepare data with better formatting for email template
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      // Additional fields that can be used in the EmailJS template
      sender_email: formData.email,
      sender_name: formData.name,
      to_name: "Website Administrator", // You can customize this
      date: new Date().toLocaleString()
    };

    emailjs
      .send(
        "service_cndpfjg", // Your EmailJS service ID
        "template_en9ohas", // Your EmailJS template ID
        templateParams,
        "iL93Cf_CMFgdTYzRo" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormStatus({
            submitted: true,
            success: true,
            message: "Your message has been sent successfully! We'll get back to you soon."
          });
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            subject: "New Contact Form Submission",
            message: ""
          });
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setFormStatus({
            submitted: true,
            success: false,
            message: "Failed to send your message. Please try again later."
          });
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
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full p-4 text-lg bg-black text-white placeholder-gray-400 border ${
                    formErrors.name ? "border-red-500" : "border-gray-600"
                  } focus:ring-2 focus:ring-green-500 rounded-md`}
                />
                {formErrors.name && (
                  <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  type="email"
                  className={`w-full p-4 text-lg bg-black text-white placeholder-gray-400 border ${
                    formErrors.email ? "border-red-500" : "border-gray-600"
                  } focus:ring-2 focus:ring-green-500 rounded-md`}
                />
                {formErrors.email && (
                  <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>

              {/* Subject Input (Optional but helpful) */}
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject (Optional)"
                className="w-full p-4 text-lg bg-black text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-green-500 rounded-md"
              />

              {/* Message Textarea */}
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full p-4 text-lg bg-black text-white placeholder-gray-400 border ${
                    formErrors.message ? "border-red-500" : "border-gray-600"
                  } focus:ring-2 focus:ring-green-500 rounded-md`}
                />
                {formErrors.message && (
                  <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full py-3 text-lg bg-black text-white hover:text-green-500 rounded-md"
                disabled={formStatus.submitted && !formStatus.success}
              >
                {formStatus.submitted && !formStatus.success ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            {/* Status Message */}
            {formStatus.submitted && (
              <div className={`mt-4 p-3 rounded ${formStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {formStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;