"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. You have been added to our private register.");
  };

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
              <a href="#" className="p-2 border border-neutral-800 hover:border-red-600 hover:text-red-500 transition-colors rounded-full" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16a4 4 0 100-8 4 4 0 000 8z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 7.5V7.5m-9 0V7.5m9 4v.5"/><rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeWidth={1.5}/></svg>
              </a>
              <a href="#" className="p-2 border border-neutral-800 hover:border-red-600 hover:text-red-500 transition-colors rounded-full" aria-label="Facebook">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 2v4h-3a2 2 0 00-2 2v3h5l-1 5h-4v8H8v-8H5V8h3V6a5 5 0 015-5h4z"/></svg>
              </a>
              <a href="#" className="p-2 border border-neutral-800 hover:border-red-600 hover:text-red-500 transition-colors rounded-full" aria-label="Twitter">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.024-8-3 0 0-4.5 4.687 0 9-1.067.652-2.51 1.25-4 1 1.208 2.625 4.5 4.5 8 4.5-3.344 2.531-7.5 3-12 3 21.5 8 30.5-6 30.5-20 0-.315-.007-.63-.022-.944C20.868 5.902 21.537 4.71 22 4.01z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-semibold tracking-[0.3em] text-red-500 uppercase">
              Explore
            </h4>
            <ul className="space-y-3 font-light text-neutral-400">
              <li><Link href="/rooms" className="hover:text-white transition-colors">Suites & Rooms</Link></li>
              <li><Link href="/experiences" className="hover:text-white transition-colors">Experiences</Link></li>
              {/* <li><Link href="/dining" className="hover:text-white transition-colors">Culinary Hearth</Link></li> */}
              <li><Link href="/spa" className="hover:text-white transition-colors">Wellness Rituals</Link></li>
              <li><Link href="/offers" className="hover:text-white transition-colors">Seasonal Packages</Link></li>
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
                <span>+91 98290 76894</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>info@hotelstaycasainn.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-semibold tracking-[0.3em] text-red-500 uppercase">
              The Private Register
            </h4>
            <p className="text-neutral-400 font-light leading-relaxed">
              Subscribe to receive exclusive offers, seasonal packages, and updates from Stay Casa Inn.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative mt-2">
              <input
                type="email"
                required
                placeholder="Enter email address"
                className="w-full bg-neutral-800 text-neutral-100 placeholder-neutral-500 border border-neutral-700/50 rounded-sm py-3 px-4 text-sm font-light tracking-wide focus:outline-none focus:border-red-600 transition-colors pr-12"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 text-red-500 hover:text-red-400 transition-colors flex items-center justify-center"
                aria-label="Submit Newsletter Email"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 tracking-widest uppercase">
          <span>© {new Date().getFullYear()} HOTEL STAY CASA INN. ALL RIGHTS RESERVED.</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
