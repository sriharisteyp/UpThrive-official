import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResults } from "@/components/quiz/QuizResults";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useUserData, SkillScore } from "@/contexts/UserDataContext";
import { Navigate } from "react-router-dom";
import { selectedQuestions } from "@/data/quiz-questions";
import { ArrowLeft, ArrowRight, BarChart3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";
import { api } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

const Quiz = () => {
  const { user, loading } = useAuth();
  const { userData, setQuizResults } = useUserData();
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [quizComplete, setQuizComplete] = useState(false);
  
  // If quiz was already completed, load those answers
  useEffect(() => {
    if (userData.quizCompleted && userData.skillScores) {
      setQuizComplete(true);
    }
  }, [userData]);
  
  const handleAnswer = (questionId: string, score: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: score
    }));
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const calculateResults = async () => {
    // Calculate skill scores from answers
    const skillTotals: Record<string, number> = {};
    const skillCounts: Record<string, number> = {};
    
    selectedQuestions.forEach(question => {
      const category = question.category;
      const score = answers[question.id] || 0;
      
      skillTotals[category] = (skillTotals[category] || 0) + score;
      skillCounts[category] = (skillCounts[category] || 0) + 1;
    });
    
    // Calculate average score for each skill category
    const skillScores: SkillScore = {
      analytical: Math.round(skillTotals.analytical / skillCounts.analytical) || 0,
      technical: Math.round(skillTotals.technical / skillCounts.technical) || 0,
      creative: Math.round(skillTotals.creative / skillCounts.creative) || 0,
      communication: Math.round(skillTotals.communication / skillCounts.communication) || 0,
      leadership: Math.round(skillTotals.leadership / skillCounts.leadership) || 0
    };

    try {
      const token = localStorage.getItem('token');
      // Submit the quiz results to the backend
      const response = await api.post('quiz/submit/', {
        answers: Object.entries(answers).map(([questionId, score]) => {
          const question = selectedQuestions.find(q => q.id === questionId);
          return {
            question_id: questionId,
            selected_option: score,
            category: question?.category
          };
        })
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.data.scores) {
        setQuizResults({
          analytical: response.data.scores.analytical,
          technical: response.data.scores.technical,
          creative: response.data.scores.creative,
          communication: response.data.scores.communication,
          leadership: response.data.scores.leadership
        });
      }
      setQuizComplete(true);

      toast({
        title: "Quiz submitted successfully",
        description: "Your results have been saved",
        variant: "default"
      });
      
    } catch (error) {
      console.error('Error submitting quiz:', error);
      toast({
        title: "Error saving quiz results",
        description: "Your results will still be shown but couldn't be saved",
        variant: "destructive"
      });
    }
    
    // Save results locally and update UI
    setQuizResults(skillScores);
    setQuizComplete(true);
  };
  
  // Redirect to login if not authenticated
  if (!loading && !user) {
    return <Navigate to="/auth" />;
  }
  
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-darkBlue to-light">
      <Navbar />
      
      <main className="flex-1 container py-12">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {!quizComplete ? (
            <div className="space-y-8">
              <div className="flex items-center justify-between bg-secondary/20 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-primary" /> 
                  <span>Skills Assessment Quiz</span>
                </h1>
                <span className="text-sm px-3 py-1 bg-primary/20 rounded-full font-medium">
                  Question {currentQuestionIndex + 1} of {selectedQuestions.length}
                </span>
              </div>
              
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentQuestion && (
                    <QuizQuestion
                      question={currentQuestion}
                      onAnswer={handleAnswer}
                      selectedScore={answers[currentQuestion.id]}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-between pt-4">
                <AnimatedButton 
                  variant="outline" 
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2 border-primary/20"
                  delay={0.2}
                >
                  <ArrowLeft className="h-4 w-4" /> Previous
                </AnimatedButton>
              </div>
            </div>
          ) : (
            userData.skillScores && <QuizResults skillScores={userData.skillScores} />
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Quiz;
