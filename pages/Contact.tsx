import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const countries = [
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Uzbekistan', code: '+998', flag: '🇺🇿' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
];

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black mb-4">Get In Touch</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">We are here to help you with your logistics needs. Feel free to reach out to us for a free consultation or any inquiries.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-black text-slate-800 mb-8">Contact Information</h2>

            <div className="flex items-start space-x-4">
              <div className="p-4 bg-brand-light text-brand-primary rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-1">Our Location</h4>
                <p className="text-gray-500 leading-relaxed">800 Park Ave, Suite 4,<br />Murfreesboro, TN 37129</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 bg-brand-light text-brand-primary rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-1">Call Us</h4>
                <p className="text-gray-500 leading-relaxed">(630) 560-6699</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 bg-brand-light text-brand-primary rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-1">Email Us</h4>
                <p className="text-gray-500 leading-relaxed">sergey@kangaroologistics.net</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-4 bg-brand-light text-brand-primary rounded-xl">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-1">Opening Hours</h4>
                <p className="text-gray-500 leading-relaxed">Mon - Sat: 8:00 AM - 6:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-50 p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100 min-h-[500px] flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-brand-light text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-brand-primary">Message Sent Successfully!</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to Kangaroo Logistics Corp. Our team will review your message and get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-brand-primary text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-secondary transition-all shadow-lg"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-800 mb-8">Send us a message</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                    <input required type="text" className="w-full p-4 bg-white rounded-lg outline-none focus:ring-2 focus:ring-brand-primary border border-gray-200" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <input required type="email" className="w-full p-4 bg-white rounded-lg outline-none focus:ring-2 focus:ring-brand-primary border border-gray-200" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                    <div className="flex space-x-2">
                      <div className="relative w-32">
                        <div className="flex items-center space-x-2 w-full p-4 bg-white rounded-lg border border-gray-200 cursor-pointer">
                          <span>{selectedCountry.flag}</span>
                          <span className="text-sm font-medium">{selectedCountry.code}</span>
                        </div>
                        <select
                          className="absolute inset-0 opacity-0 cursor-pointer w-full"
                          onChange={(e) => {
                            const country = countries.find(c => c.code === e.target.value);
                            if (country) setSelectedCountry(country);
                          }}
                          value={selectedCountry.code}
                        >
                          {countries.map((c) => (
                            <option key={c.name} value={c.code}>
                              {c.flag} {c.name} ({c.code})
                            </option>
                          ))}
                        </select>
                      </div>
                      <input required type="tel" className="flex-1 p-4 bg-white rounded-lg outline-none focus:ring-2 focus:ring-brand-primary border border-gray-200" placeholder="000-0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                    <select className="w-full p-4 bg-white rounded-lg outline-none focus:ring-2 focus:ring-brand-primary border border-gray-200">
                      <option>General Inquiry</option>
                      <option>Dispatch Services</option>
                      <option>Freight Quote</option>
                      <option>Carrier Partnership</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                    <textarea required rows={6} className="w-full p-4 bg-white rounded-lg outline-none focus:ring-2 focus:ring-brand-primary border border-gray-200" placeholder="Tell us about your requirements..."></textarea>
                  </div>

                  {/* Consent & Submit */}
                  <div className="md:col-span-2 space-y-2">
                    <div className="flex items-center h-6 mt-1">
                      <input
                        id="smsConsent"
                        name="smsConsent"
                        type="checkbox"
                        className="w-6 h-6 text-black border-slate-300 rounded-lg focus:ring-black cursor-pointer"
                      />
                    </div>
                    <label htmlFor="smsConsent" className="text-[11px] text-slate-500 leading-relaxed cursor-pointer select-none font-bold uppercase tracking-tight">
                      By providing your phone number and checking this box, you agree to receive SMS messages from Kangaroo Logistics Corp including load status updates, delivery notifications, appointment reminders, application status updates, and DOT/FMCSA compliance alerts. Message frequency may vary. Standard Message and Data Rates may apply. Reply STOP to opt out. Reply HELP for help. Your mobile information will not be sold or shared with third parties for promotional or marketing purposes.
                    </label>
                  </div>


                  <div className="md:col-span-2">
                    <button
                      disabled={isSubmitting}
                      className="flex items-center justify-center space-x-2 w-full md:w-auto bg-brand-primary text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-secondary transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
