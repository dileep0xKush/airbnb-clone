'use client';

import { Globe } from 'lucide-react';
import { Container } from '@/components/common';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Top Footer Section: Links Grid */}
      <Container className="py-12 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="font-semibold text-gray-900 text-sm mb-4">Support</h5>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
              <li><a href="#" className="hover:underline">Report neighbourhood concern</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 text-sm mb-4">Hosting</h5>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
              <li><a href="#" className="hover:underline">Airbnb-friendly apartments</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 text-sm mb-4">Airbnb</h5>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Gift cards</a></li>
              <li><a href="#" className="hover:underline">Airbnb.org disaster relief</a></li>
            </ul>
          </div>
          <div className="md:col-span-3 lg:col-span-1">
            <h5 className="font-semibold text-gray-900 text-sm mb-4">Inspire</h5>
            <p className="text-sm text-gray-600 mb-4">
              Explore outstanding vacation rentals, unique cabins, and beach villas around the globe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.752.054 1.14.052 1.662.242 2.074.403.546.213.935.467 1.344.876.41.409.664.798.876 1.344.16.412.35.934.402 2.074.045.968.055 1.322.055 3.752 0 2.43-.01 2.784-.054 3.752-.052 1.14-.242 1.662-.403 2.074a3.741 3.741 0 01-.876 1.344 3.742 3.742 0 01-1.344.876c-.412.16-.934.35-2.074.402-.968.045-1.322.055-3.752.055-2.43 0-2.784-.01-3.752-.054-1.14-.052-1.662-.242-2.074-.403a3.722 3.722 0 01-1.344-.876 3.721 3.721 0 01-.876-1.344c-.16-.412-.35-.934-.402-2.074-.045-.968-.055-1.322-.055-3.752 0-2.43.01-2.784.054-3.752.052-1.14.242-1.662.403-2.074a3.758 3.758 0 01.876-1.344 3.76 3.76 0 011.344-.876c.412-.16.934-.35 2.074-.402.968-.045 1.322-.055 3.752-.055zm-1.037 2.004c-2.413.11-3.195.916-3.304 3.304-.01.22-.016.539-.016 1.213v4.96c0 .674.007.993.016 1.213.11 2.383.89 3.19 3.304 3.304.22.01.539.016 1.213.016h4.96c.674 0 .993-.007 1.213-.016 2.408-.11 3.19-.916 3.304-3.304.01-.22.016-.539.016-1.213v-4.96c0-.674-.007-.993-.016-1.213-.11-2.383-.89-3.19-3.304-3.304-.22-.01-.539-.016-1.213-.016h-4.96c-.674 0-.993.007-1.213.016zM12 8.44a3.56 3.56 0 100 7.12 3.56 3.56 0 000-7.12zM12 10a2 2 0 110 4 2 2 0 010-4zm4.845-2.17a1.04 1.04 0 110 2.08 1.04 1.04 0 010-2.08z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Footer Section: Copyright & Settings */}
      <Container className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
          <span>© 2026 Airbnb, Inc.</span>
          <span className="hidden sm:inline">·</span>
          <a href="#" className="hover:underline">Privacy</a>
          <span className="hidden sm:inline">·</span>
          <a href="#" className="hover:underline">Terms</a>
          <span className="hidden sm:inline">·</span>
          <a href="#" className="hover:underline">Sitemap</a>
          <span className="hidden sm:inline">·</span>
          <a href="#" className="hover:underline">UK Modern Slavery Act</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 font-medium hover:underline text-gray-800">
            <Globe className="w-4 h-4" />
            <span>English (GB)</span>
          </button>
          <button className="font-medium hover:underline text-gray-800">
            <span>$ USD</span>
          </button>
        </div>
      </Container>
    </footer>
  );
}
