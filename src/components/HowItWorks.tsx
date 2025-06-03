"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface HowItWorksProps {
  className?: string;
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  onGetStarted,
  onLearnMore,
}) => {
  return (
    <section className={cn(
      'relative bg-[#F1F2ED] py-16 lg:py-24 overflow-hidden',
      className
    )}>
      {/* Background curved element */}
      <div className="absolute bottom-0 left-0 w-full max-w-[700px] h-48 bg-[#F1F2ED] rounded-r-[968px] z-0"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7 mb-16 lg:mb-24 px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-[55px] font-medium text-[#213D34]">
            How it works
          </h2>
          
          {/* Decorative Line */}
          <div className="w-8 h-12 lg:w-[50px] lg:h-[87px] border-l-2 border-[#213D34] transform rotate-12"></div>
          
          <div className="max-w-sm lg:max-w-md text-center lg:text-left">
            <p className="text-[#213D34] text-base lg:text-[22px] font-normal leading-relaxed">
              Step into the world of hassle-free meal planning with our easy 3-step process
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-24 items-center">
            {/* Left Content - Step Information */}
            <div className="lg:col-span-5 space-y-8">
              {/* Step Number */}
              <div className="space-y-4">
                <div className="text-[#213D34] font-heading text-5xl lg:text-[61px] font-normal leading-tight">
                  01
                </div>
                <div className="text-[#213D34] text-sm lg:text-[40px] font-normal">
                  01/03
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-[#213D34] font-heading text-2xl lg:text-[40px] font-normal leading-tight">
                Personalize Your Profile
              </h3>

              {/* Step Description */}
              <p className="text-[#213D34] text-lg lg:text-[22px] font-normal leading-relaxed max-w-lg">
                Begin by creating your profile. Tell us about your dietary preferences, nutritional goals, and budget. Our AI technology tailors every meal plan to fit your unique needs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onLearnMore}
                  className="w-full sm:w-auto border-2 border-[#213D34] hover:bg-[#213D34] hover:text-white"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </Button>
                
                <Button
                  variant="accent"
                  size="lg"
                  onClick={onGetStarted}
                  className="w-full sm:w-auto"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </Button>
              </div>
            </div>

            {/* Right Content - Images Stack */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Background Image */}
                <div className="relative">
                  <Image
                    src="/how-it-works-image-1.png"
                    alt="Meal planning interface - Step 1"
                    width={448}
                    height={537}
                    className="w-full max-w-md lg:max-w-lg h-auto rounded-[50px] shadow-lg"
                  />
                  <div className="absolute inset-0 bg-white/50 rounded-[50px]"></div>
                </div>

                {/* Middle Image - Overlapping */}
                <div className="absolute top-4 right-4 lg:top-8 lg:right-8 z-10">
                  <Image
                    src="/how-it-works-image-2.png"
                    alt="Recipe suggestions interface - Step 2"
                    width={625}
                    height={729}
                    className="w-64 lg:w-80 h-auto rounded-[50px] shadow-xl"
                  />
                  <div className="absolute inset-0 bg-white/50 rounded-[50px]"></div>
                </div>

                {/* Front Image - Top layer */}
                <div className="absolute top-0 right-8 lg:right-16 z-20">
                  <Image
                    src="/how-it-works-image-3.png"
                    alt="Grocery list and meal prep - Step 3"
                    width={725}
                    height={805}
                    className="w-72 lg:w-96 h-auto rounded-[50px] shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots (Optional) */}
        <div className="flex justify-center mt-16 space-x-3">
          <div className="w-3 h-3 bg-[#213D34] rounded-full"></div>
          <div className="w-3 h-3 bg-[#213D34]/30 rounded-full"></div>
          <div className="w-3 h-3 bg-[#213D34]/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}; 