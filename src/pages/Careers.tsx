import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { useUserData } from "@/contexts/UserDataContext";
import { Navigate, useNavigate } from "react-router-dom";
import { careers, careerCategories } from "@/data/careers";
import { CareerCard } from "@/components/careers/CareerCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, AlertCircle, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const Careers = () => {
  const { user, loading } = useAuth();
  const { userData, setSelectedCareer } = useUserData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCareerId, setSelectedCareerId] = useState<string>(userData.selectedCareerId || "");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]); // Start with empty array - all collapsed
  const navigate = useNavigate();
  
  const handleCareerSelect = (careerId: string) => {
    setSelectedCareerId(careerId);
  };
  
  const handleConfirmSelection = () => {
    setSelectedCareer(selectedCareerId);
    navigate("/dashboard");
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? [] // If clicking on open category, close it
        : [category] // If clicking on closed category, make it the only open one
    );
  };
  
  // Filter careers based on search term
  const getFilteredCareersForCategory = (categoryIds: string[]) => {
    return careers.filter(career => 
      categoryIds.includes(career.id) &&
      (career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       career.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };
  
  const containerVariants = {
    hidden: { 
      opacity: 0,
      height: 0
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  // Redirect to login if not authenticated
  if (!loading && !user) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedContainer 
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
            animation="slideUp"
            delay={0.2}
          >
            <div>
              <h1 className="text-3xl font-bold mb-2 text-white">Career Paths</h1>
              <p className="text-muted-foreground">
                Explore potential career paths based on your skills and interests
              </p>
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search careers..." 
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </AnimatedContainer>
          
          {!userData.quizCompleted && (
            <AnimatedContainer 
              className="mb-6"
              animation="fadeIn"
              delay={0.3}
            >
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>You haven't completed the skills assessment</AlertTitle>
                <AlertDescription className="flex flex-col sm:flex-row gap-4 sm:items-center mt-2">
                  <span>Take the assessment to get personalized career matches.</span>
                  <AnimatedButton asChild variant="outline" size="sm">
                    <a href="/quiz">Take Assessment</a>
                  </AnimatedButton>
                </AlertDescription>
              </Alert>
            </AnimatedContainer>
          )}

          <div className="space-y-8">
            {Object.entries(careerCategories).map(([category, categoryIds]) => {
              const filteredCareers = getFilteredCareersForCategory(categoryIds);
              if (filteredCareers.length === 0 && searchTerm) return null;
              
              return (
                <AnimatedContainer
                  key={category}
                  className="space-y-4"
                  animation="fadeIn"
                  delay={0.2}
                >
                  <div 
                    className="flex items-center justify-between cursor-pointer bg-extraLight/20 p-4 rounded-lg hover:bg-extraLight/30 transition-colors"
                    onClick={() => toggleCategory(category)}
                  >
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-semibold text-white">{category}</h2>
                      <Badge className="bg-blue-600/40 text-blue-200">
                        {filteredCareers.length} careers
                      </Badge>
                    </div>
                    <motion.div
                      initial={false}
                      animate={{ rotate: expandedCategories.includes(category) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedCategories.includes(category) && (
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          {filteredCareers.map(career => (
                            <motion.div 
                              key={career.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CareerCard
                                career={career}
                                userSkills={userData.skillScores}
                                onSelect={handleCareerSelect}
                                selected={selectedCareerId === career.id}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AnimatedContainer>
              );
            })}
          </div>
          
          {selectedCareerId && (
            <AnimatedContainer 
              className="mt-8 flex justify-center"
              animation="slideUp"
              delay={0.2}
            >
              <AnimatedButton 
                onClick={handleConfirmSelection} 
                size="lg"
                className="flex gap-2 items-center"
              >
                <CheckCircle className="h-4 w-4" />
                Confirm Career Selection
              </AnimatedButton>
            </AnimatedContainer>
          )}
        </div>
      </main>
    </div>
  );
};

export default Careers;
