
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 overflow-hidden">
              <img src="/logo.png" alt="K" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white">KANGAROO</h2>
              <p className="text-[10px] tracking-[0.2em] font-bold text-brand-secondary uppercase">Logistics Corp.</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Your trusted partner in global logistics. We handle the heavy lifting while you focus on growing your business. Efficient, reliable, and always on time.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors border border-slate-700"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors border border-slate-700"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors border border-slate-700"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/contact" className="hover:text-brand-secondary flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-secondary flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Privacy Policy</Link></li>
            <li><Link to="/term-conditions" className="hover:text-brand-secondary flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold mb-6">Our Services</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-brand-secondary" /> Availability 24/7</li>
            <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-brand-secondary" /> Professional approach</li>
            <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-brand-secondary" /> Scheduled broker updates</li>
            <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-brand-secondary" /> Arranging best match route</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-brand-secondary mt-1" />
              <span>800 Park Ave, Suite 4, Murfreesboro, TN 37129</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-brand-secondary" />
              <span>(630) 560-6699</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-brand-secondary" />
              <span>sergey@kangaroologistics.net</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>© 2024 Kangaroo Logistics Corp — All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/term-conditions" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
