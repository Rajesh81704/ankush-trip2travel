import React from "react";
import type { Metadata } from "next";
import { FileText, ShieldCheck, Globe, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | TripTooTravels",
  description:
    "Terms & Conditions for TripTooTravels (www.triptootravels.com). Effective 12 August 2019, Last Updated 10 September 2026.",
  keywords: [
    "Terms and Conditions",
    "TripTooTravels",
    "Pooja Gupta",
    "travel terms",
    "booking terms",
  ],
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4 border-b border-slate-800 pb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Terms &amp; Conditions
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-amber-400" /> www.triptootravels.com
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> Effective Date: 12 August 2019
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> Last Updated: 10 September 2026
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" /> Founder: Pooja Gupta
            </span>
          </div>
        </div>

        {/* Introduction */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" /> Welcome to TripTooTravels
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            These Terms &amp; Conditions govern your access to and use of <strong>www.triptootravels.com</strong> and the travel-related services provided by TripTooTravels.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            By accessing our website, submitting an inquiry, requesting a quotation, making a booking, or using our services, you agree to these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use our website or services.
          </p>
        </section>

        {/* 27 Sections */}
        <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">

          {/* 2. Website Use */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">2.</span> Website Use
            </h2>
            <p>
              You agree to use this website only for lawful purposes and in accordance with these Terms &amp; Conditions.
            </p>
            <p className="text-slate-400 text-sm font-semibold">You must not:</p>
            <ul className="space-y-1.5 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Use the website for any unlawful or fraudulent purpose.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Provide false, misleading, or inaccurate information.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Attempt to gain unauthorized access to the website or its systems.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Copy, reproduce, distribute, or commercially exploit website content without our written permission.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Interfere with the security, operation, or functionality of the website.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Use automated systems or methods to access or collect information from the website without authorization.</li>
            </ul>
          </section>

          {/* 3. Travel Inquiries and Quotations */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">3.</span> Travel Inquiries and Quotations
            </h2>
            <p>
              Information submitted through our website, email, phone, WhatsApp, or other communication channels may be used to prepare a travel quotation or itinerary.
            </p>
            <p>
              A quotation is generally an estimate and may be subject to availability and price changes until the booking is confirmed and payment requirements have been fulfilled.
            </p>
            <p className="text-slate-400 text-sm font-semibold">Prices may change due to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Changes in airline or transportation fares</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Hotel availability</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Exchange-rate fluctuations</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Taxes, government charges, or mandatory fees</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Seasonal or supplier pricing</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Changes requested by the customer</li>
            </ul>
          </section>

          {/* 4. Booking Confirmation */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">4.</span> Booking Confirmation
            </h2>
            <p>
              A booking will be considered confirmed only after TripTooTravels has received the required payment and confirmation has been issued by us or the relevant service provider.
            </p>
            <p className="text-slate-400 text-sm">
              Submitting an inquiry or quotation request does not guarantee availability or booking confirmation.
            </p>
            <p className="text-slate-400 text-sm">
              Customers are responsible for reviewing the itinerary, passenger details, travel dates, destination, hotel information, inclusions, exclusions, and other booking details before confirmation.
            </p>
          </section>

          {/* 5. Customer Information */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">5.</span> Customer Information
            </h2>
            <p>
              Customers must provide accurate and complete information when making a booking. This may include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Full name as required for travel documents</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Date of birth</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Passport details</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Identification information</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Contact information</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Travel dates</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Information required by airlines, hotels, or visa authorities</li>
            </ul>
            <p className="text-slate-400 text-sm pt-2">
              TripTooTravels is not responsible for costs or problems arising from incorrect, incomplete, or late information supplied by the customer.
            </p>
          </section>

          {/* 6. Passports, Visas and Travel Documents */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">6.</span> Passports, Visas and Travel Documents
            </h2>
            <p>
              Customers are responsible for ensuring that they have valid passports, visas, permits, travel insurance, vaccination certificates, and other documents required for their journey.
            </p>
            <p className="text-slate-400 text-sm">
              Visa approval is determined by the relevant embassy, consulate, immigration authority, or government department. TripTooTravels cannot guarantee visa approval unless expressly stated otherwise in writing.
            </p>
            <p className="text-slate-400 text-sm">
              Travelers should verify entry, transit, health, and documentation requirements before departure.
            </p>
          </section>

          {/* 7. Flights and Transportation */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">7.</span> Flights and Transportation
            </h2>
            <p>
              Flight and transportation schedules are controlled by airlines and transportation providers. Airlines or transportation providers may change schedules, routes, departure times, baggage allowances, or other conditions.
            </p>
            <p className="text-slate-400 text-sm">
              TripTooTravels will assist customers with communication and available alternatives where reasonably possible, but we cannot guarantee that a third-party provider will operate according to its original schedule.
            </p>
            <p className="text-slate-400 text-sm">
              Customers must comply with the terms, conditions, baggage rules, check-in requirements, and other policies of the relevant transportation provider.
            </p>
          </section>

          {/* 8. Hotels and Accommodation */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">8.</span> Hotels and Accommodation
            </h2>
            <p>
              Hotel rooms are subject to availability and the conditions imposed by the accommodation provider. Room types, facilities, views, meal plans, check-in times, check-out times, deposits, taxes, and other conditions may vary by property.
            </p>
            <p className="text-slate-400 text-sm">
              Hotel photographs and descriptions displayed on our website or provided in promotional material are intended for general information and may not represent the exact room or facilities assigned to every customer.
            </p>
            <p className="text-slate-400 text-sm">
              Any additional charges incurred at the hotel, including room service, minibar, meals, damages, deposits, or other personal expenses, are generally the customer&apos;s responsibility unless specifically included in the booking.
            </p>
          </section>

          {/* 9. Travel Packages and Inclusions */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">9.</span> Travel Packages and Inclusions
            </h2>
            <p>
              Each travel package is subject to its individual itinerary, quotation, inclusions, exclusions, and booking conditions. Customers should carefully review the final itinerary and quotation before making payment.
            </p>
            <p className="text-slate-400 text-sm">
              Services not specifically listed as included should be considered excluded unless confirmed by TripTooTravels in writing.
            </p>
          </section>

          {/* 10. Payments */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">10.</span> Payments
            </h2>
            <p>
              Customers must make payments according to the payment schedule communicated by TripTooTravels. Failure to make payments by the specified deadline may result in cancellation of the booking or loss of availability.
            </p>
            <p className="text-slate-400 text-sm">
              Any applicable bank charges, payment gateway charges, taxes, currency conversion charges, or other transaction-related costs may be payable by the customer where applicable.
            </p>
          </section>

          {/* 11. Cancellation and Refunds */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">11.</span> Cancellation and Refunds
            </h2>
            <p>
              Cancellation and refund conditions may vary depending on the services booked and the policies of airlines, hotels, tour operators, transportation providers, visa service providers, insurance companies, and other suppliers.
            </p>
            <p>
              Any cancellation must be communicated to TripTooTravels through an accepted communication channel. Applicable cancellation charges will be communicated to the customer where available.
            </p>
            <p className="text-slate-400 text-sm">
              Some bookings may be non-refundable or partially refundable. Third-party supplier cancellation policies may apply even when a customer cancels before the travel date. Refund processing times may depend on the relevant supplier, payment provider, bank, or other third party.
            </p>
          </section>

          {/* 12. Changes and Amendments */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">12.</span> Changes and Amendments
            </h2>
            <p>
              Requests to change travel dates, destinations, passenger names, hotels, flights, transportation, or other services are subject to availability and applicable supplier rules.
            </p>
            <p className="text-slate-400 text-sm">
              Additional charges, fare differences, amendment fees, or cancellation charges may apply. TripTooTravels does not guarantee that requested changes can be accommodated.
            </p>
          </section>

          {/* 13. Customer-Initiated Cancellation or No-Show */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">13.</span> Customer-Initiated Cancellation or No-Show
            </h2>
            <p>
              If a customer voluntarily cancels a booking, fails to travel, arrives late, misses a flight or transportation service, or does not use a booked service, applicable supplier terms and cancellation charges may apply.
            </p>
            <p className="text-slate-400 text-sm">
              No-show or unused services may be non-refundable depending on the supplier&apos;s policy.
            </p>
          </section>

          {/* 14. Changes or Cancellation by Service Providers */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">14.</span> Changes or Cancellation by Service Providers
            </h2>
            <p>
              Airlines, hotels, tour operators, transportation providers, government authorities, or other suppliers may modify, delay, suspend, or cancel services.
            </p>
            <p className="text-slate-400 text-sm">
              TripTooTravels will make reasonable efforts to assist affected customers and communicate available alternatives. Any refund or compensation will be subject to the applicable supplier&apos;s policies and applicable law.
            </p>
          </section>

          {/* 15. Force Majeure */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">15.</span> Force Majeure
            </h2>
            <p>
              TripTooTravels shall not be responsible for failure or delay in providing services caused by circumstances beyond our reasonable control. Such circumstances may include, but are not limited to:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Natural disasters</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Severe weather</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Pandemics or epidemics</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> War or civil unrest</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Terrorism or security incidents</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Government restrictions</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Strikes or industrial action</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Flight or transportation disruptions</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Border closures</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Changes in immigration or visa regulations</li>
              <li className="flex items-center gap-2"><span className="text-amber-400">•</span> Technical failures or unforeseen events</li>
            </ul>
            <p className="text-slate-400 text-sm pt-2">
              Where possible, we will assist customers in finding available alternatives, subject to applicable supplier terms and additional costs.
            </p>
          </section>

          {/* 16. Travel Insurance */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">16.</span> Travel Insurance
            </h2>
            <p>
              Customers are strongly encouraged to obtain suitable travel insurance covering medical emergencies, trip cancellation, baggage loss or delay, travel interruption, and other risks relevant to their journey.
            </p>
            <p className="text-slate-400 text-sm">
              Unless specifically included in a confirmed booking, travel insurance is the customer&apos;s responsibility.
            </p>
          </section>

          {/* 17. Third-Party Services */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">17.</span> Third-Party Services
            </h2>
            <p>
              TripTooTravels may arrange services provided by independent third parties, including airlines, hotels, transportation companies, tour operators, activity providers, insurance companies, visa service providers, and payment processors.
            </p>
            <p className="text-slate-400 text-sm">
              These suppliers operate under their own terms and conditions. TripTooTravels is not responsible for the independent acts, omissions, delays, service failures, or policy decisions of third-party suppliers, except to the extent required by applicable law.
            </p>
          </section>

          {/* 18. Website Information and Accuracy */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">18.</span> Website Information and Accuracy
            </h2>
            <p>
              We make reasonable efforts to keep the information on our website accurate and up to date. However, travel prices, availability, schedules, government requirements, hotel facilities, and other travel information can change without notice.
            </p>
            <p className="text-slate-400 text-sm">
              We do not guarantee that all website information will always be complete, current, or error-free.
            </p>
          </section>

          {/* 19. Intellectual Property */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">19.</span> Intellectual Property
            </h2>
            <p>
              Unless otherwise stated, the content of <strong>www.triptootravels.com</strong>, including text, logos, graphics, photographs, designs, branding, and other materials, belongs to TripTooTravels or is used with appropriate permission.
            </p>
            <p className="text-slate-400 text-sm">
              You may not reproduce, modify, distribute, publish, or commercially use our content without prior written permission.
            </p>
          </section>

          {/* 20. Links to Third-Party Websites */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">20.</span> Links to Third-Party Websites
            </h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for convenience and information. TripTooTravels does not control or guarantee the content, availability, security, or privacy practices of third-party websites.
            </p>
            <p className="text-slate-400 text-sm">
              Your use of third-party websites is subject to their respective terms and policies.
            </p>
          </section>

          {/* 21. Limitation of Liability */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">21.</span> Limitation of Liability
            </h2>
            <p>
              To the extent permitted by applicable law, TripTooTravels shall not be liable for indirect, incidental, consequential, or unforeseeable losses arising from travel arrangements or third-party services.
            </p>
            <p className="text-slate-400 text-sm">
              Nothing in these Terms &amp; Conditions is intended to exclude or limit liability that cannot legally be excluded or limited under applicable law.
            </p>
          </section>

          {/* 22. Indemnification */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">22.</span> Indemnification
            </h2>
            <p>
              To the extent permitted by applicable law, you agree to indemnify and hold TripTooTravels, its owners, employees, representatives, and service partners harmless from claims, losses, damages, liabilities, costs, or expenses arising from:
            </p>
            <ul className="space-y-1.5 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Your breach of these Terms &amp; Conditions</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Incorrect or misleading information supplied by you</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Your misuse of the website</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Your violation of applicable laws or regulations</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Your violation of third-party supplier terms</li>
            </ul>
          </section>

          {/* 23. Privacy */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">23.</span> Privacy
            </h2>
            <p>
              Your use of our website and services is also subject to our Privacy Policy, which explains how we collect, use, and protect personal information.
            </p>
          </section>

          {/* 24. Complaints and Customer Support */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">24.</span> Complaints and Customer Support
            </h2>
            <p>
              If you have a concern regarding a booking or service, please contact TripTooTravels as soon as reasonably possible.
            </p>
            <p className="text-slate-400 text-sm">
              We will make reasonable efforts to review and resolve legitimate complaints in accordance with the applicable booking terms and supplier policies.
            </p>
          </section>

          {/* 25. Governing Law and Jurisdiction */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">25.</span> Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms &amp; Conditions shall be governed by the applicable laws of India.
            </p>
            <p className="text-slate-400 text-sm">
              Subject to applicable law, disputes arising in connection with these Terms &amp; Conditions or our services shall be subject to the jurisdiction of the competent courts having jurisdiction over the relevant location of TripTooTravels.
            </p>
          </section>

          {/* 26. Changes to These Terms */}
          <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              <span className="text-amber-400">26.</span> Changes to These Terms
            </h2>
            <p>
              TripTooTravels reserves the right to update or modify these Terms &amp; Conditions from time to time.
            </p>
            <p className="text-slate-400 text-sm">
              Changes will become effective when the revised Terms &amp; Conditions are published on our website. Customers are encouraged to review this page periodically.
            </p>
          </section>

          {/* 27. Contact Us */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">27.</span> Contact Us
            </h2>
            <p>
              For questions regarding these Terms &amp; Conditions, bookings, cancellations, or travel services, please contact us through the contact details available on our website.
            </p>
            <div className="pt-3 border-t border-slate-800 space-y-2 text-sm text-slate-300">
              <p className="text-white font-bold text-base">TripTooTravels</p>
              <p><span className="text-slate-400">Founder:</span> Pooja Gupta</p>
              <p><span className="text-slate-400">Website:</span> <a href="https://www.triptootravels.com" className="text-amber-400 hover:underline">www.triptootravels.com</a></p>
              <p className="text-xs text-slate-400 pt-2 italic">
                By using www.triptootravels.com or booking services through TripTooTravels, you acknowledge that you have read, understood, and agreed to these Terms &amp; Conditions.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
