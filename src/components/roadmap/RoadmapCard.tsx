import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RoadmapItem } from "@/data/roadmaps";
import { BookOpen, Award, Briefcase, Lightbulb, CheckCircle2, Circle, Timer, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUserData } from "@/contexts/UserDataContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

type RoadmapCardProps = {
  item: RoadmapItem;
  index: number;
  totalItems: number;
  roadmapItems: RoadmapItem[];
};

type ProgressStatus = 'not-started' | 'in-progress' | 'completed';

export function RoadmapCard({ item, index, totalItems, roadmapItems }: RoadmapCardProps) {
  const { userData, updateRoadmapProgress } = useUserData();
  const { toast } = useToast();
  const progress = userData.roadmapProgress?.[item.title] || 'not-started';

  const getIcon = () => {
    switch (item.type) {
      case 'study':
        return <BookOpen className="h-5 w-5" />;
      case 'certification':
        return <Award className="h-5 w-5" />;
      case 'project':
        return <Briefcase className="h-5 w-5" />;
      case 'skill':
        return <Lightbulb className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getBadgeVariant = () => {
    switch (item.type) {
      case 'study':
        return 'default';
      case 'certification':
        return 'outline';
      case 'project':
        return 'secondary';
      case 'skill':
        return 'destructive';
      default:
        return 'default';
    }
  };

  const getProgressIcon = () => {
    switch (progress) {
      case 'completed':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'in-progress':
        return <Timer className="h-4 w-4 text-yellow-500" />;
      case 'not-started':
        return <Circle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getProgressColor = () => {
    switch (progress) {
      case 'completed':
        return 'text-green-500 hover:text-green-600';
      case 'in-progress':
        return 'text-yellow-500 hover:text-yellow-600';
      case 'not-started':
        return 'text-gray-400 hover:text-gray-500';
    }
  };

  const isPreviousCompleted = (currentIndex: number) => {
    if (currentIndex === 0) return true;
    if (!roadmapItems || !Array.isArray(roadmapItems)) return false;
    
    // Check if all previous items are completed
    for (let i = 0; i < currentIndex; i++) {
      const previousItem = roadmapItems[i];
      if (!previousItem?.title) return false;
      const previousStatus = userData.roadmapProgress?.[previousItem.title] || 'not-started';
      if (previousStatus !== 'completed') {
        return false;
      }
    }
    return true;
  };

  const handleProgressChange = (newStatus: ProgressStatus) => {
    if (newStatus === 'completed' && !isPreviousCompleted(index)) {
      toast({
        title: "Cannot complete this step yet",
        description: "You need to complete the previous steps first!",
        variant: "destructive",
      });
      return;
    }

    // If marking as "not started" or "in progress", check if any later items are completed
    if ((newStatus === 'not-started' || newStatus === 'in-progress') && progress === 'completed') {
      const hasLaterCompleted = roadmapItems.slice(index + 1).some(laterItem => 
        userData.roadmapProgress?.[laterItem.title] === 'completed'
      );

      if (hasLaterCompleted) {
        toast({
          title: "Cannot modify this step",
          description: "You need to un-complete later steps first!",
          variant: "destructive",
        });
        return;
      }
    }

    updateRoadmapProgress(item.title, newStatus);
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex gap-2 items-center">
            {getIcon()}
            <CardTitle className="text-lg">{item.title}</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={getProgressColor()}
                >
                  {getProgressIcon()}
                  <span className="ml-2 text-sm capitalize">{progress.replace('-', ' ')}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleProgressChange('not-started')}>
                  <Circle className="h-4 w-4 mr-2 text-gray-400" />
                  Not Started
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleProgressChange('in-progress')}>
                  <Timer className="h-4 w-4 mr-2 text-yellow-500" />
                  In Progress
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleProgressChange('completed')}
                  disabled={!isPreviousCompleted(index)}
                  className={!isPreviousCompleted(index) ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  {isPreviousCompleted(index) ? (
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                  ) : (
                    <Lock className="h-4 w-4 mr-2 text-gray-400" />
                  )}
                  Completed
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Badge variant={getBadgeVariant()} className="capitalize">
              {item.type}
            </Badge>
          </div>
        </div>
        
        {item.timeframe && (
          <CardDescription className="text-xs mt-1">
            Estimated timeframe: {item.timeframe}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm">{item.description}</p>
      </CardContent>
    </Card>
  );
}
