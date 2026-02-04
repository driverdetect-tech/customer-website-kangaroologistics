
import React from 'react';

const TermConditions: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
            Terms of Service
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="prose prose-slate max-w-none space-y-12">

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              ACCEPTANCE OF TERMS
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the services provided by Kangaroo Logistics Corp (“Company,” “we,” “us,” or “our”), including but not limited to our website, mobile applications, SMS/text messaging services, and transportation services, you (“User,” “you,” or “your”) agree to be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              DESCRIPTION OF SERVICES
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kangaroo Logistics Corp provides freight transportation, trucking, logistics, and related services. We may communicate with you regarding our services through various channels, including but not limited to email, telephone, and SMS/text messaging, but only after obtaining your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              SMS/TEXT MESSAGING TERMS AND CONDITIONS
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-brand-primary uppercase mb-4">Program Description</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kangaroo Logistics Corp offers an SMS/text messaging program to provide you with important updates related to our transportation services and employment opportunities. By opting in, you consent to receive automated text messages related to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-100 p-5 rounded-lg shadow-sm">
                    <h4 className="font-bold text-slate-800 mb-2">Operational Communications</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
                      <li>Load status updates and notifications</li>
                      <li>Delivery confirmations and scheduling alerts</li>
                      <li>Account notifications and updates</li>
                      <li>Appointment reminders</li>
                      <li>Customer service communications</li>
                      <li>Operational updates and alerts</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-100 p-5 rounded-lg shadow-sm">
                    <h4 className="font-bold text-slate-800 mb-2">Recruitment & Employment</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
                      <li>Application status updates</li>
                      <li>Interview scheduling and reminders</li>
                      <li>Employment opportunity notifications</li>
                      <li>Onboarding information and next steps</li>
                      <li>Request for additional documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-primary uppercase mb-4">Consent Requirement — We Will Never Contact You Without Your Permission</h3>
                <div className="bg-brand-light p-6 rounded-xl border border-brand-secondary/20">
                  <p className="text-brand-primary font-bold mb-4">IMPORTANT: Kangaroo Logistics Corp will NEVER send you unsolicited text messages. We will only send SMS/text messages to you after you have provided your explicit opt-in consent.</p>
                  <p className="text-gray-700 text-sm mb-4">For Recruitment Communications: We will only contact you regarding employment opportunities if you have applied to a job posting with our company and have provided your mobile number and consent to receive recruitment-related text messages during the application process.</p>
                  <p className="font-bold text-slate-800 mb-2">We do not:</p>
                  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                    <li>Send spam or unsolicited messages</li>
                    <li>Purchase phone number lists from third parties</li>
                    <li>Contact individuals who have not explicitly opted in</li>
                    <li>Engage in any deceptive or misleading messaging practices</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 uppercase">Message Frequency</h3>
                  <p className="text-sm text-gray-600">Message frequency varies based on your interaction with our services. You may receive approximately 2-10 messages per month, depending on the services you use. Message frequency may increase during active shipping periods.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 uppercase">Opt-In Consent</h3>
                  <p className="text-sm text-gray-600">By providing your mobile phone number and agreeing to receive text messages, you expressly consent to receive recurring automated SMS/text messages. Your consent is voluntary, specific, informed, and revocable.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 uppercase">Opt-Out Instructions</h3>
                  <p className="text-sm text-gray-600 italic">Reply STOP, UNSUBSCRIBE, CANCEL, END, or QUIT to any message. We honor all opt-out requests promptly within 24 hours.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 uppercase">Help and Support</h3>
                  <p className="text-sm text-gray-600">Reply HELP to any message or email us at sergey@kangaroologistics.net for assistance.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              ANTI-SPAM COMMITMENT
            </h2>
            <p className="text-gray-600 mb-4">Kangaroo Logistics Corp is committed to responsible messaging practices. We strictly prohibit:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Sending unsolicited commercial messages (spam)</li>
              <li>Sending messages to individuals who have not opted in</li>
              <li>Using deceptive or misleading subject lines or content</li>
              <li>Purchasing or using third-party phone number lists</li>
              <li>Sharing your contact information with third parties for marketing</li>
            </ul>
          </section>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-4">USER RESPONSIBILITIES</h2>
              <p className="text-sm text-gray-600">Provide accurate information, maintain account confidentiality, notify us of unauthorized use, and comply with all applicable laws.</p>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-4">PROHIBITED USES</h2>
              <p className="text-sm text-gray-600">Violating laws, transmitting harmful content, disrupting services, impersonating entities, or sending spam.</p>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-4">INTELLECTUAL PROPERTY</h2>
              <p className="text-sm text-gray-600">All content and logos are the property of Kangaroo Logistics Corp. No reproduction without prior consent.</p>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-4">DISCLAIMER OF WARRANTIES</h2>
              <p className="text-sm text-gray-600">Services are provided "AS IS" and "AS AVAILABLE" without any warranties of any kind.</p>
            </div>
          </section>

          <section className="bg-brand-primary text-white p-10 rounded-3xl">
            <h2 className="text-2xl font-black uppercase mb-6 text-brand-secondary">GOVERNING LAW</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the State of Tennessee, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the state and federal courts located in Rutherford County, Tennessee.
            </p>
            <div className="pt-8 border-t border-slate-800">
              <h3 className="font-bold text-lg mb-4">CONTACT INFORMATION</h3>
              <p className="text-slate-400">Kangaroo Logistics Corp</p>
              <p className="text-slate-400">800 Park Ave, Suite 4</p>
              <p className="text-slate-400">Murfreesboro, TN 37129</p>
              <p className="text-slate-400">Phone: (630) 560-6699</p>
              <p className="text-slate-400">Email: sergey@kangaroologistics.net</p>
            </div>
          </section>

          <p className="text-center text-gray-400 text-sm pt-10">
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>

        </div>
      </div>
    </div>
  );
};

export default TermConditions;
