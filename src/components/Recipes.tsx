"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { cn } from '@/lib/utils';

export interface RecipesProps {
  className?: string;
  onLearnMore?: (recipeId: number) => void;
  onExploreMore?: () => void;
}

const recipes = [
  {
    id: 1,
    title: "Savory Quinoa and Roasted Vegetable Bowl",
    image: "/recipe-image-1.png",
    bgColor: "bg-white",
    border: "border-2 border-[#213D34]",
  },
  {
    id: 2,
    title: "Herb-Infused Grilled Chicken with Seasonal Greens", 
    image: "/recipe-image-2.png",
    bgColor: "bg-[#D9EF78]",
    isSpecial: true,
  },
  {
    id: 3,
    title: "Mediterranean Lentil and Kale Salad",
    image: "/recipe-image-3.png",
    bgColor: "bg-[#F1F2ED]",
  },
];

export const Recipes: React.FC<RecipesProps> = ({
  className,
  onLearnMore,
  onExploreMore,
}) => {
  return (
    <section className={cn(
      'bg-[#F1F2ED] py-16 lg:py-24',
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7 mb-16 lg:mb-24">
          <h2 className="font-heading text-3xl lg:text-[55px] font-medium text-[#213D34]">
            Recipes
          </h2>
          
          {/* Decorative Line */}
          <div className="w-8 h-12 lg:w-[50px] lg:h-[87px] border-l-2 border-[#213D34] transform rotate-12"></div>
          
          <div className="max-w-sm lg:max-w-md text-center lg:text-left">
            <p className="text-[#213D34] text-base lg:text-[22px] font-normal leading-relaxed">
              Recipes crafted by AI, personalized to perfectly align with your unique dietary needs and flavor preferences
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Side - Recipe Cards */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {recipes.map((recipe) => (
                <div key={recipe.id}>
                  {recipe.isSpecial ? (
                    // Special Card 2 - Wide layout with rounded background
                    <div className={cn(
                      "rounded-[1000px] p-8 lg:p-10 flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-10",
                      recipe.bgColor
                    )}>
                      <div className="w-full lg:w-56 h-56 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={recipe.image}
                          alt={recipe.title}
                          width={220}
                          height={220}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-[#213D34] font-heading text-2xl lg:text-[34px] font-normal leading-tight mb-6 lg:mb-7 max-w-md">
                          {recipe.title}
                        </h3>
                        <Button
                          variant="accent"
                          size="lg"
                          onClick={() => onLearnMore?.(recipe.id)}
                          className="border-2 border-[#213D34]"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  ) : (
                    // Regular Cards 1 & 3 - Horizontal layout
                    <div className={cn(
                      "rounded-[50px] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-10",
                      recipe.bgColor,
                      recipe.border
                    )}>
                      <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-[#213D34] font-heading text-2xl lg:text-[34px] font-normal leading-tight mb-6 lg:mb-9 max-w-md">
                          {recipe.title}
                        </h3>
                        <Button
                          variant="accent"
                          size="lg"
                          onClick={() => onLearnMore?.(recipe.id)}
                          className="border-2 border-[#213D34]"
                        >
                          Learn More
                        </Button>
                      </div>
                      <div className="w-full lg:w-56 h-56 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={recipe.image}
                          alt={recipe.title}
                          width={220}
                          height={219}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Featured Section */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Featured Content */}
              <div className="relative z-10 mb-8 lg:mb-16">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-7 px-4 lg:px-8">
                  <h3 className="text-[#213D34] font-heading text-2xl lg:text-[34px] font-normal leading-tight text-center lg:text-left max-w-[200px]">
                    Explore more recipes
                  </h3>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={onExploreMore}
                    className="border-2 border-[#213D34] hover:bg-[#213D34] hover:text-white"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 18l6-6-6-6v12z"/>
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Featured Image with Custom Shape */}
              <div className="relative">
                {/* Background shape */}
                <div className="w-full h-[600px] lg:h-[960px] bg-gray-300 overflow-hidden">
                  {/* Top rounded part */}
                  <div className="absolute top-0 left-0 w-full h-24 bg-gray-300 rounded-t-[50px]"></div>
                  
                  {/* Bottom left rounded part */}
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gray-300 rounded-bl-[50px]"></div>
                  
                  {/* Cut-out section in top right */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#F1F2ED] rounded-bl-[50px]"></div>
                  
                  {/* Main image */}
                  <Image
                    src="/recipes-main-image.png"
                    alt="Featured recipe collection"
                    width={778}
                    height={1007}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      maskImage: `
                        linear-gradient(to bottom, 
                          transparent 0%, 
                          black 5%, 
                          black 95%, 
                          transparent 100%
                        )
                      `,
                      WebkitMaskImage: `
                        linear-gradient(to bottom, 
                          transparent 0%, 
                          black 5%, 
                          black 95%, 
                          transparent 100%
                        )
                      `,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 