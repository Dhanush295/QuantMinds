
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <a href="/" className="text-2xl font-bold flex items-center gap-2 mb-4">
              <span className="text-white rounded-md bg-quantminds-purple/90 px-2">Q</span>
              <span className="text-white">QuantaMind</span>
            </a>
            <p className="text-gray-400 mb-4">
              AI-powered business intelligence through GPU-accelerated custom models.
            </p>
            <div className="flex space-x-4">
              <Link to="/coming-soon" className="text-gray-400 hover:text-quantminds-purple transition">
                <Github size={20} />
              </Link>
              <Link to="/coming-soon" className="text-gray-400 hover:text-quantminds-purple transition">
                <Twitter size={20} />
              </Link>
              <Link to="/coming-soon" className="text-gray-400 hover:text-quantminds-purple transition">
                <Linkedin size={20} />
              </Link>
              <a href="mailto:dg1@toromail.csudh.edu" className="text-gray-400 hover:text-quantminds-purple transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition">Careers</Link></li>
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition">Documentation</Link></li>
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition">API Reference</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition">Cookie Policy</Link></li>
              <li><Link to="/coming-soon" className="text-gray-400 hover:text-white transition">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} QuantaMind AI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                Contact: <a href="mailto:dg1@toromail.csudh.edu" className="hover:text-white transition">info@quantamind.co</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
