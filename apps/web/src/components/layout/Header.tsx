'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, Globe, AlignJustify, User } from 'lucide-react';
import { Container, IconButton } from '@/components/common';
import { SearchModal } from '@/components/overlay';
import { cn } from '@/lib/cn';

interface HeaderProps {
  onSearch?: (filters: { location: string; guests: number }) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 bg-white border-b border-gray-100 transition-shadow duration-200',
          isScrolled && 'shadow-sm'
        )}
      >
        <Container className="py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Left Section: Logo */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex items-center gap-1.5 cursor-pointer">
                {/* Custom Brand Logo */}
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  className="w-8.5 h-8.5 block text-rose-500 fill-current"
                >
                  <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836 1.457 3.404 1.253 6.858-.505 9.476-1.537 2.286-4.07 3.413-7.583 3.413-3.058 0-5.796-1.012-7.6-3.024-1.805 2.012-4.542 3.024-7.6 3.024-3.513 0-6.046-1.127-7.583-3.413-1.758-2.618-1.962-6.072-.505-9.476.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.398 0-2.31.637-3.13 2.115l-.558 1.077c-1.927 3.778-6.079 12.476-7.05 14.739-1.196 2.793-1.042 5.438.257 7.37 1.05 1.56 2.822 2.302 5.568 2.302 2.502 0 4.887-.923 6.388-2.836l.525-.688.525.688c1.5 1.913 3.886 2.836 6.388 2.836 2.746 0 4.518-.742 5.568-2.302 1.3-1.932 1.453-4.577.257-7.37-.971-2.263-5.123-10.961-7.05-14.739l-.558-1.077C18.31 3.637 17.398 3 16 3zm0 9c2.316 0 4.195 2.08 4.195 4.643 0 2.22-1.42 4.127-3.35 4.542l-.24.043-.3.024-.3-.024c-1.993-.414-3.473-2.32-3.473-4.585C12.537 14.08 14.167 12 16 12zm0 2c-1.075 0-1.954 1.134-1.954 2.532 0 1.258.71 2.3 1.644 2.493l.155.024.155-.024c.934-.193 1.644-1.235 1.644-2.493 0-1.398-.879-2.532-1.954-2.532z" />
                </svg>
                <div className="hidden md:block text-rose-500 font-bold text-xl tracking-tight">airbnb</div>
              </Link>
            </div>

            {/* Middle Section: High-Fidelity Search Bar */}
            <div className="flex-initial flex justify-center">
              <div 
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center border border-gray-200 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-all cursor-pointer bg-white"
              >
                <div className="text-xs md:text-sm font-semibold text-gray-800 px-2 border-r border-gray-200">
                  Anywhere
                </div>
                <div className="hidden sm:block text-xs md:text-sm font-semibold text-gray-800 px-3 border-r border-gray-200">
                  Any week
                </div>
                <div className="text-xs md:text-sm font-normal text-gray-500 px-2 pl-3 flex items-center gap-2">
                  <span className="hidden md:inline">Add guests</span>
                  <div className="p-1.5 md:p-2 bg-rose-500 rounded-full text-white">
                    <Search className="w-3.5 h-3.5 md:w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: Controls */}
            <div className="flex-1 flex justify-end items-center gap-1 md:gap-3 relative">
              <button className="hidden lg:block px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 rounded-full transition-colors cursor-pointer">
                Airbnb your home
              </button>

              <IconButton variant="ghost" size="md" className="hidden sm:inline-flex cursor-pointer">
                <Globe className="w-5 h-5 text-gray-700" />
              </IconButton>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-3 px-3 py-2 border border-gray-200 rounded-full bg-white hover:shadow-md transition-shadow cursor-pointer"
              >
                <AlignJustify className="w-4 h-4 text-gray-600" />
                <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center overflow-hidden">
                  <User className="w-4 h-4 text-white" />
                </div>
              </button>

              {/* User Menu Dropdown */}
              {isMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-12 w-60 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-3 duration-150">
                    <div className="flex flex-col text-sm">
                      <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="px-4 py-3 hover:bg-gray-50 text-left font-semibold text-gray-900 cursor-pointer"
                      >
                        Sign up
                      </button>
                      <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="px-4 py-3 hover:bg-gray-50 text-left text-gray-700 cursor-pointer"
                      >
                        Log in
                      </button>
                      <div className="border-t border-gray-100 my-1" />
                      <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="px-4 py-3 hover:bg-gray-50 text-left text-gray-700 cursor-pointer"
                      >
                        Airbnb your home
                      </button>
                      <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="px-4 py-3 hover:bg-gray-50 text-left text-gray-700 cursor-pointer"
                      >
                        Help Centre
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>
      </header>

      {/* Embedded Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={(filters) => {
          if (onSearch) {
            onSearch(filters);
          }
        }}
      />
    </>
  );
}
