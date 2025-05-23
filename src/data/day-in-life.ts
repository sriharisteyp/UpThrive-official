// src/data/day-in-life.ts

export type DayInLifeData = {
    careerId: string;
    narrative?: string; // A general paragraph about the day, optional
    morningTasks: string[];
    afternoonTasks: string[];
    keyInteractions: string[]; // People/teams they interact with
    workEnvironment: {
        location: string; // e.g., "Office, Remote options", "Hospitals, Clinics"
        collaboration: string; // e.g., "Highly collaborative", "Mixed team/solo work"
        hours: string; // e.g., "Standard, potential overtime", "Flexible, project-based"
    };
};

const dayInLifeDatabase: DayInLifeData[] = [
    // --- Information Technology --- (Provided previously)
    {
        careerId: "software-developer",
        narrative: "A software developer's day is a dynamic mix of focused coding, problem-solving, and collaborative teamwork. Mornings often kick off with team sync-ups to align on tasks and address blockers. The core of the day involves translating designs and requirements into functional code, debugging issues, and participating in code reviews to maintain quality. Continuous learning and adapting to new technologies are also integral parts of the role.",
        morningTasks: [
            "Daily stand-up meeting with the agile team.",
            "Reviewing code commits from team members on GitLab/GitHub.",
            "Coding new features or fixing bugs for the current sprint tasks.",
            "Researching optimal solutions for technical challenges or new library integrations.",
        ],
        afternoonTasks: [
            "Pair programming or debugging sessions with colleagues.",
            "Attending sprint planning, refinement, or retrospective meetings.",
            "Writing unit tests and technical documentation.",
            "Dedicated time for learning new technologies or internal tools.",
            "Collaborating with QA for testing and issue resolution."
        ],
        keyInteractions: [
            "Fellow Developers (Frontend/Backend/Full-stack)",
            "Product Managers/Owners",
            "UX/UI Designers",
            "QA Engineers/Testers",
            "DevOps Engineers (for deployment)"
        ],
        workEnvironment: {
            location: "Hybrid/Office/Remote",
            collaboration: "Highly Collaborative",
            hours: "Flexible, deadline-driven",
        },
    },
    {
        careerId: "data-analyst",
        narrative: "Data analysts spend their days immersed in data, transforming raw numbers into actionable business intelligence. This involves a lot of querying, cleaning, analyzing, and visualizing data to tell a compelling story that guides decision-making. Attention to detail and strong communication skills are key.",
        morningTasks: [
            "Checking data pipelines and refreshing key dashboards.",
            "Writing and optimizing SQL queries for data extraction from various sources.",
            "Cleaning and preprocessing datasets (handling missing values, outliers).",
            "Performing exploratory data analysis (EDA) to identify initial trends.",
        ],
        afternoonTasks: [
            "Building interactive reports and visualizations (Tableau, Power BI, Python libraries).",
            "Conducting statistical analysis and hypothesis testing.",
            "Preparing and presenting findings and recommendations to stakeholders.",
            "Collaborating with business teams (marketing, sales) on data requirements and ad-hoc requests.",
        ],
        keyInteractions: [
            "Business Stakeholders (Marketing, Sales, Product, Finance)",
            "Data Engineers & Data Scientists",
            "Other Analysts",
            "Management/Leadership Team",
        ],
        workEnvironment: {
            location: "Office/Hybrid Focused",
            collaboration: "Team-oriented & Cross-functional",
            hours: "Standard, analysis-intensive",
        },
    },
    {
        careerId: "data-scientist",
        narrative: "A Data Scientist's day revolves around leveraging advanced analytics and machine learning to solve complex business problems. It's a blend of research, experimentation, coding, and communication, often working on projects with significant strategic impact.",
        morningTasks: [
            "Reviewing project goals and formulating hypotheses.",
            "Data collection, cleaning, and feature engineering from diverse datasets.",
            "Researching and selecting appropriate machine learning models.",
            "Developing and training initial ML models.",
        ],
        afternoonTasks: [
            "Evaluating model performance and iterating on model design.",
            "Fine-tuning hyperparameters and conducting A/B tests.",
            "Visualizing and communicating complex model results to technical and non-technical audiences.",
            "Collaborating with ML Engineers for model deployment (MLOps).",
            "Reading research papers and staying updated on new algorithms."
        ],
        keyInteractions: [
            "ML Engineers & Data Engineers",
            "Business Stakeholders & Product Managers",
            "Software Developers (for integration)",
            "Research Teams",
        ],
        workEnvironment: {
            location: "Tech Hubs/Hybrid",
            collaboration: "Highly Collaborative & Research-driven",
            hours: "Flexible, project-dependent",
        },
    },
    {
        careerId: "ai-ml-engineer",
        narrative: "AI/ML Engineers focus on building and deploying robust and scalable machine learning systems. Their day involves a mix of software engineering, MLOps practices, and ensuring that AI models perform reliably in production.",
        morningTasks: [
            "Monitoring performance of deployed ML models and data pipelines.",
            "Designing and developing infrastructure for ML model training and serving.",
            "Working on CI/CD pipelines for ML models (MLOps).",
            "Coding and optimizing ML algorithms for production environments.",
        ],
        afternoonTasks: [
            "Collaborating with Data Scientists to operationalize their models.",
            "Implementing tools for model versioning, A/B testing, and monitoring.",
            "Troubleshooting issues in production ML systems.",
            "Researching new MLOps tools and best practices for scalability and efficiency.",
        ],
        keyInteractions: [
            "Data Scientists",
            "DevOps Engineers & Cloud Engineers",
            "Software Developers",
            "Product Teams",
        ],
        workEnvironment: {
            location: "Tech Companies/Hybrid",
            collaboration: "Cross-functional Engineering Teams",
            hours: "Standard with on-call potential",
        },
    },
    {
        careerId: "cloud-engineer",
        narrative: "Cloud Engineers are the architects and maintainers of cloud infrastructure. Their day is focused on designing, deploying, and managing scalable, secure, and cost-effective cloud solutions on platforms like AWS, Azure, or GCP.",
        morningTasks: [
            "Checking health and performance of cloud resources and services.",
            "Provisioning new infrastructure using Infrastructure as Code (Terraform, CloudFormation).",
            "Configuring network security (VPCs, security groups, firewalls).",
            "Working on automation scripts (Python, Bash) for cloud management tasks.",
        ],
        afternoonTasks: [
            "Implementing and managing CI/CD pipelines for cloud deployments.",
            "Monitoring cloud costs and optimizing resource utilization.",
            "Troubleshooting cloud infrastructure issues and responding to alerts.",
            "Implementing security best practices and compliance requirements.",
            "Researching new cloud services and features."
        ],
        keyInteractions: [
            "DevOps Engineers & Software Developers",
            "Security Teams",
            "Application Owners",
            "Finance/Procurement (for cost management)",
        ],
        workEnvironment: {
            location: "Hybrid/Remote often",
            collaboration: "Team-based & with Dev teams",
            hours: "Standard, potential on-call",
        },
    },
    {
        careerId: "network-administrator",
        narrative: "Network Administrators ensure the smooth and secure operation of an organization's computer networks. Their day involves monitoring, troubleshooting, configuring network devices, and implementing security measures.",
        morningTasks: [
            "Monitoring network performance, bandwidth utilization, and device health.",
            "Checking logs for security alerts or connectivity issues.",
            "Responding to user-reported network problems.",
            "Configuring routers, switches, and firewalls as needed.",
        ],
        afternoonTasks: [
            "Implementing network security policies and updates.",
            "Managing user access and network permissions.",
            "Performing network backups and testing disaster recovery plans.",
            "Documenting network configurations and changes.",
            "Planning for network upgrades or expansions."
        ],
        keyInteractions: [
            "End-Users & IT Support Staff",
            "Security Team",
            "Systems Administrators",
            "Vendors (for hardware/software)",
        ],
        workEnvironment: {
            location: "Office/Data Centers",
            collaboration: "With IT teams & users",
            hours: "Standard, on-call for outages",
        },
    },
    {
        careerId: "cybersecurity-analyst",
        narrative: "Cybersecurity Analysts are on the front lines of protecting an organization's digital assets. Their day involves monitoring for threats, investigating incidents, and implementing preventative measures in a constantly evolving threat landscape.",
        morningTasks: [
            "Reviewing security alerts from SIEM, IDS/IPS, and EDR tools.",
            "Analyzing threat intelligence feeds for new vulnerabilities or attack vectors.",
            "Investigating suspicious network traffic or system behavior.",
            "Conducting vulnerability scans and reviewing results.",
        ],
        afternoonTasks: [
            "Responding to security incidents (containment, eradication, recovery).",
            "Developing and updating security policies and procedures.",
            "Performing basic digital forensics on compromised systems.",
            "Conducting security awareness training or phishing simulations.",
            "Researching new security tools and defense techniques."
        ],
        keyInteractions: [
            "Security Operations Center (SOC) Team",
            "IT Operations & Network Admins",
            "Incident Response Team",
            "Management (for reporting)",
            "End-users (for awareness)"
        ],
        workEnvironment: {
            location: "SOC/Office/Hybrid",
            collaboration: "Team-based, high-pressure",
            hours: "Shift work/On-call common",
        },
    },
    {
        careerId: "devops-engineer",
        narrative: "DevOps Engineers work to automate and streamline the software development and deployment lifecycle. Their day focuses on building CI/CD pipelines, managing infrastructure as code, and fostering collaboration between development and operations teams.",
        morningTasks: [
            "Monitoring CI/CD pipeline health and troubleshooting build/deployment failures.",
            "Writing and updating automation scripts (Bash, Python, Groovy).",
            "Managing and configuring Infrastructure as Code (Terraform, Ansible).",
            "Collaborating with developers on release planning.",
        ],
        afternoonTasks: [
            "Implementing and managing containerization (Docker) and orchestration (Kubernetes).",
            "Setting up and maintaining monitoring and logging systems (Prometheus, Grafana, ELK).",
            "Working on improving system reliability, scalability, and performance.",
            "Researching new DevOps tools and best practices.",
        ],
        keyInteractions: [
            "Software Developers & QA Engineers",
            "Cloud Engineers & System Administrators",
            "Product Teams",
            "Security Teams (DevSecOps)",
        ],
        workEnvironment: {
            location: "Tech Companies/Hybrid",
            collaboration: "Highly Collaborative, Agile",
            hours: "Fast-paced, problem-solving",
        },
    },
    {
        careerId: "full-stack-developer",
        narrative: "Full-Stack Developers are versatile engineers who work on both the frontend (user interface) and backend (server-side logic) of web applications. Their day involves a wide range of tasks, from designing UI components to building APIs and managing databases.",
        morningTasks: [
            "Daily stand-up and task planning for frontend and backend work.",
            "Developing UI components using frameworks like React, Angular, or Vue.js.",
            "Implementing frontend logic and state management.",
            "Collaborating with UI/UX designers on interface requirements.",
        ],
        afternoonTasks: [
            "Developing backend APIs using Node.js, Python/Django, Java/Spring, etc.",
            "Designing and interacting with databases (SQL or NoSQL).",
            "Writing unit and integration tests for both frontend and backend code.",
            "Deploying application updates and troubleshooting issues.",
            "Code reviews and knowledge sharing with the team."
        ],
        keyInteractions: [
            "Frontend & Backend Developers (if specialized teams exist)",
            "UI/UX Designers",
            "Product Managers",
            "DevOps Engineers",
        ],
        workEnvironment: {
            location: "Flexible (Office/Hybrid/Remote)",
            collaboration: "Team-based, diverse tasks",
            hours: "Project-driven, can be flexible",
        },
    },
    {
        careerId: "ui-ux-designer",
        narrative: "UI/UX Designers champion the user, crafting intuitive and engaging digital experiences. Their day involves user research, wireframing, prototyping, and creating visually appealing interfaces, always iterating based on user feedback.",
        morningTasks: [
            "Reviewing user research findings or planning new research activities (surveys, interviews).",
            "Creating user personas, journey maps, or information architecture.",
            "Sketching and wireframing new features or screen flows.",
            "Collaborating with Product Managers on requirements and user stories.",
        ],
        afternoonTasks: [
            "Designing high-fidelity UI mockups and interactive prototypes (Figma, Adobe XD).",
            "Developing and maintaining design systems or style guides.",
            "Conducting usability testing sessions and analyzing feedback.",
            "Presenting design solutions to stakeholders and iterating based on feedback.",
            "Working with developers to ensure design implementation accuracy."
        ],
        keyInteractions: [
            "Product Managers & Business Analysts",
            "Users (during research & testing)",
            "Software Developers (Frontend)",
            "Other Designers & Researchers",
        ],
        workEnvironment: {
            location: "Creative Agencies/Tech/Hybrid",
            collaboration: "Highly Collaborative, Iterative",
            hours: "Project-based, deadline-sensitive",
        },
    },
    {
        careerId: "business-analyst-it",
        narrative: "IT Business Analysts act as a crucial bridge between business stakeholders and technical teams. Their day is focused on understanding business needs, eliciting requirements, analyzing processes, and ensuring IT solutions effectively address those needs.",
        morningTasks: [
            "Meeting with business stakeholders to gather and clarify requirements.",
            "Analyzing existing business processes and identifying areas for improvement.",
            "Documenting requirements (BRDs, FRSs, User Stories).",
            "Creating process flow diagrams and use case diagrams.",
        ],
        afternoonTasks: [
            "Facilitating workshops and meetings between business and IT teams.",
            "Translating business requirements into technical specifications.",
            "Participating in system design discussions and solution validation.",
            "Supporting UAT (User Acceptance Testing) and change management activities.",
        ],
        keyInteractions: [
            "Business Users & Department Heads",
            "Project Managers & Product Owners",
            "Software Developers & QA Teams",
            "System Architects",
        ],
        workEnvironment: {
            location: "Office/Hybrid, Client Sites",
            collaboration: "Communication-intensive, Cross-functional",
            hours: "Standard, project deadlines",
        },
    },
    {
        careerId: "database-administrator",
        narrative: "Database Administrators are the guardians of an organization's data. Their day involves ensuring the performance, security, availability, and integrity of databases through design, maintenance, and troubleshooting.",
        morningTasks: [
            "Monitoring database health, performance metrics, and available storage.",
            "Checking backup logs and ensuring successful completion.",
            "Reviewing database security alerts and user access requests.",
            "Planning and performing routine database maintenance tasks.",
        ],
        afternoonTasks: [
            "Troubleshooting database performance issues and optimizing queries.",
            "Implementing database schema changes or new database designs.",
            "Managing database security, users, and permissions.",
            "Testing and implementing database patches and upgrades.",
            "Developing and testing disaster recovery plans."
        ],
        keyInteractions: [
            "Application Developers & System Administrators",
            "Data Analysts & Business Intelligence Teams",
            "Security Team",
            "Vendors (for database software/hardware)",
        ],
        workEnvironment: {
            location: "Office/Data Centers, On-call",
            collaboration: "Technical, Problem-solving",
            hours: "Standard, critical on-call duties",
        },
    },

    // --- Healthcare ---
    {
        careerId: "doctor",
        narrative: "A doctor's day is dedicated to patient well-being, involving diagnosis, treatment, and compassionate care. It's a demanding yet rewarding profession requiring constant learning and quick decision-making.",
        morningTasks: [
            "Hospital ward rounds, reviewing patient charts and progress.",
            "Outpatient Department (OPD) consultations, taking patient histories.",
            "Performing physical examinations and ordering diagnostic tests.",
            "Formulating initial diagnoses and treatment plans."
        ],
        afternoonTasks: [
            "Performing medical procedures or surgeries (if a specialist).",
            "Following up on test results and adjusting treatment.",
            "Counseling patients and their families about conditions and care.",
            "Maintaining detailed patient records (EMR).",
            "Attending CMEs or departmental meetings."
        ],
        keyInteractions: [
            "Patients & their Families",
            "Nurses & Paramedical Staff",
            "Other Specialist Doctors",
            "Pharmacists & Lab Technicians",
            "Hospital Administration"
        ],
        workEnvironment: {
            location: "Hospitals/Clinics",
            collaboration: "Team-based Patient Care",
            hours: "Long, Irregular, On-call"
        }
    },
    {
        careerId: "nurse",
        narrative: "Nurses are at the heart of patient care, providing direct support, administering treatments, and advocating for patients. Their day is fast-paced, requiring empathy, skill, and resilience.",
        morningTasks: [
            "Receiving shift handover and reviewing patient care plans.",
            "Administering medications and monitoring vital signs.",
            "Assisting patients with daily needs (hygiene, mobility).",
            "Preparing patients for tests or procedures."
        ],
        afternoonTasks: [
            "Documenting patient observations and care provided.",
            "Educating patients and families about health management.",
            "Collaborating with doctors and other healthcare team members.",
            "Responding to patient calls and emergencies.",
            "Wound care and other specialized nursing tasks."
        ],
        keyInteractions: [
            "Patients & their Families",
            "Doctors & Surgeons",
            "Fellow Nurses & Nursing Assistants",
            "Pharmacists & Therapists"
        ],
        workEnvironment: {
            location: "Hospitals/Clinics/Homes",
            collaboration: "Essential Team Member",
            hours: "Shift-based, Demanding"
        }
    },
    {
        careerId: "medical-lab-technician",
        narrative: "Medical Lab Technicians play a vital role in healthcare by performing diagnostic tests that aid in patient diagnosis and treatment. Accuracy, precision, and adherence to safety protocols are paramount in their daily work.",
        morningTasks: [
            "Receiving and processing patient samples (blood, urine, tissue).",
            "Performing routine laboratory tests (hematology, biochemistry).",
            "Calibrating and maintaining laboratory equipment.",
            "Ensuring quality control procedures are followed."
        ],
        afternoonTasks: [
            "Analyzing test results and identifying abnormalities.",
            "Recording and reporting findings to physicians.",
            "Performing specialized tests (microbiology, immunology) as required.",
            "Managing laboratory inventory and supplies.",
            "Adhering to safety and biohazard disposal protocols."
        ],
        keyInteractions: [
            "Pathologists & Doctors",
            "Nurses (for sample collection coordination)",
            "Other Lab Technicians",
            "Hospital/Lab Administration"
        ],
        workEnvironment: {
            location: "Labs (Hospitals/Diagnostic)",
            collaboration: "Technical & Precise",
            hours: "Standard/Shift-based"
        }
    },
    {
        careerId: "pharmacist",
        narrative: "Pharmacists are medication experts, ensuring patients receive safe and effective drug therapy. Their day involves dispensing medications, counseling patients, and collaborating with healthcare providers.",
        morningTasks: [
            "Verifying prescriptions for accuracy and legality.",
            "Dispensing medications and preparing labels.",
            "Managing pharmacy inventory and ordering stock.",
            "Checking for drug interactions and contraindications."
        ],
        afternoonTasks: [
            "Counseling patients on medication usage, side effects, and storage.",
            "Compounding medications (in some settings).",
            "Collaborating with doctors on medication therapy management.",
            "Maintaining patient medication records and regulatory compliance.",
            "Supervising pharmacy technicians."
        ],
        keyInteractions: [
            "Patients & Caregivers",
            "Doctors & Nurses",
            "Pharmaceutical Suppliers",
            "Pharmacy Technicians"
        ],
        workEnvironment: {
            location: "Retail/Hospital Pharmacies",
            collaboration: "Patient-focused, Detail-oriented",
            hours: "Retail hours/Shifts"
        }
    },
    {
        careerId: "physiotherapist",
        narrative: "Physiotherapists help patients restore movement and function lost due to injury, illness, or disability. Their day involves patient assessment, designing and implementing rehabilitation programs, and motivating patients.",
        morningTasks: [
            "Assessing new patients (evaluating mobility, strength, pain).",
            "Developing individualized treatment plans.",
            "Conducting therapy sessions: exercises, manual therapy.",
            "Educating patients on their condition and home exercises."
        ],
        afternoonTasks: [
            "Administering modalities (heat, cold, electrotherapy).",
            "Monitoring patient progress and modifying treatment plans.",
            "Documenting patient sessions and progress notes.",
            "Collaborating with doctors and other rehabilitation specialists.",
            "Home visits or sports field coverage (for some specializations)."
        ],
        keyInteractions: [
            "Patients & their Families",
            "Doctors (Orthopedicians, Neurologists)",
            "Occupational Therapists",
            "Sports Coaches (if specialized)"
        ],
        workEnvironment: {
            location: "Clinics/Hospitals/Rehab",
            collaboration: "Hands-on, Motivational",
            hours: "Appointment-based, Active"
        }
    },
    {
        careerId: "radiologist",
        narrative: "Radiologists are medical doctors specializing in diagnosing diseases using medical imaging. Their day involves interpreting X-rays, CT scans, MRIs, and ultrasounds, then reporting findings to guide patient treatment.",
        morningTasks: [
            "Reviewing patient imaging requests and clinical history.",
            "Interpreting a queue of X-rays, CT scans, or ultrasounds.",
            "Dictating or typing detailed diagnostic reports.",
            "Consulting with referring physicians on urgent findings."
        ],
        afternoonTasks: [
            "Reading more complex imaging studies like MRIs or specialized scans.",
            "Performing image-guided procedures (biopsies, drainages) if an interventional radiologist.",
            "Participating in multidisciplinary team meetings (e.g., tumor boards).",
            "Teaching residents or fellows (in academic settings)."
        ],
        keyInteractions: [
            "Referring Physicians (Surgeons, Oncologists, GPs)",
            "Radiographers/Technologists",
            "Pathologists",
            "Hospital Staff"
        ],
        workEnvironment: {
            location: "Hospitals/Imaging Centers",
            collaboration: "Diagnostic Focused, High Detail",
            hours: "Standard with on-call duties"
        }
    },
    {
        careerId: "surgeon",
        narrative: "A surgeon's day is demanding and highly skilled, centered around performing operations to treat injuries, diseases, or deformities. It requires precision, quick decision-making, and leadership in the operating room, alongside patient consultations.",
        morningTasks: [
            "Pre-operative patient rounds and reviewing patient charts.",
            "Scrubbing in and performing scheduled surgeries (can be long).",
            "Leading the surgical team (anesthesiologists, nurses, techs).",
            "Making critical decisions during operations."
        ],
        afternoonTasks: [
            "Continuing with more surgeries or handling emergency cases.",
            "Post-operative patient rounds and monitoring recovery.",
            "Outpatient clinic for pre-op assessments and post-op follow-ups.",
            "Dictating operative notes and updating patient records."
        ],
        keyInteractions: [
            "Patients & Families",
            "Anesthesiologists & OR Team",
            "Referring Doctors",
            "Junior Doctors/Residents"
        ],
        workEnvironment: {
            location: "Operating Rooms/Hospitals",
            collaboration: "High-Stakes Teamwork, Intense",
            hours: "Very Long, Irregular, On-call"
        }
    },
    {
        careerId: "medical-transcriptionist",
        narrative: "Medical Transcriptionists play a crucial role in healthcare documentation by accurately converting voice-recorded medical reports into written text format. Their day requires excellent listening skills, medical terminology knowledge, and typing speed.",
        morningTasks: [
            "Receiving and prioritizing audio files of medical dictations (patient histories, operative reports, etc.).",
            "Listening to dictations carefully, ensuring understanding of medical terms and accents.",
            "Transcribing reports using specialized software and foot pedals."
        ],
        afternoonTasks: [
            "Proofreading and editing transcribed documents for accuracy in grammar, spelling, and medical content.",
            "Formatting documents according to specific healthcare facility templates.",
            "Researching unfamiliar medical terms, drug names, or procedures.",
            "Ensuring compliance with HIPAA and patient data privacy.",
            "Submitting completed transcriptions within set deadlines."
        ],
        keyInteractions: [
            "Supervisors/Quality Assurance Team",
            "Occasionally with healthcare providers for clarification (though less common)",
            "Fellow Transcriptionists (for support)"
        ],
        workEnvironment: {
            location: "Remote/Office/Freelance",
            collaboration: "Independent, Detail-Oriented",
            hours: "Flexible, Deadline-driven"
        }
    },
    {
        careerId: "dentist",
        narrative: "Dentists are dedicated to oral health, diagnosing and treating conditions of the teeth, gums, and mouth. Their day involves a variety of procedures, patient education, and often practice management.",
        morningTasks: [
            "Reviewing daily patient schedule and preparing for appointments.",
            "Performing routine dental check-ups, cleanings, and X-rays.",
            "Diagnosing dental problems like cavities, gum disease, or infections.",
            "Administering local anesthesia and performing fillings or simple extractions."
        ],
        afternoonTasks: [
            "Performing more complex procedures (root canals, crowns, bridges).",
            "Fitting and adjusting dentures or orthodontic appliances.",
            "Counseling patients on oral hygiene, diet, and preventive care.",
            "Managing dental staff (assistants, hygienists) and office administration.",
            "Maintaining patient records and treatment plans."
        ],
        keyInteractions: [
            "Patients & their Families",
            "Dental Assistants & Hygienists",
            "Dental Laboratory Technicians",
            "Specialist Dentists (for referrals)"
        ],
        workEnvironment: {
            location: "Dental Clinics/Hospitals",
            collaboration: "Patient-centric, Precise Work",
            hours: "Appointment-based, Standard"
        }
    },
    {
        careerId: "veterinarian",
        narrative: "Veterinarians are compassionate professionals dedicated to the health and well-being of animals, from pets to livestock. Their day is diverse, involving medical diagnosis, treatment, surgery, and advising animal owners.",
        morningTasks: [
            "Conducting wellness exams and vaccinations for pets or livestock.",
            "Diagnosing illnesses and injuries in animals through examination and tests (blood work, X-rays).",
            "Performing routine surgeries like spaying/neutering or more complex operations.",
            "Administering medications and treatments."
        ],
        afternoonTasks: [
            "Providing dental care or specialized treatments for animals.",
            "Counseling owners on animal nutrition, behavior, and preventive health.",
            "Handling emergency cases and providing critical care.",
            "Maintaining detailed medical records for each animal patient.",
            "Farm visits or large animal calls (for some veterinarians)."
        ],
        keyInteractions: [
            "Animal Owners & Farmers",
            "Veterinary Technicians & Assistants",
            "Specialist Veterinarians (for complex cases)",
            "Animal Shelters & Welfare Groups"
        ],
        workEnvironment: {
            location: "Clinics/Hospitals/Farms/Zoos",
            collaboration: "Animal-focused, Often Unpredictable",
            hours: "Varied, On-call for emergencies"
        }
    },
    {
        careerId: "medical-representative",
        narrative: "Medical Representatives bridge pharmaceutical companies and healthcare professionals. Their day is about building relationships, providing accurate product information, and achieving sales targets within their assigned territory.",
        morningTasks: [
            "Planning daily route and scheduling appointments with doctors, clinics, and pharmacies.",
            "Reviewing product information, clinical trial data, and competitor analysis.",
            "Visiting doctors to detail company's pharmaceutical products or medical devices.",
            "Distributing product samples and informational brochures."
        ],
        afternoonTasks: [
            "Meeting pharmacists to ensure product availability and gather feedback.",
            "Visiting hospital purchase departments or key opinion leaders.",
            "Organizing or attending Continuous Medical Education (CME) events for doctors.",
            "Preparing daily call reports, sales data, and market feedback for managers.",
            "Following up on leads and working towards sales targets."
        ],
        keyInteractions: [
            "Doctors (GPs, Specialists)",
            "Pharmacists & Chemists",
            "Hospital Administrators & Purchase Officers",
            "Sales Managers & Team Colleagues"
        ],
        workEnvironment: {
            location: "Field-based (Extensive Travel)",
            collaboration: "Sales & Relationship Driven",
            hours: "Flexible, Target-oriented"
        }
    },

    // --- Finance ---
    {
        careerId: "accountant",
        narrative: "Accountants are the backbone of financial record-keeping, ensuring accuracy and compliance. Their day involves managing financial transactions, preparing statements, and analyzing financial data for businesses or individuals.",
        morningTasks: [
            "Reviewing and reconciling bank statements and ledgers.",
            "Processing accounts payable and receivable.",
            "Recording daily financial transactions using accounting software (Tally, Zoho).",
            "Preparing journal entries and maintaining the general ledger."
        ],
        afternoonTasks: [
            "Preparing monthly/quarterly financial reports (P&L, Balance Sheet).",
            "Assisting with budget preparation and variance analysis.",
            "Ensuring GST, TDS, and other tax compliance; preparing returns.",
            "Liaising with auditors or tax authorities when needed.",
        ],
        keyInteractions: [
            "Business Owners/Management",
            "Clients (if in a firm)",
            "Auditors & Tax Consultants",
            "Finance Team Members"
        ],
        workEnvironment: {
            location: "Office/Firms",
            collaboration: "Detail-oriented, Structured",
            hours: "Standard, peak season overtime"
        }
    },
    {
        careerId: "financial-analyst",
        narrative: "Financial Analysts delve into financial data to provide insights for investment decisions, business strategy, and performance evaluation. Their day is a mix of research, modeling, and presenting findings.",
        morningTasks: [
            "Tracking market trends and economic news.",
            "Analyzing company financial statements and performance reports.",
            "Building and updating financial models in Excel (forecasting, valuation).",
            "Researching specific industries or investment opportunities."
        ],
        afternoonTasks: [
            "Preparing research reports, presentations, or investment recommendations.",
            "Communicating findings to portfolio managers, clients, or senior management.",
            "Using financial databases (Bloomberg, Refinitiv) for data retrieval.",
            "Attending industry calls or meetings with company management."
        ],
        keyInteractions: [
            "Portfolio Managers/Investment Teams",
            "Senior Management/Clients",
            "Equity Researchers",
            "Economists"
        ],
        workEnvironment: {
            location: "Finance Hubs/Office",
            collaboration: "Analytical, Fast-paced",
            hours: "Demanding, market-driven"
        }
    },
    {
        careerId: "investment-banker",
        narrative: "Investment Bankers operate in a high-stakes, fast-paced world, advising companies on raising capital, mergers & acquisitions, and other complex financial transactions. Long hours and intense pressure are common.",
        morningTasks: [
            "Monitoring market activity and deal news very early.",
            "Working on financial models (LBOs, M&A, DCF) and valuation analysis.",
            "Preparing pitch books and presentations for client meetings.",
            "Coordinating with legal and accounting teams on due diligence."
        ],
        afternoonTasks: [
            "Attending client meetings or deal negotiation sessions.",
            "Conducting industry research and competitive analysis for potential deals.",
            "Managing transaction processes and timelines.",
            "Networking with clients and industry contacts (often extends into evenings)."
        ],
        keyInteractions: [
            "Corporate Clients (CEOs, CFOs)",
            "Private Equity Firms",
            "Legal & Accounting Advisors",
            "Senior Bankers & Analyst Teams"
        ],
        workEnvironment: {
            location: "Major Financial Centers",
            collaboration: "High-Pressure, Deal-driven",
            hours: "Extremely Long, Intense"
        }
    },
    {
        careerId: "tax-consultant",
        narrative: "Tax Consultants navigate the complex world of taxation, advising businesses and individuals on compliance, planning, and optimization. Their day involves research, client interaction, and staying abreast of ever-changing tax laws.",
        morningTasks: [
            "Researching recent tax law changes, circulars, and case laws.",
            "Reviewing client financial data for tax planning opportunities.",
            "Preparing tax computations and advisory notes.",
            "Responding to client queries on tax matters."
        ],
        afternoonTasks: [
            "Assisting clients with tax return preparation and filing (Income Tax, GST).",
            "Representing clients before tax authorities for assessments or appeals.",
            "Conducting tax due diligence for M&A transactions.",
            "Developing tax optimization strategies for clients.",
            "Attending seminars or training on tax updates."
        ],
        keyInteractions: [
            "Clients (Individuals, Corporates)",
            "Chartered Accountants & Lawyers",
            "Tax Authorities (Income Tax Dept, GST Dept)",
            "Finance Teams of client companies"
        ],
        workEnvironment: {
            location: "CA Firms/Consultancies/Corporate",
            collaboration: "Analytical, Regulation-focused",
            hours: "Standard, with peak season rushes"
        }
    },
    {
        careerId: "auditor",
        narrative: "Auditors meticulously examine financial records and internal controls to ensure accuracy, compliance, and identify risks. Their day involves detailed review, client interaction, and reporting, often working at client sites.",
        morningTasks: [
            "Planning audit engagements and understanding client's business processes.",
            "Performing tests of internal controls.",
            "Vouching and verifying financial transactions and balances.",
            "Discussing audit queries with client's finance team."
        ],
        afternoonTasks: [
            "Conducting analytical procedures on financial data.",
            "Documenting audit findings and workpapers.",
            "Assessing audit risks and identifying areas of concern.",
            "Preparing draft audit reports and management letters.",
            "Team meetings to discuss audit progress."
        ],
        keyInteractions: [
            "Client's Finance & Accounting Teams",
            "Senior Auditors/Audit Partners",
            "Internal Audit Teams (if applicable)",
            "Management of the audited entity"
        ],
        workEnvironment: {
            location: "Audit Firms/Client Sites",
            collaboration: "Investigative, Detail-oriented",
            hours: "Travel involved, deadline-driven"
        }
    },
    {
        careerId: "chartered-accountant",
        narrative: "A Chartered Accountant (CA) in India has a diverse role spanning audit, taxation, financial advisory, and management accounting. The day varies greatly based on their area of practice or employment, demanding high ethical standards and continuous learning.",
        morningTasks: [
            "If in Audit: Planning audits, reviewing client financials, leading audit teams.",
            "If in Tax: Advising on GST/Income Tax, preparing for assessments, researching case laws.",
            "If in Industry: Reviewing MIS reports, budget vs. actuals, overseeing accounting functions."
        ],
        afternoonTasks: [
            "If in Audit: Client meetings, fieldwork, finalizing audit reports.",
            "If in Tax: Drafting replies to tax notices, client consultations on tax planning.",
            "If in Industry: Financial planning & analysis, meetings with department heads, compliance checks.",
            "Mentoring articles/junior staff, attending professional development seminars."
        ],
        keyInteractions: [
            "Clients (across industries)",
            "Government Authorities (Tax, Regulatory)",
            "Company Management & Board Members",
            "Legal Professionals",
            "Audit/Finance Teams"
        ],
        workEnvironment: {
            location: "CA Firms/Corporates/Self-Practice",
            collaboration: "Versatile, High Responsibility",
            hours: "Demanding, especially during deadlines"
        }
    },
    {
        careerId: "insurance-agent",
        narrative: "Insurance Agents are financial advisors specializing in risk management through insurance products. Their day is focused on client acquisition, needs assessment, policy recommendation, and providing ongoing service.",
        morningTasks: [
            "Prospecting for new clients (calls, networking, referrals).",
            "Scheduling appointments and preparing for client meetings.",
            "Reviewing existing client portfolios for additional needs or renewals.",
            "Attending company training on new products or sales techniques."
        ],
        afternoonTasks: [
            "Meeting clients to understand their financial goals and insurance needs.",
            "Explaining different insurance policies (life, health, general) and their benefits.",
            "Assisting clients with application forms and documentation.",
            "Following up on leads and providing after-sales service (claim support).",
            "Updating client records and sales activities in CRM."
        ],
        keyInteractions: [
            "Prospective & Existing Clients",
            "Insurance Company Underwriters & Support Staff",
            "Other Financial Advisors (for referrals)",
            "Sales Managers"
        ],
        workEnvironment: {
            location: "Field-based/Office/Remote",
            collaboration: "Client-facing, Target-driven",
            hours: "Flexible, requires self-discipline"
        }
    },

    // --- Sales and Marketing ---
    {
        careerId: "marketing-manager",
        narrative: "Marketing Managers are strategic thinkers and campaign orchestrators. Their day involves planning, executing, and analyzing marketing initiatives to build brand awareness, generate leads, and drive sales.",
        morningTasks: [
            "Reviewing campaign performance data and analytics.",
            "Meeting with the marketing team to discuss priorities and progress.",
            "Planning content calendars, social media strategies, or ad campaigns.",
            "Coordinating with creative teams or agencies."
        ],
        afternoonTasks: [
            "Conducting market research and competitor analysis.",
            "Managing marketing budgets and vendor relationships.",
            "Overseeing SEO/SEM efforts and email marketing execution.",
            "Preparing marketing reports and presenting to senior management.",
        ],
        keyInteractions: [
            "Marketing Team (Specialists, Creatives)",
            "Sales Team",
            "Product Development Teams",
            "External Agencies (Advertising, PR, Digital)",
            "Senior Management"
        ],
        workEnvironment: {
            location: "Corporate/Agency Office/Hybrid",
            collaboration: "Cross-functional, Creative",
            hours: "Dynamic, Deadline-oriented"
        }
    },
    {
        careerId: "sales-executive",
        narrative: "Sales Executives are the driving force behind revenue generation. Their day is focused on prospecting, client interaction, negotiation, and closing deals, requiring resilience and excellent communication skills.",
        morningTasks: [
            "Identifying and qualifying new sales leads (prospecting).",
            "Making cold calls or sending introductory emails.",
            "Preparing for client meetings or product demonstrations.",
            "Reviewing sales pipeline and targets."
        ],
        afternoonTasks: [
            "Conducting sales presentations or product demos.",
            "Negotiating terms and closing sales agreements.",
            "Following up with existing clients for upselling or relationship management.",
            "Updating CRM with sales activities and customer interactions.",
            "Attending sales team meetings and training."
        ],
        keyInteractions: [
            "Prospective & Existing Clients",
            "Sales Managers & Team Members",
            "Marketing Team (for lead generation)",
            "Product/Technical Teams (for support)"
        ],
        workEnvironment: {
            location: "Field/Office/Remote (Varies)",
            collaboration: "Target-driven, Interpersonal",
            hours: "Flexible, often client-dependent"
        }
    },
    {
        careerId: "digital-marketing-specialist",
        narrative: "Digital Marketing Specialists navigate the online landscape to promote brands and drive engagement. Their day involves managing various digital channels, analyzing data, and staying ahead of evolving trends.",
        morningTasks: [
            "Reviewing performance of ongoing digital campaigns (SEO, SEM, social media).",
            "Conducting keyword research or planning content for blogs/social media.",
            "Setting up and monitoring paid ad campaigns (Google Ads, Facebook Ads).",
            "Checking website analytics for traffic and user behavior."
        ],
        afternoonTasks: [
            "Creating and scheduling social media posts or email newsletters.",
            "Optimizing website content for SEO.",
            "Analyzing A/B test results for landing pages or ad copy.",
            "Reporting on campaign KPIs to marketing managers.",
            "Researching new digital marketing tools and techniques."
        ],
        keyInteractions: [
            "Marketing Managers & Team",
            "Content Writers & Graphic Designers",
            "Web Developers (for SEO implementation)",
            "Sales Team (for lead alignment)"
        ],
        workEnvironment: {
            location: "Agencies/Corporate/Hybrid/Remote",
            collaboration: "Data-driven, Fast-paced",
            hours: "Standard, campaign-dependent"
        }
    },
    {
        careerId: "customer-service-representative",
        narrative: "Customer Service Representatives are the voice of the company, assisting customers with inquiries, resolving issues, and ensuring satisfaction. Their day demands patience, empathy, and strong communication.",
        morningTasks: [
            "Logging into CRM and communication systems (phone, chat, email).",
            "Responding to initial customer inquiries and support tickets.",
            "Providing information about products, services, or policies.",
            "Troubleshooting basic customer issues."
        ],
        afternoonTasks: [
            "Handling more complex customer complaints or escalations.",
            "Processing orders, returns, or refunds.",
            "Documenting all customer interactions accurately in the CRM.",
            "Following up on pending customer issues.",
            "Participating in team huddles or training sessions."
        ],
        keyInteractions: [
            "Customers",
            "Team Leaders/Supervisors",
            "Other Departments (e.g., Technical Support, Billing)",
            "Fellow CSRs"
        ],
        workEnvironment: {
            location: "Call Centers/Office/Remote",
            collaboration: "Communication-heavy, Structured",
            hours: "Shift-based, often 24/7 support"
        }
    },
    {
        careerId: "retail-store-manager",
        narrative: "Retail Store Managers are responsible for the overall success of a retail outlet. Their day involves leading a team, managing inventory, driving sales, and ensuring an excellent customer experience.",
        morningTasks: [
            "Opening the store and ensuring visual merchandising standards are met.",
            "Conducting daily team briefings and assigning tasks.",
            "Reviewing sales figures from the previous day and setting daily goals.",
            "Checking inventory levels and planning stock replenishment."
        ],
        afternoonTasks: [
            "Supervising store staff and assisting customers on the sales floor.",
            "Handling customer complaints or complex transactions.",
            "Managing store operations, including cash handling and security.",
            "Analyzing sales reports and implementing promotional strategies.",
            "Staff training and performance management."
        ],
        keyInteractions: [
            "Customers",
            "Store Staff (Sales Associates, Cashiers)",
            "Regional Managers/Area Managers",
            "Suppliers/Vendors (for stock)"
        ],
        workEnvironment: {
            location: "Retail Stores",
            collaboration: "Customer-facing, People Management",
            hours: "Retail hours (incl. weekends/holidays)"
        }
    },

    // --- Hospitality and Tourism ---
    {
        careerId: "hotel-manager",
        narrative: "Hotel Managers are the leaders ensuring smooth operations and exceptional guest experiences. Their day is dynamic, involving staff management, guest interaction, and overseeing all hotel departments.",
        morningTasks: [
            "Reviewing night audit reports and occupancy levels.",
            "Conducting daily briefings with department heads (Front Office, F&B, Housekeeping).",
            "Inspecting hotel premises for cleanliness and maintenance standards.",
            "Addressing any urgent guest issues or staff requirements."
        ],
        afternoonTasks: [
            "Managing hotel budgets and financial performance.",
            "Meeting with sales and marketing for promotional strategies.",
            "Handling VIP arrivals and special guest requests.",
            "Overseeing staff training and development programs.",
            "Reviewing guest feedback and implementing improvements."
        ],
        keyInteractions: [
            "Hotel Guests",
            "Department Heads & Staff",
            "Vendors & Suppliers",
            "Sales & Marketing Team",
            "Ownership/Regional Management"
        ],
        workEnvironment: {
            location: "Hotels/Resorts",
            collaboration: "Leadership, Guest-facing",
            hours: "Long, Irregular, 24/7 operation"
        }
    },
    {
        careerId: "travel-agent",
        narrative: "Travel Agents help clients plan and book their dream vacations or business trips. Their day involves research, client consultation, using booking systems, and ensuring all travel arrangements are seamless.",
        morningTasks: [
            "Responding to client inquiries (email, phone) for travel planning.",
            "Researching destinations, flight options, and accommodations.",
            "Preparing quotes and itineraries for clients.",
            "Checking visa requirements and travel advisories."
        ],
        afternoonTasks: [
            "Booking flights, hotels, tours, and other travel services using GDS or supplier portals.",
            "Processing payments and issuing travel documents.",
            "Following up with clients before and after their trips.",
            "Handling amendments, cancellations, or travel disruptions.",
            "Networking with tourism boards and suppliers."
        ],
        keyInteractions: [
            "Clients (Individuals, Corporates)",
            "Airlines & Hotel Representatives",
            "Tour Operators & Destination Management Companies (DMCs)",
            "Global Distribution System (GDS) Providers"
        ],
        workEnvironment: {
            location: "Travel Agencies/Remote/Office",
            collaboration: "Client-focused, Detail-oriented",
            hours: "Standard, with peak season demand"
        }
    },
    {
        careerId: "chef",
        narrative: "A Chef's day is a symphony of flavors, creativity, and intense kitchen operations. From menu planning and ingredient sourcing to leading the kitchen brigade and ensuring culinary excellence, it's a demanding but passionate profession.",
        morningTasks: [
            "Receiving and inspecting daily ingredient deliveries.",
            "Menu planning for the day/week, including specials.",
            "Mise en place: prepping ingredients (chopping, marinating, making sauces).",
            "Briefing kitchen staff on daily tasks and menu items."
        ],
        afternoonTasks: [
            "Cooking and plating dishes during lunch or dinner service.",
            "Supervising kitchen operations and ensuring quality control.",
            "Managing inventory, controlling food costs, and minimizing waste.",
            "Training junior chefs and maintaining kitchen hygiene standards (HACCP).",
            "Experimenting with new recipes or techniques."
        ],
        keyInteractions: [
            "Kitchen Staff (Sous Chefs, Cooks, Pastry Chefs)",
            "Restaurant/Hotel Manager & F&B Staff",
            "Suppliers & Vendors",
            "Guests (occasionally, for feedback or special requests)"
        ],
        workEnvironment: {
            location: "Kitchens (Restaurants/Hotels/Catering)",
            collaboration: "High-Pressure Teamwork, Creative",
            hours: "Long, Split-shifts, Weekends/Holidays"
        }
    },
    {
        careerId: "event-manager",
        narrative: "Event Managers are master orchestrators, bringing visions to life for conferences, weddings, festivals, and corporate gatherings. Their day involves meticulous planning, vendor coordination, on-site execution, and problem-solving.",
        morningTasks: [
            "Meeting with clients to understand event objectives and requirements.",
            "Developing event concepts, themes, and detailed project plans.",
            "Researching and shortlisting venues, caterers, and other vendors.",
            "Preparing event budgets and timelines."
        ],
        afternoonTasks: [
            "Negotiating contracts with suppliers and managing vendor relationships.",
            "Coordinating event logistics (registration, A/V, decor, transportation).",
            "Marketing and promoting the event (if applicable).",
            "On-site management during event setup, execution, and teardown.",
            "Post-event analysis and client feedback collection."
        ],
        keyInteractions: [
            "Clients (Corporate, Private Individuals)",
            "Vendors (Venue, Catering, A/V, Decor, Entertainment)",
            "Event Staff & Volunteers",
            "Marketing & PR Teams",
            "Attendees (during event)"
        ],
        workEnvironment: {
            location: "Office/On-site (Venues)/Travel",
            collaboration: "Dynamic, Multitasking, Problem-solving",
            hours: "Irregular, Long during events, Weekends"
        }
    },

    // --- Arts and Media ---
    {
        careerId: "graphic-designer",
        narrative: "Graphic Designers bring ideas to life visually. Their day is a creative process of understanding client needs, conceptualizing designs, and using digital tools to produce compelling graphics for various media.",
        morningTasks: [
            "Meeting with clients or art directors to discuss project briefs.",
            "Brainstorming concepts and sketching initial ideas.",
            "Working on design layouts using software (Adobe Illustrator, Photoshop, Figma).",
            "Researching design trends and gathering inspiration."
        ],
        afternoonTasks: [
            "Developing and refining designs based on feedback.",
            "Creating final artwork for print or digital platforms (logos, brochures, websites).",
            "Collaborating with copywriters or other designers.",
            "Preparing files for production and reviewing proofs.",
        ],
        keyInteractions: [
            "Clients/Art Directors",
            "Copywriters & Marketing Teams",
            "Printers/Web Developers",
            "Fellow Designers"
        ],
        workEnvironment: {
            location: "Studios/Agencies/Freelance/Hybrid",
            collaboration: "Creative, Deadline-driven",
            hours: "Flexible, Project-based"
        }
    },
    {
        careerId: "content-writer",
        narrative: "Content Writers craft compelling narratives and informative pieces for various platforms. Their day involves research, writing, editing, and optimizing content to engage target audiences and meet marketing objectives.",
        morningTasks: [
            "Researching topics for articles, blog posts, or website copy.",
            "Outlining content structure and key points.",
            "Writing first drafts of content.",
            "Conducting keyword research for SEO optimization."
        ],
        afternoonTasks: [
            "Editing and proofreading content for grammar, style, and accuracy.",
            "Optimizing content with keywords and formatting for readability.",
            "Collaborating with marketing teams or SEO specialists.",
            "Publishing content on CMS (WordPress) or other platforms.",
            "Analyzing content performance (engagement, traffic)."
        ],
        keyInteractions: [
            "Marketing Managers/Strategists",
            "SEO Specialists",
            "Graphic Designers (for visuals)",
            "Editors/Proofreaders",
            "Clients (if freelance)"
        ],
        workEnvironment: {
            location: "Remote/Freelance/Office/Hybrid",
            collaboration: "Research-intensive, Creative",
            hours: "Flexible, Deadline-oriented"
        }
    },
    {
        careerId: "journalist",
        narrative: "Journalists are storytellers and investigators of truth, covering events and issues for public information. Their day can be unpredictable, involving research, interviews, writing under pressure, and adhering to ethical standards.",
        morningTasks: [
            "Monitoring news feeds, press releases, and social media for story leads.",
            "Attending press conferences or scheduled events.",
            "Conducting background research and fact-checking for stories.",
            "Interviewing sources (phone, in-person)."
        ],
        afternoonTasks: [
            "Writing news reports, articles, or scripts against tight deadlines.",
            "Editing copy and collaborating with editors.",
            "Field reporting for breaking news or in-depth features.",
            "Verifying information and sources meticulously.",
            "Using multimedia tools for digital storytelling (basic photo/video)."
        ],
        keyInteractions: [
            "Sources & Interviewees",
            "Editors & Sub-editors",
            "Photographers/Videographers",
            "Fellow Reporters",
            "Public Relations Professionals"
        ],
        workEnvironment: {
            location: "Newsrooms/Field/Remote (Digital)",
            collaboration: "Fast-paced, Investigative, High-ethics",
            hours: "Irregular, On-call, Deadline-critical"
        }
    },
    {
        careerId: "video-editor",
        narrative: "Video Editors craft raw footage into compelling visual stories. Their day involves meticulous work with editing software, focusing on pacing, narrative flow, color correction, and sound design to create a polished final product.",
        morningTasks: [
            "Reviewing raw footage and director's notes or script.",
            "Organizing and logging video clips.",
            "Creating initial assemblies or rough cuts of sequences.",
            "Syncing audio and video tracks."
        ],
        afternoonTasks: [
            "Refining edits, adjusting pacing, and adding transitions.",
            "Color correcting and grading footage.",
            "Adding graphics, titles, and special effects (basic).",
            "Sound editing, mixing, and adding music/sound effects.",
            "Exporting final versions for different platforms and incorporating feedback."
        ],
        keyInteractions: [
            "Directors & Producers",
            "Cinematographers/Videographers",
            "Sound Designers & Motion Graphics Artists",
            "Clients (for revisions)"
        ],
        workEnvironment: {
            location: "Post-Production Studios/Freelance/Remote",
            collaboration: "Detail-oriented, Technical & Creative",
            hours: "Project-based, often long for deadlines"
        }
    },
    {
        careerId: "photographer",
        narrative: "Photographers capture moments, tell stories, and create visual art through their lens. Their day can vary greatly depending on their specialization, involving shoots, editing, client interaction, and business management.",
        morningTasks: [
            "Preparing for shoots (checking equipment, scouting locations, planning shot lists).",
            "Conducting photo shoots (portraits, events, products, fashion).",
            "Managing lighting setups (natural or studio).",
            "Directing subjects or arranging compositions."
        ],
        afternoonTasks: [
            "Transferring and backing up image files.",
            "Culling, editing, and retouching photos using software (Lightroom, Photoshop).",
            "Client communication: discussing requirements, delivering final images.",
            "Marketing and business development (if freelance).",
            "Maintaining equipment and studio (if applicable)."
        ],
        keyInteractions: [
            "Clients (Individuals, Businesses)",
            "Models/Subjects",
            "Stylists & Makeup Artists (for fashion/portraits)",
            "Art Directors/Editors (for commercial/editorial work)"
        ],
        workEnvironment: {
            location: "Studio/On-location/Freelance",
            collaboration: "Creative, Technical Skill, Client-focused",
            hours: "Varied, Shoot-dependent, Flexible (freelance)"
        }
    },
    {
        careerId: "animator",
        narrative: "Animators bring characters and objects to life through motion, creating engaging experiences for films, games, and advertisements. Their day involves meticulous work with specialized software, focusing on timing, movement, and storytelling.",
        morningTasks: [
            "Reviewing storyboards, character designs, or animation briefs.",
            "Setting up scenes and characters in animation software (Maya, Blender, Toon Boom).",
            "Blocking out key poses and initial character movements.",
            "Collaborating with directors or lead animators on vision."
        ],
        afternoonTasks: [
            "Refining animations, focusing on timing, spacing, and arcs.",
            "Animating secondary actions and lip-sync (if character animator).",
            "Creating motion graphics or visual effects (if motion graphics animator).",
            "Rendering test animations and incorporating feedback.",
            "Problem-solving technical issues within the animation pipeline."
        ],
        keyInteractions: [
            "Animation Directors/Supervisors",
            "Fellow Animators & Riggers",
            "Storyboarding Artists & Character Designers",
            "Technical Directors"
        ],
        workEnvironment: {
            location: "Animation Studios/Gaming Companies/Freelance",
            collaboration: "Detailed, Iterative, Artistic & Technical",
            hours: "Project-driven, often intensive"
        }
    },
    {
        careerId: "film-director",
        narrative: "Film Directors are the creative visionaries behind a film, guiding all artistic and technical aspects from pre-production to post-production. Their day involves intense collaboration, decision-making, and bringing a script to life.",
        morningTasks: [
            "Pre-production: Script breakdown, storyboarding, casting, location scouting.",
            "Production (On-set): Briefing cast and crew, rehearsing scenes, shot composition.",
            "Production: Working closely with Director of Photography (DoP) on visuals."
        ],
        afternoonTasks: [
            "Production (On-set): Directing actors and guiding performances.",
            "Production: Reviewing dailies (footage shot).",
            "Post-production: Collaborating with editors on cuts, sound designers, and VFX artists.",
            "Attending meetings with producers regarding budget and schedule."
        ],
        keyInteractions: [
            "Actors & Casting Directors",
            "Producers & Screenwriters",
            "Director of Photography (DoP) & Key Crew (AD, Production Designer)",
            "Editors, Sound Designers, VFX Supervisors"
        ],
        workEnvironment: {
            location: "Film Sets/Production Offices/Editing Suites",
            collaboration: "Visionary Leadership, High-Stress",
            hours: "Extremely Long & Irregular during production"
        }
    },
    {
        careerId: "fashion-designer",
        narrative: "Fashion Designers conceptualize and create clothing and accessories, blending creativity with technical skill. Their day involves sketching, material sourcing, pattern making, and overseeing garment production, always with an eye on trends and brand identity.",
        morningTasks: [
            "Researching fashion trends, colors, fabrics, and market demands.",
            "Sketching new design ideas and developing mood boards.",
            "Sourcing fabrics, trims, and other materials.",
            "Working on patterns and creating initial prototypes (toiles)."
        ],
        afternoonTasks: [
            "Draping fabric on mannequins or fitting prototypes on models.",
            "Collaborating with pattern makers, cutters, and seamstresses.",
            "Overseeing the production process and ensuring quality control.",
            "Preparing for fashion shows or collection presentations.",
            "Meeting with buyers or marketing teams (for established designers)."
        ],
        keyInteractions: [
            "Pattern Makers & Seamstresses/Tailors",
            "Fabric & Trim Suppliers",
            "Models & Stylists",
            "Merchandisers & Buyers",
            "Marketing & PR Teams"
        ],
        workEnvironment: {
            location: "Design Studios/Workshops/Fashion Houses",
            collaboration: "Highly Creative, Hands-on, Deadline-sensitive",
            hours: "Often Long, especially before collections"
        }
    },

    // --- Government Services ---
    {
        careerId: "ias-officer",
        narrative: "An IAS Officer's day is highly dynamic and impactful, involving public administration, policy implementation, and addressing diverse societal challenges. It demands strong leadership, decision-making, and a commitment to public service.",
        morningTasks: [
            "Reviewing official correspondence and files.",
            "Attending meetings with various government departments and officials.",
            "Conducting field visits to inspect projects or address public grievances.",
            "Planning and strategizing for developmental initiatives."
        ],
        afternoonTasks: [
            "Overseeing the implementation of government policies and schemes.",
            "Handling administrative matters and decision-making for the district/department.",
            "Coordinating with law enforcement and other agencies.",
            "Addressing media queries or public gatherings.",
            "Reviewing progress reports and taking corrective actions."
        ],
        keyInteractions: [
            "Public/Citizens",
            "Other Government Officials (State & Central)",
            "Political Representatives",
            "Police & Judiciary",
            "NGOs & Community Leaders"
        ],
        workEnvironment: {
            location: "Govt. Offices/Field",
            collaboration: "Leadership, High Responsibility",
            hours: "Long, Unpredictable, Demanding"
        }
    },
    {
        careerId: "bank-po",
        narrative: "A Bank Probationary Officer's day is multifaceted, involving customer service, operations, and learning various aspects of banking. It's a foundational role for a career in public sector banking.",
        morningTasks: [
            "Reviewing daily targets and branch operational status.",
            "Handling customer inquiries at the counter or desk.",
            "Processing account openings, deposits, withdrawals, and loan applications.",
            "Verifying KYC documents and ensuring compliance."
        ],
        afternoonTasks: [
            "Cross-selling banking products (insurance, mutual funds, credit cards).",
            "Assisting with branch accounting and reconciliation.",
            "Attending training sessions on new banking products or regulations.",
            "Preparing daily operational reports.",
            "Learning from senior officers about various banking functions."
        ],
        keyInteractions: [
            "Bank Customers",
            "Branch Manager & Senior Officers",
            "Clerical Staff & Tellers",
            "Operations & IT Support Teams"
        ],
        workEnvironment: {
            location: "Bank Branches (Urban/Rural)",
            collaboration: "Customer-facing, Procedural",
            hours: "Standard Banking Hours, with end-of-day closing"
        }
    },
    {
        careerId: "police-officer",
        narrative: "A Police Officer's day is unpredictable and demanding, focused on maintaining law and order, preventing and investigating crime, and ensuring public safety. It requires courage, quick thinking, and a strong sense of duty.",
        morningTasks: [
            "Attending shift briefing and receiving assignments.",
            "Patrolling designated areas to deter crime and ensure visibility.",
            "Responding to emergency calls (accidents, domestic disputes, theft).",
            "Conducting initial investigations at crime scenes."
        ],
        afternoonTasks: [
            "Interviewing witnesses, victims, and suspects.",
            "Collecting evidence and preparing case files/FIRs.",
            "Enforcing traffic laws and managing public order during events.",
            "Community interaction and addressing local concerns.",
            "Appearing in court to provide testimony."
        ],
        keyInteractions: [
            "General Public & Victims of Crime",
            "Suspects & Accused Persons",
            "Fellow Officers & Senior Police Officials",
            "Legal Professionals (Lawyers, Prosecutors)",
            "Other Emergency Services (Fire, Medical)"
        ],
        workEnvironment: {
            location: "Police Stations/Field/Courts",
            collaboration: "High-Risk, Authoritative, Team-based",
            hours: "Shift-based, Long, On-call, Unpredictable"
        }
    },
    {
        careerId: "government-scientist",
        narrative: "A Government Scientist contributes to national progress through research and development in specialized fields like space, defense, or agriculture. Their day involves experimentation, analysis, and collaboration on projects of strategic importance.",
        morningTasks: [
            "Planning and designing experiments or research protocols.",
            "Conducting laboratory work, simulations, or field trials.",
            "Calibrating and maintaining sophisticated research equipment.",
            "Reviewing scientific literature and previous research data."
        ],
        afternoonTasks: [
            "Analyzing experimental data and interpreting results.",
            "Writing technical reports, research papers, or patent applications.",
            "Collaborating with other scientists, engineers, and technical staff on projects.",
            "Attending project review meetings or presenting findings.",
            "Mentoring junior researchers or students."
        ],
        keyInteractions: [
            "Fellow Scientists & Researchers (National/International)",
            "Engineers & Technical Staff",
            "Project Directors & Senior Officials",
            "Academic Collaborators",
            "Industry Partners (for technology transfer)"
        ],
        workEnvironment: {
            location: "Govt. R&D Labs (ISRO, DRDO, CSIR, ICAR)",
            collaboration: "Research-intensive, Specialized, Project-driven",
            hours: "Standard, with intensive periods for experiments"
        }
    },
    {
        careerId: "teacher-government-school",
        narrative: "A Government School Teacher plays a crucial role in educating students, often in diverse classroom settings. Their day involves lesson delivery, student assessment, and contributing to the school community, sometimes with limited resources.",
        morningTasks: [
            "Preparing lesson plans and teaching aids for the day's classes.",
            "Delivering classroom instruction according to the prescribed curriculum.",
            "Engaging students through various teaching methodologies.",
            "Managing classroom activities and student behavior."
        ],
        afternoonTasks: [
            "Conducting assessments (tests, assignments) and evaluating student work.",
            "Providing remedial support or enrichment activities for students.",
            "Maintaining student records, attendance, and progress reports.",
            "Participating in staff meetings, training programs, or parent-teacher interactions.",
            "Involvement in extracurricular activities or school administrative duties."
        ],
        keyInteractions: [
            "Students",
            "Parents/Guardians",
            "Fellow Teachers & Headmaster/Principal",
            "School Support Staff",
            "Education Department Officials (occasionally)"
        ],
        workEnvironment: {
            location: "Government Schools (Urban/Rural)",
            collaboration: "Student-focused, Resourceful",
            hours: "School Hours + Prep/Correction Time"
        }
    },
    {
        careerId: "defense-officer",
        narrative: "A Defense Officer's day is characterized by discipline, leadership, and a commitment to national security. It involves training, operational planning, managing personnel, and maintaining a high state of readiness, varying greatly by service (Army, Navy, Air Force) and posting.",
        morningTasks: [
            "Physical training (PT) and parade/drill.",
            "Briefings on operational status, intelligence, or training schedules.",
            "Inspecting troops, equipment, or facilities.",
            "Planning and supervising training exercises or operational tasks."
        ],
        afternoonTasks: [
            "Conducting lectures or practical training for personnel.",
            "Administrative duties related to unit management (logistics, welfare, discipline).",
            "Strategic planning sessions or operational briefings.",
            "Maintaining equipment and ensuring operational readiness.",
            "Sports and recreational activities (for troop morale and fitness)."
        ],
        keyInteractions: [
            "Subordinate Personnel (Soldiers, Sailors, Airmen)",
            "Senior Officers & Commanding Officers",
            "Officers from other units/services (joint operations)",
            "Civilian authorities (during aid to civil power)",
            "Families of personnel (welfare aspects)"
        ],
        workEnvironment: {
            location: "Military Bases/Ships/Airfields/Field Postings",
            collaboration: "Highly Disciplined, Leadership, Operational",
            hours: "24/7 Responsibility, Demanding, Often in remote/challenging locations"
        }
    },

    // --- Psychology and Counselling ---
    {
        careerId: "clinical-psychologist",
        narrative: "Clinical Psychologists focus on assessing, diagnosing, and treating mental health disorders. Their day involves in-depth client interaction, applying therapeutic techniques, and meticulous record-keeping, often dealing with complex cases.",
        morningTasks: [
            "Reviewing client case notes and preparing for sessions.",
            "Conducting diagnostic interviews and psychological assessments.",
            "Administering and scoring psychological tests (cognitive, personality).",
            "Formulating treatment plans based on diagnoses (DSM/ICD)."
        ],
        afternoonTasks: [
            "Providing individual, group, or family psychotherapy sessions (CBT, DBT, etc.).",
            "Documenting session progress and updating treatment plans.",
            "Collaborating with psychiatrists or other healthcare professionals on patient care.",
            "Attending supervision, case conferences, or continuing education workshops.",
            "Engaging in research or teaching (in some settings)."
        ],
        keyInteractions: [
            "Clients & their Families",
            "Psychiatrists & Other Doctors",
            "Social Workers & Counsellors",
            "Supervisors & Colleagues",
            "Hospital/Clinic Administration"
        ],
        workEnvironment: {
            location: "Clinics/Hospitals/Private Practice/Rehab",
            collaboration: "Empathic, Confidential, Analytical",
            hours: "Appointment-based, Emotionally intensive"
        }
    },
    {
        careerId: "counselling-psychologist",
        narrative: "Counselling Psychologists help individuals navigate life challenges, emotional difficulties, and personal growth. Their day involves creating a supportive therapeutic environment, active listening, and guiding clients towards solutions.",
        morningTasks: [
            "Preparing for client sessions, reviewing previous notes.",
            "Conducting individual counselling sessions for issues like stress, anxiety, relationship problems, career concerns.",
            "Utilizing various counselling techniques (person-centered, solution-focused).",
            "Helping clients identify coping strategies and set goals."
        ],
        afternoonTasks: [
            "Facilitating group counselling sessions or workshops.",
            "Maintaining confidential client records and session notes.",
            "Collaborating with other professionals for referrals if needed.",
            "Engaging in self-reflection and continuous professional development.",
            "Networking with other mental health professionals."
        ],
        keyInteractions: [
            "Clients (Individuals, Couples, Families)",
            "Other Counsellors & Therapists",
            "Psychiatrists (for referrals)",
            "School/College Staff (if working in educational settings)",
            "Community Resource Providers"
        ],
        workEnvironment: {
            location: "Private Practice/Clinics/Schools/NGOs",
            collaboration: "Supportive, Client-centered",
            hours: "Appointment-based, Flexible"
        }
    },
    {
        careerId: "industrial-organizational-psychologist",
        narrative: "I-O Psychologists apply psychological principles to workplace settings to improve productivity, employee well-being, and organizational effectiveness. Their day involves research, assessment, intervention design, and consulting.",
        morningTasks: [
            "Conducting organizational assessments (surveys, interviews, focus groups).",
            "Analyzing data related to employee performance, job satisfaction, or team dynamics.",
            "Designing employee selection and assessment tools (e.g., competency models, situational judgment tests).",
            "Reviewing literature on organizational behavior and HR best practices."
        ],
        afternoonTasks: [
            "Developing and delivering training programs (leadership, teamwork, stress management).",
            "Facilitating organizational development interventions (e.g., change management, team building).",
            "Providing consultation to management on HR strategies and employee well-being initiatives.",
            "Preparing reports and presentations on findings and recommendations.",
            "Evaluating the effectiveness of HR programs."
        ],
        keyInteractions: [
            "HR Managers & Business Leaders",
            "Employees at all levels",
            "Training & Development Teams",
            "External Clients (if consulting)",
            "Researchers & Academics"
        ],
        workEnvironment: {
            location: "Corporate HR/Consulting Firms/Research",
            collaboration: "Analytical, Solution-oriented, Strategic",
            hours: "Standard Office Hours, Project-driven"
        }
    },
    {
        careerId: "school-psychologist",
        narrative: "School Psychologists (or Counsellors in many Indian schools) support students' academic, social, and emotional well-being. Their day involves individual/group counselling, assessments, and collaboration with teachers and parents.",
        morningTasks: [
            "Conducting individual counselling sessions with students for academic, personal, or behavioral issues.",
            "Administering psychological or educational assessments to identify learning difficulties or special needs.",
            "Meeting with teachers to discuss student concerns and develop support strategies.",
            "Planning and preparing for group counselling sessions or workshops."
        ],
        afternoonTasks: [
            "Facilitating group sessions on topics like stress management, social skills, or career guidance.",
            "Consulting with parents to address student needs and provide guidance.",
            "Developing and implementing intervention plans for students.",
            "Maintaining student records and preparing reports.",
            "Collaborating with special educators or external therapists for referrals."
        ],
        keyInteractions: [
            "Students (K-12 or College)",
            "Teachers & School Principal/Admin",
            "Parents/Guardians",
            "Special Educators",
            "External Mental Health Professionals"
        ],
        workEnvironment: {
            location: "Schools/Colleges/Educational Institutions",
            collaboration: "Student-focused, Supportive, Collaborative",
            hours: "School Hours, with some after-school meetings"
        }
    },

    // --- Education and Teaching ---
    {
        careerId: "school-teacher",
        narrative: "A School Teacher's day is dedicated to shaping young minds. It involves lesson planning, classroom instruction, student assessment, and fostering a positive learning environment.",
        morningTasks: [
            "Preparing classroom and instructional materials.",
            "Delivering lessons according to the curriculum for different subjects/classes.",
            "Engaging students through various teaching methods.",
            "Managing classroom behavior and activities."
        ],
        afternoonTasks: [
            "Conducting assessments (tests, assignments) and grading.",
            "Providing individualized support to students needing extra help.",
            "Communicating with parents regarding student progress.",
            "Attending staff meetings, workshops, or extracurricular duties.",
            "Lesson planning for subsequent days."
        ],
        keyInteractions: [
            "Students",
            "Parents/Guardians",
            "Fellow Teachers & School Staff",
            "School Administration (Principal, Coordinators)"
        ],
        workEnvironment: {
            location: "Schools (Public/Private)",
            collaboration: "Student-centric, Dynamic",
            hours: "School hours + Prep time"
        }
    },
    {
        careerId: "college-professor",
        narrative: "College Professors engage in teaching, research, and academic service. Their day involves delivering lectures, mentoring students, conducting research in their specialized field, and contributing to the academic community.",
        morningTasks: [
            "Preparing and delivering lectures or seminars for undergraduate/postgraduate students.",
            "Guiding students on research projects or theses.",
            "Conducting own research, experiments, or writing scholarly articles.",
            "Reviewing academic literature in their field."
        ],
        afternoonTasks: [
            "Meeting with students for academic advising or mentoring.",
            "Grading assignments, exams, and providing feedback.",
            "Attending departmental or faculty meetings.",
            "Writing grant proposals or collaborating on research projects.",
            "Participating in academic committees or administrative tasks."
        ],
        keyInteractions: [
            "Students (Undergraduate, Postgraduate, PhD)",
            "Fellow Professors & Researchers",
            "Department Heads & Deans",
            "Research Collaborators (National/International)",
            "Academic Journal Editors/Reviewers"
        ],
        workEnvironment: {
            location: "Universities/Colleges/Research Institutes",
            collaboration: "Academic, Research-oriented, Mentoring",
            hours: "Flexible, but demanding (Teaching, Research, Admin)"
        }
    },
    {
        careerId: "tuition-teacher",
        narrative: "Tuition Teachers provide personalized academic support to students outside of regular school hours. Their day involves preparing lessons, conducting tutoring sessions, and tracking student progress to help them achieve their academic goals.",
        morningTasks: [
            "Planning lessons tailored to individual student needs and school curriculum.",
            "Preparing teaching materials, worksheets, and practice exercises.",
            "Reviewing student's previous work or areas of difficulty.",
            "Communicating with parents about scheduling or student progress (if applicable)."
        ],
        afternoonTasks: [
            "Conducting one-on-one or small group tutoring sessions (often after school hours).",
            "Explaining concepts clearly and addressing student doubts.",
            "Helping students with homework, assignments, and exam preparation.",
            "Tracking student progress and providing feedback to students and parents.",
            "Adapting teaching methods based on student's learning style."
        ],
        keyInteractions: [
            "Students (School or College level)",
            "Parents/Guardians",
            "School Teachers (occasionally, for coordination)",
        ],
        workEnvironment: {
            location: "Home-based/Coaching Centers/Online",
            collaboration: "Student-focused, Personalized",
            hours: "Flexible, often evenings/weekends"
        }
    },
    {
        careerId: "academic-researcher",
        narrative: "Academic Researchers are deeply involved in scholarly inquiry, contributing new knowledge to their field. Their day is a cycle of designing studies, collecting/analyzing data, writing papers, and disseminating findings, often within a university or research institute.",
        morningTasks: [
            "Designing research studies and methodologies.",
            "Conducting experiments, surveys, or literature reviews.",
            "Collecting and managing research data.",
            "Writing or revising research papers for publication."
        ],
        afternoonTasks: [
            "Analyzing research data using statistical or qualitative methods.",
            "Collaborating with other researchers or research assistants.",
            "Preparing presentations for conferences or seminars.",
            "Writing grant proposals to secure research funding.",
            "Mentoring PhD students or junior researchers (if senior)."
        ],
        keyInteractions: [
            "Principal Investigators/Supervisors",
            "Fellow Researchers & Postdocs",
            "PhD Students & Research Assistants",
            "Journal Editors & Peer Reviewers",
            "Funding Agencies"
        ],
        workEnvironment: {
            location: "Universities/Research Institutes/Labs",
            collaboration: "Intellectually Driven, Analytical, Publication-focused",
            hours: "Flexible, Project Deadlines, Often Long"
        }
    },

    // --- Engineering (Core Branches) ---
    {
        careerId: "mechanical-engineer",
        narrative: "Mechanical Engineers apply principles of physics and material science to design, develop, and test mechanical systems. Their day can involve CAD work, simulations, prototype testing, and overseeing manufacturing processes.",
        morningTasks: [
            "Reviewing project requirements and design specifications.",
            "Working on 2D/3D designs using CAD software (SolidWorks, AutoCAD).",
            "Performing simulations (FEA, CFD) to analyze design performance.",
            "Collaborating with design or manufacturing teams."
        ],
        afternoonTasks: [
            "Overseeing prototype development and testing.",
            "Analyzing test data and iterating on designs.",
            "Preparing technical drawings and documentation.",
            "Troubleshooting issues in existing mechanical systems or production lines.",
            "Researching new materials or manufacturing techniques."
        ],
        keyInteractions: [
            "Design Team & Other Engineers (Electrical, Industrial)",
            "Manufacturing/Production Teams",
            "Quality Assurance (QA) Personnel",
            "Suppliers & Vendors",
            "Project Managers"
        ],
        workEnvironment: {
            location: "Offices/Labs/Manufacturing Plants",
            collaboration: "Technical, Problem-solving",
            hours: "Standard, Project-driven"
        }
    },
    {
        careerId: "civil-engineer",
        narrative: "Civil Engineers design, construct, and maintain infrastructure projects like buildings, roads, bridges, and water systems. Their day involves planning, design using software, site supervision, and ensuring projects meet standards.",
        morningTasks: [
            "Reviewing project plans, blueprints, and survey reports.",
            "Designing structures or infrastructure components using CAD/BIM software (AutoCAD, STAAD.Pro, Revit).",
            "Performing structural analysis or hydraulic calculations.",
            "Coordinating with architects, surveyors, and contractors."
        ],
        afternoonTasks: [
            "Conducting site visits to monitor construction progress and ensure quality.",
            "Resolving technical issues or challenges arising on-site.",
            "Preparing project reports, cost estimates, and tender documents.",
            "Ensuring compliance with building codes, safety regulations, and environmental standards.",
            "Managing project timelines and resources."
        ],
        keyInteractions: [
            "Architects & Urban Planners",
            "Contractors & Construction Workers",
            "Structural & Geotechnical Engineers",
            "Government Authorities & Clients",
            "Surveyors & Material Suppliers"
        ],
        workEnvironment: {
            location: "Design Offices/Construction Sites",
            collaboration: "Project-based, Technical, Fieldwork involved",
            hours: "Standard, with site visit variations"
        }
    },
    {
        careerId: "electrical-engineer",
        narrative: "Electrical Engineers design, develop, and test electrical systems and equipment, from power generation to electronic devices. Their day involves circuit design, simulations, testing, and ensuring systems are safe and efficient.",
        morningTasks: [
            "Designing electrical circuits or systems using CAD software (AutoCAD Electrical, EPLAN).",
            "Performing simulations (SPICE, MATLAB/Simulink) to analyze circuit behavior or power systems.",
            "Selecting electrical components and materials.",
            "Collaborating with mechanical or software engineers on integrated projects."
        ],
        afternoonTasks: [
            "Overseeing the manufacturing or installation of electrical equipment.",
            "Conducting tests and inspections to ensure quality and safety standards.",
            "Troubleshooting electrical failures or performance issues.",
            "Preparing technical documentation, schematics, and reports.",
            "Researching new electrical technologies or power solutions (e.g., renewable energy)."
        ],
        keyInteractions: [
            "Mechanical & Software Engineers",
            "Technicians & Electricians",
            "Project Managers",
            "Suppliers of Electrical Components",
            "Clients or End-users"
        ],
        workEnvironment: {
            location: "Design Offices/Labs/Manufacturing/Power Plants/Sites",
            collaboration: "Technical, Analytical, Hands-on (sometimes)",
            hours: "Standard, with potential for site work"
        }
    },
    {
        careerId: "chemical-engineer",
        narrative: "Chemical Engineers apply principles of chemistry, physics, and engineering to design and operate industrial processes for transforming raw materials into valuable products. Their day involves process design, optimization, safety management, and troubleshooting.",
        morningTasks: [
            "Reviewing process flow diagrams (PFDs) and piping & instrumentation diagrams (P&IDs).",
            "Using process simulation software (ASPEN Plus, HYSYS) to design or optimize chemical processes.",
            "Analyzing plant operational data to identify inefficiencies or potential issues.",
            "Conducting safety reviews (HAZOP) or environmental compliance checks."
        ],
        afternoonTasks: [
            "Troubleshooting process upsets or equipment malfunctions in a plant.",
            "Overseeing pilot plant operations or scale-up of new processes.",
            "Developing and implementing process improvements for efficiency, safety, or quality.",
            "Preparing technical reports, operating procedures, and project proposals.",
            "Collaborating with plant operators, maintenance teams, and R&D scientists."
        ],
        keyInteractions: [
            "Plant Operators & Maintenance Teams",
            "R&D Scientists & Process Development Teams",
            "Safety & Environmental Engineers",
            "Project Managers",
            "Equipment Vendors"
        ],
        workEnvironment: {
            location: "Chemical Plants/Refineries/R&D Labs/Design Offices",
            collaboration: "Process-oriented, Analytical, Safety-critical",
            hours: "Standard, with potential for shift work or on-call in plants"
        }
    },

    // --- Legal Services ---
    {
        careerId: "lawyer-advocate",
        narrative: "Lawyers advise clients on legal matters and represent them in legal proceedings. Their day involves meticulous research, drafting legal documents, client consultations, and court appearances.",
        morningTasks: [
            "Researching case law, statutes, and legal precedents.",
            "Drafting plaints, written statements, contracts, or legal opinions.",
            "Preparing for court appearances (reviewing case files, strategy).",
            "Meeting with clients to discuss case progress or new matters."
        ],
        afternoonTasks: [
            "Attending court hearings, trials, or arguments.",
            "Negotiating settlements or agreements on behalf of clients.",
            "Conducting client consultations and providing legal advice.",
            "Managing case files, deadlines, and administrative tasks.",
            "Networking and continuous legal education."
        ],
        keyInteractions: [
            "Clients",
            "Opposing Counsel",
            "Judges & Court Staff",
            "Senior Advocates/Partners (if in a firm)",
            "Paralegals & Legal Assistants"
        ],
        workEnvironment: {
            location: "Courts/Law Firms/Chambers",
            collaboration: "Analytical, High-stakes",
            hours: "Long, Deadline-intensive"
        }
    },
    {
        careerId: "legal-consultant",
        narrative: "Legal Consultants provide specialized expert advice to businesses or individuals on specific areas of law, often without direct court representation. Their day involves deep analysis, research, and strategic advisory.",
        morningTasks: [
            "Researching complex legal issues and new regulations in their area of specialization (e.g., corporate, IPR, environmental law).",
            "Analyzing client's business operations or specific situations for legal implications.",
            "Drafting advisory opinions, legal memorandums, or compliance policies.",
            "Reviewing contracts and other legal documents for clients."
        ],
        afternoonTasks: [
            "Consulting with clients (businesses, individuals) to provide strategic legal advice.",
            "Developing risk mitigation strategies and compliance frameworks.",
            "Preparing presentations or training materials on legal topics.",
            "Keeping abreast of industry trends and their legal impact.",
            "Networking and business development to attract new consulting projects."
        ],
        keyInteractions: [
            "Corporate Clients (Legal Depts, Management)",
            "Business Owners & Entrepreneurs",
            "Other Legal Professionals (for collaboration)",
            "Regulatory Bodies (indirectly, through advisory)",
        ],
        workEnvironment: {
            location: "Consulting Firms/Self-Employed/Office",
            collaboration: "Specialized Advisory, Research-heavy",
            hours: "Project-based, often flexible"
        }
    },

    // --- Architecture and Design ---
    {
        careerId: "architect",
        narrative: "Architects blend art and science to design buildings and spaces. Their day involves conceptualizing designs, creating detailed plans using CAD, coordinating with various stakeholders, and overseeing construction progress.",
        morningTasks: [
            "Meeting with clients to understand project requirements and vision.",
            "Developing initial design concepts and sketches.",
            "Working on detailed architectural drawings using CAD/BIM software (AutoCAD, Revit).",
            "Researching building codes, zoning laws, and materials."
        ],
        afternoonTasks: [
            "Coordinating with structural engineers, MEP consultants, and contractors.",
            "Preparing construction documents and specifications.",
            "Visiting construction sites to monitor progress and ensure design adherence.",
            "Presenting designs to clients and incorporating feedback.",
            "Managing project timelines and budgets (in some roles)."
        ],
        keyInteractions: [
            "Clients",
            "Structural & MEP Engineers",
            "Contractors & Construction Teams",
            "Urban Planners/Municipal Authorities",
            "Interior Designers"
        ],
        workEnvironment: {
            location: "Firms/Site Visits",
            collaboration: "Creative, Technical, Project-based",
            hours: "Standard with site visit flexibility"
        }
    },
    {
        careerId: "interior-designer",
        narrative: "Interior Designers transform indoor spaces to be functional, safe, and aesthetically pleasing. Their day involves client consultations, space planning, material selection, and overseeing the execution of their designs.",
        morningTasks: [
            "Meeting with clients to understand their style, needs, and budget for a space.",
            "Developing design concepts, mood boards, and space layouts.",
            "Creating 2D/3D visualizations using software (AutoCAD, SketchUp, 3ds Max).",
            "Sourcing furniture, fixtures, materials, and finishes."
        ],
        afternoonTasks: [
            "Presenting design proposals to clients and making revisions.",
            "Coordinating with contractors, carpenters, painters, and other vendors.",
            "Visiting sites to oversee installation and ensure quality.",
            "Managing project timelines and budgets.",
            "Staying updated on design trends and new materials."
        ],
        keyInteractions: [
            "Clients (Residential, Commercial)",
            "Contractors & Tradespeople (Carpenters, Electricians)",
            "Furniture & Material Suppliers",
            "Architects (for new builds)",
            "Showroom Representatives"
        ],
        workEnvironment: {
            location: "Design Studios/Client Sites/Freelance",
            collaboration: "Creative, Client-focused, Hands-on",
            hours: "Project-driven, Flexible"
        }
    },

    // --- Agriculture ---
    {
        careerId: "agricultural-scientist",
        narrative: "Agricultural Scientists conduct research to improve crop production, soil health, and livestock management. Their day often involves lab work, field experiments, data analysis, and disseminating findings to benefit the agricultural sector.",
        morningTasks: [
            "Planning and setting up field or laboratory experiments.",
            "Collecting samples (soil, plant, animal) for analysis.",
            "Conducting laboratory tests or managing experimental plots.",
            "Reviewing scientific literature and research data."
        ],
        afternoonTasks: [
            "Analyzing experimental data using statistical software.",
            "Writing research papers, reports, or grant proposals.",
            "Developing new crop varieties or sustainable farming techniques.",
            "Collaborating with other researchers or extension workers.",
            "Presenting findings at seminars or to farmer groups."
        ],
        keyInteractions: [
            "Fellow Scientists & Researchers",
            "Farmers & Extension Workers",
            "University Faculty & Students",
            "Government Agricultural Officials",
            "Agri-business Representatives"
        ],
        workEnvironment: {
            location: "Labs/Fields/Universities",
            collaboration: "Research-oriented, Analytical",
            hours: "Varied, season-dependent"
        }
    },
    {
        careerId: "farm-manager",
        narrative: "Farm Managers oversee the daily operations of agricultural establishments, ensuring efficient production of crops or livestock. Their day is a mix of planning, hands-on work, managing resources, and adapting to environmental conditions.",
        morningTasks: [
            "Inspecting fields or livestock and assessing daily needs.",
            "Planning daily work schedules for farm staff.",
            "Operating or supervising the operation of farm machinery (tractors, harvesters).",
            "Monitoring irrigation, fertilization, or feeding programs."
        ],
        afternoonTasks: [
            "Managing pest and disease control measures.",
            "Overseeing harvesting, storage, and transportation of produce/livestock.",
            "Maintaining farm records, financial accounts, and inventory.",
            "Purchasing supplies (seeds, fertilizers, feed) and managing budgets.",
            "Keeping up with new farming techniques and market prices."
        ],
        keyInteractions: [
            "Farm Laborers & Staff",
            "Suppliers of Agri-inputs",
            "Buyers of Agricultural Produce",
            "Veterinarians & Agricultural Consultants",
            "Government Agricultural Extension Officers"
        ],
        workEnvironment: {
            location: "Farms/Rural Areas (Outdoors)",
            collaboration: "Hands-on, Managerial, Weather-dependent",
            hours: "Long, Seasonal peaks, Physically demanding"
        }
    },

    // --- Logistics and Supply Chain ---
    {
        careerId: "logistics-manager",
        narrative: "Logistics Managers orchestrate the movement and storage of goods, ensuring efficiency and cost-effectiveness. Their day involves planning, coordinating with various parties, and problem-solving to keep the supply chain running smoothly.",
        morningTasks: [
            "Reviewing daily shipping schedules and inventory levels.",
            "Coordinating with transport providers (truckers, shipping lines, airlines).",
            "Monitoring warehouse operations and order fulfillment processes.",
            "Tracking shipments and addressing any immediate delays."
        ],
        afternoonTasks: [
            "Negotiating rates with carriers and logistics vendors.",
            "Analyzing logistics data to identify cost-saving opportunities or inefficiencies.",
            "Managing customs documentation and compliance (for international logistics).",
            "Using TMS/WMS software for operations management.",
            "Developing and implementing logistics strategies."
        ],
        keyInteractions: [
            "Transport Providers & Freight Forwarders",
            "Warehouse Staff & Supervisors",
            "Suppliers & Customers",
            "Customs Officials (if applicable)",
            "Sales & Procurement Teams"
        ],
        workEnvironment: {
            location: "Office/Warehouse/Ports",
            collaboration: "Operational, Fast-paced",
            hours: "Standard, potential for urgent issues"
        }
    },
    {
        careerId: "supply-chain-analyst",
        narrative: "Supply Chain Analysts use data to analyze and improve the efficiency of an organization's supply chain. Their day involves data mining, process mapping, forecasting, and developing strategies to optimize logistics and inventory.",
        morningTasks: [
            "Collecting and analyzing supply chain data (inventory, transportation costs, lead times).",
            "Developing and maintaining supply chain performance dashboards.",
            "Identifying bottlenecks or inefficiencies in the supply chain process.",
            "Working on demand forecasting models."
        ],
        afternoonTasks: [
            "Developing recommendations for process improvements or cost optimization.",
            "Collaborating with procurement, logistics, and planning teams.",
            "Using supply chain planning software and analytical tools (Excel, SQL, Python).",
            "Preparing reports and presentations on supply chain performance.",
            "Monitoring key performance indicators (KPIs)."
        ],
        keyInteractions: [
            "Logistics & Warehouse Managers",
            "Procurement & Sourcing Teams",
            "Planning Departments",
            "IT Teams (for SCM software)",
            "Suppliers & Key Customers"
        ],
        workEnvironment: {
            location: "Corporate Office/Hybrid",
            collaboration: "Data-driven, Analytical, Cross-functional",
            hours: "Standard, Project-focused"
        }
    },

    // --- Social Work and Community Services ---
    {
        careerId: "social-worker",
        narrative: "Social Workers are dedicated to improving the well-being of individuals, families, and communities by addressing various social challenges. Their day involves client assessment, counseling, resource connection, and advocacy.",
        morningTasks: [
            "Reviewing case files and preparing for client meetings/home visits.",
            "Conducting intake interviews and assessing client needs.",
            "Providing counseling or support to individuals or groups.",
            "Developing intervention plans with clients."
        ],
        afternoonTasks: [
            "Connecting clients with community resources (housing, healthcare, employment).",
            "Advocating for client rights with agencies or institutions.",
            "Documenting case notes and maintaining confidential records.",
            "Attending case conferences or team meetings with other professionals.",
            "Conducting community outreach or workshops."
        ],
        keyInteractions: [
            "Clients (Individuals, Families, Groups)",
            "Other Social Workers & Counselors",
            "Government Agencies (Social Welfare, Health)",
            "NGOs & Community Organizations",
            "Healthcare Providers & Educators"
        ],
        workEnvironment: {
            location: "NGOs/Govt. Depts./Community",
            collaboration: "Empathetic, Advocacy-driven",
            hours: "Varied, emotionally demanding"
        }
    },
    {
        careerId: "ngo-coordinator",
        narrative: "NGO Coordinators manage and implement projects aimed at social development or addressing specific community needs. Their day involves planning, fundraising, team coordination, stakeholder engagement, and monitoring project outcomes.",
        morningTasks: [
            "Planning project activities and timelines.",
            "Coordinating with project staff, volunteers, and community members.",
            "Writing grant proposals or fundraising appeals.",
            "Networking with potential donors or partner organizations."
        ],
        afternoonTasks: [
            "Overseeing the implementation of project activities in the field.",
            "Monitoring project progress and collecting data for evaluation.",
            "Preparing project reports for funders and stakeholders.",
            "Managing project budgets and resources.",
            "Advocacy work or representing the NGO at meetings/events."
        ],
        keyInteractions: [
            "Community Members/Beneficiaries",
            "Project Staff & Volunteers",
            "Donors & Funding Agencies",
            "Government Officials & Other NGOs",
            "NGO Leadership/Board"
        ],
        workEnvironment: {
            location: "NGO Office/Field (Community)",
            collaboration: "Mission-driven, Multitasking",
            hours: "Flexible, often involves fieldwork"
        }
    },

    // --- Human Resources ---
    {
        careerId: "hr-manager",
        narrative: "HR Managers play a strategic role in managing an organization's most valuable asset: its people. Their day involves overseeing recruitment, employee relations, compensation, training, and ensuring legal compliance.",
        morningTasks: [
            "Reviewing HR metrics and reports.",
            "Meeting with department heads to discuss staffing needs or employee issues.",
            "Overseeing recruitment activities and interviewing senior candidates.",
            "Developing or updating HR policies and procedures."
        ],
        afternoonTasks: [
            "Handling complex employee relations issues or grievances.",
            "Managing compensation and benefits administration.",
            "Planning and implementing training and development programs.",
            "Ensuring compliance with labor laws and addressing legal matters.",
            "Leading HR team meetings and mentoring HR staff."
        ],
        keyInteractions: [
            "Employees at all levels",
            "Department Heads & Senior Management",
            "HR Team Members (Specialists, Executives)",
            "Legal Counsel",
            "External Recruiters/Vendors"
        ],
        workEnvironment: {
            location: "Corporate Office",
            collaboration: "Strategic, People-focused",
            hours: "Standard, with some urgent matters"
        }
    },
    {
        careerId: "recruitment-specialist",
        narrative: "Recruitment Specialists are talent hunters, focused on finding, attracting, and hiring the best candidates for an organization. Their day involves sourcing, screening, interviewing, and managing the candidate experience.",
        morningTasks: [
            "Collaborating with hiring managers on job requirements and descriptions.",
            "Sourcing candidates using job portals (Naukri, LinkedIn), social media, and referrals.",
            "Screening resumes and applications.",
            "Conducting initial phone screens with potential candidates."
        ],
        afternoonTasks: [
            "Coordinating and conducting interviews (virtual or in-person).",
            "Managing candidate communication and feedback throughout the process.",
            "Extending job offers and negotiating terms.",
            "Using Applicant Tracking Systems (ATS) to manage candidate data.",
            "Building talent pipelines for future hiring needs."
        ],
        keyInteractions: [
            "Candidates",
            "Hiring Managers & Department Heads",
            "HR Team Members",
            "Recruitment Agencies (sometimes)",
            "University Placement Cells"
        ],
        workEnvironment: {
            location: "Corporate/Agency Office/Hybrid/Remote",
            collaboration: "Fast-paced, People-oriented, Target-driven",
            hours: "Standard, with flexibility for candidate calls"
        }
    },

    // --- Aerospace and Space Exploration ---
    {
        careerId: "aerospace-engineer",
        narrative: "Aerospace Engineers design and develop cutting-edge aircraft, spacecraft, and related systems. Their day is a rigorous blend of theoretical analysis, simulation, design work using advanced software, and often hands-on testing.",
        morningTasks: [
            "Reviewing project specifications and design requirements for aircraft/spacecraft components.",
            "Performing aerodynamic or structural analysis using CAE/CFD software.",
            "Working on detailed 3D models and drawings using CAD tools (CATIA, SolidWorks).",
            "Collaborating with multidisciplinary teams (propulsion, avionics, materials)."
        ],
        afternoonTasks: [
            "Overseeing or participating in prototype manufacturing and assembly.",
            "Planning and conducting tests (wind tunnel, structural, flight tests).",
            "Analyzing test data, identifying discrepancies, and iterating on designs.",
            "Preparing technical reports, documentation, and presentations.",
            "Researching new aerospace materials, technologies, or methodologies."
        ],
        keyInteractions: [
            "Other Engineers (Structures, Propulsion, Avionics, Systems)",
            "Technicians & Manufacturing Staff",
            "Test Pilots & Flight Test Engineers",
            "Project Managers & Program Directors",
            "Regulatory Authorities (DGCA, FAA - for certification)"
        ],
        workEnvironment: {
            location: "R&D Labs/Design Offices/Test Facilities",
            collaboration: "Highly Technical, Precision-driven",
            hours: "Project-based, can be intensive"
        }
    },
    {
        careerId: "astrophysicist-astronomer",
        narrative: "Astrophysicists and Astronomers explore the universe, from distant galaxies to exoplanets. Their day involves analyzing vast amounts of observational data, developing theoretical models, writing research papers, and collaborating globally.",
        morningTasks: [
            "Downloading and processing observational data from telescopes (ground-based or space-borne).",
            "Writing code (Python, IDL) for data analysis, image processing, or simulations.",
            "Reading scientific literature and staying updated on latest discoveries.",
            "Working on theoretical calculations or developing new models."
        ],
        afternoonTasks: [
            "Interpreting results and preparing figures for research papers.",
            "Writing and revising manuscripts for publication in peer-reviewed journals.",
            "Collaborating with national and international research teams via calls or meetings.",
            "Preparing and delivering presentations at conferences or seminars.",
            "Applying for telescope time or research grants (for senior researchers)."
        ],
        keyInteractions: [
            "Fellow Researchers & Collaborators (Global)",
            "Postdoctoral Fellows & PhD Students (if in academia)",
            "Telescope Operations Staff",
            "Journal Editors & Reviewers"
        ],
        workEnvironment: {
            location: "Universities/Research Institutes/Observatories",
            collaboration: "Intellectually Stimulating, Data-intensive",
            hours: "Flexible, often long for research/observation"
        }
    },
    {
        careerId: "satellite-engineer",
        narrative: "Satellite Engineers are involved in the entire lifecycle of satellites, from conceptual design and subsystem development to testing, launch support, and in-orbit operations. Precision and reliability are paramount.",
        morningTasks: [
            "Designing specific satellite subsystems (e.g., power, communication, thermal, AOCS).",
            "Performing simulations and analysis for subsystem performance in space environment.",
            "Working with CAD tools for mechanical design or specialized software for RF/payload design.",
            "Reviewing and addressing issues from previous day's tests or operations."
        ],
        afternoonTasks: [
            "Overseeing or participating in the assembly, integration, and testing (AIT) of satellite components.",
            "Conducting environmental tests (vibration, thermal vacuum, EMI/EMC).",
            "Developing and testing ground control software or mission operation procedures.",
            "Analyzing telemetry data from satellites in orbit and troubleshooting anomalies.",
            "Preparing documentation for design reviews or launch campaigns."
        ],
        keyInteractions: [
            "Subsystem Engineers (Power, Comm, Thermal, etc.)",
            "Systems Engineers & Project Managers",
            "AIT (Assembly, Integration, Test) Teams",
            "Launch Service Providers",
            "Mission Operations Team"
        ],
        workEnvironment: {
            location: "Space Agencies/Private Satellite Companies/Labs",
            collaboration: "High-Tech, Mission-Critical",
            hours: "Standard with intensive periods during AIT/Launch"
        }
    },
    {
        careerId: "rocket-scientist-propulsion",
        narrative: "Rocket Scientists specializing in propulsion focus on the heart of launch vehicles and spacecraft – their engines. Their day involves complex design, analysis, and rigorous testing of systems that generate immense power.",
        morningTasks: [
            "Designing components of rocket engines (combustion chambers, nozzles, turbopumps) using CAD and specialized software.",
            "Performing computational fluid dynamics (CFD) or combustion analysis.",
            "Developing mathematical models for propulsion system performance.",
            "Reviewing test plans and safety protocols for engine testing."
        ],
        afternoonTasks: [
            "Overseeing the assembly or manufacturing of engine components.",
            "Participating in or monitoring static test firings of rocket engines.",
            "Analyzing vast amounts of data from test firings (pressure, temperature, thrust).",
            "Troubleshooting engine anomalies and iterating on designs.",
            "Researching advanced propulsion concepts or new propellant combinations."
        ],
        keyInteractions: [
            "Mechanical & Aerospace Engineers (Structures, Aerodynamics)",
            "Materials Scientists",
            "Test Facility Engineers & Technicians",
            "Systems Engineers (for integration with launch vehicle)",
            "Safety Officers"
        ],
        workEnvironment: {
            location: "R&D Labs/Test Facilities/Manufacturing Units",
            collaboration: "Highly Specialized, Experimental",
            hours: "Standard with intensive periods for testing"
        }
    },
];

export const getDayInLifeByCareerId = (careerId: string): DayInLifeData | undefined => {
    return dayInLifeDatabase.find(d => d.careerId === careerId);
};