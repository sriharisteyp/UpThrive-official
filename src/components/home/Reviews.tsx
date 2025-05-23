
import React from "react";
import { Star, StarHalf } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedContainer } from "@/components/ui/animated-container";

type Review = {
  id: number;
  name: string;
  avatar: string;
  occupation: string;
  text: string;
  rating: number;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Johnson",
    occupation: "Software Developer",
    text: "UpThrive helped me identify my strengths in analytical thinking and guided me toward a career in software development. The roadmap they provided was incredibly helpful!",
    rating: 5
  },
  {
    id: 2,
    name: "Samantha Lee",
    occupation: "UX Designer",
    text: "I was stuck in a career I didn't enjoy. The skills assessment quiz opened my eyes to my creative potential. Now I'm working as a UX designer and loving it!",
    rating: 4.5
  },
  {
    id: 3,
    name: "Michael Torres",
    occupation: "Data Analyst",
    text: "The personalized roadmap was exactly what I needed. It helped me focus on developing the right skills and securing certifications that made me stand out to employers.",
    rating: 5
  }
];

export function Reviews() {
  const { t } = useLanguage();
  
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-career-500 text-career-500 h-5 w-5" />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-career-500 text-career-500 h-5 w-5" />);
    }
    
    return stars;
  };
  
  return (
    <section className="py-16 bg-accent/50">
      <div className="container mx-auto px-4">
        <AnimatedContainer 
          animation="slideUp"
          className="text-center"
          delay={0.2}
        >
          <h2 className="text-3xl font-bold text-center mb-12">{t('reviews')}</h2>
        </AnimatedContainer>
        
        <AnimatedContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          animation="fadeIn"
          staggerChildren={true}
          staggerDelay={0.15}
        >
          {reviews.map((review) => (
            <div key={review.id} className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.occupation}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-muted-foreground">{review.text}</p>
            </div>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
