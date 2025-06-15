import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { selectCareer, getUserCareers, IUserCareerProgress } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

export type SkillScore = {
  analytical: number;
  technical: number;
  creative: number;
  communication: number;
  leadership: number;
};

export type Career = {
  id: string;
  title: string;
  description: string;
  requiredSkills: SkillScore;
};

export type UserData = {
  quizCompleted: boolean;
  skillScores?: SkillScore;
  selectedCareerId?: string;
  roadmapProgress?: Record<string, 'not-started' | 'in-progress' | 'completed'>;
};

type UserDataContextType = {
  userData: UserData;
  setQuizResults: (scores: SkillScore) => void;
  setSelectedCareer: (careerId: string) => Promise<void>;
  resetUserData: () => void;
  updateRoadmapProgress: (stepTitle: string, status: 'not-started' | 'in-progress' | 'completed') => void;
};

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
};

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [userData, setUserData] = useState<UserData>({
    quizCompleted: false,
    roadmapProgress: {}
  });

  // Load user data and career selection if available
  useEffect(() => {
    const loadUserData = async () => {
      if (user) {
        const storedData = localStorage.getItem(`careerData_${user.id}`);
        if (storedData) {
          setUserData(JSON.parse(storedData));
        }
        
        try {
          const careers = await getUserCareers();
          if (careers && careers.length > 0) {
            const latestCareer = careers[careers.length - 1];
            setUserData(prev => ({
              ...prev,
              selectedCareerId: latestCareer.career
            }));
          }
        } catch (error) {
          console.error('Failed to load user careers:', error);
        }
      } else {
        setUserData({ quizCompleted: false, roadmapProgress: {} });
      }
    };

    loadUserData();
  }, [user]);

  // Save data whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`careerData_${user.id}`, JSON.stringify(userData));
    }
  }, [userData, user]);

  const setQuizResults = (scores: SkillScore) => {
    setUserData((prev) => ({
      ...prev,
      quizCompleted: true,
      skillScores: scores,
    }));
  };

  const setSelectedCareer = async (careerId: string): Promise<void> => {
    try {
      await selectCareer(careerId);
      setUserData(prev => ({
        ...prev,
        selectedCareerId: careerId
      }));
      toast({
        title: "Career selected",
        description: "Your career selection has been saved",
      });
    } catch (error) {
      console.error('Failed to save career selection:', error);
      toast({
        title: "Failed to save career selection",
        description: "Please try again later",
        variant: "destructive",
      });
      throw error;
    }
  };

  const resetUserData = () => {
    setUserData({ quizCompleted: false, roadmapProgress: {} });
  };

  const updateRoadmapProgress = (stepTitle: string, status: 'not-started' | 'in-progress' | 'completed') => {
    setUserData(prev => ({
      ...prev,
      roadmapProgress: {
        ...prev.roadmapProgress,
        [stepTitle]: status
      }
    }));
  };

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setQuizResults,
        setSelectedCareer,
        resetUserData,
        updateRoadmapProgress
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
