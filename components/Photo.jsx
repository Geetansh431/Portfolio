"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
                className="relative flex flex-col justify-center items-center"
            >
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten max-w-full max-h-full"
                >
                    <Image
                        src="/assets/assets/profile1.png"
                        priority
                        quality={100}
                        fill
                        alt="Profile photo of Geetansh Goyal"
                        className="object-contain"
                    />
                </motion.div>

                {/* Animated Circle */}
                <motion.svg
                    className="absolute w-[300px] xl:w-[560px] h-[300px] xl:h-[506px] max-w-full max-h-full"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",
                                "16 92 72 4",
                                "250 22 22 22",
                            ],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
