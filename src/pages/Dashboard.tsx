import React, { useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { useUserData } from "@/contexts/UserDataContext";
import { Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RoadmapCard } from "@/components/roadmap/RoadmapCard";
import { getCareerById } from "@/data/careers";
import { getRoadmapByCareer } from "@/data/roadmaps";
import { BarChart3, BookOpen, Award, AlertCircle, TrendingUp, Users, CheckCircle, Trophy, Target, Clock, CircleDot, Briefcase } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Line, 
  LineChart, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const { userData } = useUserData();
  
  // Get selected career and roadmap
  const selectedCareer = userData.selectedCareerId ? getCareerById(userData.selectedCareerId) : null;
  const roadmapItems = useMemo(() => 
    selectedCareer ? getRoadmapByCareer(selectedCareer.id) : []
  , [selectedCareer]);

  // Check if all roadmap items are completed
  const allItemsCompleted = useMemo(() => {
    if (!roadmapItems.length || !userData.roadmapProgress) return false;
    return roadmapItems.every(item => userData.roadmapProgress?.[item.title] === 'completed');
  }, [roadmapItems, userData.roadmapProgress]);

  // Calculate progress statistics
  const progressStats = useMemo(() => {
    if (!roadmapItems.length || !userData.roadmapProgress) return {
      completed: 0,
      inProgress: 0,
      notStarted: 0,
      completionRate: 0,
      estimatedTimeLeft: 0
    };

    const stats = {
      completed: 0,
      inProgress: 0,
      notStarted: 0
    };

    roadmapItems.forEach(item => {
      const status = userData.roadmapProgress?.[item.title] || 'not-started';
      stats[status === 'completed' ? 'completed' : 
            status === 'in-progress' ? 'inProgress' : 
            'notStarted']++;
    });

    return {
      ...stats,
      completionRate: (stats.completed / roadmapItems.length) * 100,
      estimatedTimeLeft: roadmapItems.reduce((acc, item) => {
        const status = userData.roadmapProgress?.[item.title] || 'not-started';
        if (status !== 'completed') {
          // Parse timeframe (e.g., "2-3 months" -> take average)
          const timeMatch = item.timeframe?.match(/(\d+)(?:-(\d+))?\s*(month|year|week)/);
          if (timeMatch) {
            const [_, min, max, unit] = timeMatch;
            const avgMonths = max ? 
              (parseInt(min) + parseInt(max)) / 2 : 
              parseInt(min);
            return acc + (unit === 'year' ? avgMonths * 12 : 
                         unit === 'week' ? avgMonths * 0.25 : 
                         avgMonths);
          }
        }
        return acc;
      }, 0)
    };
  }, [roadmapItems, userData.roadmapProgress]);

  // Prepare data for pie chart
  const progressPieData = useMemo(() => [
    { name: 'Completed', value: progressStats.completed, color: '#22c55e' },
    { name: 'In Progress', value: progressStats.inProgress, color: '#eab308' },
    { name: 'Not Started', value: progressStats.notStarted, color: '#94a3b8' }
  ], [progressStats]);

  // Prepare data for radar chart
  const radarData = useMemo(() => {
    if (!userData.skillScores || !selectedCareer) return [];
    return [
      {
        subject: 'Analytical',
        user: userData.skillScores.analytical,
        required: selectedCareer.requiredSkills.analytical,
      },
      {
        subject: 'Technical',
        user: userData.skillScores.technical,
        required: selectedCareer.requiredSkills.technical,
      },
      {
        subject: 'Creative',
        user: userData.skillScores.creative,
        required: selectedCareer.requiredSkills.creative,
      },
      {
        subject: 'Communication',
        user: userData.skillScores.communication,
        required: selectedCareer.requiredSkills.communication,
      },
      {
        subject: 'Leadership',
        user: userData.skillScores.leadership,
        required: selectedCareer.requiredSkills.leadership,
      },
    ];
  }, [userData.skillScores, selectedCareer]);

  // Skill gap analysis
  const skillGapAnalysis = useMemo(() => {
    if (!userData.skillScores || !selectedCareer) return [];
    const skills = ['analytical', 'technical', 'creative', 'communication', 'leadership'];
    return skills.map(skill => ({
      name: skill.charAt(0).toUpperCase() + skill.slice(1),
      gap: selectedCareer.requiredSkills[skill] - (userData.skillScores[skill] || 0),
    })).filter(skill => skill.gap > 0);
  }, [userData.skillScores, selectedCareer]);

  // Progress tracking data
  const progressData = useMemo(() => {
    if (!roadmapItems.length) return [];
    return roadmapItems.map((item, index) => ({
      name: `Step ${index + 1}`,
      progress: Math.random() * 100, // Replace with actual progress tracking
    }));
  }, [roadmapItems]);

  // Progress by category
  const progressByCategory = useMemo(() => {
    if (!roadmapItems.length || !userData.roadmapProgress) return [];
    
    const categoryProgress = {
      study: { total: 0, completed: 0 },
      certification: { total: 0, completed: 0 },
      project: { total: 0, completed: 0 },
      skill: { total: 0, completed: 0 }
    };

    roadmapItems.forEach(item => {
      categoryProgress[item.type].total++;
      if (userData.roadmapProgress?.[item.title] === 'completed') {
        categoryProgress[item.type].completed++;
      }
    });

    return Object.entries(categoryProgress).map(([category, data]) => ({
      name: category.charAt(0).toUpperCase() + category.slice(1),
      progress: data.total ? (data.completed / data.total) * 100 : 0
    }));
  }, [roadmapItems, userData.roadmapProgress]);

  // Helper to render skill score visualization
  const renderSkillScores = () => {
    if (!userData.skillScores) return null;
    
    const skillCategories = [
      { name: "Analytical", key: "analytical", color: "bg-blue-500" },
      { name: "Technical", key: "technical", color: "bg-green-500" },
      { name: "Creative", key: "creative", color: "bg-purple-500" },
      { name: "Communication", key: "communication", color: "bg-yellow-500" },
      { name: "Leadership", key: "leadership", color: "bg-red-500" },
    ];
    
    return (
      <div className="space-y-3">
        {skillCategories.map((category) => (
          <div key={category.key} className="space-y-1">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{category.name}</h3>
              <span className="text-sm">
                {userData.skillScores?.[category.key as keyof typeof userData.skillScores]}/10
              </span>
            </div>
            <Progress 
              value={(userData.skillScores[category.key as keyof typeof userData.skillScores] / 10) * 100} 
              className={category.color} 
            />
          </div>
        ))}
      </div>
    );
  };

  // Redirect to login if not authenticated
  if (!loading && !user) {
    return <Navigate to="/auth" />;
  }
  
  // Check if the user has completed the assessment and selected a career
  const showSkillsAlert = !userData.quizCompleted;
  const showCareersAlert = userData.quizCompleted && !selectedCareer;

  const handleJobSearch = () => {
    const careerTitle = selectedCareer?.title || '';
    // Open job search links in new tabs
    window.open(`https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(careerTitle)}`, '_blank');
    window.open(`https://www.indeed.com/jobs?q=${encodeURIComponent(careerTitle)}`, '_blank');
    window.open(`https://www.naukri.com/jobs?keyword=${encodeURIComponent(careerTitle)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
          
          

          <Tabs defaultValue="overview" className="mb-8">

            <TabsContent value="overview">
              {/* Existing dashboard content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-1">
                  {/* Skill Assessment Card */}
                  <Card className="mb-6">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Skill Assessment</CardTitle>
                      </div>
                      <CardDescription>
                        {userData.quizCompleted 
                          ? "Your skill profile based on assessment" 
                          : "Take the assessment to see your skill profile"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {userData.quizCompleted ? (
                        <>
                          {renderSkillScores()}
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-4 w-full"
                            asChild
                          >
                            <Link to="/quiz">Retake Assessment</Link>
                          </Button>
                        </>
                      ) : (
                        <div className="text-center py-4">
                          <Button asChild>
                            <Link to="/quiz" className="flex items-center gap-2">
                              <BarChart3 className="h-4 w-4" />
                              Take Assessment
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  {/* Selected Career Card */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Selected Career</CardTitle>
                      </div>
                      <CardDescription>
                        {selectedCareer 
                          ? "Your chosen career path" 
                          : "Select a career to see your roadmap"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {selectedCareer ? (
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-medium text-lg">{selectedCareer.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {selectedCareer.description}
                            </p>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            asChild
                          >
                            <Link to="/careers">Change Career</Link>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            asChild
                          >
                            <Link to={`/careers/${selectedCareer.id}`}>View Career</Link>
                          </Button>
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <Button asChild>
                            <Link to="/careers" className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              Select a Career
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
                
                {/* Roadmap Section */}
                <div className="col-span-1 lg:col-span-2">
                  {showSkillsAlert && (
                    <Alert className="mb-6">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Complete your skill assessment</AlertTitle>
                      <AlertDescription className="flex flex-col sm:flex-row gap-4 sm:items-center mt-2">
                        <span>Take the assessment to get your personalized career roadmap.</span>
                        <Button asChild variant="outline" size="sm">
                          <Link to="/quiz">Take Assessment</Link>
                        </Button>
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  {showCareersAlert && (
                    <Alert className="mb-6">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Select a career path</AlertTitle>
                      <AlertDescription className="flex flex-col sm:flex-row gap-4 sm:items-center mt-2">
                        <span>Choose a career to see your personalized roadmap.</span>
                        <Button asChild variant="outline" size="sm">
                          <Link to="/careers">Select Career</Link>
                        </Button>
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <Card className="bg-muted/40">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">Your Career Roadmap</CardTitle>
                        </div>
                        {allItemsCompleted && (
                          <Button 
                            onClick={handleJobSearch}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            <Briefcase className="mr-2 h-4 w-4" />
                            Find Jobs
                          </Button>
                        )}
                      </div>
                      <CardDescription>
                        {selectedCareer 
                          ? `Recommended steps to become a ${selectedCareer.title}` 
                          : "Select a career to see your roadmap"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {selectedCareer && roadmapItems.length > 0 ? (
                        <div className="grid gap-4">
                          {roadmapItems.map((item, index) => (
                            <RoadmapCard 
                              key={item.title} 
                              item={item} 
                              index={index}
                              totalItems={roadmapItems.length}
                              roadmapItems={roadmapItems}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <p className="text-muted-foreground">
                            {userData.quizCompleted 
                              ? "Select a career to view your personalized roadmap" 
                              : "Complete your assessment and select a career to view your roadmap"}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Progress Distribution */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5" />
                      Progress Distribution
                    </CardTitle>
                    <CardDescription>Breakdown of your roadmap progress</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    {progressPieData.some(d => d.value > 0) ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={progressPieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {progressPieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <p className="text-muted-foreground">No progress data available</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Progress by Category */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5" />
                      Progress by Category
                    </CardTitle>
                    <CardDescription>Completion rate for each type of task</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    {progressByCategory.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={progressByCategory}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip />
                          <Bar dataKey="progress" fill="#3b82f6" name="Completion %" />
                        </BarChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <p className="text-muted-foreground">No category data available</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Skill Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Skill Analysis
                    </CardTitle>
                    <CardDescription>Compare your skills with career requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    {userData.skillScores && selectedCareer ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={radarData}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="subject" />
                          <PolarRadiusAxis angle={30} domain={[0, 10]} />
                          <Radar name="Your Skills" dataKey="user" stroke="#2563eb" fill="#2563eb" fillOpacity={0.3} />
                          <Radar name="Required Skills" dataKey="required" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                          <Legend />
                        </RadarChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <p className="text-muted-foreground">Complete assessment to see skill analysis</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Skill Gap Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Skill Gap Analysis
                    </CardTitle>
                    <CardDescription>Areas for improvement in your chosen career</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    {skillGapAnalysis.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={skillGapAnalysis}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis domain={[0, 10]} />
                          <Tooltip />
                          <Bar dataKey="gap" fill="#f43f5e" name="Skill Gap" />
                        </BarChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <p className="text-muted-foreground">No significant skill gaps identified</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="progress">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Roadmap Progress
                    </CardTitle>
                    <CardDescription>Track your progress through career milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {roadmapItems.length > 0 ? (
                      <div className="space-y-4">
                        {roadmapItems.map((item, index) => {
                          const status = userData.roadmapProgress?.[item.title] || 'not-started';
                          return (
                            <div key={item.title} className="bg-muted/40 rounded-lg p-4">
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                <div className="flex-1">
                                  <h4 className="font-medium mb-1">{item.title}</h4>
                                  <p className="text-sm text-muted-foreground break-words">{item.description}</p>
                                  {item.timeframe && (
                                    <p className="text-xs text-muted-foreground mt-1">
                                      Estimated timeframe: {item.timeframe}
                                    </p>
                                  )}
                                </div>
                                <div className="flex flex-col items-start sm:items-end gap-2 mt-2 sm:mt-0">
                                  <Badge 
                                    variant={status === 'completed' ? 'default' : 
                                           status === 'in-progress' ? 'secondary' : 
                                           'outline'}
                                    className="capitalize"
                                  >
                                    {status.replace('-', ' ')}
                                  </Badge>
                                  <Badge variant="outline" className="capitalize">
                                    {item.type}
                                  </Badge>
                                </div>
                              </div>
                              <Progress 
                                className="mt-3 h-2"
                                value={status === 'completed' ? 100 : 
                                       status === 'in-progress' ? 50 : 0}
                                indicatorClassName={
                                  status === 'completed' ? 'bg-green-500' :
                                  status === 'in-progress' ? 'bg-yellow-500' :
                                  'bg-gray-300'
                                }
                              />
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">Select a career to track progress</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;