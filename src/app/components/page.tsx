"use client";

import React from 'react';
import { Button } from '@/components/Button';
import { Tag } from '@/components/Tag';
import { Navbar } from '@/components/Navbar';

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Showcase */}
      <section className="mb-12">
        <div className="bg-gray-50 p-6">
          <h2 className="font-heading text-h2 text-[#213D34] mb-6 text-center">Navbar Component</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Navbar 
              onLoginClick={() => console.log('Login clicked')}
              onSignupClick={() => console.log('Signup clicked')}
            />
            <div className="p-4 text-center text-gray-600">
              <p>↑ Interactive navbar component with mobile responsive design</p>
            </div>
          </div>
        </div>
      </section>

      <div className="p-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="font-heading text-h1 text-[#213D34] mb-4">AIChefMate Components</h1>
            <p className="text-body text-gray-600">Figma tasarımından oluşturulan buton, tag ve navbar componentleri</p>
          </div>

          {/* Button Showcase */}
          <section className="space-y-8">
            <h2 className="font-heading text-h2 text-[#213D34]">Button Variants</h2>
            
            {/* Primary Buttons */}
            <div className="space-y-4">
              <h3 className="font-heading text-h3 text-[#213D34]">Primary</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">Small Button</Button>
                <Button variant="primary" size="md">Medium Button</Button>
                <Button variant="primary" size="lg">Large Button</Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="space-y-4">
              <h3 className="font-heading text-h3 text-[#213D34]">Secondary</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="sm">Small Button</Button>
                <Button variant="secondary" size="md">Medium Button</Button>
                <Button variant="secondary" size="lg">Large Button</Button>
              </div>
            </div>

            {/* Accent Buttons */}
            <div className="space-y-4">
              <h3 className="font-heading text-h3 text-[#213D34]">Accent</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="sm">Small Button</Button>
                <Button variant="accent" size="md">Medium Button</Button>
                <Button variant="accent" size="lg">Large Button</Button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div className="space-y-4">
              <h3 className="font-heading text-h3 text-[#213D34]">Outline</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" size="sm">Small Button</Button>
                <Button variant="outline" size="md">Medium Button</Button>
                <Button variant="outline" size="lg">Large Button</Button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div className="space-y-4">
              <h3 className="font-heading text-h3 text-[#213D34]">Ghost</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="ghost" size="sm">Small Button</Button>
                <Button variant="ghost" size="md">Medium Button</Button>
                <Button variant="ghost" size="lg">Large Button</Button>
              </div>
            </div>

            {/* Icon Buttons */}
            <div className="space-y-4">
              <h3 className="font-heading text-h3 text-[#213D34]">Icon</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="icon" size="sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </Button>
                <Button variant="icon" size="md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </Button>
                <Button variant="icon" size="lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Buttons with Icons */}
            <div className="space-y-4">
              <h3 className="font-heading text-h3 text-[#213D34]">With Icons</h3>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  leftIcon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  }
                >
                  Add Recipe
                </Button>
                <Button 
                  variant="accent" 
                  rightIcon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  }
                >
                  Next Step
                </Button>
              </div>
            </div>

            {/* Loading States */}
            <div className="space-y-4">
              <h3 className="font-heading text-h3 text-[#213D34]">Loading States</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" isLoading>Loading...</Button>
                <Button variant="accent" isLoading>Processing...</Button>
              </div>
            </div>
          </section>

          {/* Tag Showcase */}
          <section className="space-y-8">
            <h2 className="font-heading text-h2 text-[#213D34]">Tag Variants</h2>
            
            {/* Filled Tags */}
            <div className="space-y-4">
              <h3 className="font-heading text-h3 text-[#213D34]">Filled</h3>
              <div className="flex flex-wrap gap-4">
                <Tag variant="filled" size="sm">Vejetaryen</Tag>
                <Tag variant="filled" size="md">Gluten Free</Tag>
                <Tag variant="filled" size="lg">Organik</Tag>
              </div>
            </div>

            {/* Outline Tags */}
            <div className="space-y-4">
              <h3 className="font-heading text-h3 text-[#213D34]">Outline</h3>
              <div className="flex flex-wrap gap-4">
                <Tag variant="outline" size="sm">Vegan</Tag>
                <Tag variant="outline" size="md">Dairy Free</Tag>
                <Tag variant="outline" size="lg">Keto</Tag>
              </div>
            </div>

            {/* Removable Tags */}
            <div className="space-y-4">
              <h3 className="font-heading text-h3 text-[#213D34]">Removable</h3>
              <div className="flex flex-wrap gap-4">
                <Tag variant="filled" removable onRemove={() => console.log('Tag removed')}>
                  Sebze
                </Tag>
                <Tag variant="outline" removable onRemove={() => console.log('Tag removed')}>
                  Et
                </Tag>
              </div>
            </div>

            {/* Recipe Tags Demo */}
            <div className="space-y-4 p-6 bg-[#F1F2ED] rounded-xl">
              <h3 className="font-heading text-h3 text-[#213D34]">Recipe Example</h3>
              <div className="space-y-3">
                <h4 className="font-heading text-h4 text-[#213D34]">Mediterranean Salad</h4>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="filled">Sağlıklı</Tag>
                  <Tag variant="filled">Vejetaryen</Tag>
                  <Tag variant="filled">15 dk</Tag>
                  <Tag variant="outline">Kolay</Tag>
                  <Tag variant="outline">Akdeniz</Tag>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 