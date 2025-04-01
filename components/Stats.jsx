"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";

const services = [
  {
    id: "android-dev",
    title: "Android Development",
    description: "Creating high-quality Android applications using modern development practices and tools.",
    icon: "📱",
    offerings: [
      "Native Android app development",
      "Integration with third-party APIs",
      "User interface design for mobile devices",
      "App store deployment and maintenance",
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    icon: "🌐",
    offerings: [
      "Responsive website development",
      "Single-page applications",
      "E-commerce solutions",
      "Content management systems",
    ],
  },
  {
    id: "desktop-apps",
    title: "Desktop Applications",
    description: "Developing robust desktop applications that provide seamless user experiences and integrate with various systems.",
    icon: "💻",
    offerings: [
      "Cross-platform desktop applications",
      "Integration with web services and APIs",
      "User interface design for desktop environments",
      "Database management and storage solutions",
    ],
  },
  {
    id: "mentoring-training",
    title: "Mentoring & Training",
    description: "Knowledge sharing and skill development for teams and individuals.",
    icon: "🚀",
    offerings: [
      "Team workshops",
      "One-on-one mentoring",
      "Custom training programs",
      "Code reviews",
    ],
  },
];

const careerGoals = [
  {
    title: "Mastery",
    description: "Continuously deepen technical expertise and stay at the forefront of industry developments.",
    icon: "🎯"
  },
  {
    title: "Innovation",
    description: "Contribute meaningful innovations that solve real problems and enhance digital experiences.",
    icon: "✨"
  },
  {
    title: "Leadership",
    description: "Develop leadership capabilities to guide teams and projects toward excellence.",
    icon: "🧭"
  },
  {
    title: "Impact",
    description: "Create work that makes a positive difference and leaves a lasting impression.",
    icon: "💫"
  }
];

const CareerServicesShowcase = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  const [selectedService, setSelectedService] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-[80vh] py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Services Offered</h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Explore the range of services I offer to help you achieve your goals.
          </p>
        </div>

        {/* Services List */}
        <motion.div
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all cursor-pointer ${
                activeService === service.id ? "border-accent" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{service.icon}</span>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-white/80 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Details Modal */}
        <Dialog.Root open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-[#0a0a0a] rounded-xl border border-white/10 shadow-lg p-6 z-50">
              {selectedService && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="relative"
                >
                  {/* Modal Header */}
                  <div className="flex justify-between items-center mb-6">
                    <Dialog.Title className="text-xl font-bold text-white">
                      {selectedService.title}
                    </Dialog.Title>
                    <Dialog.Close className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                      <IoClose className="text-xl" />
                    </Dialog.Close>
                  </div>

                  {/* Modal Content */}
                  <p className="text-white/80 mb-4">{selectedService.description}</p>
                  <h4 className="text-lg font-semibold text-white mb-3">What I Offer:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-white/80">
                    {selectedService.offerings.map((offering, index) => (
                      <li key={index}>{offering}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        {/* Career Goals Section */}
        <div className="mt-12">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-8">Career Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {careerGoals.map((goal, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                <span className="text-4xl mb-4 block">{goal.icon}</span>
                <h3 className="text-xl font-extrabold text-white mb-3">{goal.title}</h3>
                <p className="text-white/80">{goal.description}</p>
              </div>
            ))}
          </div>

          {/* Vision Statement */}
          <div className="mt-12 text-center max-w-xl mx-auto">
            <p className="text-white/80 text-lg italic">
              “My vision is to blend technical excellence with creative problem-solving to build digital experiences that are both functional and meaningful.”
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerServicesShowcase;
