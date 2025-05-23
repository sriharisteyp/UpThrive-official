import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./dialog";
import { Button } from "./button";
import { useToast } from "@/hooks/use-toast";
import { QrCode, CheckCircle, Info } from "lucide-react";

interface PaymentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  tier: {
    name: string;
    price: string;
    features: { name: string; included: boolean }[];
  };
}

export function PaymentDialog({ isOpen, onClose, tier }: PaymentDialogProps) {
  const { toast } = useToast();

  const handlePaymentConfirmation = () => {
    // Simulate updating subscription
    const user = localStorage.getItem("careerGuidanceUser");
    if (user) {
      const userData = JSON.parse(user);
      userData.subscription_plan = tier.name;
      localStorage.setItem("careerGuidanceUser", JSON.stringify(userData));
    }

    toast({
      title: "Payment Confirmed",
      description: `You are now subscribed to the ${tier.name} plan!`,
      variant: "default"
    });

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe to {tier.name}</DialogTitle>
          <DialogDescription>
            Scan the QR code below to make a payment of {tier.price}.
          </DialogDescription>
        </DialogHeader>
        <div className="text-center">
          {/* Placeholder for QR Code */}
          <div className="bg-gray-200 rounded-lg inline-block p-4">
            <QrCode className="text-gray-500 w-32 h-32" />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Use your UPI app to scan and pay to <span className="font-bold">annusajesh5@oksbi</span>.
          </p>
          <div className="mt-4">
            <Button 
              onClick={handlePaymentConfirmation} 
              className="bg-green-500 hover:bg-green-600 text-white w-full"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Confirm Payment
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            After payment, send a screenshot to <span className="font-bold">8281176376</span> for verification.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
