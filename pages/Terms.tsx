
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black mb-4">Terms of Service</h1>
          <p className="text-slate-400">Last updated: October 24, 2023</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="prose prose-slate lg:prose-xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By accessing or using the services provided by Kangaroo Logistics Corp, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you may not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">2. Service Description</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kangaroo Logistics Corp provides freight dispatching, factoring coordination, and administrative support services for owner-operators and trucking fleets. We act as a representative for our clients in finding and negotiating freight loads.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">3. Fees and Payment</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Clients agree to pay Kangaroo Logistics Corp the agreed-upon fees for dispatch services. Fees are typically a percentage of the gross revenue of the load or a flat per-load fee, as detailed in your specific service agreement. Payments are due within the timeframe specified on each invoice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">4. Carrier Obligations</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              As a client, you represent that you have all necessary authorities (MC/DOT), insurance, and equipment to perform transportation services safely and legally. You are responsible for maintaining these credentials throughout our partnership.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">5. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kangaroo Logistics Corp is not a motor carrier, broker, or shipper. We act solely as a dispatch service. We are not liable for any cargo damage, delays, accidents, or disputes between carriers and brokers/shippers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">6. Termination</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Either party may terminate the service agreement with written notice as specified in the individual service contract. Upon termination, all outstanding fees become immediately due.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">7. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              These terms shall be governed by and construed in accordance with the laws of the State of Oklahoma, without regard to its conflict of law principles.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
