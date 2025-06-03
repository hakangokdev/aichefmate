"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface DemoSectionProps {
  className?: string;
  onPlayVideo?: () => void;
}

export const DemoSection: React.FC<DemoSectionProps> = ({
  className,
  onPlayVideo,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={cn(
      'bg-white py-12 lg:py-20',
      className
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7 mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl lg:text-[48px] font-medium text-[#213D34]">
            Demo
          </h2>
          
          {/* Decorative Line */}
          <div className="w-8 h-12 lg:w-[40px] lg:h-[70px] border-l-2 border-[#213D34] transform rotate-12"></div>
          
          <div className="max-w-sm lg:max-w-md text-center lg:text-left">
            <p className="text-[#213D34] text-base lg:text-[20px] font-normal leading-relaxed">
              See how it works: your personalized meal planning journey
            </p>
          </div>
        </div>

        {/* Main Demo Content */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Video Section */}
          <div className="lg:col-span-7">
            <div className="relative group">
              {/* Video Thumbnail */}
              <div 
                className="relative cursor-pointer"
                onClick={onPlayVideo}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src="/demo-video-thumbnail.png"
                  alt="Demo video thumbnail"
                  width={800}
                  height={480}
                  className="w-full h-auto rounded-[50px] lg:rounded-[100px] border border-[#213D34] shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={cn(
                    "w-14 h-14 lg:w-18 lg:h-18 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
                    isHovered ? "scale-110 bg-[#F1F2ED]" : ""
                  )}>
                    <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
                      {/* Play Icon */}
                      <svg 
                        className="w-5 h-5 lg:w-6 lg:h-6 text-[#213D34] ml-0.5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className={cn(
                  "absolute inset-0 bg-black bg-opacity-10 rounded-[50px] lg:rounded-[100px] transition-opacity duration-300",
                  isHovered ? "opacity-100" : "opacity-0"
                )} />
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="lg:col-span-5">
            <div className="text-center lg:text-right">
              <blockquote className="text-[#213D34] font-heading text-2xl lg:text-[48px] font-medium leading-tight">
                Every meal is a chance to nourish your body, inspire your mind, and feed your soul.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 