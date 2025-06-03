"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { DemoSection } from "@/components/DemoSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Recipes } from "@/components/Recipes";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Blog } from "@/components/Blog";
import { FAQ } from "@/components/FAQ";
import { Assistance } from "@/components/Assistance";
import { Footer } from "@/components/Footer";

export default function Home() {
  const handleLogin = () => {
    console.log('Login clicked');
    // TODO: Implement login logic
  };

  const handleSignup = () => {
    console.log('Signup clicked');
    // TODO: Implement signup logic
  };

  const handleTryDemo = () => {
    console.log('Try Demo clicked');
    // TODO: Implement demo logic
  };

  const handleStartFree = () => {
    console.log('Start Free clicked');
    // TODO: Implement start free logic
  };

  const handlePlayVideo = () => {
    console.log('Play Video clicked');
    // TODO: Implement video player logic
  };

  const handleGetStarted = () => {
    console.log('Get Started clicked');
    // TODO: Implement get started logic
  };

  const handleLearnMore = () => {
    console.log('Learn More clicked');
    // TODO: Implement learn more logic
  };

  const handleRecipeLearnMore = (recipeId: number) => {
    console.log('Recipe Learn More clicked:', recipeId);
    // TODO: Implement recipe details logic
  };

  const handleExploreRecipes = () => {
    console.log('Explore More Recipes clicked');
    // TODO: Implement explore recipes logic
  };

  const handleFreePlan = () => {
    console.log('Free Plan selected');
    // TODO: Implement free plan logic
  };

  const handleStandardPlan = () => {
    console.log('Standard Plan selected');
    // TODO: Implement standard plan logic
  };

  const handlePremiumPlan = () => {
    console.log('Premium Plan selected');
    // TODO: Implement premium plan logic
  };

  const handleReadArticle = (articleId: number) => {
    console.log('Read Article clicked:', articleId);
    // TODO: Implement article reading logic
  };

  const handleGetSupport = () => {
    console.log('Get Support clicked');
    // TODO: Implement support/contact logic
  };

  const handleFooterNavigation = (page: string) => {
    console.log('Footer navigation clicked:', page);
    // TODO: Implement navigation logic
  };

  const handleSocialClick = (platform: string) => {
    console.log('Social media clicked:', platform);
    // TODO: Implement social media navigation
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <Navbar 
        onLoginClick={handleLogin}
        onSignupClick={handleSignup}
      />
      
      {/* Hero Section */}
      <HeroSection 
        onTryDemo={handleTryDemo}
        onStartFree={handleStartFree}
      />

      {/* Demo Section */}
      <DemoSection 
        onPlayVideo={handlePlayVideo}
      />

      {/* How It Works Section */}
      <HowItWorks 
        onGetStarted={handleGetStarted}
        onLearnMore={handleLearnMore}
      />

      {/* Benefits Section */}
      <Benefits />

      {/* Recipes Section */}
      <Recipes 
        onLearnMore={handleRecipeLearnMore}
        onExploreMore={handleExploreRecipes}
      />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing 
        onFreePlan={handleFreePlan}
        onStandardPlan={handleStandardPlan}
        onPremiumPlan={handlePremiumPlan}
      />

      {/* Blog Section */}
      <Blog 
        onReadArticle={handleReadArticle}
      />

      {/* FAQ Section */}
      <FAQ />

      {/* Assistance Section */}
      <Assistance 
        onGetSupport={handleGetSupport}
      />

      {/* Footer */}
      <Footer 
        onNavigationClick={handleFooterNavigation}
        onSocialClick={handleSocialClick}
      />
    </div>
  );
}
