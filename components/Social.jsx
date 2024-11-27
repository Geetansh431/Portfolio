import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"

const socials = [
  { icon: <FaGithub />, path: "https://github.com/geetansh431" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/geetansh-goyal-0b3328263" },
 
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;