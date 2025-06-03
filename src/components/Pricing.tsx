"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface PricingProps {
  className?: string;
  onFreePlan?: () => void;
  onStandardPlan?: () => void;
  onPremiumPlan?: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  className,
  onFreePlan,
  onStandardPlan,
  onPremiumPlan,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const featuredCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <section className={cn(
      'bg-[#F1F2ED] py-16 lg:py-24 overflow-hidden',
      className
    )} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Header */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7 mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="font-heading text-3xl lg:text-[55px] font-medium text-[#213D34] leading-[1.2em]"
            variants={headerVariants}
          >
            Pricing
          </motion.h2>
          
          {/* Decorative Line */}
          <motion.div 
            className="w-8 h-12 lg:w-[50px] lg:h-[87px] border-l-2 border-[#213D34] transform rotate-12"
            variants={headerVariants}
          ></motion.div>
          
          <motion.div 
            className="max-w-sm lg:max-w-[435px] text-center lg:text-left"
            variants={headerVariants}
          >
            <p className="text-[#213D34] text-base lg:text-[22px] font-normal leading-[1.17em]">
              Find your perfect plan: tailored pricing for every need
            </p>
          </motion.div>
        </motion.div>

        {/* Pricing Plans */}
        <div className="flex justify-center">
          <motion.div 
            className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-0"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Free Plan */}
            <motion.div
              className="bg-white border-2 border-[#213D34] lg:border-r-0 rounded-[43px] lg:rounded-r-none lg:rounded-l-[43px] p-12 lg:p-[70px_50px] flex flex-col w-full max-w-[450px] lg:w-[450px] lg:h-[881px]"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="w-[350px] h-[741px] mx-auto relative">
                {/* Plan Name */}
                <h3 className="absolute top-0 left-[93px] w-[164px] h-[48px] font-heading text-[40px] font-normal text-[#213D34] text-center leading-[1.2em]">
                  Free Plan
                </h3>

                {/* Price */}
                <div className="absolute top-[72px] left-[146px] w-[58px] h-[53px] text-[45px] font-semibold text-[#213D34] text-center leading-[1.17em]">
                  $0
                </div>
                <div className="absolute top-[130px] left-[118px] w-[113px] h-[26px] text-[22px] font-normal text-[#213D34] text-center leading-[1.17em]">
                  per month
                </div>

                {/* Features */}
                <div className="absolute top-[206px] left-0 w-[350px] h-[26px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Basic AI meal planning
                </div>
                <div className="absolute top-[256px] left-0 w-[350px] h-[26px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Limited recipe access
                </div>
                <div className="absolute top-[306px] left-0 w-[350px] h-[26px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Manual grocery list creation
                </div>

                {/* Divider Line */}
                <div className="absolute top-[392px] left-0 w-[350px] h-px bg-[#213D34]"></div>

                {/* Description */}
                <div className="absolute top-[447px] left-0 w-[350px] h-[78px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Best For: Those who want to explore the platform's basic functionalities.
                </div>

                {/* CTA Button */}
                <div className="absolute top-[677px] left-0 w-[350px]">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onFreePlan}
                    className="w-full border-2 border-[#213D34] text-[22px] font-medium py-[18px] px-[40px] hover:bg-[#213D34] hover:text-white"
                  >
                    Get Started For Free
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Standard Plan (Featured) */}
            <motion.div
              className="bg-[#D9EF78] border-2 border-[#213D34] rounded-[43px] p-12 lg:p-[70px_50px] flex flex-col w-full max-w-[480px] lg:w-[480px] lg:h-[981px] relative lg:-mt-12 lg:-mb-12 shadow-2xl lg:shadow-[0_25px_50px_-12px_rgba(33,61,52,0.3)]"
              variants={featuredCardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              style={{
                zIndex: 10,
              }}
            >
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#213D34] text-white px-6 py-2 rounded-full text-sm lg:text-base font-medium">
                Most Popular
              </div>

              <div className="w-[380px] h-[791px] mx-auto relative">
                {/* Plan Name */}
                <h3 className="absolute top-0 left-[65px] w-[250px] h-[48px] font-heading text-[40px] font-normal text-[#213D34] text-center leading-[1.2em]">
                  Standard Plan
                </h3>

                {/* Price */}
                <div className="absolute top-[72px] left-[127px] w-[125px] h-[53px] text-[45px] font-semibold text-[#213D34] text-center leading-[1.17em]">
                  $9.99
                </div>
                <div className="absolute top-[130px] left-[133px] w-[113px] h-[26px] text-[22px] font-normal text-[#213D34] text-center leading-[1.17em]">
                  per month
                </div>

                {/* Features */}
                <div className="absolute top-[206px] left-0 w-[380px] h-[52px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Comprehensive AI meal planning
                </div>
                <div className="absolute top-[282px] left-0 w-[380px] h-[26px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Full recipe library access
                </div>
                <div className="absolute top-[332px] left-0 w-[380px] h-[26px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Automated grocery lists
                </div>
                <div className="absolute top-[382px] left-0 w-[380px] h-[26px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Grocery delivery integration
                </div>

                {/* Divider Line */}
                <div className="absolute top-[468px] left-0 w-[350px] h-px bg-[#213D34]"></div>

                {/* Description */}
                <div className="absolute top-[523px] left-0 w-[380px] h-[78px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Best For: Individuals or families looking for full meal planning support and convenience.
                </div>

                {/* CTA Button */}
                <div className="absolute top-[727px] left-0 w-[380px]">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={onStandardPlan}
                    className="w-full bg-[#213D34] text-white text-[22px] font-medium py-[18px] px-[40px] hover:bg-[#1a2e28] shadow-lg"
                  >
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              className="bg-white border-2 border-[#213D34] lg:border-l-0 rounded-[43px] lg:rounded-l-none lg:rounded-r-[43px] p-12 lg:p-[70px_50px] flex flex-col w-full max-w-[450px] lg:w-[450px] lg:h-[881px]"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="w-[350px] h-[741px] mx-auto relative">
                {/* Plan Name */}
                <h3 className="absolute top-0 left-[51px] w-[248px] h-[48px] font-heading text-[40px] font-normal text-[#213D34] text-center leading-[1.2em]">
                  Premium Plan
                </h3>

                {/* Price */}
                <div className="absolute top-[72px] left-[103px] w-[143px] h-[53px] text-[45px] font-semibold text-[#213D34] text-center leading-[1.17em]">
                  $19.99
                </div>
                <div className="absolute top-[130px] left-[118px] w-[113px] h-[26px] text-[22px] font-normal text-[#213D34] text-center leading-[1.17em]">
                  per month
                </div>

                {/* Features */}
                <div className="absolute top-[206px] left-0 w-[350px] h-[26px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  All Standard features
                </div>
                <div className="absolute top-[256px] left-0 w-[350px] h-[26px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Exclusive gourmet recipes
                </div>
                <div className="absolute top-[306px] left-0 w-[350px] h-[26px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Nutritional consultations
                </div>
                <div className="absolute top-[356px] left-0 w-[350px] h-[52px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Advanced customization options
                </div>

                {/* Divider Line */}
                <div className="absolute top-[468px] left-0 w-[350px] h-px bg-[#213D34]"></div>

                {/* Description */}
                <div className="absolute top-[523px] left-0 w-[350px] h-[104px] text-[22px] font-normal text-[#213D34] leading-[1.17em]">
                  Best For: Users seeking a premium culinary experience with added personalization and expert guidance.
                </div>

                {/* CTA Button */}
                <div className="absolute top-[677px] left-0 w-[350px]">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onPremiumPlan}
                    className="w-full border-2 border-[#213D34] text-[22px] font-medium py-[18px] px-[40px] hover:bg-[#213D34] hover:text-white"
                  >
                    Go Premium
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 