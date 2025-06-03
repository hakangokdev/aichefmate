"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface AssistanceProps {
  className?: string;
  onGetSupport?: () => void;
}

export const Assistance: React.FC<AssistanceProps> = ({
  className,
  onGetSupport,
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

  const contentVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={cn(
      'bg-[#F1F2ED] py-16 lg:py-24',
      className
    )} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7 mb-16 lg:mb-24 px-8 lg:px-[70px]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="font-heading text-3xl lg:text-[55px] font-medium text-[#213D34] leading-[1.2em] text-center lg:text-left"
            variants={headerVariants}
          >
            Need Assistance?
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
              We're here to help!
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Content */}
          <motion.div 
            className="flex flex-col gap-[50px] order-2 lg:order-1"
            variants={contentVariants}
          >
            <p className="text-[#213D34] text-2xl lg:text-[40px] font-normal leading-[1.17em] max-w-[468px]">
              Have questions or need help with AIChefMate? Our dedicated support team is ready to assist you. Get the answers and assistance you need to make the most of your meal planning experience.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                variant="accent"
                size="lg"
                onClick={onGetSupport}
                className="w-full max-w-[280px] bg-[#D9EF78] text-[#213D34] text-base lg:text-[22px] font-medium py-[18px] px-[40px] hover:bg-[#c5d65f] transition-colors"
              >
                Get Support
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={contentVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative w-full max-w-[600px] aspect-square rounded-[40px] overflow-hidden">
              <Image
                src="/assistance-hero-image.jpg"
                alt="Customer support team ready to help with AIChefMate"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 