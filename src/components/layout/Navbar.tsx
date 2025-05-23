import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useUserData } from "@/contexts/UserDataContext";
import { useLanguage } from "@/contexts/LanguageContext";
import {
	User,
	LogOut,
	Home,
	BarChart,
	BookOpen,
	Menu,
	Users,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
	const { user, logout } = useAuth();
	const { userData, resetUserData } = useUserData();
	const isMobile = useIsMobile();
	const { t } = useLanguage();

	const handleLogout = () => {
		resetUserData(); // Clear user data
		logout(); // Log out the user
	};

	return (
		<header className="border-b sticky top-0 z-50 bg-light dark:bg-light">
			<div className="container flex h-20 items-center justify-between">
				<div className="flex items-center gap-2">
					<Link to="/" className="flex items-center gap-2">
						<img
							src="/upthrive.png"
							alt="LOGO"
							style={{
								height: "80px",
							}}
						/>
						<span className="font-semibold text-2xl text-white">
							UpThrive
						</span>
					</Link>
				</div>

				{user ? (
					<div className="flex items-center gap-4">
						{!isMobile && (
							<nav className="flex items-center gap-4 mr-4">
								<Link
									to="/"
									className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
								>
									{t("home")}
								</Link>
								<Link
									to="/quiz"
									className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
								>
									{t("skillsQuiz")}
								</Link>
								<Link
									to="/careers"
									className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
								>
									{t("careers")}
								</Link>
								<Link
									to="/dashboard"
									className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
								>
									{t("dashboard")}
								</Link>
								<Link
									to="/about-us"
									className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
								>
									About Us
								</Link>
								<Link
									to="/pricing"
									className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
								>
									Pricing
								</Link>
							</nav>
						)}

						<LanguageSwitcher />

						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-full text-gray-300 hover:text-white hover:bg-extraLight"
								>
									{isMobile ? (
										<Menu className="h-5 w-5" />
									) : (
										<User className="h-5 w-5" />
									)}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								align="end"
								className="w-56 bg-light border-extraLight"
							>
								<DropdownMenuLabel className="text-gray-200">
									{user.name || user.email}
								</DropdownMenuLabel>
								<DropdownMenuSeparator className="bg-extraLight" />

								{isMobile && (
									<>
										<DropdownMenuItem
											asChild
											className="text-gray-300 hover:text-white hover:bg-extraLight focus:bg-extraLight focus:text-white"
										>
											<Link
												to="/"
												className="flex items-center gap-2 cursor-pointer"
											>
												<Home className="h-4 w-4" />{" "}
												{t("home")}
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem
											asChild
											className="text-gray-300 hover:text-white hover:bg-extraLight focus:bg-extraLight focus:text-white"
										>
											<Link
												to="/quiz"
												className="flex items-center gap-2 cursor-pointer"
											>
												<BarChart className="h-4 w-4" />{" "}
												{t("skillsQuiz")}
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem
											asChild
											className="text-gray-300 hover:text-white hover:bg-extraLight focus:bg-extraLight focus:text-white"
										>
											<Link
												to="/careers"
												className="flex items-center gap-2 cursor-pointer"
											>
												<BookOpen className="h-4 w-4" />{" "}
												{t("careers")}
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem
											asChild
											className="text-gray-300 hover:text-white hover:bg-extraLight focus:bg-extraLight focus:text-white"
										>
											<Link
												to="/dashboard"
												className="flex items-center gap-2 cursor-pointer"
											>
												<User className="h-4 w-4" />{" "}
												{t("dashboard")}
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem
											asChild
											className="text-gray-300 hover:text-white hover:bg-extraLight focus:bg-extraLight focus:text-white"
										>
											<Link
												to="/about-us"
												className="flex items-center gap-2 cursor-pointer"
											>
												<Users className="h-4 w-4" />{" "}
												About Us
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem
											asChild
											className="text-gray-300 hover:text-white hover:bg-extraLight focus:bg-extraLight focus:text-white"
										>
											<Link
												to="/pricing"
												className="flex items-center gap-2 cursor-pointer"
											>
												<Users className="h-4 w-4" />{" "}
												Pricing
											</Link>
										</DropdownMenuItem>
										<DropdownMenuSeparator className="bg-extraLight" />
									</>
								)}

								<DropdownMenuItem
									onClick={handleLogout}
									className="text-gray-300 hover:text-white hover:bg-extraLight focus:bg-extraLight focus:text-white flex items-center gap-2 cursor-pointer"
								>
									<LogOut className="h-4 w-4" /> Logout
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				) : (
					<div className="flex items-center gap-2">
						<LanguageSwitcher />
						{!isMobile ? (
							<>
								<Link
									to="/about-us"
									className="text-sm font-medium text-gray-300 hover:text-white transition-colors mr-2"
								>
									About Us
								</Link>
								<Link
									to="/pricing"
									className="text-sm font-medium text-gray-300 hover:text-white transition-colors mr-2"
								>
									Pricing
								</Link>
								<Button
									asChild
									variant="ghost"
									className="text-gray-300 hover:text-white hover:bg-extraLight"
								>
									<Link to="/auth">{t("login")}</Link>
								</Button>
								<Button
									asChild
									className="bg-blue-600 hover:bg-blue-700 text-white"
								>
									<Link to="/auth?signup=true">
										{t("signup")}
									</Link>
								</Button>
							</>
						) : (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										size="icon"
										className="rounded-full text-gray-300 hover:text-white hover:bg-extraLight"
									>
										<Menu className="h-5 w-5" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									align="end"
									className="w-56 bg-light border-extraLight"
								>
									<DropdownMenuItem
										asChild
										className="text-gray-300 hover:text-white hover:bg-extraLight focus:bg-extraLight focus:text-white"
									>
										<Link
											to="/about-us"
											className="flex items-center gap-2 cursor-pointer"
										>
											<Users className="h-4 w-4" /> About
											Us
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem
										asChild
										className="text-gray-300 hover:text-white hover:bg-extraLight focus:bg-extraLight focus:text-white"
									>
										<Link
											to="/pricing"
											className="flex items-center gap-2 cursor-pointer"
										>
											<Users className="h-4 w-4" />{" "}
											Pricing
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem
										asChild
										className="text-gray-300 hover:text-white hover:bg-extraLight focus:bg-extraLight focus:text-white"
									>
										<Link
											to="/auth"
											className="flex items-center gap-2 cursor-pointer"
										>
											<User className="h-4 w-4" />{" "}
											{t("login")}
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem
										asChild
										className="text-gray-300 hover:text-white hover:bg-extraLight focus:bg-extraLight focus:text-white"
									>
										<Link
											to="/auth?signup=true"
											className="flex items-center gap-2 cursor-pointer"
										>
											<User className="h-4 w-4" />{" "}
											{t("signup")}
										</Link>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						)}
					</div>
				)}
			</div>
		</header>
	);
}
