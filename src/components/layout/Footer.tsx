
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Copyright, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-light py-8 border-t border-extraLight">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">UpThrive</h3>
            <p className="text-gray-400 mb-4">
              Guiding your professional journey with personalized career advice and skill development plans.
            </p>
           {/* Social Media <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div> */}
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('skillsQuiz')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('careers')}
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {t('dashboard')}
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('contactUs')}</h3>
            <address className="not-italic">
              <div className="flex items-center mb-2">
                <Mail size={18} className="mr-2 flex-shrink-0 text-gray-400" />
                <a href="mailto:info@upthrive.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  info@upthrive.com
                </a>
              </div>
              <div className="flex items-center mb-2">
                <Phone size={18} className="mr-2 flex-shrink-0 text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition-colors">
                  (123) 456-7890
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-extraLight mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <Copyright size={16} className="mr-2 text-gray-400" />
            <span className="text-sm text-gray-400">
              {currentYear} UpThrive. All rights reserved.
            </span>
          </div>
          <div className="text-sm text-gray-400">
            <a href="/privacy-policy" className="hover:text-blue-400 mr-4 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
