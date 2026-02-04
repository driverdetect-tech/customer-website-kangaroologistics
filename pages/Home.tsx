
import React, { useState } from 'react';
// Added missing MapPin to the imports from lucide-react
import { Truck, Shield, Clock, Users, PhoneCall, CheckCircle, BarChart3, Star, PlayCircle, MapPin, Send } from 'lucide-react';

const Home: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000"
            alt="Trucking Logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <p className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4">Professional Transportation Service</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 max-w-4xl leading-tight">
            KANGAROO LOGISTICS & <br /><span className="text-brand-secondary">TRANSPORT</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Reliable logistics management tailored to your needs. We plan, implement, and control the efficient movement of your cargo.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-brand-secondary hover:bg-brand-accent text-white px-8 py-4 rounded font-bold uppercase tracking-wider transition-all shadow-xl">
              Our Services
            </button>
            <button className="flex items-center space-x-3 text-white font-bold uppercase tracking-wider hover:text-brand-secondary transition-colors">
              <PlayCircle className="w-10 h-10" />
              <span>Watch The Video</span>
            </button>
          </div>
        </div>
      </section>

      {/* Feature Quick Cards */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Trucking Invoice Service", desc: "Trucking Invoice Service is a reliable solution that simplifies the invoicing process.", icon: <Truck /> },
            { title: "Factoring Service", desc: "Factoring or invoice factoring, is a financial arrangement where businesses sell their invoices.", icon: <BarChart3 /> },
            { title: "Benefits for Brokers", desc: "Benefits for brokers include access to a wide network of clients and carriers.", icon: <Users /> },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 shadow-2xl rounded-lg border-b-4 border-brand-primary group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-brand-primary mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
              alt="Logistics Warehouse"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
        <div className="lg:w-1/2 space-y-6">
          <p className="text-brand-primary font-bold uppercase tracking-widest text-sm">About Us</p>
          <h2 className="text-4xl font-black text-slate-800 leading-tight">Your logistics <br />solutions provider</h2>
          <p className="text-gray-600 leading-relaxed">
            Kangaroo Logistics arrangements professional dispatch services for owner operators and truckers who are tired of wasting their time and energy on cheap freight. Trucks Dispatch Services provides prospect of high paying loads while you drive.
          </p>
          <div className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-primary">
            <h4 className="font-bold text-slate-800 mb-2">In addition</h4>
            <p className="text-sm text-gray-500">We can handle the rest of your administrative overhead such as negotiating rates and handling necessary paperwork.</p>
          </div>
          <button className="bg-brand-primary text-white px-8 py-3 rounded font-bold hover:bg-brand-secondary transition-colors uppercase tracking-wider">Learn More</button>
        </div>
      </section>

      {/* Our Services Grid */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black text-slate-800 mb-4">Our Services</h2>
              <p className="text-gray-500">We drive you towards continuous improvement.</p>
            </div>
            <button className="border border-brand-primary text-brand-primary px-6 py-2 rounded font-bold hover:bg-brand-primary hover:text-white transition-all">All Services</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Availability 24/7", desc: "As a professional truck dispatcher, we are always here.", icon: <Clock /> },
              { title: "Dedicated line", desc: "Specialized equipment required for efficient drivers.", icon: <PhoneCall /> },
              { title: "Professional approach", desc: "Formulas that determine which method to call in.", icon: <Shield /> },
              { title: "Scheduled broker updates", desc: "Brokers work for shippers, while dispatchers work for you.", icon: <Users /> },
              { title: "Feedback collection", desc: "Gather input in advance by conducting surveys.", icon: <Star /> },
              { title: "Best match route", desc: "Include optimizing transportation routes.", icon: <MapPin /> },
              { title: "Driver monitoring", desc: "GPS and telematics technologies provide insights.", icon: <BarChart3 /> },
              { title: "Ensuring sustainability", desc: "Reducing carbon footprint, implementing eco-friendly practices.", icon: <Truck /> },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-brand-secondary/20 group">
                <div className="w-12 h-12 bg-brand-light text-brand-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">5,531</p>
              <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest">Loads Booked</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">$7 500+</p>
              <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest">Average Gross Revenue</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">280%</p>
              <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black mb-2">60</p>
              <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest">Min Lbs Dispatched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-brand-light/50 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-black text-slate-800 leading-tight">Services with the <br /><span className="text-brand-primary">Freedom to Choose</span></h2>
            <p className="text-gray-600">Our clients frequently express concern that they will be forced to use their freight dispatch service and will not be able to refuse loads that don't suit their tastes. At Kangaroo Logistics, we value the independence of our clients.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Truck dispatching",
                "Factoring service",
                "Rate negotiation",
                "SAFETY / DOT compliance",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-slate-700 font-semibold">
                  <CheckCircle className="w-5 h-5 text-brand-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 min-h-[400px] flex flex-col justify-center">
              {isSubmitted ? (
                <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-brand-light text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary">Message Sent Successfully!</h3>
                  <p className="text-gray-600 leading-relaxed">Thank you for reaching out. Our team will contact you shortly to complete your free setup.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-primary font-bold hover:underline mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-center text-brand-primary">Contact us for free setup</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input required type="text" placeholder="Full name" className="w-full p-4 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-brand-primary border border-gray-200" />
                    <input required type="tel" placeholder="Phone number" className="w-full p-4 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-brand-primary border border-gray-200" />
                    <input required type="email" placeholder="Email" className="w-full p-4 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-brand-primary border border-gray-200" />
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <input required type="checkbox" className="w-4 h-4" />
                      <span>I have read and agree to Terms of Service</span>
                    </div>
                    <button
                      disabled={isSubmitting}
                      className="w-full bg-brand-primary text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-secondary transition-colors shadow-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Request</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
