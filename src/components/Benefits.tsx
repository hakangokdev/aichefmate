"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface BenefitsProps {
  className?: string;
}

const benefits = [
  {
    id: 1,
    title: "Personalized Nutrition",
    description: "Get meal plans tailored to your unique dietary needs, preferences, and goals, ensuring a balanced and enjoyable diet.",
    bgColor: "bg-[#D9EF78]",
    textColor: "text-[#213D34]",
  },
  {
    id: 2,
    title: "Time-Saving Convenience", 
    description: "Say goodbye to meal planning stress. Our AI-driven platform simplifies your weekly meal preparation, saving you valuable time.",
    bgColor: "bg-white",
    textColor: "text-[#213D34]",
  },
  {
    id: 3,
    title: "Healthier Eating Habits",
    description: "Easily adopt a healthier lifestyle with nutrient-rich meal plans and educational content on nutrition and wellness.",
    bgColor: "bg-[#F1F2ED]",
    textColor: "text-[#213D34]",
  },
  {
    id: 4,
    title: "Cost-Effective Shopping",
    description: "Reduce food waste and save money with efficient grocery shopping lists that align perfectly with your meal plans.",
    bgColor: "bg-white",
    textColor: "text-[#213D34]",
  },
  {
    id: 5,
    title: "Seamless Grocery Delivery",
    description: "Enjoy the convenience of having all your meal ingredients delivered right to your doorstep through our local grocery store partnerships.",
    bgColor: "bg-white",
    textColor: "text-[#213D34]",
  },
  {
    id: 6,
    title: "Community Support",
    description: "Join a community of like-minded individuals, share experiences, recipes, and tips, and get motivated on your journey to healthier eating.",
    bgColor: "bg-[#213D34]",
    textColor: "text-[#D9EF78]",
    descriptionColor: "text-[#F8F5EF]",
    border: "border-2 border-[#213D34]",
  },
];

export const Benefits: React.FC<BenefitsProps> = ({
  className,
}) => {
  return (
    <section className={cn(
      'bg-white py-16 lg:py-24',
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7 mb-16 lg:mb-24">
          <h2 className="font-heading text-3xl lg:text-[55px] font-medium text-[#213D34]">
            Benefits
          </h2>
          
          {/* Decorative Line */}
          <div className="w-8 h-12 lg:w-[50px] lg:h-[87px] border-l-2 border-[#213D34] transform rotate-12"></div>
          
          <div className="max-w-sm lg:max-w-md text-center lg:text-left">
            <p className="text-[#213D34] text-base lg:text-[22px] font-normal leading-relaxed">
              Get meal plans tailored to your unique dietary needs, preferences, and goals, ensuring a balanced and enjoyable diet.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-8 lg:space-y-16">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {/* Card 1 - Personalized Nutrition */}
            <div className={cn(
              "rounded-[240px] p-8 lg:p-12 text-center min-h-[400px] lg:min-h-[546px] flex flex-col justify-center",
              benefits[0].bgColor
            )}>
              <h3 className={cn(
                "font-heading text-2xl lg:text-[40px] font-normal leading-tight mb-6 lg:mb-10",
                benefits[0].textColor
              )}>
                {benefits[0].title}
              </h3>
              <p className={cn(
                "text-base lg:text-[22px] font-normal leading-relaxed",
                benefits[0].textColor
              )}>
                {benefits[0].description}
              </p>
            </div>

            {/* Image 1 */}
            <div className="rounded-[240px] overflow-hidden min-h-[400px] lg:min-h-[546px]">
              <Image
                src="/benefits-image-1.png"
                alt="Personalized nutrition illustration"
                width={394}
                height={546}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card 2 - Time-Saving Convenience */}
            <div className={cn(
              "rounded-[240px] text-center min-h-[320px] lg:min-h-[437px] flex flex-col justify-center items-center p-8",
              benefits[1].bgColor
            )}>
              <h3 className={cn(
                "font-heading text-2xl lg:text-[40px] font-normal leading-tight mb-6 lg:mb-10",
                benefits[1].textColor
              )}>
                {benefits[1].title}
              </h3>
              <p className={cn(
                "text-base lg:text-[22px] font-normal leading-relaxed max-w-[294px]",
                benefits[1].textColor
              )}>
                {benefits[1].description}
              </p>
            </div>

            {/* Card 3 - Healthier Eating Habits */}
            <div className={cn(
              "rounded-[266px] p-8 lg:p-12 text-center min-h-[400px] lg:min-h-[546px] flex flex-col justify-center",
              benefits[2].bgColor
            )}>
              <h3 className={cn(
                "font-heading text-2xl lg:text-[40px] font-normal leading-tight mb-6 lg:mb-10",
                benefits[2].textColor
              )}>
                {benefits[2].title}
              </h3>
              <p className={cn(
                "text-base lg:text-[22px] font-normal leading-relaxed max-w-[294px] mx-auto",
                benefits[2].textColor
              )}>
                {benefits[2].description}
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {/* Card 4 - Cost-Effective Shopping */}
            <div className={cn(
              "text-center min-h-[320px] lg:min-h-[394px] flex flex-col justify-center items-center p-8",
              benefits[3].bgColor
            )}>
              <h3 className={cn(
                "font-heading text-2xl lg:text-[40px] font-normal leading-tight mb-6 lg:mb-10",
                benefits[3].textColor
              )}>
                {benefits[3].title}
              </h3>
              <p className={cn(
                "text-base lg:text-[22px] font-normal leading-relaxed max-w-[294px]",
                benefits[3].textColor
              )}>
                {benefits[3].description}
              </p>
            </div>

            {/* Card 5 - Seamless Grocery Delivery */}
            <div className={cn(
              "text-center min-h-[320px] lg:min-h-[394px] flex flex-col justify-center items-center p-8 lg:p-16",
              benefits[4].bgColor
            )}>
              <h3 className={cn(
                "font-heading text-2xl lg:text-[40px] font-normal leading-tight mb-6 lg:mb-10",
                benefits[4].textColor
              )}>
                {benefits[4].title}
              </h3>
              <p className={cn(
                "text-base lg:text-[22px] font-normal leading-relaxed max-w-[294px]",
                benefits[4].textColor
              )}>
                {benefits[4].description}
              </p>
            </div>

            {/* Card 6 - Community Support */}
            <div className={cn(
              "rounded-[266px] p-8 lg:p-12 text-center min-h-[400px] lg:min-h-[546px] flex flex-col justify-center border-2 border-[#213D34]",
              benefits[5].bgColor
            )}>
              <h3 className={cn(
                "font-heading text-2xl lg:text-[40px] font-normal leading-tight mb-6 lg:mb-10",
                benefits[5].textColor
              )}>
                {benefits[5].title}
              </h3>
              <p className={cn(
                "text-base lg:text-[22px] font-normal leading-relaxed max-w-[294px] mx-auto",
                benefits[5].descriptionColor || benefits[5].textColor
              )}>
                {benefits[5].description}
              </p>
            </div>

            {/* Image 2 */}
            <div className="rounded-[240px] overflow-hidden min-h-[320px] lg:min-h-[394px]">
              <Image
                src="/benefits-image-2.png"
                alt="Community support illustration"
                width={394}
                height={394}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 