import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./dialog";
import { Button } from "./button";
import { useNavigate, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import { AnimatedContainer } from './animated-container';

interface SubscriptionAdProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubscriptionAd({ isOpen, onClose }: SubscriptionAdProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  // Don't show the ad on the pricing page
  if (location.pathname === '/pricing') {
    return null;
  }

  const handleUpgrade = () => {
    navigate("/pricing");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-blue-900 to-darkBlue text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-yellow-400" />
            {t('unlockPremium')}
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            {t('premiumDescription')}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium text-white">{t('premiumBenefits')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                {t('unlimitedAccess')}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                {t('personalizedRecommendations')}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                {t('advancedTracking')}
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                {t('prioritySupport')}
              </li>
            </ul>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-2">{t('limitedOffer')}</p>
            <div className="text-2xl font-bold text-white mb-4">
              {t('startingAt')}
            </div>
            <Button 
              onClick={handleUpgrade}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              {t('upgradeNow')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const SubscriptionCard = () => {
  const navigate = useNavigate();

  return (
    <AnimatedContainer animation="scale" className="w-full max-w-md mx-auto">
      <Card className="relative overflow-hidden border-2 border-blue-500/20 bg-card/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Unlock Full Potential
          </CardTitle>
          <CardDescription>
            Upgrade your career journey with premium features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-blue-400 mt-1" />
            <div>
              <h4 className="font-semibold">Unlimited Access</h4>
              <p className="text-sm text-muted-foreground">
                Full access to jobs, personalized roadmaps, and unlimited chat support
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Zap className="w-5 h-5 text-purple-400 mt-1" />
            <div>
              <h4 className="font-semibold">Premium Features</h4>
              <p className="text-sm text-muted-foreground">
                Interview training, advanced analytics, and priority support
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => navigate('/pricing')}
          >
            View Plans <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </AnimatedContainer>
  );
};

export default SubscriptionCard;