
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, Clock } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50">
      {/* Top Decorative Line */}
      <div className="h-1 bg-brand-primary w-full"></div>

      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Clock className="w-3 h-3 mr-2 text-brand-secondary" /> We're Open: Mon - Sat 8:00 - 18:00</span>
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-brand-secondary" /> 800 Park Ave, Murfreesboro, TN</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-brand-secondary transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-secondary transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-secondary transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Main Header Info Area */}
      <div className="bg-white border-b hidden lg:block">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Kangaroo Logistics Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-brand-primary leading-none">KANGAROO</h1>
              <p className="text-[10px] tracking-[0.2em] font-bold text-slate-500 uppercase">Logistics Corp.</p>
            </div>
          </Link>

          <div className="flex space-x-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-brand-light rounded-full text-brand-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Call Us For Help!</p>
                <p className="font-bold text-slate-800">(630) 560-6699</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-brand-light rounded-full text-brand-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Mail Us</p>
                <p className="font-bold text-slate-800">sergey@kangaroologistics.net</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-brand-primary text-white sticky top-0 shadow-lg">
        <div className="container mx-auto px-2">
          &nbsp;
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-brand-primary/95 backdrop-blur-sm pb-4 px-4 space-y-3 font-semibold uppercase text-sm border-t border-brand-secondary/20">
            <Link to="/" className="block py-2 border-b border-brand-secondary/10" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/contact" className="block py-2 border-b border-brand-secondary/10" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <Link to="/privacy" className="block py-2 border-b border-brand-secondary/10" onClick={() => setIsOpen(false)}>Privacy</Link>
            <Link to="/term-conditions" className="block py-2" onClick={() => setIsOpen(false)}>Terms</Link>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
