import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SignupWithOtp({ onToggle }: { onToggle: () => void }) {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [step, setStep] = useState<"form" | "otp">("form");
  const [otp, setOtp] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePassword = () => {
    if (userData.password !== userData.confirmPassword) {
      setPasswordError("Passwords don't match");
      return false;
    }
    if (userData.password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword()) return;
  
    setIsSubmitting(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password,
          password2: userData.confirmPassword,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast({
          title: "Account Created",
          description: "Please verify your email with the OTP sent to your inbox",
          variant: "success",
        });
  
        // Create the subscription only if signup is successful
        try {
          const subscriptionResponse = await fetch(
            "http://127.0.0.1:8000/api/subscriptions/subscriptions/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: userData.username, // Pass username
                plan: "free", // Assign the 'free' plan
                is_active: true, // Set active status
                end_date: null, // No end date for free plan initially
              }),
            }
          );
  
          const subscriptionData = await subscriptionResponse.json();
  
          if (subscriptionResponse.ok) {
            toast({
              title: "Subscription Added",
              description: "Your free subscription has been activated.",
              variant: "success",
            });
          }
        } catch {
          console.error("Subscription creation failed silently.");
        }
  
        // Move to OTP verification step
        setStep("otp");
      } else {
        // Handle specific error messages and clear form data on failure
        setUserData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
  
        if (data.username) {
          toast({
            title: "Username Error",
            description: data.username[0],
            variant: "destructive",
          });
        } else if (data.email) {
          toast({
            title: "Email Error",
            description: data.email[0],
            variant: "destructive",
          });
        } else if (data.password) {
          toast({
            title: "Password Error",
            description: data.password[0],
            variant: "destructive",
          });
        } else if (data.error) {
          toast({
            title: "Error",
            description: data.error,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Signup Failed",
            description: "Please check your information and try again",
            variant: "destructive",
          });
        }
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong with the server",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  const handleVerifyOtp = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/verify-otp/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userData.email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({ title: "Verified", description: "Logged in successfully", variant: "success" });
        
        // Store user data in localStorage
        localStorage.setItem("careerGuidanceUser", JSON.stringify({
          email: userData.email,
          username: userData.username,
          token: data.access
        }));

        // Store tokens
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        
        // Use window.location.href for a full page refresh and redirect
        window.location.href = "/dashboard";
      } else {
        toast({ title: "Invalid OTP", description: data.message, variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Verification failed.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/resend-otp/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userData.email }),
      });

      const data = await res.json();
      if (res.ok) {
        toast({ title: "OTP Resent", description: data.message, variant: "default" });
      } else {
        toast({ title: "Resend Failed", description: data.message, variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Could not resend OTP.", variant: "destructive" });
    }
  };

  const upgradePlan = async () => {
    const upgradeResponse = await fetch("http://127.0.0.1:8000/api/subscriptions/subscriptions/", {
      method: "PATCH",  // or PUT, depending on your API design
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData.username,  // Same user
        plan: "premium",  // Upgrade to premium plan
        is_active: true,
        end_date: new Date().toISOString(), // Set the current date as the end date (after one month or longer)
      }),
    });

    const upgradeData = await upgradeResponse.json();

    if (upgradeResponse.ok) {
      toast({
        title: "Plan Upgraded",
        description: "Your plan has been upgraded to Premium.",
        variant: "success",
      });
    } else {
      toast({
        title: "Upgrade Failed",
        description: upgradeData.error || "Something went wrong with the plan upgrade.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-[350px] sm:w-[400px] dark:bg-slate-900 dark:text-white">
      <CardHeader>
        <CardTitle>{step === "form" ? "Sign Up" : "Verify Email"}</CardTitle>
        <CardDescription>
          {step === "form"
            ? "Create your account to get started"
            : "Enter the OTP sent to your email"}
        </CardDescription>
      </CardHeader>

      {step === "form" ? (
        <form onSubmit={handleSignup}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter Your Username"
                value={userData.username}
                onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter Your Email"
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter Your Password"
                type={showPassword ? "text" : "password"}
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-400"
                onClick={() => setShowPassword((p) => !p)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
            <div className="space-y-2 relative">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                placeholder="Conform Your Password"
                type={showConfirmPassword ? "text" : "password"}
                value={userData.confirmPassword}
                onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-400"
                onClick={() => setShowConfirmPassword((p) => !p)}
              >
                {showConfirmPassword ? <Eye /> : <EyeOff />}
              </button>
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Signing Up...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
            <Button variant="link" onClick={onToggle}>
              Already have an account? Log in
            </Button>
          </CardFooter>
        </form>
      ) : (
        <>
          <CardContent className="space-y-4">
            <Label htmlFor="otp">Enter OTP</Label>
            <Input
              id="otp"
              placeholder="345 123"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <Button variant="link" onClick={handleResendOtp}>
              Resend OTP
            </Button>
          </CardContent>
          <CardFooter>
            <Button onClick={handleVerifyOtp} className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify & Continue"
              )}
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
