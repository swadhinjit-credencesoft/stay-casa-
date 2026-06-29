"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100 border-t border-neutral-800 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:32px_32px]" />
      
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Logo & Manifesto */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center">
              <img
                src="/stay-casa-logo.png"
                alt="Stay Casa Inn"
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-neutral-400 font-light leading-relaxed max-w-sm">
              Stay Casa Inn offers a perfect blend of comfort and warm hospitality in the heart of Jaipur. Thoughtfully designed rooms, modern amenities, and personalized service for business and leisure travelers alike.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://wa.me/9773302154" target="_blank" rel="noopener noreferrer" className="p-2 border border-neutral-800 hover:border-green-500 hover:text-green-400 transition-colors rounded-full" aria-label="WhatsApp">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              </a>
              <a href="tel:+919773302154" className="p-2 border border-neutral-800 hover:border-red-600 hover:text-red-500 transition-colors rounded-full" aria-label="Phone">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              </a>
              <a href="mailto:info@hotelstaycasainn.com" className="p-2 border border-neutral-800 hover:border-amber-500 hover:text-amber-400 transition-colors rounded-full" aria-label="Email">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-semibold tracking-[0.3em] text-red-500 uppercase">
              Explore
            </h4>
            <ul className="space-y-3 font-light text-neutral-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-white transition-colors">Rooms</Link></li>
              <li><Link href="/experiences" className="hover:text-white transition-colors">Experiences</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/tourist" className="hover:text-white transition-colors">Tourist Attractions</Link></li>
            </ul>
          </div>

          {/* Legals */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-semibold tracking-[0.3em] text-red-500 uppercase">
              Legals
            </h4>
            <ul className="space-y-3 font-light text-neutral-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link href="/rules" className="hover:text-white transition-colors">Rules &amp; Regulations</Link></li>
            </ul>
          </div>

          {/* Core Info */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-semibold tracking-[0.3em] text-red-500 uppercase">
              Concierge
            </h4>
            <ul className="space-y-4 font-light text-neutral-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4.5 h-4.5 text-neutral-500 mt-0.5 shrink-0" />
                <span>R-3-50 North Part, Indraprasth Colony, Chordia City, Sodala, Jaipur</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>+91  9773 30 21 54</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>staycasainn@gmail.com</span>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 tracking-widest uppercase">
          <span>© {new Date().getFullYear()} Designed and Developed By <a href="https://www.credencesoft.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CredenceSoft</a>, Powered By <a href="https://bookonepms.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">BookOne</a></span>
        </div>
      </div>
    </footer>
  );
}
