"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface FooterProps {
  className?: string;
  onNavigationClick?: (page: string) => void;
  onSocialClick?: (platform: string) => void;
}

// Social Media Icons Components
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 50 50" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" fill="white"/>
    <path d="M35.2085 25C35.2085 19.2105 30.4897 14.5 24.6896 14.5C18.8895 14.5 14.1707 19.2105 14.1707 25C14.1707 30.2895 17.9999 34.6842 23.0207 35.3684V27.3421H20.3499V25H23.0207V23.1842C23.0207 20.5263 24.4999 19.1316 26.9999 19.1316C28.1999 19.1316 29.4499 19.3421 29.4499 19.3421V21.9737H28.0499C26.6499 21.9737 26.2499 22.8421 26.2499 23.7368V25H29.2999L28.8499 27.3421H26.2499V35.3684C31.2707 34.6842 35.2085 30.2895 35.2085 25Z" fill="#213D34"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 50 50" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" fill="white"/>
    <path d="M39.9186 16.4746C38.8506 16.9746 37.7186 17.3071 36.5506 17.4661C37.7546 16.7321 38.6666 15.5661 39.0986 14.1831C37.9666 14.8661 36.7186 15.3491 35.4066 15.6151C34.3226 14.4491 32.7706 13.7321 31.0626 13.7321C27.7586 13.7321 25.0866 16.4661 25.0866 19.8321C25.0866 20.3321 25.1426 20.8321 25.2546 21.3151C20.4226 21.0661 16.1506 18.6321 13.3146 14.9491C12.7706 15.9491 12.4546 17.0661 12.4546 18.2661C12.4546 20.5491 13.6226 22.5661 15.3706 23.7491C14.2706 23.7151 13.2226 23.4321 12.2946 22.9661V23.0491C12.2946 26.0151 14.3546 28.6491 17.1226 29.2321C16.5946 29.3661 16.0426 29.4321 15.4746 29.4321C15.0746 29.4321 14.6906 29.3991 14.3106 29.3321C15.0986 31.9321 17.3226 33.8321 19.9746 33.8821C17.9306 35.6151 15.3146 36.6491 12.4586 36.6491C11.9346 36.6491 11.4226 36.6151 10.9186 36.5491C13.6066 38.3991 16.8506 39.4661 20.3306 39.4661C31.0466 39.4661 36.8746 29.5321 36.8746 20.5991C36.8746 20.3321 36.8706 20.0661 36.8586 19.8001C38.0026 18.9661 39.0026 17.8991 39.9186 16.4746Z" fill="#213D34"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 50 50" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" fill="white"/>
    <path d="M25 18.3469C21.7891 18.3469 19.1836 20.9525 19.1836 24.1633C19.1836 27.3742 21.7891 29.9798 25 29.9798C28.2109 29.9798 30.8164 27.3742 30.8164 24.1633C30.8164 20.9525 28.2109 18.3469 25 18.3469ZM25 27.7552C23.0117 27.7552 21.4082 26.1516 21.4082 24.1633C21.4082 22.175 23.0117 20.5714 25 20.5714C26.9883 20.5714 28.5918 22.175 28.5918 24.1633C28.5918 26.1516 26.9883 27.7552 25 27.7552ZM32.4336 17.9939C32.4336 18.7184 31.8555 19.2965 31.131 19.2965C30.4065 19.2965 29.8284 18.7184 29.8284 17.9939C29.8284 17.2694 30.4065 16.6913 31.131 16.6913C31.8555 16.6913 32.4336 17.2694 32.4336 17.9939ZM36.5742 19.3183C36.4883 17.4082 36.0879 15.7148 34.7148 14.3418C33.3418 12.9688 31.6484 12.5684 29.7383 12.4825C27.7734 12.3848 22.2266 12.3848 20.2617 12.4825C18.3516 12.5684 16.6582 12.9688 15.2852 14.3418C13.9121 15.7148 13.5117 17.4082 13.4258 19.3183C13.3281 21.2832 13.3281 26.8301 13.4258 28.795C13.5117 30.7051 13.9121 32.3984 15.2852 33.7715C16.6582 35.1445 18.3516 35.5449 20.2617 35.6308C22.2266 35.7285 27.7734 35.7285 29.7383 35.6308C31.6484 35.5449 33.3418 35.1445 34.7148 33.7715C36.0879 32.3984 36.4883 30.7051 36.5742 28.795C36.6719 26.8301 36.6719 21.2832 36.5742 19.3183ZM34.1406 30.9238C33.7617 31.8633 33.0371 32.5879 32.0977 32.9668C30.5449 33.7715 26.8945 33.6309 25 33.6309C23.1055 33.6309 19.4551 33.7715 17.9023 32.9668C16.9629 32.5879 16.2383 31.8633 15.8594 30.9238C15.0547 29.371 15.1953 25.7207 15.1953 23.8262C15.1953 21.9316 15.0547 18.2813 15.8594 16.7285C16.2383 15.789 16.9629 15.0645 17.9023 14.6855C19.4551 13.8809 23.1055 14.0215 25 14.0215C26.8945 14.0215 30.5449 13.8809 32.0977 14.6855C33.0371 15.0645 33.7617 15.789 34.1406 16.7285C34.9453 18.2813 34.8047 21.9316 34.8047 23.8262C34.8047 25.7207 34.9453 29.371 34.1406 30.9238Z" fill="#213D34"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({
  className,
  onNavigationClick,
  onSocialClick,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <footer className={cn(
      'bg-[#213D34] py-16 lg:py-24',
      className
    )} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col gap-2.5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Footer Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <motion.div 
              className="flex flex-col lg:flex-row gap-12 lg:gap-[99px] flex-1"
              variants={itemVariants}
            >
              {/* Navigation Content */}
              <div className="flex flex-col gap-12 lg:gap-[73px]">
                {/* Logo and Navigation */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[90px] items-start">
                  {/* Logo */}
                  <motion.div 
                    className="flex items-center gap-3"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-[50px] h-[50px] bg-[#D9EF78] rounded-full"></div>
                      <div className="w-3 h-[50px] bg-[#D9EF78] rounded-r-md"></div>
                    </div>
                  </motion.div>

                  {/* Navigation Links */}
                  <div className="flex flex-col md:flex-row gap-8 lg:gap-[90px]">
                    {/* Left Menu */}
                    <motion.div 
                      className="flex flex-col gap-6 lg:gap-10"
                      variants={itemVariants}
                    >
                      <button
                        onClick={() => onNavigationClick?.('recipes')}
                        className="text-[#D9EF78] text-lg lg:text-[22px] font-normal leading-[1.17em] text-left hover:text-white transition-colors"
                      >
                        Recipes
                      </button>
                      <button
                        onClick={() => onNavigationClick?.('blog')}
                        className="text-[#D9EF78] text-lg lg:text-[22px] font-normal leading-[1.17em] text-left hover:text-white transition-colors"
                      >
                        Blog
                      </button>
                    </motion.div>

                    {/* Right Menu */}
                    <motion.div 
                      className="flex flex-col gap-6 lg:gap-10"
                      variants={itemVariants}
                    >
                      <button
                        onClick={() => onNavigationClick?.('support')}
                        className="text-[#D9EF78] text-lg lg:text-[22px] font-normal leading-[1.17em] text-left hover:text-white transition-colors"
                      >
                        Customer Support
                      </button>
                      <button
                        onClick={() => onNavigationClick?.('profile')}
                        className="text-[#D9EF78] text-lg lg:text-[22px] font-normal leading-[1.17em] text-left hover:text-white transition-colors"
                      >
                        Your Profile
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* Copyright */}
                <motion.p 
                  className="text-[#F1F2ED] text-base lg:text-[22px] font-medium leading-[1.27em]"
                  variants={itemVariants}
                >
                  © 2064 AIChefMate. All rights reserved. | Privacy Policy | Terms of Use
                </motion.p>
              </div>

              {/* Description */}
              <motion.p 
                className="text-[#D9EF78] text-lg lg:text-[22px] font-normal leading-[1.17em] max-w-[663px]"
                variants={itemVariants}
              >
                Join us on our journey to make meal planning simple and joyful. Connect with us on social media, explore our FAQs for quick answers, or drop us a line anytime.
              </motion.p>
            </motion.div>

            {/* Social Media */}
            <motion.div 
              className="flex flex-row lg:flex-col gap-4 lg:gap-[15px]"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => onSocialClick?.('facebook')}
                className="w-[50px] h-[50px] hover:scale-110 transition-transform"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <FacebookIcon className="w-full h-full" />
              </motion.button>
              <motion.button
                onClick={() => onSocialClick?.('twitter')}
                className="w-[50px] h-[50px] hover:scale-110 transition-transform"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <TwitterIcon className="w-full h-full" />
              </motion.button>
              <motion.button
                onClick={() => onSocialClick?.('instagram')}
                className="w-[50px] h-[50px] hover:scale-110 transition-transform"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <InstagramIcon className="w-full h-full" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}; 