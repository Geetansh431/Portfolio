import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-screen flex flex-col">
      {/* Container */}
      <div className="container mx-auto flex-1 flex flex-col xl:flex-row items-center justify-between pt-6 pb-6 xl:pb-8">
        {/* Text */}
        <div className="text-center xl:text-left flex-1">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-4">
            Hello, I'm <br />
            <span className="text-accent">Geetansh</span>
          </h1>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 text-white/80">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies.
          </p>
          {/* Button and Socials */}
          <div className="flex flex-col xl:flex-row items-center gap-4">
            <a
              href="/RESUME.pdf" // Path to the file in the public folder
              download="Resume.pdf" // Desired filename when downloaded
              className="uppercase flex items-center gap-2 border border-accent rounded-lg px-4 py-2 hover:bg-accent hover:text-primary transition-all duration-500"
            >

              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </a>
            <div>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* Photo */}
        <div className="flex-1 mb-4 xl:mb-0 flex justify-center xl:justify-end">
          <Photo />
        </div>
      </div>
      {/* Stats */}
      <div className="bg-primary py-4">
        <Stats />
      </div>
    </section>
  );
};

export default Home;
