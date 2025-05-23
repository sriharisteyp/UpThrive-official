import { get } from "http";

// Removed the import of getRandomQuestions as it is defined in the same file
export type Question = {
  id: string;
  text: string;
  category: "analytical" | "technical" | "creative" | "communication" | "leadership";
  options: {
    text: string;
    score: number;
  }[];
};

export const quizQuestions: Question[] = [
  // Your Existing Questions
  {
    id: "q1",
    text: "How do you approach solving a complex problem?",
    category: "analytical",
    options: [
      { text: "Break it down into smaller parts and analyze each one systematically", score: 10 },
      { text: "Look for patterns and connections to find a solution", score: 8 },
      { text: "Try different solutions until one works", score: 5 },
      { text: "Ask someone else for guidance", score: 3 }
    ]
  },
  {
    id: "q2",
    text: "When learning to use a new technology, you prefer to:",
    category: "technical",
    options: [
      { text: "Read the documentation thoroughly before starting", score: 10 },
      { text: "Watch tutorial videos and follow along", score: 8 },
      { text: "Experiment and learn by trial and error", score: 6 },
      { text: "Ask a friend who knows how to use it", score: 3 }
    ]
  },
  {
    id: "q3",
    text: "When faced with a blank canvas or new project, you typically:",
    category: "creative",
    options: [
      { text: "Come up with multiple unique ideas before choosing one", score: 10 },
      { text: "Think outside the box to find an innovative approach", score: 8 },
      { text: "Start with a conventional approach and add your own twist", score: 6 },
      { text: "Look for examples of similar projects to draw inspiration", score: 4 }
    ]
  },
  {
    id: "q4",
    text: "In a group discussion, how do you typically participate?",
    category: "communication",
    options: [
      { text: "Listen carefully and then express well-thought-out opinions", score: 10 },
      { text: "Actively engage, asking questions and sharing ideas", score: 8 },
      { text: "Speak when you have something important to add", score: 6 },
      { text: "Prefer to listen and observe rather than speak", score: 3 }
    ]
  },
  {
    id: "q5",
    text: "When working on a team project where you notice problems, you usually:",
    category: "leadership",
    options: [
      { text: "Take initiative to organize the team and solve issues", score: 10 },
      { text: "Suggest solutions and help implement them", score: 8 },
      { text: "Support whoever takes the lead", score: 5 },
      { text: "Focus on completing your assigned tasks well", score: 3 }
    ]
  },
  {
    id: "q6",
    text: "When analyzing data or information, you prefer to:",
    category: "analytical",
    options: [
      { text: "Look for trends and patterns in the data", score: 10 },
      { text: "Consider how the information fits into the bigger picture", score: 8 },
      { text: "Focus on the most important details", score: 6 },
      { text: "Trust your intuition about what the data means", score: 3 }
    ]
  },
  {
    id: "q7",
    text: "How comfortable are you with learning and using new software or digital tools?",
    category: "technical",
    options: [
      { text: "Very comfortable - I enjoy learning new technologies", score: 10 },
      { text: "Comfortable with most technologies after some practice", score: 7 },
      { text: "I can learn the basics but prefer familiar tools", score: 5 },
      { text: "I find new technologies challenging and prefer to avoid them", score: 2 }
    ]
  },
  {
    id: "q8",
    text: "When communicating a complex idea, you typically:",
    category: "communication",
    options: [
      { text: "Use clear, concise language with helpful examples", score: 10 },
      { text: "Adapt your explanation based on your audience", score: 8 },
      { text: "Cover all the important points thoroughly", score: 6 },
      { text: "Prefer to write it down rather than explain verbally", score: 4 }
    ]
  },
  {
    id: "q9",
    text: "When you have creative freedom on a project, you tend to:",
    category: "creative",
    options: [
      { text: "Experiment with unique and original approaches", score: 10 },
      { text: "Combine existing ideas in new and interesting ways", score: 8 },
      { text: "Put your own spin on proven methods", score: 6 },
      { text: "Stick with what you know works well", score: 3 }
    ]
  },
  {
    id: "q10",
    text: "When a team is facing a difficult challenge, you typically:",
    category: "leadership",
    options: [
      { text: "Step up to coordinate efforts and boost morale", score: 10 },
      { text: "Help define the problem and suggest possible directions", score: 8 },
      { text: "Support the team by doing your part exceptionally well", score: 6 },
      { text: "Follow the guidance of those with the most expertise", score: 4 }
    ]
  },

  // New Analytical Questions (18)
  {
    id: "q11",
    text: "When faced with conflicting information, what is your first step?",
    category: "analytical",
    options: [
      { text: "Verify the sources and accuracy of all pieces of information", score: 10 },
      { text: "Identify common ground or points of agreement first", score: 8 },
      { text: "Choose the information that seems most logical or credible", score: 6 },
      { text: "Ask for a third opinion to resolve the conflict", score: 4 }
    ]
  },
  {
    id: "q12",
    text: "How do you evaluate the success of a solution you implemented?",
    category: "analytical",
    options: [
      { text: "Define clear metrics beforehand and measure against them", score: 10 },
      { text: "Gather feedback from stakeholders and users", score: 8 },
      { text: "Observe if the original problem has been alleviated", score: 7 },
      { text: "Compare it to previous attempts or industry benchmarks", score: 5 }
    ]
  },
  {
    id: "q13",
    text: "When making a critical decision with incomplete information, you:",
    category: "analytical",
    options: [
      { text: "Identify potential risks and create contingency plans", score: 10 },
      { text: "Gather as much relevant information as possible in the given time", score: 8 },
      { text: "Rely on your experience and judgment", score: 6 },
      { text: "Delay the decision until more information is available", score: 4 }
    ]
  },
  {
    id: "q14",
    text: "How do you ensure objectivity when analyzing a situation?",
    category: "analytical",
    options: [
      { text: "Consciously identify and challenge your own biases and assumptions", score: 10 },
      { text: "Seek out diverse perspectives and opinions", score: 8 },
      { text: "Focus strictly on verifiable facts and data", score: 7 },
      { text: "Use a structured framework or checklist for analysis", score: 6 }
    ]
  },
  {
    id: "q15",
    text: "When presented with a large dataset, your initial approach is to:",
    category: "analytical",
    options: [
      { text: "Understand the context and objectives before diving into details", score: 10 },
      { text: "Clean and organize the data for easier analysis", score: 8 },
      { text: "Look for obvious outliers or anomalies", score: 7 },
      { text: "Start visualizing the data to spot trends", score: 6 }
    ]
  },
  {
    id: "q16",
    text: "How do you approach identifying the root cause of a problem?",
    category: "analytical",
    options: [
      { text: "Use methods like the '5 Whys' or fishbone diagrams", score: 10 },
      { text: "Trace back the sequence of events that led to the problem", score: 8 },
      { text: "Brainstorm all possible causes and then investigate them", score: 7 },
      { text: "Address the most obvious symptoms first to see if it resolves", score: 4 }
    ]
  },
  {
    id: "q17",
    text: "When planning a project, how do you identify potential obstacles?",
    category: "analytical",
    options: [
      { text: "Brainstorm with the team and consult past project experiences", score: 10 },
      { text: "Conduct a thorough risk assessment for each phase", score: 8 },
      { text: "Consider worst-case scenarios and plan for them", score: 6 },
      { text: "Focus on the main tasks and assume minor issues can be handled later", score: 3 }
    ]
  },
  {
    id: "q18",
    text: "If a process isn't yielding expected results, you:",
    category: "analytical",
    options: [
      { text: "Analyze each step of the process to find inefficiencies or errors", score: 10 },
      { text: "Compare the current process with best practices or alternatives", score: 8 },
      { text: "Tweak variables within the current process and observe changes", score: 6 },
      { text: "Assume external factors are the primary cause", score: 3 }
    ]
  },
  {
    id: "q19",
    text: "When making a prediction or forecast, you rely most on:",
    category: "analytical",
    options: [
      { text: "Historical data and statistical modeling", score: 10 },
      { text: "Expert opinions and qualitative assessments", score: 8 },
      { text: "Current trends and market conditions", score: 7 },
      { text: "Your intuition and gut feeling", score: 4 }
    ]
  },
  {
    id: "q20",
    text: "How do you handle an unexpected outcome in an experiment or analysis?",
    category: "analytical",
    options: [
      { text: "Re-examine your methodology, data, and assumptions for errors", score: 10 },
      { text: "Try to understand why the outcome occurred, even if it's not what you wanted", score: 8 },
      { text: "Consult with peers to get their perspective on the results", score: 7 },
      { text: "Dismiss it as an anomaly if it doesn't fit your hypothesis", score: 3 }
    ]
  },
  {
    id: "q21",
    text: "What is your strategy for simplifying complex information for others?",
    category: "analytical",
    options: [
      { text: "Identify the core message and use analogies or visuals to explain", score: 10 },
      { text: "Break it down into logical, digestible parts", score: 8 },
      { text: "Avoid jargon and use clear, plain language", score: 7 },
      { text: "Provide all the details to ensure thoroughness", score: 4 }
    ]
  },
  {
    id: "q22",
    text: "When evaluating different options, your primary focus is on:",
    category: "analytical",
    options: [
      { text: "The option that best meets the defined criteria and objectives", score: 10 },
      { text: "The long-term benefits and potential risks of each option", score: 8 },
      { text: "The feasibility and resource requirements of each option", score: 7 },
      { text: "The option that is easiest or quickest to implement", score: 4 }
    ]
  },
  {
    id: "q23",
    text: "How do you ensure you are not overlooking important details?",
    category: "analytical",
    options: [
      { text: "Use checklists or systematic review processes", score: 10 },
      { text: "Get a second pair of eyes to review your work", score: 8 },
      { text: "Take breaks to come back with a fresh perspective", score: 7 },
      { text: "Double-check the most critical components", score: 5 }
    ]
  },
  {
    id: "q24",
    text: "When faced with a problem with no clear solution, you:",
    category: "analytical",
    options: [
      { text: "Research similar problems or analogous situations for insights", score: 10 },
      { text: "Brainstorm unconventional ideas and test hypotheses", score: 8 },
      { text: "Redefine the problem or look at it from different angles", score: 7 },
      { text: "Wait for more information or for the situation to evolve", score: 3 }
    ]
  },
  {
    id: "q25",
    text: "How do you validate assumptions made during problem-solving?",
    category: "analytical",
    options: [
      { text: "Seek out data or evidence to support or refute them", score: 10 },
      { text: "Discuss them with knowledgeable peers or experts", score: 8 },
      { text: "Test them through small experiments or pilot programs", score: 7 },
      { text: "Assume they are correct if they seem reasonable", score: 3 }
    ]
  },
  {
    id: "q26",
    text: "When prioritizing tasks, what factor is most important to you?",
    category: "analytical",
    options: [
      { text: "Impact on overall goals and urgency", score: 10 },
      { text: "Dependencies and what other tasks it unblocks", score: 8 },
      { text: "Effort required versus the potential reward", score: 7 },
      { text: "What is quickest to complete to show progress", score: 4 }
    ]
  },
  {
    id: "q27",
    text: "How do you approach learning from a mistake or failure?",
    category: "analytical",
    options: [
      { text: "Analyze what went wrong and identify specific lessons learned", score: 10 },
      { text: "Develop a plan to prevent similar mistakes in the future", score: 8 },
      { text: "Share the lessons with others who might benefit", score: 6 },
      { text: "Try to forget about it and move on quickly", score: 2 }
    ]
  },
  {
    id: "q28",
    text: "What role does logic play in your decision-making process?",
    category: "analytical",
    options: [
      { text: "It's the primary foundation for my decisions", score: 10 },
      { text: "It's very important, but I also consider intuition and emotion", score: 8 },
      { text: "It's one of several factors I consider equally", score: 6 },
      { text: "I tend to go with my gut feeling more than pure logic", score: 4 }
    ]
  },

  // New Technical Questions (18)
  {
    id: "q29",
    text: "When troubleshooting a technical issue, your first step is to:",
    category: "technical",
    options: [
      { text: "Clearly identify and understand the symptoms of the problem", score: 10 },
      { text: "Reproduce the issue consistently", score: 8 },
      { text: "Check recent changes or updates that might be related", score: 7 },
      { text: "Search online for similar issues and solutions", score: 6 }
    ]
  },
  {
    id: "q30",
    text: "How do you stay updated with the latest advancements in your technical field?",
    category: "technical",
    options: [
      { text: "Regularly read industry publications, blogs, and research papers", score: 10 },
      { text: "Attend webinars, conferences, and workshops", score: 8 },
      { text: "Experiment with new tools and technologies in personal projects", score: 7 },
      { text: "Rely on colleagues and my network to share important updates", score: 5 }
    ]
  },
  {
    id: "q31",
    text: "When choosing a new software tool for a task, you prioritize:",
    category: "technical",
    options: [
      { text: "Its ability to meet the specific requirements effectively and efficiently", score: 10 },
      { text: "Ease of use, learning curve, and good documentation", score: 8 },
      { text: "Cost, scalability, and integration with existing systems", score: 7 },
      { text: "Popularity and what others in the industry are using", score: 5 }
    ]
  },
  {
    id: "q32",
    text: "How do you approach documenting your technical work or code?",
    category: "technical",
    options: [
      { text: "Ensure it's clear, concise, and helpful for others (and my future self)", score: 10 },
      { text: "Document as I go, rather than leaving it to the end", score: 8 },
      { text: "Focus on complex parts that are not self-explanatory", score: 6 },
      { text: "Provide minimal documentation, assuming the code is clear enough", score: 3 }
    ]
  },
  {
    id: "q33",
    text: "If you encounter a technical problem you've never seen before, you:",
    category: "technical",
    options: [
      { text: "Systematically try to isolate the problem and research potential causes", score: 10 },
      { text: "Look for error messages or logs to get more clues", score: 8 },
      { text: "Break down the problem into smaller, more manageable parts", score: 7 },
      { text: "Immediately ask a senior colleague for help", score: 4 }
    ]
  },
  {
    id: "q34",
    text: "When explaining a technical concept to a non-technical person, you:",
    category: "technical",
    options: [
      { text: "Use analogies and simple terms, avoiding jargon", score: 10 },
      { text: "Focus on the 'why' and its impact, rather than the 'how'", score: 8 },
      { text: "Check for understanding frequently and adjust your explanation", score: 7 },
      { text: "Provide a high-level overview, skipping technical details", score: 5 }
    ]
  },
  {
    id: "q35",
    text: "How do you manage different versions of your code or technical projects?",
    category: "technical",
    options: [
      { text: "Use a version control system like Git consistently", score: 10 },
      { text: "Keep backups of important versions with clear labeling", score: 7 },
      { text: "Save files with different names indicating versions", score: 5 },
      { text: "Rely on auto-save features and hope for the best", score: 2 }
    ]
  },
  {
    id: "q36",
    text: "When debugging code, what is a common technique you use?",
    category: "technical",
    options: [
      { text: "Using a debugger to step through code and inspect variables", score: 10 },
      { text: "Adding print statements or logging to trace execution flow", score: 8 },
      { text: "Commenting out sections of code to isolate the issue", score: 7 },
      { text: "Explaining the code to someone else (rubber ducking)", score: 6 }
    ]
  },
  {
    id: "q37",
    text: "What is your approach to ensuring the security of your technical work?",
    category: "technical",
    options: [
      { text: "Follow security best practices and stay informed about vulnerabilities", score: 10 },
      { text: "Regularly update software and dependencies", score: 8 },
      { text: "Implement access controls and encrypt sensitive data", score: 7 },
      { text: "Assume the default security settings are sufficient", score: 3 }
    ]
  },
  {
    id: "q38",
    text: "When faced with a repetitive technical task, you:",
    category: "technical",
    options: [
      { text: "Look for ways to automate it using scripts or tools", score: 10 },
      { text: "Streamline the process to make it as efficient as possible manually", score: 7 },
      { text: "Document the steps clearly so anyone can do it", score: 6 },
      { text: "Just get through it, even if it's tedious", score: 4 }
    ]
  },
  {
    id: "q39",
    text: "How important is code/system performance to you?",
    category: "technical",
    options: [
      { text: "Very important; I proactively look for optimization opportunities", score: 10 },
      { text: "Important; I address performance issues when they become apparent", score: 8 },
      { text: "Somewhat important, but functionality comes first", score: 6 },
      { text: "Not a primary concern unless it's extremely slow", score: 3 }
    ]
  },
  {
    id: "q40",
    text: "How do you test your technical solutions before deployment or finalization?",
    category: "technical",
    options: [
      { text: "Develop a comprehensive test plan covering various scenarios", score: 10 },
      { text: "Perform unit tests, integration tests, and user acceptance testing", score: 8 },
      { text: "Manually test the core functionalities", score: 6 },
      { text: "Do a quick check to see if it seems to work", score: 3 }
    ]
  },
  {
    id: "q41",
    text: "When working with APIs, what's a key consideration for you?",
    category: "technical",
    options: [
      { text: "Thoroughly reading the API documentation for proper usage", score: 10 },
      { text: "Handling potential errors and edge cases gracefully", score: 8 },
      { text: "Considering rate limits and performance implications", score: 7 },
      { text: "Quickly integrating the basic functionality", score: 5 }
    ]
  },
  {
    id: "q42",
    text: "How do you approach a large, complex codebase that you're unfamiliar with?",
    category: "technical",
    options: [
      { text: "Start by understanding the high-level architecture and key modules", score: 10 },
      { text: "Trace the execution flow of a core feature", score: 8 },
      { text: "Look for documentation, diagrams, or ask experienced team members", score: 7 },
      { text: "Dive in and try to fix a small bug or add a minor feature", score: 5 }
    ]
  },
  {
    id: "q43",
    text: "What is your preference for development environments?",
    category: "technical",
    options: [
      { text: "A highly customized environment tailored to my workflow", score: 10 },
      { text: "A standard, widely-used setup with good community support", score: 8 },
      { text: "Whatever is provided or easiest to set up", score: 6 },
      { text: "I'm not particular about the environment", score: 4 }
    ]
  },
  {
    id: "q44",
    text: "When a technical tool or platform is deprecated, you:",
    category: "technical",
    options: [
      { text: "Proactively research and plan migration to a supported alternative", score: 10 },
      { text: "Assess the impact and timeline for needing to switch", score: 8 },
      { text: "Wait until it becomes a problem before looking for alternatives", score: 5 },
      { text: "Hope that support continues unofficially", score: 2 }
    ]
  },
  {
    id: "q45",
    text: "How do you evaluate the quality of a piece of code (yours or someone else's)?",
    category: "technical",
    options: [
      { text: "Based on readability, maintainability, efficiency, and correctness", score: 10 },
      { text: "Whether it meets requirements and handles edge cases", score: 8 },
      { text: "How well it's tested and documented", score: 7 },
      { text: "If it works without obvious bugs", score: 5 }
    ]
  },
  {
    id: "q46",
    text: "How do you handle technical debt?",
    category: "technical",
    options: [
      { text: "Advocate for and allocate time to refactor and address it regularly", score: 10 },
      { text: "Address it when working on related features or if it causes significant issues", score: 8 },
      { text: "Document it so it's known, but prioritize new features", score: 6 },
      { text: "Ignore it unless it becomes a critical blocker", score: 3 }
    ]
  },

  // New Creative Questions (18)
  {
    id: "q47",
    text: "Where do you typically find inspiration for new ideas?",
    category: "creative",
    options: [
      { text: "Exploring diverse fields, art, nature, and unrelated concepts", score: 10 },
      { text: "Brainstorming sessions and collaborating with others", score: 8 },
      { text: "Observing user needs and societal trends", score: 7 },
      { text: "Looking at what competitors or similar projects are doing", score: 5 }
    ]
  },
  {
    id: "q48",
    text: "How do you overcome a creative block?",
    category: "creative",
    options: [
      { text: "Switch tasks, take a break, or engage in a completely different activity", score: 10 },
      { text: "Revisit the problem from a different perspective or redefine constraints", score: 8 },
      { text: "Look for inspiration in unexpected places or try a new technique", score: 7 },
      { text: "Force myself to keep working until an idea comes", score: 4 }
    ]
  },
  {
    id: "q49",
    text: "When developing a new concept, you prefer to:",
    category: "creative",
    options: [
      { text: "Generate a wide range of ideas first, then refine and select", score: 10 },
      { text: "Focus on one promising idea and develop it deeply", score: 7 },
      { text: "Combine elements from existing successful concepts", score: 6 },
      { text: "Wait for a moment of sudden insight", score: 4 }
    ]
  },
  {
    id: "q50",
    text: "How comfortable are you with ambiguity in the early stages of a creative project?",
    category: "creative",
    options: [
      { text: "Very comfortable; I see it as an opportunity for exploration", score: 10 },
      { text: "Somewhat comfortable, but I try to establish clarity quickly", score: 7 },
      { text: "A little uncomfortable; I prefer clear guidelines", score: 5 },
      { text: "Very uncomfortable; I need a well-defined brief", score: 3 }
    ]
  },
  {
    id: "q51",
    text: "What role does experimentation play in your creative process?",
    category: "creative",
    options: [
      { text: "It's essential; I try many different approaches, even if some fail", score: 10 },
      { text: "It's important for innovation and finding unique solutions", score: 8 },
      { text: "I experiment when I have extra time or if standard methods don't work", score: 6 },
      { text: "I prefer to stick to proven methods to ensure success", score: 3 }
    ]
  },
  {
    id: "q52",
    text: "How do you approach receiving feedback on your creative work?",
    category: "creative",
    options: [
      { text: "Welcome it as an opportunity to improve and see different perspectives", score: 10 },
      { text: "Listen carefully and ask clarifying questions", score: 8 },
      { text: "Consider it, but ultimately trust my own artistic vision", score: 6 },
      { text: "Feel a bit defensive or discouraged by criticism", score: 4 }
    ]
  },
  {
    id: "q53",
    text: "When trying to be innovative, your strategy is to:",
    category: "creative",
    options: [
      { text: "Challenge existing assumptions and conventions", score: 10 },
      { text: "Connect seemingly unrelated ideas to create something new", score: 8 },
      { text: "Improve upon existing solutions in a significant way", score: 7 },
      { text: "Follow the latest trends and add a personal touch", score: 5 }
    ]
  },
  {
    id: "q54",
    text: "How do you maintain creative momentum on a long project?",
    category: "creative",
    options: [
      { text: "Set small, achievable creative goals along the way", score: 10 },
      { text: "Vary the type of creative work I'm doing to stay engaged", score: 8 },
      { text: "Seek fresh inspiration regularly and share progress with others", score: 7 },
      { text: "Push through with discipline, even when motivation wanes", score: 5 }
    ]
  },
  {
    id: "q55",
    text: "What does 'originality' mean to you in a creative context?",
    category: "creative",
    options: [
      { text: "Offering a truly novel perspective or unique execution", score: 10 },
      { text: "A fresh combination or reinterpretation of existing elements", score: 8 },
      { text: "Something that stands out from the norm", score: 6 },
      { text: "Avoiding direct copying of others' work", score: 4 }
    ]
  },
  {
    id: "q56",
    text: "When brainstorming, you believe it's most important to:",
    category: "creative",
    options: [
      { text: "Encourage wild ideas and defer judgment to foster quantity", score: 10 },
      { text: "Build upon others' ideas and explore different angles", score: 8 },
      { text: "Stay focused on the core problem you're trying to solve", score: 6 },
      { text: "Quickly identify the most practical and feasible ideas", score: 4 }
    ]
  },
  {
    id: "q57",
    text: "How do you incorporate storytelling into your creative work (if applicable)?",
    category: "creative",
    options: [
      { text: "Craft a compelling narrative that evokes emotion or engagement", score: 10 },
      { text: "Use it to make complex ideas more relatable and memorable", score: 8 },
      { text: "Consider the user/audience journey and experience", score: 7 },
      { text: "Storytelling is not usually a primary focus for me", score: 4 }
    ]
  },
  {
    id: "q58",
    text: "When a creative project isn't going as planned, you:",
    category: "creative",
    options: [
      { text: "Step back, reassess the vision, and pivot if necessary", score: 10 },
      { text: "Seek feedback or collaborate with others for new insights", score: 8 },
      { text: "Try a completely different approach or technique", score: 7 },
      { text: "Feel frustrated and consider abandoning the project", score: 3 }
    ]
  },
  {
    id: "q59",
    text: "How do you balance creative expression with project constraints (e.g., budget, timeline)?",
    category: "creative",
    options: [
      { text: "View constraints as a challenge that can fuel creative solutions", score: 10 },
      { text: "Prioritize effectively and find clever ways to work within limits", score: 8 },
      { text: "Negotiate for more resources or adjust the creative scope", score: 6 },
      { text: "Feel that constraints stifle true creativity", score: 3 }
    ]
  },
  {
    id: "q60",
    text: "What is your attitude towards taking creative risks?",
    category: "creative",
    options: [
      { text: "Essential for breakthrough ideas; I embrace calculated risks", score: 10 },
      { text: "Willing to take them if the potential reward is high", score: 8 },
      { text: "Cautious, preferring to innovate in smaller, safer steps", score: 6 },
      { text: "Generally avoid them to ensure a predictable outcome", score: 3 }
    ]
  },
  {
    id: "q61",
    text: "How do you capture fleeting ideas or moments of inspiration?",
    category: "creative",
    options: [
      { text: "Keep a dedicated notebook, app, or voice recorder handy at all times", score: 10 },
      { text: "Quickly jot them down or sketch them out before they disappear", score: 8 },
      { text: "Try to remember them and write them down later when I have time", score: 5 },
      { text: "Assume if it's a good idea, I'll remember it", score: 2 }
    ]
  },
  {
    id: "q62",
    text: "When presenting a creative idea, you focus on:",
    category: "creative",
    options: [
      { text: "Articulating the vision and the 'why' behind the idea passionately", score: 10 },
      { text: "Using visuals and prototypes to make the idea tangible", score: 8 },
      { text: "Highlighting its novelty and potential impact", score: 7 },
      { text: "Explaining the practical steps for implementation", score: 5 }
    ]
  },
  {
    id: "q63",
    text: "How important is aesthetics or visual appeal in your creative output?",
    category: "creative",
    options: [
      { text: "Very important; it significantly enhances the user experience and message", score: 10 },
      { text: "Important, but it must serve the overall function and purpose", score: 8 },
      { text: "Somewhat important, but I prioritize functionality over form", score: 6 },
      { text: "Not a major concern as long as it works", score: 3 }
    ]
  },
  {
    id: "q64",
    text: "How do you know when a creative piece is 'finished'?",
    category: "creative",
    options: [
      { text: "When it effectively communicates the intended message or achieves its purpose", score: 10 },
      { text: "When further changes don't significantly improve it or start to detract", score: 8 },
      { text: "When I meet the project requirements or deadline", score: 6 },
      { text: "It's never truly finished; there's always room for improvement", score: 4 }
    ]
  },

  // New Communication Questions (18)
  {
    id: "q65",
    text: "When receiving constructive criticism, your typical reaction is to:",
    category: "communication",
    options: [
      { text: "Listen attentively, ask clarifying questions, and thank the person", score: 10 },
      { text: "Consider the feedback objectively for areas of improvement", score: 8 },
      { text: "Explain your perspective if you feel misunderstood", score: 6 },
      { text: "Feel a bit defensive or take it personally", score: 3 }
    ]
  },
  {
    id: "q66",
    text: "How do you ensure your message is understood when communicating with a diverse audience?",
    category: "communication",
    options: [
      { text: "Tailor my language, examples, and communication style to the audience", score: 10 },
      { text: "Use clear, simple language and avoid jargon or cultural-specific idioms", score: 8 },
      { text: "Check for understanding by asking questions or inviting feedback", score: 7 },
      { text: "Deliver the message in one standard way and assume it's understood", score: 4 }
    ]
  },
  {
    id: "q67",
    text: "In a situation with conflicting opinions, how do you facilitate a resolution?",
    category: "communication",
    options: [
      { text: "Encourage open dialogue, find common ground, and seek a win-win solution", score: 10 },
      { text: "Ensure everyone feels heard and respected, then mediate a compromise", score: 8 },
      { text: "Present logical arguments to support the best option", score: 6 },
      { text: "Avoid confrontation and let the group decide", score: 4 }
    ]
  },
  {
    id: "q68",
    text: "What is your preferred method for giving feedback to a colleague?",
    category: "communication",
    options: [
      { text: "Privately, constructively, and focusing on specific behaviors or actions", score: 10 },
      { text: "Balanced with positive reinforcement and actionable suggestions", score: 8 },
      { text: "Direct and to the point, highlighting areas for improvement", score: 6 },
      { text: "Indirectly or avoid giving it if it might cause discomfort", score: 3 }
    ]
  },
  {
    id: "q69",
    text: "When presenting information to stakeholders, you emphasize:",
    category: "communication",
    options: [
      { text: "Key insights, implications, and recommendations relevant to their interests", score: 10 },
      { text: "A clear, concise summary supported by relevant data", score: 8 },
      { text: "Progress made and alignment with overall goals", score: 7 },
      { text: "All the details and steps taken to reach the conclusions", score: 4 }
    ]
  },
  {
    id: "q70",
    text: "How do you build rapport with new team members or colleagues?",
    category: "communication",
    options: [
      { text: "Show genuine interest, listen actively, and find common ground", score: 10 },
      { text: "Be approachable, friendly, and offer help or support", score: 8 },
      { text: "Engage in informal conversations to get to know them personally", score: 7 },
      { text: "Focus on work-related interactions primarily", score: 4 }
    ]
  },
  {
    id: "q71",
    text: "When you need to persuade someone to your point of view, you:",
    category: "communication",
    options: [
      { text: "Understand their perspective first, then present logical arguments and benefits", score: 10 },
      { text: "Use data and evidence to support your claims effectively", score: 8 },
      { text: "Appeal to their interests and show how your idea aligns with them", score: 7 },
      { text: "State your opinion firmly and repeatedly", score: 3 }
    ]
  },
  {
    id: "q72",
    text: "How do you handle a situation where you have to deliver bad news?",
    category: "communication",
    options: [
      { text: "Be direct, empathetic, and clear, offering support or solutions if possible", score: 10 },
      { text: "Prepare thoroughly and choose an appropriate time and place", score: 8 },
      { text: "Focus on the facts and avoid blaming individuals", score: 7 },
      { text: "Delay it or try to soften it to the point of being unclear", score: 3 }
    ]
  },
  {
    id: "q73",
    text: "What is your approach to active listening?",
    category: "communication",
    options: [
      { text: "Focus fully on the speaker, paraphrase to confirm understanding, and ask clarifying questions", score: 10 },
      { text: "Maintain eye contact, nod, and provide verbal cues to show I'm engaged", score: 8 },
      { text: "Avoid interrupting and wait for my turn to speak", score: 6 },
      { text: "Listen for keywords while thinking about my response", score: 4 }
    ]
  },
  {
    id: "q74",
    text: "When writing an important email, you pay most attention to:",
    category: "communication",
    options: [
      { text: "Clarity, conciseness, tone, and a clear call to action or purpose", score: 10 },
      { text: "Proofreading for grammar, spelling, and punctuation errors", score: 8 },
      { text: "Ensuring all necessary information is included", score: 7 },
      { text: "Getting the message sent out quickly", score: 4 }
    ]
  },
  {
    id: "q75",
    text: "How do you ensure effective communication in a remote team setting?",
    category: "communication",
    options: [
      { text: "Utilize various communication tools effectively and establish clear protocols", score: 10 },
      { text: "Promote regular check-ins, virtual social interactions, and clear documentation", score: 8 },
      { text: "Be proactive in sharing updates and responsive to messages", score: 7 },
      { text: "Rely mostly on email and assume everyone reads them", score: 4 }
    ]
  },
  {
    id: "q76",
    text: "When a misunderstanding occurs, your first action is to:",
    category: "communication",
    options: [
      { text: "Seek clarification calmly and try to understand the other person's perspective", score: 10 },
      { text: "Re-explain your point of view more clearly", score: 7 },
      { text: "Apologize if you contributed to the misunderstanding", score: 6 },
      { text: "Assume the other person wasn't paying attention", score: 3 }
    ]
  },
  {
    id: "q77",
    text: "How important is non-verbal communication (e.g., body language, tone) to you?",
    category: "communication",
    options: [
      { text: "Very important; I pay close attention to it in others and am mindful of my own", score: 10 },
      { text: "Important, as it often conveys more than words alone", score: 8 },
      { text: "Somewhat important, but I focus more on the spoken words", score: 6 },
      { text: "Not very important; I believe words are what matter most", score: 3 }
    ]
  },
  {
    id: "q78",
    text: "When participating in meetings, you strive to:",
    category: "communication",
    options: [
      { text: "Be prepared, contribute constructively, and help keep discussions on track", score: 10 },
      { text: "Listen actively to others' contributions and build upon them", score: 8 },
      { text: "Share your relevant insights and ask pertinent questions", score: 7 },
      { text: "Attend and speak only if directly asked", score: 4 }
    ]
  },
  {
    id: "q79",
    text: "How do you adapt your communication style when talking to someone senior to you versus a peer?",
    category: "communication",
    options: [
      { text: "Maintain professionalism with both, but may be more formal and concise with seniors", score: 10 },
      { text: "Focus on being respectful and clear with seniors, possibly more collaborative with peers", score: 8 },
      { text: "I try to use a similar respectful style with everyone", score: 6 },
      { text: "I don't consciously change my style much", score: 4 }
    ]
  },
  {
    id: "q80",
    text: "What's your strategy for keeping stakeholders informed about project progress?",
    category: "communication",
    options: [
      { text: "Regular, proactive updates tailored to their level of interest and needs", score: 10 },
      { text: "Scheduled reports and meetings with clear agendas and summaries", score: 8 },
      { text: "Answering their questions promptly when they ask", score: 6 },
      { text: "Assuming they'll reach out if they need an update", score: 3 }
    ]
  },
  {
    id: "q81",
    text: "How do you ensure your written communication is easily scannable and digestible?",
    category: "communication",
    options: [
      { text: "Use clear headings, bullet points, bold text for key information, and short paragraphs", score: 10 },
      { text: "Start with a summary or key takeaway", score: 8 },
      { text: "Keep sentences short and to the point", score: 7 },
      { text: "I focus more on comprehensive content than scannability", score: 4 }
    ]
  },
  {
    id: "q82",
    text: "If you notice a team member is struggling to communicate their ideas, you:",
    category: "communication",
    options: [
      { text: "Encourage them gently and ask open-ended questions to help them articulate", score: 10 },
      { text: "Offer to help them structure their thoughts or present if they prefer", score: 8 },
      { text: "Patiently listen and try to understand their underlying point", score: 7 },
      { text: "Wait for them to figure it out themselves", score: 3 }
    ]
  },

  // New Leadership Questions (18)
  {
    id: "q83",
    text: "How do you motivate a team that is feeling discouraged or burnt out?",
    category: "leadership",
    options: [
      { text: "Acknowledge their feelings, reconnect with the mission, and celebrate small wins", score: 10 },
      { text: "Provide support, redistribute workload if possible, and encourage breaks", score: 8 },
      { text: "Offer incentives or recognition for their hard work", score: 6 },
      { text: "Tell them to push through as deadlines are important", score: 3 }
    ]
  },
  {
    id: "q84",
    text: "When delegating tasks, what is most important to you?",
    category: "leadership",
    options: [
      { text: "Matching the task to the person's skills and development goals, providing clear instructions and authority", score: 10 },
      { text: "Ensuring they have the resources and support needed to succeed", score: 8 },
      { text: "Clearly defining expectations and deadlines", score: 7 },
      { text: "Getting the task off my plate quickly", score: 4 }
    ]
  },
  {
    id: "q85",
    text: "How do you foster a culture of trust and psychological safety within a team?",
    category: "leadership",
    options: [
      { text: "Encourage open communication, respect diverse opinions, and admit your own mistakes", score: 10 },
      { text: "Support team members when they take risks, even if they fail", score: 8 },
      { text: "Be transparent in decision-making and information sharing", score: 7 },
      { text: "Assume trust is present unless proven otherwise", score: 3 }
    ]
  },
  {
    id: "q86",
    text: "When a team member makes a significant mistake, how do you handle it?",
    category: "leadership",
    options: [
      { text: "Focus on it as a learning opportunity, understand the cause, and support them in fixing it", score: 10 },
      { text: "Address the issue privately and constructively, focusing on future prevention", score: 8 },
      { text: "Ensure the mistake is corrected and implement stricter controls", score: 6 },
      { text: "Publicly point it out to ensure others don't repeat it", score: 2 }
    ]
  },
  {
    id: "q87",
    text: "How do you encourage innovation and continuous improvement within your team?",
    category: "leadership",
    options: [
      { text: "Create space for experimentation, empower team members to suggest changes, and value learning from failures", score: 10 },
      { text: "Regularly solicit ideas and feedback on processes and products", score: 8 },
      { text: "Recognize and reward innovative thinking and proactive problem-solving", score: 7 },
      { text: "Stick to established processes that are known to work", score: 4 }
    ]
  },
  {
    id: "q88",
    text: "What's your approach to managing conflict between team members?",
    category: "leadership",
    options: [
      { text: "Address it proactively by facilitating a discussion between them to find a resolution", score: 10 },
      { text: "Listen to all sides, mediate, and help them find common ground", score: 8 },
      { text: "Encourage them to resolve it themselves but intervene if it escalates", score: 6 },
      { text: "Ignore it, hoping it will resolve itself", score: 2 }
    ]
  },
  {
    id: "q89",
    text: "How do you ensure your team is aligned with the broader organizational goals?",
    category: "leadership",
    options: [
      { text: "Clearly communicate the vision and how their work contributes to it", score: 10 },
      { text: "Set team goals that directly support organizational objectives", score: 8 },
      { text: "Regularly update the team on organizational progress and changes", score: 7 },
      { text: "Assume they understand the connection from company-wide communications", score: 4 }
    ]
  },
  {
    id: "q90",
    text: "When making a tough decision that will impact the team, you:",
    category: "leadership",
    options: [
      { text: "Gather input, explain the rationale clearly, and be transparent about the impact", score: 10 },
      { text: "Consider all options and their consequences carefully before deciding", score: 8 },
      { text: "Communicate the decision with empathy and support for those affected", score: 7 },
      { text: "Make the decision quickly and authoritatively to provide clarity", score: 4 }
    ]
  },
  {
    id: "q91",
    text: "How do you recognize and develop talent within your team?",
    category: "leadership",
    options: [
      { text: "Provide regular feedback, challenging assignments, and opportunities for growth", score: 10 },
      { text: "Identify individual strengths and aspirations, and support their development plans", score: 8 },
      { text: "Offer mentorship or coaching and advocate for their advancement", score: 7 },
      { text: "Focus on overall team performance rather than individual development", score: 4 }
    ]
  },
  {
    id: "q92",
    text: "What is your style when leading a team through change?",
    category: "leadership",
    options: [
      { text: "Communicate the reasons for change clearly, address concerns, and involve the team in the process", score: 10 },
      { text: "Provide a clear vision for the future state and consistent support during transition", score: 8 },
      { text: "Be adaptable and resilient, modeling a positive attitude towards change", score: 7 },
      { text: "Implement the change quickly and expect the team to adapt", score: 3 }
    ]
  },
  {
    id: "q93",
    text: "How do you empower your team members?",
    category: "leadership",
    options: [
      { text: "Delegate responsibility with autonomy, provide resources, and trust their judgment", score: 10 },
      { text: "Encourage them to take ownership and make decisions within their scope", score: 8 },
      { text: "Support their initiatives and create an environment where they can take risks", score: 7 },
      { text: "Give them specific tasks and clear instructions to follow", score: 4 }
    ]
  },
  {
    id: "q94",
    text: "When a project is falling behind schedule, your first step is to:",
    category: "leadership",
    options: [
      { text: "Identify the root causes of the delay with the team and collaboratively find solutions", score: 10 },
      { text: "Re-prioritize tasks, assess resource needs, and adjust the plan", score: 8 },
      { text: "Communicate transparently with stakeholders about the delay and revised timeline", score: 7 },
      { text: "Push the team to work harder and longer hours", score: 3 }
    ]
  },
  {
    id: "q95",
    text: "How do you build a diverse and inclusive team environment?",
    category: "leadership",
    options: [
      { text: "Actively seek diverse perspectives, ensure equitable opportunities, and foster a culture of respect for all", score: 10 },
      { text: "Challenge biases and promote inclusive behaviors and language", score: 8 },
      { text: "Create platforms for underrepresented voices to be heard", score: 7 },
      { text: "Assume inclusivity if no one complains", score: 3 }
    ]
  },
  {
    id: "q96",
    text: "What does 'accountability' mean to you as a leader?",
    category: "leadership",
    options: [
      { text: "Taking ownership of team outcomes (both successes and failures) and fostering individual responsibility", score: 10 },
      { text: "Ensuring everyone understands their roles and commitments, and following through", score: 8 },
      { text: "Setting clear expectations and holding people to them", score: 7 },
      { text: "Identifying who is to blame when things go wrong", score: 2 }
    ]
  },
  {
    id: "q97",
    text: "How do you handle a high-performing team member who is not a good team player?",
    category: "leadership",
    options: [
      { text: "Address the behavioral issues directly, explaining the impact on the team, and coach them on collaboration", score: 10 },
      { text: "Set clear expectations for teamwork and incorporate it into performance evaluations", score: 8 },
      { text: "Try to leverage their strengths while minimizing negative team impact", score: 6 },
      { text: "Overlook the behavior because their individual performance is high", score: 3 }
    ]
  },
  {
    id: "q98",
    text: "How do you celebrate team successes?",
    category: "leadership",
    options: [
      { text: "Acknowledge individual and team contributions publicly and specifically", score: 10 },
      { text: "Organize team events or provide rewards that are meaningful to the team", score: 8 },
      { text: "Share the success with stakeholders and give credit to the team", score: 7 },
      { text: "Briefly mention it and move on to the next task", score: 4 }
    ]
  },
  {
    id: "q99",
    text: "What role does empathy play in your leadership approach?",
    category: "leadership",
    options: [
      { text: "It's fundamental; I strive to understand and consider team members' perspectives and feelings", score: 10 },
      { text: "It helps in building trust, communication, and a supportive environment", score: 8 },
      { text: "I try to be empathetic, especially when team members are facing challenges", score: 6 },
      { text: "I focus more on results and efficiency than emotions", score: 3 }
    ]
  },
  {
    id: "q100",
    text: "How do you set a vision for your team?",
    category: "leadership",
    options: [
      { text: "Collaboratively develop a compelling vision that aligns with organizational goals and inspires the team", score: 10 },
      { text: "Clearly articulate a future state and the steps to get there", score: 8 },
      { text: "Ensure the vision is ambitious yet achievable and regularly reinforce it", score: 7 },
      { text: "Focus on short-term goals rather than a long-term vision", score: 4 }
    ]
  }
];

// Function to get random questions
const getRandomQuestions = (questions: Question[], count: number = 10): Question[] => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Export 10 random questions by default
export const selectedQuestions = getRandomQuestions(quizQuestions);

// Export all questions as a separate export if needed
export { quizQuestions as allQuestions };

