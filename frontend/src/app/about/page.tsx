import { Users, Star, Phone, Mail, MapPin, Award, Heart, Globe, Eye, Target, Sparkles } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - TripTooTravels",
  description:
    "Welcome to TripTooTravels, founded by Pooja Gupta on 12 August 2019. Curated journeys, lasting memories.",
  keywords: ["about us", "TripTooTravels", "Pooja Gupta", "travel partner", "curated journeys"],
};

const stats = [
  { value: "2019",    label: "Founded by Pooja Gupta" },
  { value: "50,000+", label: "Happy Travelers" },
  { value: "100+",    label: "Destinations" },
  { value: "24/7",    label: "Travel Support" },
];

const values = [
  {
    icon: <Heart className="w-5 h-5 text-[#B91C1C]" />,
    title: "Crafted with Care",
    description:
      "Every itinerary is carefully planned to offer dependable travel assistance tailored to your unique needs.",
  },
  {
    icon: <Globe className="w-5 h-5 text-[#2563EB]" />,
    title: "Explore the World",
    description:
      "Helping travelers discover new places, experience different cultures, and create lasting memories.",
  },
  {
    icon: <Award className="w-5 h-5 text-[#D97706]" />,
    title: "Trusted Quality",
    description:
      "Delivering quality service and seamless travel planning for individuals, families, couples, and groups.",
  },
  {
    icon: <Users className="w-5 h-5 text-[#059669]" />,
    title: "Personalized Solutions",
    description:
      "Tailored travel solutions with confidence and convenience every step of your journey.",
  },
];

const offices = [
  {
    flag: "🇮🇳",
    country: "India — Headquarters",
    name: "TriptooTravels.com",
    address: "Flat/Office-201, 2nd Floor, A Wing, Agnes Paradise Building, Opp. Vijay Paradise, Vasai East, 401208",
    note: null,
  },
  {
    flag: "🇦🇪",
    country: "Dubai, UAE",
    name: "Dubai Office",
    address: "Shop #03, AL Souq Al Kabeer, Meena Bazar, Burdubai, Dubai",
    note: "PO Box: 87867",
  },
  {
    flag: "🇸🇬",
    country: "Singapore",
    name: "Singapore Office",
    address: "291, Seragoon Road #01-01, Seragoon Building, Singapore 218107",
    note: "Near Sitara Restaurant",
  },
  {
    flag: "🇭🇰",
    country: "Hong Kong",
    name: "Hong Kong Office",
    address: "Cheung Lee Commercial Building, 25 Kimberley Road, Tsim Sha Tsui",
    note: "Licence No: 350318",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white text-[#111827]">

      {/* ── Hero & Banner Showcase ── */}
      <section className="relative pt-[68px] bg-slate-950 overflow-hidden">
        <div className="relative h-[420px] sm:h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80"
            alt="TripTooTravels"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-8 text-center sm:text-left">
              <p className="text-[13px] font-extrabold text-amber-400 uppercase tracking-[0.2em] mb-3">
                Welcome to TripTooTravels
              </p>
              <h1 className="text-[2.6rem] sm:text-[3.8rem] font-extrabold text-white leading-tight max-w-3xl drop-shadow-2xl">
                About Us
              </h1>
              <p className="text-lg sm:text-xl text-amber-300 font-medium mt-3 italic drop-shadow">
                TripTooTravels — Curated journey&apos;s Lasting Memories.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Running Image Showcase Strip */}
        <div className="bg-slate-900 border-y border-slate-800 py-6 overflow-hidden relative">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80",
            ].map((imgUrl, idx) => (
              <div key={idx} className="w-[240px] h-[140px] rounded-2xl overflow-hidden shrink-0 border border-slate-700/60 shadow-lg relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgUrl} alt="Destination" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────────────────── */}
      <section className="border-b border-[#F3F4F6] bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200">
            {stats.map((s) => (
              <div key={s.label} className="py-8 px-6 text-center">
                <p className="text-[2rem] sm:text-[2.4rem] font-extrabold text-[#111827] leading-none">
                  {s.value}
                </p>
                <p className="text-[13px] text-[#6B7280] font-medium mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main About Section ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="relative">
              <div className="rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-amber-100">
                <Image
                  src="/bg-image/image.png"
                  alt="TripTooTravels Team"
                  width={580}
                  height={480}
                  className="w-full h-[450px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-[18px] shadow-xl p-5 flex items-center gap-4">
                <div className="text-3xl">✈️</div>
                <div>
                  <p className="text-[14px] font-extrabold">TripTooTravels</p>
                  <p className="text-[12px] opacity-90">Launched 12 August 2019</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                About Us
              </div>

              <h2 className="text-[2.2rem] sm:text-[2.6rem] font-extrabold text-[#111827] leading-tight mb-4">
                Welcome to <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">TripTooTravels</span>
              </h2>
              <p className="text-lg font-semibold text-slate-700 mb-6">
                Your trusted travel partner for creating memorable journeys and unforgettable experiences.
              </p>

              <div className="w-12 h-[4px] bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6" />

              <div className="space-y-4 text-[15px] text-slate-600 leading-relaxed">
                <p>
                  Founded by <strong>Pooja Gupta</strong> and launched on <strong>12 August 2019</strong>, TripTooTravels was built with a simple vision — to make travel easier, more enjoyable, and accessible for everyone. What started as a passion for exploring new destinations has grown into a travel company dedicated to helping travelers discover the world with confidence and convenience.
                </p>
                <p>
                  At TripTooTravels, we believe that every journey is more than just a trip. It is an opportunity to explore new places, experience different cultures, create lasting memories, and discover something new about yourself.
                </p>
                <p>
                  Our team is committed to providing personalized travel solutions, carefully planned itineraries, and dependable travel assistance tailored to the unique needs and preferences of every traveler.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <div className="flex items-center gap-2 bg-[#FFFBEB] border border-[#FDE68A] rounded-full px-4 py-2">
                  <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  <span className="text-[13px] font-semibold text-[#92400E]">Trusted Travel Partner</span>
                </div>
                <div className="flex items-center gap-2 bg-[#EFF6FF] border border-[#DBEAFE] rounded-full px-4 py-2">
                  <Users className="h-3.5 w-3.5 text-[#2563EB]" />
                  <span className="text-[13px] font-semibold text-[#1D4ED8]">Personalized Itineraries</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Vision & Mission Section ────────────────────────────────────── */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">

          <div className="text-center mb-14">
            <p className="text-[12px] font-extrabold text-amber-400 uppercase tracking-[0.2em] mb-2">
              Our Purpose &amp; Drive
            </p>
            <h2 className="text-[2rem] sm:text-[2.6rem] font-extrabold text-white">
              Vision &amp; Mission
            </h2>
            <div className="w-12 h-1 bg-amber-400 rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-[24px] p-8 sm:p-10 shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4 flex items-center gap-2">
                  Our Vision
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  To become a trusted travel brand that inspires people to explore the world and turns their travel dreams into meaningful experiences.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-700/50 flex items-center gap-2 text-amber-400 font-semibold text-sm">
                <span>Inspiring Global Journeys</span> &rarr;
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-[24px] p-8 sm:p-10 shadow-xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4 flex items-center gap-2">
                  Our Mission
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Our mission is to simplify travel planning while delivering quality service, personalized experiences, and memorable journeys for individuals, families, couples, and groups.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-700/50 flex items-center gap-2 text-blue-400 font-semibold text-sm">
                <span>Quality &amp; Excellence in Travel</span> &rarr;
              </div>
            </div>
          </div>

          {/* Tagline Banner */}
          <div className="mt-14 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-[20px] p-8 text-center text-white shadow-2xl">
            <p className="text-xs uppercase tracking-widest font-extrabold opacity-80 mb-2">Our Promise</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              TripTooTravels — Curated journey&apos;s Lasting Memories.
            </h3>
          </div>

        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          <div className="text-center mb-14">
            <p className="text-[11px] font-extrabold text-[#F59E0B] uppercase tracking-[0.2em] mb-3">
              Why Choose Us
            </p>
            <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold text-[#111827] leading-tight">
              What sets us apart
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] border border-[#E5E7EB] p-7 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-[10px] bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-[15px] font-bold text-[#111827] mb-2">{v.title}</h3>
                <p className="text-[13px] text-[#6B7280] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact & Office Locations ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

          <div className="text-center mb-14">
            <p className="text-[11px] font-extrabold text-[#F59E0B] uppercase tracking-[0.2em] mb-3">
              Get In Touch
            </p>
            <h2 className="text-[2rem] sm:text-[2.4rem] font-extrabold text-[#111827] leading-tight">
              We&apos;d love to hear from you
            </h2>
          </div>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="tel:+918767656900"
              className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] px-6 py-4 hover:border-[#2563EB] hover:bg-[#EFF6FF] transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4 text-[#D97706]" />
              </div>
              <div>
                <p className="text-[11px] text-[#9CA3AF] font-semibold uppercase tracking-wider mb-0.5">Call Us (India)</p>
                <p className="text-[15px] font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">
                  +91 87676 56900
                </p>
              </div>
            </a>
            <a
              href="https://wa.me/18046504477"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] px-6 py-4 hover:border-[#2563EB] hover:bg-[#EFF6FF] transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-[11px] text-[#9CA3AF] font-semibold uppercase tracking-wider mb-0.5">WhatsApp Support (24x7)</p>
                <p className="text-[15px] font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">
                  +18046504477
                </p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] px-6 py-4 transition-all duration-200 group">
              <div className="w-10 h-10 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0">
                <Mail className="h-4 w-4 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-[11px] text-[#9CA3AF] font-semibold uppercase tracking-wider mb-0.5">Email Support</p>
                <div className="flex flex-col gap-0.5 text-[13px] font-bold text-[#111827]">
                  <a href="mailto:info@triptootravels.com" className="hover:text-[#2563EB] transition-colors">info@triptootravels.com</a>
                  <a href="mailto:support@triptootravels.com" className="hover:text-[#2563EB] transition-colors">support@triptootravels.com</a>
                  <a href="mailto:reservations@triptootravels.com" className="hover:text-[#2563EB] transition-colors text-amber-600">reservations@triptootravels.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Offices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offices.map(({ flag, country, name, address, note }) => (
              <div
                key={country}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[18px] p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-[28px] block mb-4">{flag}</span>
                <p className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-widest mb-1">
                  {country}
                </p>
                <p className="text-[14px] font-bold text-[#111827] mb-2 leading-snug">{name}</p>
                <div className="flex items-start gap-1.5 text-[12px] text-[#6B7280] leading-relaxed">
                  <MapPin className="w-3.5 h-3.5 text-[#9CA3AF] shrink-0 mt-0.5" />
                  <span>{address}</span>
                </div>
                {note && (
                  <span className="inline-block mt-3 text-[11px] font-semibold text-[#D97706] bg-[#FFFBEB] border border-[#FDE68A] rounded-full px-3 py-1">
                    {note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <p className="text-[11px] font-extrabold text-[#F59E0B] uppercase tracking-[0.2em] mb-4">
            Ready to travel?
          </p>
          <h2 className="text-[2rem] sm:text-[2.6rem] font-extrabold text-white leading-tight mb-6">
            Your next adventure<br />is one click away.
          </h2>
          <p className="text-[#9CA3AF] text-[15px] mb-8 leading-relaxed">
            Browse our handpicked packages or talk to one of our travel experts to plan something truly personal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/packages"
              className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold px-8 py-3.5 rounded-[12px] text-[14px] transition-all duration-200 hover:shadow-lg"
            >
              Browse Packages
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-3.5 rounded-[12px] text-[14px] border border-white/20 transition-all duration-200"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
