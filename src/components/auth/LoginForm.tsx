import React, { useState } from "react";
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
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Loader2, Eye, EyeOff } from "lucide-react"; // Add Eye and EyeOff for the password visibility toggle
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(username, password);
      toast({
        title: "Login successful",
        description: `Welcome back, ${username}!`,
        variant: "success",
      });
      // Redirect to the dashboard and refresh
      navigate("/dashboard", { replace: true });
      setTimeout(() => {
        window.location.reload();
      }, 1); // Optional delay for smoother UX
    } catch (err: any) {
      setError(err.message || "Failed to login. Please try again.");
      toast({
        title: "Login failed",
        description: err.message || "Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02 },
    default: { scale: 1 },
  };

  return (
    <Card className="w-[350px] sm:w-[400px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Sign in to your career guidance account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent className="space-y-4">
          <motion.div
            className="space-y-2"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Label htmlFor="username">Username</Label>
            <motion.div whileFocus="focus" variants={inputVariants}>
              <Input
                id="username"
                type="text"
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="transition-all duration-200"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="space-y-2 relative"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Label htmlFor="password">Password</Label>
            <motion.div whileFocus="focus" variants={inputVariants}>
              <Input
                id="password"
                type={showPassword ? "text" : "password"} // Toggle between text and password type
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="transition-all duration-200"
              />
            </motion.div>
            {password && (
              <button
                type="button"
                className="absolute right-3 top-9 transform -translate-y-1/2 text-white hover:opacity-75 pt-2 mr-2"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            )}
          </motion.div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full"
          >
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </motion.div>
          <Button variant="link" type="button" onClick={onToggle} className="transition-colors duration-200 hover:text-primary">
            Don't have an account? Sign up
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
