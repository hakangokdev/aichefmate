"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface HeroSectionProps {
  className?: string;
  onTryDemo?: () => void;
  onStartFree?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  className,
  onTryDemo,
  onStartFree,
}) => {
  return (
    <section className={cn(
      'relative bg-[#F1F2ED] overflow-hidden',
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="relative">
          {/* Main Headline */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-medium text-[#213D34] leading-tight mb-6">
              Elevate Your Mealtime with<br />
              AI-Powered Personalization
            </h1>
            <p className="text-[#213D34] text-lg md:text-xl lg:text-[22px] font-normal max-w-lg mx-auto">
              Effortless Planning, Healthier Eating
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 lg:mb-16">
            <Button
              variant="secondary"
              size="lg"
              onClick={onTryDemo}
              className="w-full sm:w-auto"
            >
              Try Our Demo
            </Button>
            <Button
              variant="accent"
              size="lg"
              onClick={onStartFree}
              className="w-full sm:w-auto"
            >
              Start For Free
            </Button>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
            {/* Left Statistics Card - 95% */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-white rounded-[34px] p-4 lg:p-6 shadow-sm">
                <div className="mb-4">
                  <Image
                    src="/green-bag-image.png"
                    alt="Green shopping bag"
                    width={260}
                    height={293}
                    className="w-full h-48 lg:h-56 object-cover rounded-2xl"
                  />
                </div>
                <div className="text-[#213D34]">
                  <h3 className="font-heading text-3xl lg:text-[48px] font-medium leading-tight">
                    95%
                  </h3>
                  <p className="text-base lg:text-[20px] font-normal mt-2">
                    Improved Eating<br />Habits
                  </p>
                </div>
              </div>
            </div>

            {/* Center Hero Image */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-md">
                <Image
                  src="/hero-main-image.png"
                  alt="Delicious healthy meal"
                  width={400}
                  height={480}
                  className="w-full h-auto rounded-[42px] shadow-lg"
                  priority
                />
                
                {/* Floating Icons - Smaller for better fit */}
                <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-black flex items-center justify-center bg-white">
                    <Image
                      src="/carrot-icon.png"
                      alt="Carrot icon"
                      width={24}
                      height={24}
                      className="w-5 h-5 lg:w-6 lg:h-6"
                    />
                  </div>
                </div>

                <div className="absolute -top-1 right-2 lg:-top-2 lg:right-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#D9EF78] flex items-center justify-center">
                    <Image
                      src="/ingredients-icon.png"
                      alt="Ingredients icon"
                      width={24}
                      height={24}
                      className="w-5 h-5 lg:w-6 lg:h-6"
                    />
                  </div>
                </div>

                <div className="absolute top-1/4 -right-2 lg:-right-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                    <Image
                      src="/cherry-icon.png"
                      alt="Cherry icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                  </div>
                </div>

                <div className="absolute bottom-6 -left-1 lg:bottom-8 lg:-left-3">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#213D34] flex items-center justify-center">
                    <Image
                      src="/bread-icon.png"
                      alt="Bread icon"
                      width={24}
                      height={24}
                      className="w-5 h-5 lg:w-6 lg:h-6"
                    />
                  </div>
                </div>
              </div>

              {/* 30,000+ Users Card - Positioned better */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 lg:-bottom-6">
                <div className="bg-[#213D34] rounded-[34px] px-4 py-3 lg:px-6 lg:py-4 text-center min-w-[240px] lg:min-w-[320px]">
                  <h3 className="font-heading text-2xl lg:text-[48px] font-medium text-[#D9EF78] leading-tight">
                    30 000 +
                  </h3>
                  <p className="text-[#D9EF78] text-base lg:text-[20px] font-normal">
                    Happy Users
                  </p>
                </div>
              </div>
            </div>

            {/* Right Statistics Card - 25% */}
            <div className="lg:col-span-3 order-3">
              <div className="bg-white rounded-[34px] p-4 lg:p-6 shadow-sm">
                <div className="text-[#213D34] mb-4">
                  <h3 className="font-heading text-3xl lg:text-[48px] font-medium leading-tight">
                    25%
                  </h3>
                  <p className="text-base lg:text-[20px] font-normal">
                    Saved on Groceries
                  </p>
                </div>
                <div>
                  <Image
                    src="/grocery-bag-image.png"
                    alt="Grocery bag with vegetables"
                    width={260}
                    height={293}
                    className="w-full h-48 lg:h-56 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom spacing for the floating card */}
      <div className="h-12 lg:h-16"></div>
    </section>
  );
}; 