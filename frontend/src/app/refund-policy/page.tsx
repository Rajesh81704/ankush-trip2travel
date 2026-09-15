import React from "react";
import type { Metadata } from "next";
import { RefreshCw, ShieldCheck, Globe, Calendar, User, Plane, Building2, FileCheck, AlertCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Booking & Cancellation Policy | TripTooTravels",
  description:
    "Booking & Cancellation Policy for TripTooTravels (www.triptootravels.com). Founded by Pooja Gupta | Established 12 August 2019.",
  keywords: [
    "Booking Policy",
    "Cancellation Policy",
    "Refund Policy",
    "TripTooTravels",
    "Pooja Gupta",
    "tour cancellation fees",
  ],
};

const cancellationSlab = [
  { timeline: "45 days or more prior to departure", fee: "10%", statusColor: "text-emerald-400" },
  { timeline: "30–44 days prior to departure", fee: "25%", statusColor: "text-amber-300" },
  { timeline: "15–29 days prior to departure", fee: "50%", statusColor: "text-amber-400" },
  { timeline: "7–14 days prior to departure", fee: "75%", statusColor: "text-orange-400" },
  { timeline: "Less than 7 days prior to departure", fee: "100%", statusColor: "text-red-400" },
  { timeline: "No-show / failure to travel", fee: "100%", statusColor: "text-red-500 font-black" },
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pt-28 pb-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4 border-b border-slate-800 pb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <RefreshCw className="w-4 h-4" /> Booking &amp; Cancellation Policy
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Booking &amp; Cancellation Policy
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-amber-400" /> www.triptootravels.com
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" /> Founded by: Pooja Gupta
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> Established: 12 August 2019
            </span>
          </div>
        </div>

        {/* 13 Policy Sections */}
        <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">

          {/* 1. Booking Confirmation */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-amber-400" /> <span className="text-amber-400">1.</span> Booking Confirmation
            </h2>
            <ul className="space-y-2 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">•</span> All bookings are subject to availability and confirmation by the respective service provider.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">•</span> A booking is considered confirmed only after the required payment has been received and TripTooTravels has issued a booking confirmation/invoice.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">•</span> Prices are subject to change until the booking is confirmed.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">•</span> Customers are responsible for checking names, travel dates, destinations, hotel details, inclusions, exclusions, and other booking information before making payment.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">•</span> Incorrect passenger information provided by the customer may result in additional charges or cancellation as per supplier rules.</li>
            </ul>
          </section>

          {/* 2. Payment Terms */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" /> <span className="text-amber-400">2.</span> Payment Terms
            </h2>
            <ul className="space-y-2 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">•</span> The payment schedule will be communicated in the quotation or invoice.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">•</span> Advance payment may be required to secure flights, hotels, tours, transfers, visas, or other travel services.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">•</span> The balance payment must be made by the due date mentioned in the booking confirmation.</li>
              <li className="flex items-start gap-2"><span className="text-amber-400 font-bold">•</span> Failure to make payment on time may result in cancellation of the booking and applicable cancellation charges.</li>
            </ul>
          </section>

          {/* 3. Standard Cancellation Charges — Tour Packages */}
          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" /> <span className="text-amber-400">3.</span> Standard Cancellation Charges — Tour Packages
            </h2>
            <p className="text-slate-400 text-sm">
              Unless otherwise stated in the quotation or booking confirmation, the following cancellation slabs apply:
            </p>

            {/* Cancellation Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/80 text-amber-400 uppercase text-xs tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-700">Cancellation Timing Before Departure</th>
                    <th className="py-3.5 px-4 font-bold border-b border-slate-700 text-right">Cancellation Charge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/40">
                  {cancellationSlab.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-4 text-slate-200">{item.timeline}</td>
                      <td className={`py-3 px-4 text-right font-bold ${item.statusColor}`}>{item.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Refund Formula Box */}
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-300 text-sm font-mono text-center">
              Refund = Amount Paid − Applicable Cancellation Charges − Non-Refundable/Actual Supplier Charges
            </div>

            <p className="text-slate-400 text-xs sm:text-sm">
              *The above slab applies primarily to tour/package bookings. Where the actual cancellation charges imposed by airlines, hotels, tour operators, visa authorities, transportation providers, or other suppliers are higher, the actual supplier charges will apply.
            </p>
          </section>

          {/* 4. Flights */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Plane className="w-5 h-5 text-amber-400" /> <span className="text-amber-400">4.</span> Flights
            </h2>
            <p>
              Flight bookings are subject to the airline&apos;s fare rules.
            </p>
            <p className="text-slate-400 text-sm">
              Cancellation, refund, date-change, rebooking, no-show, and name-correction charges will be determined by the applicable airline and fare conditions. Airline tickets may be partially refundable or completely non-refundable.
            </p>
          </section>

          {/* 5. Hotels */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-400" /> <span className="text-amber-400">5.</span> Hotels
            </h2>
            <p>
              Hotel bookings are subject to the cancellation policy of the respective hotel or accommodation provider.
            </p>
            <p className="text-slate-400 text-sm">
              Non-refundable, promotional, advance-purchase, peak-season, and special-rate bookings may have stricter cancellation conditions.
            </p>
          </section>

          {/* 6. Visa Services */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">6.</span> Visa Services
            </h2>
            <p>
              Visa, embassy, consulate, government, appointment, documentation, and processing fees may be non-refundable once the application or service has commenced.
            </p>
            <p className="text-slate-400 text-sm">
              TripTooTravels does not guarantee visa approval, as the final decision rests with the relevant government authority.
            </p>
          </section>

          {/* 7. Special & Customized Packages */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">7.</span> Special &amp; Customized Packages
            </h2>
            <p>
              Honeymoon packages, group tours, international tours, cruises, pilgrimage packages, customized itineraries, peak-season bookings, festive-period bookings, and special promotional packages may have separate cancellation conditions.
            </p>
            <p className="text-slate-400 text-sm">
              The cancellation terms specifically mentioned in the quotation, invoice, or booking confirmation will apply.
            </p>
          </section>

          {/* 8. Cancellation by Customer */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">8.</span> Cancellation by Customer
            </h2>
            <p>
              Cancellation requests must be submitted in writing to TripTooTravels as early as possible.
            </p>
            <p>
              The applicable cancellation date will generally be the date on which the written cancellation request is received during business hours.
            </p>
            <p className="text-slate-400 text-sm">
              Customers are advised not to assume that informing an airline, hotel, driver, or other supplier directly constitutes cancellation with TripTooTravels.
            </p>
          </section>

          {/* 9. No-Show & Unused Services */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">9.</span> No-Show &amp; Unused Services
            </h2>
            <p>
              Failure to report for a confirmed flight, hotel, transfer, tour, activity, or other service may be treated as a no-show and may result in 100% cancellation charges.
            </p>
            <p className="text-slate-400 text-sm">
              No automatic refund will be provided for voluntarily unused services after travel has commenced.
            </p>
          </section>

          {/* 10. Changes & Amendments */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">10.</span> Changes &amp; Amendments
            </h2>
            <p>
              Changes to confirmed bookings are subject to availability and supplier rules.
            </p>
            <p className="text-slate-400 text-sm">
              Additional charges may include fare differences, hotel rate differences, amendment fees, supplier penalties, and TripTooTravels service/administrative charges, where applicable.
            </p>
          </section>

          {/* 11. Refund Processing */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">11.</span> Refund Processing
            </h2>
            <p>
              Eligible refunds will generally be processed through the original payment method after the applicable supplier refund has been received or approved.
            </p>
            <p className="text-slate-400 text-sm">
              Please allow approximately <strong>7–15 business days</strong> after refund approval for processing. Actual credit time may vary depending on the airline, hotel, supplier, payment gateway, bank, or financial institution.
            </p>
          </section>

          {/* 12. Cancellation by Supplier / Force Majeure */}
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-white">
              <span className="text-amber-400">12.</span> Cancellation by Supplier / Force Majeure
            </h2>
            <p>
              If a service provider cancels or changes a service, TripTooTravels will make reasonable efforts to assist with available alternatives, rescheduling, credits, or refunds.
            </p>
            <p className="text-slate-400 text-sm">
              Events beyond reasonable control—including natural disasters, severe weather, pandemics, war, civil unrest, government restrictions, strikes, border closures, or major transportation disruptions—may be subject to special supplier terms.
            </p>
            <p className="text-slate-400 text-sm">
              Any refund will depend on the amount recoverable from the relevant supplier and applicable law.
            </p>
          </section>

          {/* 13. Important Customer Notice */}
          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" /> <span className="text-amber-400">13.</span> Important Customer Notice
            </h2>
            <p>
              By making a payment, the customer confirms that they have reviewed and accepted the applicable booking, payment, cancellation, refund, and supplier terms.
            </p>
            <p>
              Where a specific cancellation policy is mentioned in a quotation, invoice, itinerary, or booking confirmation, that specific policy will take precedence over the standard cancellation slab above.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              Nothing in this policy is intended to restrict any consumer right or legal remedy that cannot lawfully be excluded under applicable law.
            </p>
            <div className="pt-4 border-t border-slate-800 space-y-1 text-sm text-slate-300">
              <p className="text-white font-extrabold text-base">TRIPTOOTRAVELS</p>
              <p><span className="text-slate-400">Founder:</span> Pooja Gupta</p>
              <p><span className="text-slate-400">Website:</span> <a href="https://www.triptootravels.com" className="text-amber-400 hover:underline">www.triptootravels.com</a></p>
              <p className="text-amber-300 font-semibold italic pt-2 text-base">&ldquo;Your Journey, Our Passion.&rdquo;</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
