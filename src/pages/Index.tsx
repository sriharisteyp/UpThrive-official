import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { BarChart3, LineChart, ArrowRight } from "lucide-react";
import { Reviews } from "@/components/home/Reviews";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { AnimatedButton } from "@/components/ui/animated-button";

const Index = () => {
	const { user } = useAuth();
	const { t } = useLanguage();

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />

			<div className="flex-1">
				{/* Hero Section */}
				<section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent">
					<div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
						<AnimatedContainer
							className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
							animation="slideIn"
							delay={0.2}
						>
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								{t("findCareer")}
							</h1>
							<p className="text-xl mb-8 text-muted-foreground">
								{t("tagline")}
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								{user ? (
									<>
										<AnimatedButton
											asChild
											size="lg"
											delay={0.3}
										>
											<Link
												to="/quiz"
												className="flex items-center gap-2"
											>
												<BarChart3 className="h-5 w-5" />
												{t("takeQuiz")}
											</Link>
										</AnimatedButton>
										<AnimatedButton
											asChild
											variant="outline"
											size="lg"
											delay={0.4}
										>
											<Link
												to="/dashboard"
												className="flex items-center gap-2"
											>
												<LineChart className="h-5 w-5" />
												{t("viewDashboard")}
											</Link>
										</AnimatedButton>
									</>
								) : (
									<>
										<AnimatedButton
											asChild
											size="lg"
											delay={0.3}
										>
											<Link to="/auth?signup=true">
												{t("signUpFree")}
											</Link>
										</AnimatedButton>
										<AnimatedButton
											asChild
											variant="outline"
											size="lg"
											delay={0.4}
										>
											<Link to="/auth">{t("login")}</Link>
										</AnimatedButton>
									</>
								)}
							</div>
						</AnimatedContainer>
						<AnimatedContainer
							className="md:w-1/2 flex justify-center"
							animation="scale"
							delay={0.5}
						>
							<div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-[650px] mx-auto aspect-[650/500]">
								{/* Background circles */}
								<div className="absolute inset-0 bg-career-500 rounded-full opacity-20"></div>
								<div className="absolute inset-4 bg-career-600 rounded-full opacity-30"></div>

								{/* Centered image */}
								<div className="absolute inset-0 flex items-center justify-center p-4">
									<img
										src="/hero.jpg"
										alt="Hero"
										className="w-[400ppx] h-[600px] object-cover rounded-lg shadow-lg"
									/>
								</div>
							</div>
						</AnimatedContainer>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-16 bg-background">
					<div className="container mx-auto px-4">
						<AnimatedContainer
							className="text-center"
							animation="slideUp"
							delay={0.2}
						>
							<h2 className="text-3xl font-bold text-center mb-12">
								{t("howItWorks")}
							</h2>
						</AnimatedContainer>

						<AnimatedContainer
							animation="fadeIn"
							staggerChildren={true}
							staggerDelay={0.15}
							className="grid grid-cols-1 md:grid-cols-3 gap-8"
						>
							<div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
								<div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
									<BarChart3 className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-xl font-bold mb-3">
									{t("skillAssessment")}
								</h3>
								<p className="text-muted-foreground">
									Take our comprehensive skill assessment quiz
									to discover your strengths and areas for
									growth.
								</p>
							</div>

							<div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
								<div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
									<LineChart className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-xl font-bold mb-3">
									{t("careerMatching")}
								</h3>
								<p className="text-muted-foreground">
									Get personalized career recommendations
									based on your skills profile and
									preferences.
								</p>
							</div>

							<div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
								<div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"></div>
								<h3 className="text-xl font-bold mb-3">
									{t("customRoadmap")}
								</h3>
								<p className="text-muted-foreground">
									Follow a detailed learning path with
									resources and milestones to reach your
									career goals.
								</p>
							</div>
						</AnimatedContainer>

						<AnimatedContainer
							className="mt-12 text-center"
							animation="slideUp"
							delay={0.6}
						>
							<AnimatedButton asChild size="lg">
								<Link
									to={user ? "/quiz" : "/auth?signup=true"}
									className="flex items-center gap-2"
								>
									{t("getStarted")}{" "}
									<ArrowRight className="h-4 w-4" />
								</Link>
							</AnimatedButton>
						</AnimatedContainer>
					</div>
				</section>

				{/* Reviews Section */}
				<Reviews />
			</div>
		</div>
	);
};

export default Index;
