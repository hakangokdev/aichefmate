"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TestimonialsProps {
  className?: string;
}

const testimonials = [
  {
    id: 1,
    quote: "Since using AIChefMate, I've rediscovered my love for cooking! The meal plans are easy and delicious. It's been a game-changer for my busy lifestyle.",
    name: "Emily R.",
    avatar: "/testimonial-emily.jpg",
    quoteIcon: "/quote-icon-1.svg",
    bgColor: "bg-[#F1F2ED]",
    textColor: "text-[#213D34]",
    iconColor: "text-[#213D34]"
  },
  {
    id: 2,
    quote: "I never knew healthy eating could be this simple and satisfying. Thanks to AIChefMate, my family enjoys diverse, nutritious meals every day.",
    name: "Mark T.",
    avatar: "/testimonial-mark.jpg",
    quoteIcon: "/quote-icon-2.svg",
    bgColor: "bg-[#213D34]",
    textColor: "text-[#F8F5EF]",
    iconColor: "text-[#D9EF78]"
  },
  {
    id: 3,
    quote: "The grocery savings have been incredible! Plus, every meal feels tailored just for me. I'm eating better and feeling great. A big thumbs up!",
    name: "Sarah J.",
    avatar: "/testimonial-sarah.jpg",
    quoteIcon: "/quote-icon-3.svg",
    bgColor: "bg-[#F1F2ED]",
    textColor: "text-[#213D34]",
    iconColor: "text-[#213D34]"
  },
  {
    id: 4,
    quote: "Switching to AIChefMate has been a revelation for my meal prep routine. The AI-generated plans are spot-on with my tastes and nutritional needs, making healthy eating effortless and enjoyable.",
    name: "Rebecca S.",
    avatar: "/testimonial-rebecca.jpg",
    quoteIcon: "/quote-icon-4.svg",
    bgColor: "bg-[#F1F2ED]",
    textColor: "text-[#213D34]",
    iconColor: "text-[#213D34]"
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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

  const cardVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section className={cn(
      'bg-white py-16 lg:py-24 overflow-hidden',
      className
    )} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7 mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="font-heading text-3xl lg:text-[55px] font-medium text-[#213D34]"
            variants={cardVariants}
          >
            Testimonials
          </motion.h2>
          
          {/* Decorative Line */}
          <motion.div 
            className="w-8 h-12 lg:w-[50px] lg:h-[87px] border-l-2 border-[#213D34] transform rotate-12"
            variants={cardVariants}
          ></motion.div>
          
          <motion.div 
            className="max-w-sm lg:max-w-md text-center lg:text-left"
            variants={cardVariants}
          >
            <p className="text-[#213D34] text-base lg:text-[22px] font-normal leading-relaxed">
              Real stories from satisfied users: see how our platform changes lives
            </p>
          </motion.div>
        </motion.div>

        {/* Desktop View - All Cards Visible */}
        <div className="hidden lg:block">
          <motion.div 
            className="flex gap-5 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "rounded-[24px] p-12 lg:p-[60px_50px] flex flex-col gap-4 w-full max-w-[395px] h-[439px]",
                  testimonial.bgColor
                )}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Quote Section */}
                <div className="flex flex-col items-end gap-4 flex-1">
                  <p className={cn(
                    "text-[22px] font-normal leading-[1.17] w-[295px]",
                    testimonial.textColor
                  )}>
                    {testimonial.quote}
                  </p>
                  <div className="w-[29px] h-[21px] flex-shrink-0">
                    <Image
                      src={testimonial.quoteIcon}
                      alt="Quote"
                      width={29}
                      height={21}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Person Section */}
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className={cn(
                    "text-[22px] font-normal flex-1",
                    testimonial.textColor
                  )}>
                    {testimonial.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile View - Carousel */}
        <div className="lg:hidden relative">
          <motion.div 
            className="overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              key={currentIndex}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={cn(
                "rounded-[24px] p-8 lg:p-[60px_50px] flex flex-col gap-4 mx-auto max-w-[395px] h-[439px]",
                testimonials[currentIndex].bgColor
              )}
            >
              {/* Quote Section */}
              <div className="flex flex-col items-end gap-4 flex-1">
                <p className={cn(
                  "text-[20px] lg:text-[22px] font-normal leading-[1.17]",
                  testimonials[currentIndex].textColor
                )}>
                  {testimonials[currentIndex].quote}
                </p>
                <div className="w-[29px] h-[21px] flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].quoteIcon}
                    alt="Quote"
                    width={29}
                    height={21}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Person Section */}
              <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    width={60}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className={cn(
                  "text-[20px] lg:text-[22px] font-normal flex-1",
                  testimonials[currentIndex].textColor
                )}>
                  {testimonials[currentIndex].name}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === currentIndex ? "bg-[#213D34]" : "bg-[#213D34]/30"
                )}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 