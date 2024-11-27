"use client";

import CountUp from "react-countup";

const stats = [
    { num: 0, text: "Years of experience" },
    { num: 26, text: "Projects Completed" },
    { num: 8, text: "Technologies mastered" },
    { num: 500, text: "Code commits" },
];

const Stats = () => {
    return (
        <section className="pt-6 pb-12 xl:pt-0 xl:pb-0 container mx-auto">
            <div className="flex flex-wrap gap-8 xl:gap-12 max-w-[90vw] mx-auto xl:max-w-none justify-center xl:justify-between">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center xl:items-start text-center xl:text-left gap-2"
                    >
                        {/* CountUp Number */}
                        <CountUp
                            end={item.num}
                            duration={5}
                            delay={2}
                            className="text-4xl xl:text-6xl font-extrabold text-white"
                        />

                        {/* Text Description */}
                        <p
                            className={`leading-snug text-white/80 ${
                                item.text.length < 15
                                    ? "max-w-[120px]"
                                    : "max-w-[180px]"
                            }`}
                        >
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
