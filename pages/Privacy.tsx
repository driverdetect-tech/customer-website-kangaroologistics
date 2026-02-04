
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="prose prose-slate max-w-none space-y-12">

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              INTRODUCTION
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                Kangaroo Logistics Corp (“Company,” “we,” “us,” or “our”) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website, or communicate with us through any channel, including SMS/text messaging.
              </p>
              <p className="font-bold text-brand-primary">We respect your privacy and will never contact you without your explicit consent.</p>
              <p>
                By using our services, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              OUR COMMITMENT TO YOU
            </h2>
            <p className="text-gray-600 mb-6">Before detailing our privacy practices, we want to make the following commitments clear:</p>
            <ul className="space-y-3">
              {[
                "We will NEVER send you unsolicited messages — We only contact you after you have explicitly opted in",
                "We will NEVER sell your information — Your data is not for sale, period",
                "We will NEVER share your mobile data for marketing — Your phone number stays with us",
                "We will NEVER engage in spam or deceptive practices — We are committed to honest, transparent communication",
                "We will ALWAYS honor your opt-out requests — You are in control of your communication preferences"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-brand-primary mr-3 font-bold">✓</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              INFORMATION WE COLLECT
            </h2>
            <div className="space-y-8 text-gray-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-brand-primary uppercase mb-3">Personal Information</h3>
                <p className="mb-4">We may collect the following types of personal information when you voluntarily provide it to us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, mailing address, telephone number, and mobile phone number</li>
                  <li><strong>Business Information:</strong> Company name, business address, MC number, DOT number, and other business identifiers relevant to transportation services</li>
                  <li><strong>Account Information:</strong> Username, password, and account preferences</li>
                  <li><strong>Communication Records:</strong> Records of your communications with us, including emails, phone calls, and text messages</li>
                  <li><strong>Service Information:</strong> Information about the transportation services you request or inquire about</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-primary uppercase mb-3">Mobile Information</h3>
                <p>When you opt in to receive SMS/text messages from us, we collect your mobile phone number, consent preferences, and message delivery data. We only collect this after you have provided explicit consent.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-primary uppercase mb-3">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect IP addresses, browser types, device information, and browsing activity/patterns.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              HOW WE USE YOUR INFORMATION
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>To provide, maintain, and improve our transportation and logistics services</li>
                <li>To send you SMS/text messages (Operational, Recruitment, or Regulatory) only after you have opted in</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To comply with legal obligations and protect our legal rights</li>
                <li>To detect, prevent, and address fraud, security, or technical issues</li>
              </ul>
              <div className="bg-brand-light/50 p-6 rounded-xl mt-6 border border-brand-secondary/10">
                <h4 className="font-bold text-brand-primary mb-2 uppercase text-sm">Regulatory Compliance Communications include:</h4>
                <p className="text-sm">FMCSA compliance updates, DOT regulation notifications, safety compliance reminders, required documentation requests, license/certification renewals, and drug/alcohol testing notifications.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              SMS/TEXT MESSAGING PRIVACY & MOBILE DATA
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="font-bold text-slate-800">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes at any time.</p>
              <p>We take the protection of your mobile information seriously. Your mobile phone number and SMS opt-in data are collected solely for the purpose of providing you with the messaging services you have requested.</p>
              <p>We may share your mobile information only with service providers who assist us in delivering SMS messages to you (such as our telecommunications partners). These providers are contractually obligated to maintain confidentiality and never use your information for their own marketing.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              ANTI-SPAM AND ANTI-FRAUD COMMITMENT
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kangaroo Logistics Corp is firmly committed to preventing spam and fraudulent communications. We never send unsolicited messages, never purchase contact lists, never engage in phishing, and comply with all regulations including TCPA, CTIA guidelines, and A2P 10DLC requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              OPTING OUT
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="text-gray-700 mb-4 font-medium">You may opt out of receiving SMS/text messages at any time by:</p>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-xs font-bold text-gray-400 uppercase">Texting</span>
                  <p className="font-bold text-brand-primary">STOP, UNSUBSCRIBE, or CANCEL</p>
                </div>
                <div className="flex-1 p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-xs font-bold text-gray-400 uppercase">Emailing</span>
                  <p className="font-bold text-brand-primary">sergey@kangaroologistics.net</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">We honor all opt-out requests promptly. After opting out, you will receive one confirmation message and then no further messages unless you opt in again.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              YOUR RIGHTS AND CHOICES
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access and Correction:</strong> Request access to and correction of your data.</li>
                <li><strong>Deletion:</strong> Request that we delete your personal information.</li>
                <li><strong>California Residents:</strong> You have additional rights under the CCPA. We do not sell personal information.</li>
                <li><strong>Tennessee Residents:</strong> You have additional rights under Tennessee state regulations.</li>
              </ul>
              <p>To exercise any of these rights, please contact us at <strong>sergey@kangaroologistics.net</strong>.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              DATA SECURITY & RETENTION
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement technical security measures like encryption and secure storage to protect your data. We retain your information for as long as necessary to provide services, comply with legal obligations, or resolve disputes. When you opt out of SMS services, we retain your preference to ensure we do not message you further.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide border-b border-gray-100 pb-2 mb-6">
              ADDITIONAL DISCLOSURES
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Third-Party Links</h3>
                <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these third parties.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Children’s Privacy</h3>
                <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Changes to This Privacy Policy</h3>
                <p>We may update this policy periodically. Significant changes will be notified via email or our website.</p>
              </div>
            </div>
          </section>

          <section className="bg-brand-primary text-white p-10 rounded-3xl">
            <h2 className="text-2xl font-black uppercase mb-6 text-brand-secondary">CONSENT & CONTACT</h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              By using our services, providing your information, or opting in to receive SMS/text messages, you consent to the collection, use, and sharing of your information as described in this Privacy Policy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 text-slate-400">
                <p className="font-bold text-white uppercase text-xs tracking-widest mb-4">Mailing Address</p>
                <p>Kangaroo Logistics Corp</p>
                <p>800 Park Ave, Suite 4</p>
                <p>Murfreesboro, TN 37129</p>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-white uppercase text-xs tracking-widest mb-4">Direct Communication</p>
                <p className="text-slate-400 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 text-brand-secondary">📞</span>
                  (630) 560-6699
                </p>
                <p className="text-slate-400 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 text-brand-secondary">✉️</span>
                  sergey@kangaroologistics.net
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-slate-500 text-[10px] uppercase tracking-widest">
                Compliance: TCPA | CTIA | A2P 10DLC | ANTI-SPAM
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
