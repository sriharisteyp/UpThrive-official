import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

type User = {
  id: string;
  email: string;
  username?: string;
  name?: string;
  token?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  signup: (
    username: string,
    email: string,
    password: string,
    password2: string
  ) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("careerGuidanceUser");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);

        if (userData.token) {
          api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
        }
      } catch (error) {
        console.error("Failed to parse stored user data", error);
        localStorage.removeItem("careerGuidanceUser");
      }
    }
    setLoading(false);
  }, []);

  const signup = async (
    username: string,
    email: string,
    password: string,
    password2: string
  ) => {
    setLoading(true);
    try {
      console.log("Signup data:", { username, email, password, password2 });
      const response = await api.post("/auth/register/", {
        username,
        email,
        password,
        password2,
      });

      const userData = {
        id: response.data.id,
        email,
        username,
        name: response.data.name || username,
        token: response.data.token || response.data.access_token,
      };

      api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

      setUser(userData);
      localStorage.setItem("careerGuidanceUser", JSON.stringify(userData));

      toast({
        title: "Account created",
        description: `Welcome, ${username}!`,
        variant: "success",
      });
    } catch (error: any) {
      console.error("Signup error details:", {
        status: error.response?.status,
        data: error.response?.data,
      });
      toast({
        title: "Signup failed",
        description: error.response?.data?.detail || "An error occurred",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      console.log("Login data:", { username, password });
      const response = await api.post("/auth/login/", { username, password });

      const userData = {
        id: response.data.id,
        email: response.data.email,
        username: response.data.username,
        token: response.data.token || response.data.access_token,
      };

      api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;

      setUser(userData);
      localStorage.setItem("careerGuidanceUser", JSON.stringify(userData));

      toast({
        title: "Login successful",
        description: `Welcome back, ${userData.username || userData.email}!`,
        variant: "success",
      });
    } catch (error: any) {
      console.error("Login error details:", {
        status: error.response?.status,
        data: error.response?.data,
      });
      toast({
        title: "Login failed",
        description: error.response?.data?.detail || "Invalid username or password",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("careerGuidanceUser");
    delete api.defaults.headers.common["Authorization"];

    toast({
      title: "Logged out successfully",
      variant: "default",
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
