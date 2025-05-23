import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

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
  setSelectedCareer: (careerId: string) => void;
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
  const [userData, setUserData] = useState<UserData>({
    quizCompleted: false,
    roadmapProgress: {}
  });

  // Load user data if available
  useEffect(() => {
    if (user) {
      const storedData = localStorage.getItem(`careerData_${user.id}`);
      if (storedData) {
        setUserData(JSON.parse(storedData));
      } else {
        // Initialize empty data for new users
        setUserData({ quizCompleted: false, roadmapProgress: {} });
      }
    } else {
      // Reset when logged out
      setUserData({ quizCompleted: false, roadmapProgress: {} });
    }
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

  const setSelectedCareer = (careerId: string) => {
    setUserData((prev) => ({
      ...prev,
      selectedCareerId: careerId,
    }));
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
