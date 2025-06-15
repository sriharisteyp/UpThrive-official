import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Career, SkillScore } from "@/contexts/UserDataContext";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

type CareerCardProps = {
  career: Career;
  userSkills?: SkillScore;
  onSelect: (careerId: string) => Promise<void>;
  selected: boolean;
};

export function CareerCard({ career, userSkills, onSelect, selected }: CareerCardProps) {
  const { toast } = useToast();
  const [isSelecting, setIsSelecting] = useState(false);

  // Calculate match score if user skills are provided
  const calculateMatchScore = () => {
    if (!userSkills) return null;
    
    const categories = ['analytical', 'technical', 'creative', 'communication', 'leadership'] as const;
    let totalScore = 0;
    
    categories.forEach(category => {
      const userScore = userSkills[category];
      const requiredScore = career.requiredSkills[category];
      totalScore += Math.min(10, (userScore / requiredScore) * 10);
    });
    
    return Math.round((totalScore / (categories.length * 10)) * 100);
  };

  const handleSelect = async () => {
    if (isSelecting) return;
    
    try {
      setIsSelecting(true);
      await onSelect(career.id);
      toast({
        title: "Career selected",
        description: `${career.title} has been selected as your career path`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to select career. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSelecting(false);
    }
  };
  
  const matchScore = calculateMatchScore();
  
  return (
    <Card className={`w-full transition-all ${selected ? 'ring-2 ring-primary border-blue-500' : ''} bg-extraLight/30 border-extraLight/50 hover:shadow-md hover:shadow-blue-900/20`}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center text-white">
          <span>{career.title}</span>
          {matchScore !== null && (
            <Badge variant={matchScore > 70 ? "default" : "secondary"} className={matchScore > 70 ? "bg-green-600" : ""}>
              {matchScore}% match
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-gray-400">{career.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300">Required Skills</h4>
          {Object.entries(career.requiredSkills).map(([skill, level]) => {
            const userSkill = userSkills?.[skill as keyof SkillScore] || 0;
            const meetsRequirement = userSkill >= level;
            
            return (
              <div key={skill} className="space-y-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="capitalize text-sm text-gray-300">{skill}</span>
                    {userSkills && (
                      meetsRequirement 
                        ? <CheckCircle className="h-3 w-3 text-green-500 ml-1" />
                        : <XCircle className="h-3 w-3 text-amber-500 ml-1" />
                    )}
                  </div>
                  <span className="text-xs font-medium text-gray-300">{level}/10</span>
                </div>
                <Progress 
                  value={level * 10} 
                  className="h-1.5 bg-extraLight"
                  indicatorClassName={userSkills ? (meetsRequirement ? 'bg-green-500' : 'bg-amber-500') : 'bg-blue-500'}
                />
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button 
          onClick={handleSelect}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          variant={selected ? "secondary" : "default"}
          disabled={isSelecting}
        >
          {isSelecting ? "Selecting..." : (selected ? "Selected" : "Select This Career")}
        </Button>
        
        <Button 
          asChild 
          variant="outline" 
          className="w-full border-extraLight/70 text-gray-300 hover:text-white hover:bg-extraLight"
        >
          <Link to={`/careers/${career.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
