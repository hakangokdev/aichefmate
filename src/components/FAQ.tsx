"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface FAQProps {
  className?: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
  isExpanded: boolean;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How does the AI create personalized meal plans?",
    answer: "Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.",
    isExpanded: true
  },
  {
    id: 2,
    question: "Can I integrate special dietary requirements into my meal plan?",
    answer: "Absolutely! Our platform is designed to accommodate a range of dietary needs, including vegetarian, vegan, gluten-free, and keto options. Just specify your requirements in your profile, and your meal plans will be adjusted accordingly.",
    isExpanded: true
  },
  {
    id: 3,
    question: "How does the grocery delivery service work?",
    answer: "",
    isExpanded: false
  },
  {
    id: 4,
    question: "How does the platform accommodate allergies and food sensitivities?",
    answer: "",
    isExpanded: false
  },
  {
    id: 5,
    question: "Are there options for budget-conscious users?",
    answer: "",
    isExpanded: false
  },
  {
    id: 6,
    question: "Can I adjust my meal plans after they've been created?",
    answer: "",
    isExpanded: false
  },
  {
    id: 7,
    question: "How can I access nutrition education and healthy eating tips?",
    answer: "",
    isExpanded: false
  },
  {
    id: 8,
    question: "What makes your AI-driven meal planning different from other meal planning services?",
    answer: "",
    isExpanded: false
  }
];

// Arrow Icon Components
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

export const FAQ: React.FC<FAQProps> = ({ className }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([1, 2]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const toggleExpansion = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className={cn(
      'bg-white py-16 lg:py-24',
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
            className="font-heading text-3xl lg:text-[55px] font-medium text-[#213D34] leading-[1.2em] max-w-[738px] text-center lg:text-left"
            variants={headerVariants}
          >
            Frequently Asked Questions
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
              Meal planning made easy: your questions, answered
            </p>
          </motion.div>
        </motion.div>

        {/* Questions & Answers */}
        <motion.div 
          className="flex flex-col items-center gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Expanded Cards */}
          <div className="flex flex-col lg:flex-row gap-10 w-full justify-center">
            {faqData.filter(item => item.isExpanded).map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-[#F1F2ED] rounded-[24px] p-[50px] flex flex-row gap-10 max-w-[731px] h-auto lg:h-[312px]"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleExpansion(item.id)}
                  className="flex-shrink-0 w-16 h-16 bg-[#D9EF78] flex items-center justify-center hover:bg-[#c5d65f] transition-colors text-[#213D34]"
                >
                  {expandedItems.includes(item.id) ? (
                    <ChevronUpIcon className="w-8 h-8" />
                  ) : (
                    <ChevronDownIcon className="w-8 h-8" />
                  )}
                </button>

                {/* Text Content */}
                <div className="flex flex-col gap-[30px] flex-1">
                  <h3 className="font-body text-xl lg:text-[22px] font-semibold text-[#213D34] leading-[1.17em]">
                    {item.question}
                  </h3>
                  
                  <AnimatePresence>
                    {expandedItems.includes(item.id) && item.answer && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#213D34] text-base lg:text-[22px] font-normal leading-[1.17em] overflow-hidden"
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Collapsed Questions Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-[140px] gap-y-8 w-full max-w-[1530px]"
            variants={containerVariants}
          >
            {faqData.filter(item => !item.isExpanded).map((item, index) => (
              <motion.div
                key={item.id}
                className="flex flex-row items-center gap-10 cursor-pointer group"
                variants={itemVariants}
                onClick={() => toggleExpansion(item.id)}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                {/* Expand Button */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center group-hover:bg-[#F1F2ED] transition-colors text-[#213D34]">
                  <ChevronDownIcon className="w-8 h-8" />
                </div>

                {/* Question Text */}
                <h3 className="font-body text-lg lg:text-[22px] font-semibold text-[#213D34] leading-[1.17em] flex-1 group-hover:text-[#4a6b5c] transition-colors">
                  {item.question}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 