import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Shield, Clock, Star, GraduationCap, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from "../components/layout/Navbar";
import { PaymentDialog } from "@/components/ui/payment-dialog";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { ComingSoonOverlay } from '@/components/pricing/ComingSoonOverlay';

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  icon?: React.ElementType;
}

const PricingPlan = () => {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const getCurrentPlan = () => {
    const user = localStorage.getItem("careerGuidanceUser");
    if (user) {
      const userData = JSON.parse(user);
      return userData.subscription_plan || "Explorer";  // Free plan is now called "Explorer"
    }
    return null;
  };

  const handlePayment = (tier: PricingTier) => {
    const currentPlan = getCurrentPlan();
    
    if (!currentPlan) {
      navigate(`/auth?signup=true&plan=${tier.name}`);
      return;
    }

    if (currentPlan === tier.name) {
      toast({
        title: "Current Plan",
        description: "This is your current subscription plan",
        variant: "default"
      });
      return;
    }

    setSelectedTier(tier);
  };

  const getButtonText = (tier: PricingTier) => {
    const currentPlan = getCurrentPlan();
    if (currentPlan === tier.name) {
      return "Current Plan";
    }
    return tier.buttonText;
  };

  const pricingTiers: PricingTier[] = [
    {
      name: "Explorer",
      description: "Start your career journey",
      price: "Free",
      features: [
        { name: "Roadmap", included: true },
        { name: "Limited Chatbot (5/day)", included: true },
        { name: "Email Support", included: true },
        { name: "Job Lookout", included: true },
        { name: "Day In a Life", included: false },
        { name: "Interview Training", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "Priority Support", included: false }
      ],
      buttonText: "Start Free Journey",
      icon: Clock,
    },
    {
      name: "Achiever",
      description: "For serious career seekers",
      price: "₹799",
      features: [
        { name: "Roadmap", included: true },
        { name: "Extended Chatbot (15/day)", included: true },
        { name: "Email Support", included: true },
        { name: "Job Lookout", included: true },
        { name: "Day In a Life", included: true },
        { name: "Interview Training", included: true },
        { name: "Advanced Analytics", included: false },
        { name: "Priority Support", included: false }
      ],
      buttonText: "Boost Your Career",
      popular: true,
      icon: Zap,
    },
    {
      name: "Professional",
      description: "Complete career transformation",
      price: "₹1999",
      features: [
        { name: "Full Jobs Access", included: true },
        { name: "Roadmap", included: true },
        { name: "Unlimited Chatbot", included: true },
        { name: "Premium Email Support", included: true },
        { name: "Job Lookout", included: true },
        { name: "Day In a Life", included: true },
        { name: "Interview Questions", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Priority Support", included: true }
      ],
      buttonText: "Transform Career",
      icon: Shield,
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <ComingSoonOverlay />
      <Navbar/>
    </>
  );
};

export default PricingPlan;