import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, Lock, Eye, FileText, Mail, Globe, User, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | TripTooTravels",
  description:
    "Privacy Policy for TripTooTravels (www.triptootravels.com). Learn how we collect, use, share, and protect your personal information.",
  keywords: [
    "Privacy Policy",
    "TripTooTravels",
    "Pooja Gupta",
    "data protection",
    "travel privacy policy",
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4 border-b border-slate-800 pb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Legal &amp; Privacy Policy
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-amber-400" /> www.triptootravels.com
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" /> Founder: Pooja Gupta
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> Launched: 12 August 2019
            </span>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">

          {/* 1. About TripTooTravels */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">1.</span> About TripTooTravels
            </h2>
            <p>
              TripTooTravels was founded by <strong>Pooja Gupta</strong> and launched on <strong>12 August 2019</strong>. We provide travel-related services and assistance to individuals, families, groups, and other travelers.
            </p>
            <p>
              For the purposes of this Privacy Policy, &ldquo;TripTooTravels,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo; refers to TripTooTravels.
            </p>
            <p className="text-amber-400 font-semibold text-sm">
              Website: <a href="https://www.triptootravels.com" target="_blank" rel="noreferrer" className="underline">www.triptootravels.com</a>
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-amber-400" /> <span className="text-amber-400">2.</span> Information We Collect
            </h2>
            <p>
              When you use our website or contact us regarding our services, we may collect information such as:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-sm pt-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Full name
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Phone number
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Email address
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Residential or correspondence address
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Travel dates and destination preferences
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Number of travelers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Passport or identification details when required for travel services
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Date of birth or other passenger information where required for bookings
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Payment and billing information
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Information about your travel preferences and requirements
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Information you provide when communicating with our team
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span> Any other information you voluntarily provide to us
              </li>
            </ul>
            <p className="pt-2 text-slate-400 text-sm">
              We may also automatically collect certain technical information when you visit our website, such as your IP address, browser type, device information, pages visited, and general website usage information.
            </p>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-400" /> <span className="text-amber-400">3.</span> How We Use Your Information
            </h2>
            <p>We may use your personal information to:</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Respond to your inquiries and requests</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Prepare quotations and travel itineraries</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Process travel bookings and reservations</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Arrange flights, hotels, transportation, tours, visas, insurance, and other travel-related services</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Communicate with you regarding your booking or inquiry</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Process payments and billing</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Provide customer support</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Improve our website, services, and customer experience</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Send service-related notifications and updates</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Send promotional offers, newsletters, or travel information where permitted and where appropriate</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Prevent fraud, misuse, or unauthorized activity</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">✓</span> Comply with applicable legal and regulatory requirements</li>
            </ul>
          </section>

          {/* 4. Sharing of Personal Information */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" /> <span className="text-amber-400">4.</span> Sharing of Personal Information
            </h2>
            <p>
              We may share necessary personal information with trusted third parties when required to provide the services you request.
            </p>
            <p className="text-slate-400 text-sm">Depending on your travel arrangements, these parties may include:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Airlines and other transportation providers</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Hotels, resorts, and accommodation providers</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Tour operators and activity providers</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Visa and immigration service providers</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Travel insurance providers</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Payment processors and financial institutions</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Technology, hosting, communication, and customer-support service providers</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Government authorities or regulatory bodies where legally required</li>
            </ul>
            <p className="text-slate-400 text-sm pt-2">
              We only intend to share information that is reasonably necessary for the relevant service, booking, transaction, or legal requirement.
            </p>
          </section>

          {/* 5. International Travel and Data Transfers */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">5.</span> International Travel and Data Transfers
            </h2>
            <p>
              If you book international travel, your personal information may need to be shared with service providers, airlines, hotels, visa authorities, or other organizations located outside India.
            </p>
            <p className="text-slate-400 text-sm">
              By requesting international travel services, you understand that necessary information may be transferred to the countries involved in providing those services, subject to applicable laws and regulations.
            </p>
          </section>

          {/* 6. Payment Information */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">6.</span> Payment Information
            </h2>
            <p>
              Payments made through our website or through third-party payment providers may be processed by the relevant payment service provider.
            </p>
            <p className="text-slate-400 text-sm">
              Where payment information is processed by a third-party payment provider, TripTooTravels may not directly store complete card or banking information. Customers should review the privacy and security policies of the applicable payment provider.
            </p>
          </section>

          {/* 7. Cookies and Similar Technologies */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">7.</span> Cookies and Similar Technologies
            </h2>
            <p>
              Our website may use cookies and similar technologies to improve website functionality, understand visitor behavior, remember preferences, and improve our services.
            </p>
            <p className="text-slate-400 text-sm">
              You may be able to control or disable cookies through your browser settings. Disabling certain cookies may affect the functionality of parts of our website.
            </p>
          </section>

          {/* 8. Marketing Communications */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">8.</span> Marketing Communications
            </h2>
            <p>
              Where permitted by applicable law, we may contact you about travel offers, destinations, packages, promotions, or other services that may be relevant to you.
            </p>
            <p>
              You can request to stop receiving promotional communications at any time by contacting us or using the unsubscribe option included in promotional communications.
            </p>
            <p className="text-slate-400 text-sm">
              Please note that you may continue to receive essential communications relating to an existing booking, payment, inquiry, or service.
            </p>
          </section>

          {/* 9. Data Security */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">9.</span> Data Security
            </h2>
            <p>
              We take reasonable measures to protect personal information against unauthorized access, alteration, disclosure, loss, or misuse.
            </p>
            <p className="text-slate-400 text-sm">
              However, no website, online transmission, or electronic storage system can be guaranteed to be completely secure. Therefore, while we take reasonable precautions, we cannot guarantee absolute security of your information.
            </p>
          </section>

          {/* 10. Data Retention */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">10.</span> Data Retention
            </h2>
            <p>
              We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing services, maintaining business and transaction records, resolving disputes, preventing fraud, and complying with applicable legal, accounting, or regulatory obligations.
            </p>
            <p className="text-slate-400 text-sm">
              When information is no longer required, we may securely delete, anonymize, or otherwise dispose of it in accordance with applicable requirements.
            </p>
          </section>

          {/* 11. Third-Party Websites */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">11.</span> Third-Party Websites
            </h2>
            <p>
              Our website may contain links to third-party websites, including airlines, hotels, payment providers, travel partners, social media platforms, or other service providers.
            </p>
            <p className="text-slate-400 text-sm">
              TripTooTravels is not responsible for the privacy practices, content, or security of third-party websites. We encourage you to review the privacy policies of those websites before providing them with personal information.
            </p>
          </section>

          {/* 12. Children's Privacy */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">12.</span> Children&apos;s Privacy
            </h2>
            <p>
              Our website and services are not specifically directed toward children.
            </p>
            <p>
              We do not knowingly collect personal information from children except where such information is provided by a parent, guardian, or authorized person as necessary for a travel booking or related service.
            </p>
            <p className="text-slate-400 text-sm">
              If you believe that a child has provided personal information to us without appropriate authorization, please contact us so that we can review and take appropriate action.
            </p>
          </section>

          {/* 13. Your Privacy Rights */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">13.</span> Your Privacy Rights
            </h2>
            <p>
              Depending on applicable law, you may have rights concerning your personal information, which may include:
            </p>
            <ul className="space-y-1.5 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Requesting access to personal information we hold about you</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Requesting correction of inaccurate or incomplete information</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Requesting deletion of information where legally applicable</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Withdrawing consent where processing is based on consent</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Requesting information about how your personal data is used</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Objecting to or restricting certain processing activities where applicable</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Opting out of certain promotional communications</li>
            </ul>
            <p className="text-slate-400 text-sm pt-2">
              To exercise an applicable privacy right, please contact us using the details provided below. We may need to verify your identity before processing certain requests.
            </p>
          </section>

          {/* 14. Changes to This Privacy Policy */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">14.</span> Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices, or applicable laws.
            </p>
            <p className="text-slate-400 text-sm">
              Any updated version will be published on this page with a revised &ldquo;Last Updated&rdquo; date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* 15. Contact Us */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-400" /> <span className="text-amber-400">15.</span> Contact Us
            </h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact TripTooTravels through the contact details provided on our website.
            </p>
            <div className="pt-3 border-t border-slate-800 space-y-2 text-sm text-slate-300">
              <p className="text-white font-bold text-base">TripTooTravels</p>
              <p><span className="text-slate-400">Founder:</span> Pooja Gupta</p>
              <p><span className="text-slate-400">Website:</span> <a href="https://www.triptootravels.com" className="text-amber-400 hover:underline">www.triptootravels.com</a></p>
              <p><span className="text-slate-400">Support Email:</span> <a href="mailto:support@triptootravels.com" className="text-amber-400 hover:underline">support@triptootravels.com</a></p>
              <p className="text-xs text-slate-400 pt-2 italic">
                For privacy-related inquiries, please mention &ldquo;Privacy Policy&rdquo; in the subject or message so that your request can be directed appropriately.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
