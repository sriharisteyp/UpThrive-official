
import React from "react";
import { SkillScore } from "@/contexts/UserDataContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type QuizResultsProps = {
  skillScores: SkillScore;
};

export function QuizResults({ skillScores }: QuizResultsProps) {
  const navigate = useNavigate();
  
  // Calculate total score for percentage
  const maxPossibleScore = 10; // Assuming 10 is the max score for any category
  
  const skillCategories = [
    { name: "Analytical", key: "analytical", color: "bg-blue-500", icon: "🔍" },
    { name: "Technical", key: "technical", color: "bg-green-500", icon: "💻" },
    { name: "Creative", key: "creative", color: "bg-purple-500", icon: "🎨" },
    { name: "Communication", key: "communication", color: "bg-yellow-500", icon: "💬" },
    { name: "Leadership", key: "leadership", color: "bg-red-500", icon: "🏆" },
  ];

  return (
    <Card className="w-full max-w-2xl shadow-lg border-primary/20 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/10 py-8">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-2"
        >
          <CheckCircle className="h-8 w-8 text-green-500" />
          <CardTitle className="text-3xl font-bold">Your Skill Assessment Results</CardTitle>
        </motion.div>
        <CardDescription className="text-base mt-2">
          Based on your answers, here's how your skills measure up across different areas
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 pt-6">
        <div className="space-y-5">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.key} 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden="true">{category.icon}</span>
                  <h3 className="font-medium text-lg">{category.name}</h3>
                </div>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary/30">
                  {Math.round((skillScores[category.key as keyof SkillScore] / maxPossibleScore) * 100)}%
                </span>
              </div>
              <Progress 
                value={(skillScores[category.key as keyof SkillScore] / maxPossibleScore) * 100} 
                className={`h-2.5 ${category.color}`}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-6 space-y-5 bg-secondary/10 p-6 rounded-lg"
        >
          <p className="text-base text-center">
            Now that you know your skills, explore careers that match your profile or learn how to improve in specific areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/careers")}
              className="flex gap-2 items-center bg-gradient-to-r from-primary to-primary/80 hover:opacity-90"
              size="lg"
            >
              <BookOpen className="h-5 w-5" />
              Explore Career Paths
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate("/dashboard")}
              className="border-primary/30 hover:bg-primary/10"
            >
              Go to Dashboard
            </Button>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
