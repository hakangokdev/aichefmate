"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface NavbarProps {
  className?: string;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
  onLoginClick,
  onSignupClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={cn(
      'bg-[#F1F2ED] sticky top-0 z-50 pt-3',
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {/* Circle Logo */}
                <div className="w-[50px] h-[50px] bg-[#213D34] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-6.88-6.88 1.37-1.37z"/>
                  </svg>
                </div>
                
                {/* Rectangle Logo */}
                <div className="w-[12px] h-[50px] bg-[#213D34] rounded-sm"></div>
              </div>
              
              {/* Logo Text - Mobile'da gizle */}
              <span className="hidden sm:block font-heading text-2xl font-semibold text-[#213D34]">
                AIChefMate
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/recipes"
              className="text-[#213D34] font-medium text-[22px] hover:text-[#D9EF78] transition-colors duration-200"
            >
              Recipes
            </Link>
            <Link
              href="/blog"
              className="text-[#213D34] font-medium text-[22px] hover:text-[#D9EF78] transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="/support"
              className="text-[#213D34] font-medium text-[22px] hover:text-[#D9EF78] transition-colors duration-200"
            >
              Customer Support
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={onLoginClick}
              className="text-[#213D34] font-medium text-[22px] hover:text-[#D9EF78] transition-colors duration-200"
            >
              Log In
            </button>
            <Button
              variant="primary"
              size="md"
              onClick={onSignupClick}
            >
              Start For Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#213D34] hover:text-[#D9EF78] focus:outline-none focus:text-[#D9EF78] transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#F1F2ED]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/recipes"
                className="block px-3 py-2 text-[#213D34] font-medium text-[20px] hover:text-[#D9EF78] hover:bg-white/50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Recipes
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-[#213D34] font-medium text-[20px] hover:text-[#D9EF78] hover:bg-white/50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/support"
                className="block px-3 py-2 text-[#213D34] font-medium text-[20px] hover:text-[#D9EF78] hover:bg-white/50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Customer Support
              </Link>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-[#213D34]/20 space-y-2">
                <button
                  onClick={() => {
                    onLoginClick?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-[#213D34] font-medium text-[20px] hover:text-[#D9EF78] hover:bg-white/50 rounded-md transition-colors duration-200"
                >
                  Log In
                </button>
                <div className="px-3">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => {
                      onSignupClick?.();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Start For Free
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 