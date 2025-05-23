import React, { useState, useEffect, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCareerById, Career } from "@/data/careers"; // Ensure Career type is correctly defined/imported
import { getRoadmapByCareer, RoadmapItem } from "@/data/roadmaps"; // Ensure RoadmapItem type is correctly defined/imported
import { getDayInLifeByCareerId, DayInLifeData } from "@/data/day-in-life"; 
import { getJobOutlookByCareerId, JobOutlookData } from "@/data/job-outlook"; 
import { useUserData } from "@/contexts/UserDataContext";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RoadmapCard } from "@/components/roadmap/RoadmapCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  BarChart, BookOpen, Award, BriefcaseBusiness, 
  Building2, CheckCircle, GraduationCap, 
  MapPin, Sparkles, Users, ArrowLeft, LucideIcon,
  Lightbulb, Code, LineChart, MessageSquare, Target,
  DollarSign, Eye, Sunrise, Percent, School, Briefcase, 
  Clock as ClockIcon, CalendarDays // Added CalendarDays, renamed Clock
} from "lucide-react";

type CareerStat = {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
};

type RelatedSkill = {
  name: string;
  relevance: number;
  icon: LucideIcon;
};

const CareerDetail = () => {
  const { careerId } = useParams<{ careerId: string }>();
  const { user } = useAuth();
  const { userData, setSelectedCareer } = useUserData();
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  
  const career = useMemo(() => careerId ? getCareerById(careerId) : null, [careerId]);
  const roadmapItems = useMemo(() => career ? getRoadmapByCareer(career.id) : [], [career]);
  const dayInLifeData = useMemo(() => career ? getDayInLifeByCareerId(career.id) : null, [career]);
  const jobOutlookData = useMemo(() => career ? getJobOutlookByCareerId(career.id) : null, [career]);
  
  useEffect(() => {
    if (career && userData.selectedCareerId === career.id) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [career, userData.selectedCareerId]);
  
  if (!career) {
    return (
      <div className="min-h-screen flex flex-col bg-darkBlue">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Career not found</h2>
            <Button asChild>
              <Link to="/careers">Back to Careers</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Career statistics
  const careerStats: CareerStat[] = [
    {
      label: "Avg. Salary",
      value: career.averageSalary?.match(/₹\d[\d,.]*\s*LPA(?:\s*-\s*₹\d[\d,.]*\s*LPA\+?)?/i)?.[0] || career.averageSalary || "N/A",
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      label: "Growth Outlook",
      value: career.growthRateShort || jobOutlookData?.growthRateInfo.text || "N/A",
      icon: LineChart,
      color: "text-blue-400"
    },
    {
      label: "Education",
      value: career.educationLevelShort || career.educationLevel || "Varied",
      icon: GraduationCap,
      color: "text-yellow-400"
    },
    {
      label: "Work Style",
      value: career.workEnvironmentShort || dayInLifeData?.workEnvironment.location || "Varied",
      icon: Briefcase,
      color: "text-purple-400"
    },
  ];
  
  // Related skills - this can be further enhanced by moving to career data if needed
  const relatedSkills: RelatedSkill[] = career.id === "software-developer" ? [
    { name: "Programming (Python, Java, JS)", relevance: 95, icon: Code },
    { name: "Problem Solving & Logic", relevance: 90, icon: Lightbulb },
    { name: "Data Structures & Algorithms", relevance: 85, icon: Target },
    { name: "Version Control (Git)", relevance: 80, icon: Users },
    { name: "Agile Methodologies", relevance: 70, icon: CheckCircle },
  ] : career.id === "data-analyst" ? [
    { name: "SQL & Databases", relevance: 90, icon: Code },
    { name: "Statistics & Probability", relevance: 85, icon: LineChart },
    { name: "Data Visualization (Tableau, PowerBI)", relevance: 80, icon: BarChart },
    { name: "Python/R for Data Analysis", relevance: 75, icon: Lightbulb },
    { name: "Business Acumen", relevance: 70, icon: BriefcaseBusiness },
  ] : [ 
    { name: "Critical Thinking", relevance: 85, icon: Lightbulb },
    { name: "Technical Aptitude", relevance: 80, icon: Code },
    { name: "Effective Communication", relevance: 90, icon: MessageSquare },
    { name: "Industry Knowledge", relevance: 75, icon: BookOpen },
    { name: "Adaptability", relevance: 70, icon: Sparkles },
  ];
  
  const handleSelectCareer = () => {
    if(career) {
        setSelectedCareer(career.id);
        setIsSelected(true);
    }
  };
  
  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-darkBlue">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-light to-darkBlue py-12">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <Button 
                variant="outline" 
                size="sm" 
                className="mb-4 text-gray-300 border-gray-600 hover:bg-extraLight hover:text-white"
                onClick={() => navigate("/careers")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to careers
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between gap-8 items-start mt-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-7/12"
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">{career.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {career.tags?.map(tag => (
                     <Badge key={tag} className="bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 border-none capitalize">{tag}</Badge>
                  ))}
                  {!career.tags && (
                    <>
                      <Badge className="bg-blue-600/30 text-blue-300 hover:bg-blue-600/40 border-none">Professional</Badge>
                      <Badge className="bg-green-600/30 text-green-300 hover:bg-green-600/40 border-none">In-Demand</Badge>
                    </>
                  )}
                </div>
                
                <div className="text-gray-300 text-lg mb-8 leading-relaxed">{career.description}</div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {careerStats.map((stat, index) => (
                    <motion.div 
                      key={stat.label + index} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-extraLight/50 backdrop-blur-sm p-4 rounded-xl min-h-[130px] flex flex-col justify-between"
                    >
                      <div className={`${stat.color} mb-2 flex justify-center`}>
                        <stat.icon className="h-7 w-7 md:h-8 md:w-8" />
                      </div>
                      <div className="text-center">
                        <p className={`text-white font-bold ${stat.label === "Avg. Salary" ? "text-lg md:text-xl" : "text-base md:text-lg"}`}>{stat.value}</p>
                        <p className="text-gray-400 text-xs">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {user && (
                    <div className="flex flex-col sm:flex-row gap-4">
                      {!isSelected ? (
                        <Button 
                          onClick={handleSelectCareer} 
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base" // Made button larger
                        >
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Select This Career Path
                        </Button>
                      ) : (
                        <>
                          <Button 
                            variant="outline" 
                            className="text-green-400 border-green-600/30 bg-green-600/10 hover:bg-green-600/20 cursor-default px-6 py-3 text-base"
                          >
                            <CheckCircle className="mr-2 h-5 w-5" />
                            Career Path Selected
                          </Button>
                          <Button 
                            onClick={handleGoToDashboard}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base"
                          >
                            View Your Roadmap on Dashboard
                          </Button>
                        </>
                      )}
                    </div>
                  )}
                   {!user && (
                     <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base">
                        <Link to={`/auth?redirect=/careers/${careerId}`}>Login to Select & Track</Link>
                     </Button>
                    )}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-5/12 bg-extraLight/30 backdrop-blur-sm rounded-xl p-6 border border-extraLight/50"
              >
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-400" /> Required Skills Profile
                </h3>
                
                <div className="space-y-4">
                  {Object.entries(career.requiredSkills).map(([skill, level]) => (
                    <div key={skill} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="capitalize text-gray-300">{skill}</span>
                        <span className="text-white font-medium">{level}/10</span>
                      </div>
                      <Progress 
                        value={level * 10} 
                        className="h-2.5 bg-extraLight"
                        indicatorClassName={
                          skill === "analytical" ? "bg-blue-500" :
                          skill === "technical" ? "bg-green-500" :
                          skill === "creative" ? "bg-purple-500" :
                          skill === "communication" ? "bg-yellow-500" :
                          "bg-red-500"
                        }
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-400" /> Key Related Skills
                  </h3>
                  
                  <div className="space-y-3">
                    {relatedSkills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3 bg-extraLight/20 p-3 rounded-lg">
                        <div className="bg-extraLight/30 rounded-full p-2">
                          <skill.icon className="h-4 w-4 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="text-white font-medium">{skill.name}</p>
                            <span className="text-gray-400 text-sm">{skill.relevance}%</span>
                          </div>
                          <Progress 
                            value={skill.relevance} 
                            className="h-1.5 mt-1 bg-extraLight"
                            indicatorClassName="bg-blue-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-darkBlue">
          <div className="container px-4">
            <Tabs defaultValue="roadmap" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 lg:grid-cols-4 h-auto p-1 mb-8 bg-extraLight/20">
                <TabsTrigger value="roadmap" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2 text-sm sm:text-base">
                  <BookOpen className="h-4 w-4 mr-1 sm:mr-2" /> Roadmap
                </TabsTrigger>
                <TabsTrigger value="dayInLife" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2 text-sm sm:text-base">
                  <Sunrise className="h-4 w-4 mr-1 sm:mr-2" /> Day in Life
                </TabsTrigger>
                <TabsTrigger value="jobOutlook" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2 text-sm sm:text-base">
                  <BarChart className="h-4 w-4 mr-1 sm:mr-2" /> Job Outlook
                </TabsTrigger>
                <TabsTrigger value="responsibilities" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 mr-1 sm:mr-2" /> Responsibilities
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="roadmap" className="mt-0">
                <div className="bg-light/30 backdrop-blur-sm rounded-lg border border-extraLight/50 p-4 sm:p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white">Career Roadmap for {career.title}</h3>
                  {roadmapItems.length > 0 ? (
                    <div className="space-y-4">
                      {roadmapItems.map((item, index) => (
                        <motion.div 
                          key={`${item.title}-${index}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <RoadmapCard item={item} />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-center py-8">No specific roadmap defined for this career yet. Check back later!</p>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="dayInLife" className="mt-0">
                <div className="bg-light/30 backdrop-blur-sm rounded-lg border border-extraLight/50 p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white">A Day in the Life of a {career.title}</h3>
                  {dayInLifeData ? (
                    <div className="space-y-6">
                      <div className="text-gray-300 space-y-4 whitespace-pre-line leading-relaxed">
                        {dayInLifeData.narrative || career.dayInLife?.split('\n\n').map((paragraph, index) => (
                          <p key={`narrative-${index}`}>{paragraph.split('\n').map((line, lineIdx) => <React.Fragment key={`line-${index}-${lineIdx}`}>{line}{lineIdx < paragraph.split('\n').length -1 && <br/>}</React.Fragment> )}</p>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <div className="bg-extraLight/20 rounded-xl p-5">
                          <h4 className="text-lg font-semibold text-white mb-2 flex items-center"><Sunrise className="h-5 w-5 mr-2 text-yellow-400"/>Morning Focus</h4>
                          <ul className="text-gray-300 space-y-1 list-disc list-inside pl-2">
                            {dayInLifeData.morningTasks.map((task, i) => <li key={`morn-${i}`}>{task}</li>)}
                          </ul>
                        </div>
                        
                        <div className="bg-extraLight/20 rounded-xl p-5">
                          <h4 className="text-lg font-semibold text-white mb-2 flex items-center"><CalendarDays className="h-5 w-5 mr-2 text-blue-400"/>Afternoon Activities</h4>
                          <ul className="text-gray-300 space-y-1 list-disc list-inside pl-2">
                            {dayInLifeData.afternoonTasks.map((task, i) => <li key={`aft-${i}`}>{task}</li>)}
                          </ul>
                        </div>
                        
                        <div className="bg-extraLight/20 rounded-xl p-5">
                          <h4 className="text-lg font-semibold text-white mb-2 flex items-center"><Users className="h-5 w-5 mr-2 text-purple-400"/>Key Interactions With</h4>
                          <ul className="text-gray-300 space-y-1 list-disc list-inside pl-2">
                            {dayInLifeData.keyInteractions.map((interaction, i) => <li key={`inter-${i}`}>{interaction}</li>)}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-8 bg-extraLight/20 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Typical Work Environment</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-blue-400 shrink-0" />
                                <span className="text-gray-300">{dayInLifeData.workEnvironment.location}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <BriefcaseBusiness className="h-5 w-5 text-purple-400 shrink-0" />
                                <span className="text-gray-300">{dayInLifeData.workEnvironment.collaboration}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ClockIcon className="h-5 w-5 text-green-400 shrink-0" />
                                <span className="text-gray-300">{dayInLifeData.workEnvironment.hours}</span>
                            </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                     <p className="text-gray-400 text-center py-8">Detailed "Day in the Life" information is not yet available for this career.</p>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="jobOutlook" className="mt-0">
                <div className="bg-light/30 backdrop-blur-sm rounded-lg border border-extraLight/50 p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white">Job Outlook & Considerations for a {career.title}</h3>
                  {jobOutlookData ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-white">Industry Growth & Demand</h4>
                        <div className="bg-extraLight/20 rounded-xl p-5">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-300">Projected Growth ({jobOutlookData.growthRateInfo.period || 'Next Decade'}):</span>
                            <Badge className="bg-green-600/40 text-green-300 hover:bg-green-600/50 text-sm px-3 py-1">
                              {jobOutlookData.growthRateInfo.text}
                            </Badge>
                          </div>
                           <Progress 
                            value={jobOutlookData.growthRateInfo.percentage} 
                            className="h-2.5 bg-extraLight mb-4" // Slightly thicker progress bar
                            indicatorClassName="bg-green-500"
                          />
                          <div className="flex justify-between items-center text-sm mb-1">
                             <span className="text-gray-300">Average Salary (India):</span>
                             <span className="text-white font-medium text-base">{jobOutlookData.salaryRange.mid || career.averageSalary?.match(/₹\d[\d,.]*\s*LPA(?:\s*-\s*₹\d[\d,.]*\s*LPA\+?)?/i)?.[0] || "N/A"}</span>
                          </div>
                           <p className="text-xs text-gray-400 mt-2">{jobOutlookData.salaryRange.note || "*Salary can vary significantly."}</p>
                           {jobOutlookData.growthRateInfo.source && (
                               <p className="text-xs text-gray-500 mt-2">Growth Source: {jobOutlookData.growthRateInfo.source}</p>
                            )}
                        </div>
                        
                        <h4 className="text-xl font-semibold text-white">Top Industries Hiring</h4>
                        <div className="bg-extraLight/20 rounded-xl p-5">
                          <ul className="space-y-2 text-gray-300 list-disc list-inside pl-2">
                            {jobOutlookData.topIndustries.map((industry, i) => <li key={`ind-${i}`}>{industry}</li>)}
                          </ul>
                        </div>
                         {jobOutlookData.typicalEmployers && jobOutlookData.typicalEmployers.length > 0 && (
                          <>
                            <h4 className="text-xl font-semibold text-white">Typical Employers</h4>
                            <div className="bg-extraLight/20 rounded-xl p-5">
                              <ul className="space-y-2 text-gray-300 list-disc list-inside pl-2">
                                {jobOutlookData.typicalEmployers.map((employer, i) => <li key={`emp-${i}`}>{employer}</li>)}
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                      
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-white flex items-center">
                            <Eye className="h-5 w-5 mr-2 text-yellow-400"/> What to Look Out For
                        </h4>
                        <div className="bg-extraLight/20 rounded-xl p-5 text-gray-300 space-y-3 whitespace-pre-line leading-relaxed">
                            {jobOutlookData.lookOutFor?.map((point, index) => (
                                <p key={`look-${index}`} className="flex items-start">
                                    <Lightbulb className="h-4 w-4 mr-2.5 mt-1 text-yellow-400 shrink-0" />
                                    <span>{point}</span>
                                </p>
                            )) || career.lookOutFor?.split('\n\n').map((paragraph, index) => ( // Fallback to career.lookOutFor
                                <p key={`look-career-${index}`} className="flex items-start">
                                    <Lightbulb className="h-4 w-4 mr-2.5 mt-1 text-yellow-400 shrink-0" />
                                    <span>{paragraph.split('\n').map((line, lineIdx) => <React.Fragment key={lineIdx}>{line}{lineIdx < paragraph.split('\n').length -1 && <br/>}</React.Fragment> )}</span>
                                </p>
                            ))}
                        </div>
                        
                        <h4 className="text-xl font-semibold text-white">Future Trends in this Field</h4>
                        <div className="bg-extraLight/20 rounded-xl p-5">
                          <ul className="space-y-2 text-gray-300 list-disc list-inside pl-2">
                            {jobOutlookData.futureTrends.map((trend, i) => <li key={`trend-${i}`}>{trend}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                     <p className="text-gray-400 text-center py-8">Detailed "Job Outlook" information is not yet available for this career.</p>
                  )}
                </div>
              </TabsContent>

               <TabsContent value="responsibilities" className="mt-0">
                <div className="bg-light/30 backdrop-blur-sm rounded-lg border border-extraLight/50 p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white">Key Responsibilities of a {career.title}</h3>
                  {career.responsibilities && career.responsibilities.length > 0 ? (
                    <ul className="space-y-2 text-gray-300 list-disc list-inside pl-2 leading-relaxed">
                        {career.responsibilities.map((resp, idx) => <li key={`resp-${idx}`}>{resp}</li>)}
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-center py-8">Key responsibilities for this career are not yet detailed.</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CareerDetail;