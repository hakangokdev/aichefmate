"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface BlogProps {
  className?: string;
  onReadArticle?: (articleId: number) => void;
}

const blogPosts = [
  {
    id: 1,
    title: "Mastering Meal Prep: Time-Saving Tips for Busy Weekdays",
    image: "/blog-meal-prep.jpg",
    titleWidth: 473
  },
  {
    id: 2,
    title: "The Power of Plant-Based: Benefits Beyond the Plate",
    image: "/blog-plant-based.jpg",
    titleWidth: 448
  },
  {
    id: 3,
    title: "Balancing Nutrients: A Guide to a Well-Rounded Diet",
    image: "/blog-nutrients.jpg",
    titleWidth: 473
  }
];

export const Blog: React.FC<BlogProps> = ({
  className,
  onReadArticle,
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

  return (
    <section className={cn(
      'bg-[#F1F2ED] py-16 lg:py-24 overflow-hidden relative',
      className
    )} ref={ref}>
      {/* Decorative Background Shape */}
      <div className="absolute top-0 left-0 w-[687px] h-[203px] bg-[#F1F2ED] rounded-l-[968px] opacity-50 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Healthy Insights
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
              Latest News, Expert Blogs, and Nutritional Learning
            </p>
          </motion.div>
        </motion.div>

        {/* Blog Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-[21px] justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-[50px] p-[30px] flex flex-col gap-[33px] w-full max-w-[533px] h-auto lg:h-[847px]"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Blog Image */}
              <div className="w-full aspect-square max-w-[473px] mx-auto rounded-[28px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={473}
                  height={473}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Title */}
              <h3 className="font-heading text-2xl lg:text-[40px] font-normal text-[#213D34] leading-[1.2em] flex-1">
                {post.title}
              </h3>

              {/* Read Article Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: (index * 0.2) + 0.8 }}
              >
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() => onReadArticle?.(post.id)}
                  className="w-full bg-[#D9EF78] text-[#213D34] text-base lg:text-[22px] font-medium py-[18px] px-[40px] hover:bg-[#c5d65f] transition-colors"
                >
                  Read Article
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 