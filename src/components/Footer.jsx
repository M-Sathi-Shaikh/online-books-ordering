import React from "react";
import footerLogo from "../assets/website/logo.png";
import { 
  FaFacebook, FaInstagram, FaLinkedin, 
  FaLocationArrow, FaMobileAlt, FaHome, FaInfoCircle, FaEnvelope, FaBookOpen 
} from "react-icons/fa";

const SocialLinks = [
  {
    icon: <FaFacebook />,
    title: "Facebook",
    link: "https://www.facebook.com/shaikh.sathi.33",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    link: "https://www.instagram.com/shaikh.sathi/",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-sathi-shaikh-b495322a7/",
  },
];

const QuickLinks = [
  {
    icon: <FaHome />,
    title: "Home",
    link: "/#",
  },
  {
    icon: <FaInfoCircle />,
    title: "About",
    link: "/#about",
  },
  {
    icon: <FaEnvelope />,
    title: "Contact",
    link: "/#contact",
  },
  {
    icon: <FaBookOpen />,
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Book Store
            </h1>
            <p>
              Explore a world of knowledge with Book Store. Whether you love fiction, non-fiction, or academic books, 
              we provide a wide range of collections for every reader.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow className="text-primary" />
              <p><strong>Our Address:</strong> Larkana, Sindh, Pakistan</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt className="text-primary" />
              <p><strong>Call Us:</strong> +92 3141605658</p>
            </div>
            
            {/* Social Handles */}
            <div className="flex items-center gap-3 mt-6">
              {SocialLinks.map((link, index) => (
                <a key={index} href={link.link} className="text-primary text-xl" target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Social Media Links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Social Media
              </h1>
              <ul className="flex flex-col gap-3">
                {SocialLinks.map((link, index) => (
                  <li key={index} className="cursor-pointer flex items-center gap-2 hover:translate-x-1 duration-300 hover:text-primary text-gray-500">
                    <span className="text-xl">{link.icon}</span>
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Quick Links
              </h1>
              <ul className="flex flex-col gap-3">
                {QuickLinks.map((link, index) => (
                  <li key={index} className="cursor-pointer flex items-center gap-2 hover:translate-x-1 duration-300 hover:text-primary text-gray-500">
                    <span>{link.icon}</span>
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location (Kept in Same Place) */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Our Location
              </h1>
              <p className="items-center gap-2">
                {/* <FaLocationArrow className="text-primary text-lg" /> */}
                Visit our store in Larkana, Sindh, Pakistan, to explore our latest book collections. 
                We also offer nationwide shipping for your convenience.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            © 2025 All rights reserved || Designed by <span className="text-primary font-bold">Muhammad Sathi</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
