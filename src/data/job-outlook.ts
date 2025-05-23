export interface JobOutlookData {
    careerId: string;
    jobOpeningsPerYear: string; // e.g., "Approx. 153,900 annually" (Source: BLS)
    unemploymentRateInfo: string; // e.g., "Typically below 2% (lower than national average)"
    growthRateInfo?: { // Making this optional to handle missing data gracefully
        period?: string; // e.g., "2022-2032"
        text: string; // e.g., "Much faster than average", "Average"
        percentage: number; // Numerical growth rate
        source?: string; // e.g., "U.S. Bureau of Labor Statistics" (adapt for India)
    };
    topIndustries: string[];
    salaryRange: {
        entry: string; // e.g., "$70,000 - $90,000"
        mid: string;   // e.g., "$90,000 - $130,000"
        senior: string;// e.g., "$130,000 - $180,000+"
        note?: string; // e.g., "Varies by location, experience, specialization."
    };
    futureTrends: string[];
    typicalEmployers?: string[]; // Added
}

const jobOutlookDetails: JobOutlookData[] = [
    {
        careerId: "software-developer",
        growthRateInfo: {
            period: "2022-2032 (US BLS)", // Example data
            text: "Much faster than average",
            percentage: 25,
            source: "U.S. Bureau of Labor Statistics",
        },
        jobOpeningsPerYear: "Avg. 162,900 (Software Devs, QA Analysts, Testers) over the decade", // BLS
        unemploymentRateInfo: "1.1% (2022, for Software Developers, significantly lower than average)", // BLS
        topIndustries: [
            "Computer systems design and related services",
            "Software publishers",
            "Finance and insurance",
            "Manufacturing (especially tech products)",
            "Management of companies and enterprises",
            "Healthcare technology",
        ],
        salaryRange: {
            entry: "$75,000 - $95,000",
            mid: "$95,000 - $140,000",
            senior: "$140,000 - $200,000+",
            note: "Highly dependent on location (e.g., Bay Area, NYC), specialization (AI/ML, Cybersecurity), and company size.",
        },
        futureTrends: [
            "Increased demand for AI/ML and data science integration skills.",
            "Growth in cloud-native development and serverless architectures.",
            "Strong emphasis on cybersecurity within the development lifecycle (DevSecOps).",
            "Expansion of IoT and edge computing applications.",
            "Continued evolution of mobile and web application development frameworks.",
            "Rise of low-code/no-code platforms, shifting focus to complex problem-solving.",
        ],
        typicalEmployers: ["Tech companies (FAANG, startups)", "Financial institutions", "Consulting firms", "Healthcare organizations", "Government agencies"],
    },
    {
        careerId: "data-analyst",
        growthRateInfo: {
            period: "2022-2032 (US BLS for Market Research Analysts)", // Example data
            text: "Much faster than average",
            percentage: 13,
            source: "U.S. Bureau of Labor Statistics",
        },
        // Using Market Research Analyst data as a proxy from BLS
        jobOpeningsPerYear: "Avg. 74,700 (Market Research Analysts) over the decade",
        unemploymentRateInfo: "0.7% (2022, for Market Research Analysts, very low)",
        topIndustries: [
            "Professional, scientific, and technical services (consulting)",
            "Finance and insurance",
            "Information technology companies",
            "Healthcare and social assistance providers",
            "Retail and E-commerce businesses",
            "Manufacturing",
        ],
        salaryRange: {
            entry: "$60,000 - $78,000",
            mid: "$78,000 - $105,000",
            senior: "$105,000 - $150,000+",
            note: "Can increase significantly with advanced skills (e.g., machine learning, big data tools) or specialization (e.g., financial analyst).",
        },
        futureTrends: [
            "Greater integration of AI and machine learning for predictive and prescriptive analytics.",
            "Increased demand for real-time data analysis and decision-making capabilities.",
            "Growing importance of data storytelling, visualization, and communication skills.",
            "Stronger focus on data ethics, privacy, security, and governance.",
            "Specialization in areas like big data technologies, cloud analytics platforms, and specific industry domains.",
            "Demand for analysts who can translate data insights into actionable business strategies.",
        ],
        typicalEmployers: ["Consulting firms", "Tech companies", "Financial services", "Retailers", "Healthcare providers", "Marketing agencies"],
    },
    // TODO: Add detailed "Job Outlook" for:
    // - ux-designer
    // - project-manager
    // - digital-marketer
    // - cybersecurity-analyst
    // - content-creator
    // Ensure each has realistic data for openings, unemployment, industries, salary, trends.
    {
        careerId: "ux-designer", // Example stub
        growthRateInfo: { // Added missing growthRateInfo
            period: "2022-2032 (US BLS for Web Devs & Digital Designers)",
            text: "Faster than average",
            percentage: 16,
            source: "U.S. Bureau of Labor Statistics",
        },
        jobOpeningsPerYear: "Avg. 19,800 (Web Devs & Digital Designers)",
        unemploymentRateInfo: "Low, similar to tech roles",
        topIndustries: ["Tech", "E-commerce", "Agencies"],
        salaryRange: {
            entry: "$65,000 - $85,000",
            mid: "$85,000 - $120,000",
            senior: "$120,000 - $160,000+",
        },
        futureTrends: ["AI in UX", "Voice UI", "AR/VR design"],
        typicalEmployers: ["Software companies", "Design agencies", "Large corporations with digital products"],
    },
];

export const getJobOutlookByCareerId = (careerId: string): JobOutlookData | undefined => {
    const data = jobOutlookDetails.find(j => j.careerId === careerId);
    if (!data && careerId) console.warn(`No job outlook data found for careerId: ${careerId}`);
    return data;
};