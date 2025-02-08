"use client";

import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const footerLinks = [
  {
    title: "Company",
    links: ["About SynexFlow", "Our Vision", "Careers", "News & Updates"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "FAQs", "Terms of Service", "Privacy Policy"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "API Docs", "Developer Hub", "Community"],
  },
];

const FooterLinks = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
      {footerLinks.map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-bold mb-2 text-gray-200">{section.title}</h3>
          <ul className="space-y-1">
            {section.links.map((link, i) => (
              <li key={i} className="hover:underline cursor-pointer transition duration-200 text-gray-400 hover:text-white">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-8 md:mt-0">
      <SocialIcon icon={<FaLinkedin />} href="https://www.linkedin.com/company/synexflow" />
      <SocialIcon icon={<FaFacebook />} href="https://www.facebook.com/synexflow" />
      <SocialIcon icon={<FaInstagram />} href="https://www.instagram.com/synexflow" />
      <SocialIcon icon={<FaYoutube />} href="https://www.youtube.com/synexflow" />
    </div>
  );
};

const SocialIcon = ({ icon, href }) => {
  return (
    <a
      className="text-gray-400 text-2xl transition-transform duration-200 transform hover:scale-110 hover:text-blue-400"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="bg-black text-white pb-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-10 px-6">
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <img
            alt="SynexFlow Logo"
            className="mb-3"
            height="100"
            src="/images/logo/vector.svg"
            width="100"
          />
          <span className="text-4xl font-bold">SynexFlow</span>
        </div>
        <FooterLinks />
        <SocialLinks />
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} SynexFlow. All rights reserved.</p>
        <div className="flex space-x-6">
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
