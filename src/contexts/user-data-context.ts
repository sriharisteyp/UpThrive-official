export type UserData = {
  quizCompleted: boolean;
  selectedCareerId?: string;
  skillScores?: {
    analytical: number;
    technical: number;
    creative: number;
    communication: number;
    leadership: number;
  };
  roadmapProgress?: {
    [stepTitle: string]: 'not-started' | 'in-progress' | 'completed';
  };
};