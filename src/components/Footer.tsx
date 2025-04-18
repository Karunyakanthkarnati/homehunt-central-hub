
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "For Buyers & Renters",
      links: [
        { name: "Find Property", href: "/buy" },
        { name: "Rent a Home", href: "/rent" },
        { name: "Home Loans", href: "/loans" },
        { name: "Buyer's Guide", href: "/buyers-guide" },
        { name: "Property Insights", href: "/insights" },
      ],
    },
    {
      title: "For Owners & Sellers",
      links: [
        { name: "List Your Property", href: "/sell" },
        { name: "Owner Dashboard", href: "/owner-dashboard" },
        { name: "Property Valuation", href: "/valuation" },
        { name: "Selling Guide", href: "/selling-guide" },
        { name: "Rental Management", href: "/rental-management" },
      ],
    },
    {
      title: "Agent Services",
      links: [
        { name: "Join as Agent", href: "/join-as-agent" },
        { name: "Agent Dashboard", href: "/agent-dashboard" },
        { name: "Marketing Tools", href: "/marketing-tools" },
        { name: "Advertise with Us", href: "/advertise" },
        { name: "Pricing Plans", href: "/pricing" },
      ],
    },
    {
      title: "About HomeHunt",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact Us", href: "/contact" },
        { name: "Terms & Privacy", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <Logo className="text-white" />
            <p className="mt-4 text-gray-400 text-sm">
              HomeHunt is India's premier real estate platform connecting buyers, sellers, renters, and agents directly without brokerage fees.
            </p>
            <div className="mt-6">
              <div className="flex items-center mt-2">
                <Phone className="h-4 w-4 text-homehunt-400 mr-2" />
                <span className="text-sm text-gray-400">+91 987 654 3210</span>
              </div>
              <div className="flex items-center mt-2">
                <Mail className="h-4 w-4 text-homehunt-400 mr-2" />
                <span className="text-sm text-gray-400">support@homehunt.com</span>
              </div>
              <div className="flex items-start mt-2">
                <MapPin className="h-4 w-4 text-homehunt-400 mr-2 mt-1" />
                <span className="text-sm text-gray-400">
                  HomeHunt Tower, Tech Park<br />
                  Bangalore, India - 560100
                </span>
              </div>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-400 hover:text-homehunt-400 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} HomeHunt. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-homehunt-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-homehunt-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-homehunt-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-homehunt-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-homehunt-400">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
