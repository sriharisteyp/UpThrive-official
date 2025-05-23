import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { quizQuestions } from "@/data/quiz-questions";

// Component for a single quiz question
type QuizQuestionProps = {
  question: typeof quizQuestions[number];
  onAnswer: (questionId: string, optionScore: number) => void;
  selectedScore?: number;
};

export function QuizQuestion({ question, onAnswer, selectedScore }: QuizQuestionProps) {
  return (
    <Card className="w-full max-w-2xl shadow-lg border-primary/20">
      <CardHeader className="bg-gradient-to-r from-secondary/20 to-primary/10 rounded-t-lg">
        <CardTitle className="text-xl font-bold">{question.text}</CardTitle>
        <CardDescription className="text-muted-foreground mt-2">
          Choose the option that best describes you
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <RadioGroup
          value={selectedScore?.toString()}
          onValueChange={(value) => onAnswer(question.id, parseInt(value, 10))}
          className="space-y-4"
        >
          {question.options.map((option, index) => renderOption(option, index, question, selectedScore, onAnswer))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}

// Helper function for rendering options
const renderOption = (
  option: typeof quizQuestions[number]["options"][number],
  index: number,
  question: typeof quizQuestions[number],
  selectedScore?: number,
  onAnswer?: (questionId: string, optionScore: number) => void
) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`flex items-center space-x-3 rounded-md border p-4 
      ${
        selectedScore === option.score
          ? "bg-primary/10 border-primary/30"
          : "hover:bg-accent"
      }
      transition-all duration-200 ease-in-out`}
  >
    <RadioGroupItem
      value={option.score.toString()}
      id={`${question.id}-option-${index}`}
      className="text-primary"
    />
    <Label
      htmlFor={`${question.id}-option-${index}`}
      className="flex-grow cursor-pointer font-medium"
    >
      {option.text}
    </Label>
  </motion.div>
);

// Main Quiz Page component
export function QuizPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [questions, setQuestions] = useState<typeof quizQuestions>([]);

  useEffect(() => {
    // Fetch 10 random questions from the array when the component mounts
    const shuffledQuestions = [...quizQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions.slice(0, 10));
  }, []);

  const handleAnswer = (questionId: string, optionScore: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionScore }));
  };

  if (!questions.length) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      {questions.map((question) => (
        <QuizQuestion
          key={question.id}
          question={question}
          onAnswer={handleAnswer}
          selectedScore={answers[question.id]}
        />
      ))}
    </div>
  );
}
