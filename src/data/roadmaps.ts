// src/data/roadmaps.ts

export type RoadmapItem = {
  title: string;
  description: string;
  type: "study" | "certification" | "project" | "skill";
  timeframe?: string;
};

export type RoadmapData = {
  careerId: string;
  items: RoadmapItem[];
};

export const roadmaps: Record<string, RoadmapData> = {
  // --- Information Technology ---
  "software-developer": {
    careerId: "software-developer",
    items: [
      { title: "Master Programming Fundamentals", description: "Choose a language (Python, Java, JavaScript). Understand variables, data types, control flow, loops, functions, and OOP concepts.", type: "study", timeframe: "2-3 Months" },
      { title: "Learn Data Structures & Algorithms", description: "Study arrays, linked lists, trees, graphs, sorting, searching. Practice on platforms like LeetCode, HackerRank.", type: "study", timeframe: "3-4 Months" },
      { title: "Version Control with Git", description: "Learn Git for code management, branching, merging, and collaboration using GitHub/GitLab.", type: "skill", timeframe: "1 Month" },
      { title: "Web Development Basics (if applicable)", description: "Learn HTML, CSS, JavaScript for frontend, or a backend language like Node.js, Python (Django/Flask), Java (Spring).", type: "study", timeframe: "2-3 Months" },
      { title: "Database Fundamentals (SQL/NoSQL)", description: "Understand relational (MySQL, PostgreSQL) and/or NoSQL (MongoDB) databases, querying, and basic design.", type: "study", timeframe: "1-2 Months" },
      { title: "Build a Portfolio Project", description: "Develop a complete application (e.g., e-commerce site, social media clone, utility tool) showcasing your skills.", type: "project", timeframe: "2-3 Months" },
      { title: "Consider a Specialization & Framework", description: "Deep dive into frontend (React, Angular, Vue), backend (Node.js, Spring), mobile (React Native, Flutter), or other areas.", type: "study", timeframe: "3-4 Months" },
      { title: "Cloud Basics (AWS, Azure, or GCP - Optional)", description: "Understand basic cloud services for deployment and scaling. Consider AWS Certified Cloud Practitioner or similar.", type: "certification", timeframe: "1-2 Months" }
    ]
  },
  "data-analyst": {
    careerId: "data-analyst",
    items: [
      { title: "Master Spreadsheet Software (Excel/Google Sheets)", description: "Learn advanced functions, pivot tables, data cleaning, and basic visualization.", type: "skill", timeframe: "1 Month" },
      { title: "SQL for Data Analysis", description: "Become proficient in SQL for querying, joining tables, aggregation, and window functions.", type: "study", timeframe: "1-2 Months" },
      { title: "Statistics & Probability Fundamentals", description: "Understand descriptive and inferential statistics, distributions, hypothesis testing.", type: "study", timeframe: "2-3 Months" },
      { title: "Learn Python or R for Data Analysis", description: "Master libraries like Pandas, NumPy, Matplotlib (Python) or dplyr, ggplot2 (R).", type: "study", timeframe: "2-3 Months" },
      { title: "Data Visualization Tools", description: "Learn Tableau or Power BI to create interactive dashboards and reports.", type: "skill", timeframe: "1-2 Months" },
      { title: "Complete a Data Analysis Project", description: "Analyze a real-world dataset, generate insights, and present your findings in a portfolio.", type: "project", timeframe: "1-2 Months" },
      { title: "Google Data Analytics Professional Certificate (Optional)", description: "A comprehensive certification covering key data analysis skills and tools.", type: "certification", timeframe: "4-6 Months" },
      { title: "Develop Business Acumen & Storytelling", description: "Learn to understand business problems and communicate data insights effectively.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "data-scientist": {
    careerId: "data-scientist",
    items: [
      { title: "Advanced Mathematics & Statistics", description: "Deepen knowledge in linear algebra, calculus, probability, and advanced statistical methods.", type: "study", timeframe: "3-4 Months" },
      { title: "Proficiency in Python or R", description: "Master data science libraries (Pandas, NumPy, Scikit-learn, Matplotlib/Seaborn in Python; or R equivalents).", type: "study", timeframe: "3-4 Months" },
      { title: "Machine Learning Algorithms", description: "Understand supervised (regression, classification), unsupervised (clustering, dimensionality reduction), and basic deep learning concepts.", type: "study", timeframe: "4-6 Months" },
      { title: "Data Wrangling & Preprocessing", description: "Develop strong skills in cleaning, transforming, and preparing data for modeling.", type: "skill", timeframe: "2-3 Months" },
      { title: "Build Machine Learning Projects", description: "Work on several projects involving different algorithms and datasets (e.g., Kaggle competitions).", type: "project", timeframe: "3-6 Months" },
      { title: "Big Data Technologies (Optional, but beneficial)", description: "Get familiar with Spark, Hadoop, or cloud-based big data services.", type: "study", timeframe: "2-3 Months" },
      { title: "Domain Knowledge Acquisition", description: "Develop an understanding of the industry you wish to apply data science in.", type: "study", timeframe: "Ongoing" },
      { title: "AWS Certified Machine Learning – Specialty / Azure AI Engineer Associate (Optional)", description: "Validate your ML skills on a cloud platform.", type: "certification", timeframe: "3-4 Months" }
    ]
  },
  "ai-ml-engineer": {
    careerId: "ai-ml-engineer",
    items: [
      { title: "Strong Programming (Python focus)", description: "Master Python and its core libraries (NumPy, Pandas, Scikit-learn). Solid understanding of software engineering principles.", type: "study", timeframe: "3-4 Months" },
      { title: "Advanced Machine Learning & Deep Learning", description: "In-depth knowledge of algorithms, neural network architectures (CNNs, RNNs, Transformers), and frameworks (TensorFlow, PyTorch).", type: "study", timeframe: "6-8 Months" },
      { title: "MLOps (Machine Learning Operations)", description: "Learn CI/CD for ML, model versioning, deployment strategies, monitoring, and scaling ML systems.", type: "study", timeframe: "3-4 Months" },
      { title: "Cloud AI Platforms", description: "Gain experience with AWS SageMaker, Google AI Platform, or Azure Machine Learning for training and deploying models.", type: "skill", timeframe: "2-3 Months" },
      { title: "Develop and Deploy Complex AI Models", description: "Build end-to-end AI solutions, such as computer vision systems, NLP applications, or reinforcement learning agents.", type: "project", timeframe: "4-6 Months" },
      { title: "Software Engineering for ML", description: "Learn to write production-quality code for ML systems, including API development and system integration.", type: "skill", timeframe: "3-4 Months" },
      { title: "Specialized AI Certifications (e.g., TensorFlow Developer, PyTorch Certification Program)", description: "Validate expertise in specific frameworks.", type: "certification", timeframe: "2-3 Months per cert" },
      { title: "Contribute to Open Source AI Projects (Optional)", description: "Gain practical experience and visibility.", type: "project", timeframe: "Ongoing" }
    ]
  },
  "cloud-engineer": {
    careerId: "cloud-engineer",
    items: [
      { title: "Cloud Computing Fundamentals (AWS, Azure, or GCP)", description: "Understand core services: compute, storage, networking, databases, IAM. Choose one platform to start deep.", type: "study", timeframe: "1-2 Months" },
      { title: "Networking in the Cloud", description: "Learn about VPCs/VNets, subnets, security groups, load balancers, DNS in your chosen cloud.", type: "study", timeframe: "1-2 Months" },
      { title: "Infrastructure as Code (IaC)", description: "Master Terraform or CloudFormation (AWS) / ARM Templates (Azure) / Cloud Deployment Manager (GCP).", type: "skill", timeframe: "2-3 Months" },
      { title: "Containerization & Orchestration", description: "Learn Docker for containerizing applications and Kubernetes for orchestration (e.g., EKS, AKS, GKE).", type: "study", timeframe: "2-3 Months" },
      { title: "Cloud Security Best Practices", description: "Understand identity management, network security, data encryption, and compliance in the cloud.", type: "study", timeframe: "1-2 Months" },
      { title: "Monitoring & Logging in Cloud", description: "Learn tools like CloudWatch, Azure Monitor, Stackdriver for monitoring performance and troubleshooting.", type: "skill", timeframe: "1 Month" },
      { title: "Cloud Certification (e.g., AWS Solutions Architect Associate, Azure Administrator Associate)", description: "Achieve a foundational or associate-level certification in your chosen cloud platform.", type: "certification", timeframe: "2-3 Months" },
      { title: "Deploy a Scalable & Fault-Tolerant Application", description: "Build a project that utilizes multiple cloud services and demonstrates best practices.", type: "project", timeframe: "2 Months" }
    ]
  },
  "network-administrator": {
    careerId: "network-administrator",
    items: [
      { title: "Networking Fundamentals (OSI, TCP/IP)", description: "Deeply understand network models, protocols (IP, TCP, UDP, DNS, DHCP), and addressing (IPv4, IPv6).", type: "study", timeframe: "2-3 Months" },
      { title: "Routing & Switching Concepts", description: "Learn about LAN/WAN technologies, router/switch configuration basics (VLANs, STP, OSPF, EIGRP).", type: "study", timeframe: "2-3 Months" },
      { title: "CompTIA Network+ Certification", description: "Validate foundational networking knowledge and skills.", type: "certification", timeframe: "2-3 Months" },
      { title: "Cisco CCNA Certification (Highly Recommended)", description: "Gain practical skills in configuring and troubleshooting Cisco networks.", type: "certification", timeframe: "3-6 Months" },
      { title: "Network Security Fundamentals", description: "Learn about firewalls, VPNs, IDS/IPS, access control lists (ACLs), and network security best practices.", type: "study", timeframe: "1-2 Months" },
      { title: "Server Administration Basics (Windows/Linux)", description: "Understand server roles relevant to networking (DNS, DHCP servers).", type: "study", timeframe: "1-2 Months" },
      { title: "Build a Home Lab Network", description: "Practice configuring routers, switches, and firewalls using simulators (GNS3, Packet Tracer) or physical hardware.", type: "project", timeframe: "2-3 Months" },
      { title: "Wireless Networking Principles", description: "Understand Wi-Fi standards, security, and WAP configuration.", type: "study", timeframe: "1 Month" }
    ]
  },
  "cybersecurity-analyst": {
    careerId: "cybersecurity-analyst",
    items: [
      { title: "IT Fundamentals & Networking", description: "Solid understanding of operating systems (Windows, Linux), networking (TCP/IP, DNS, HTTP), and common IT infrastructure.", type: "study", timeframe: "2-3 Months" },
      { title: "Cybersecurity Principles", description: "Learn about CIA triad, threats, vulnerabilities, risk management, and security controls.", type: "study", timeframe: "1-2 Months" },
      { title: "CompTIA Security+ Certification", description: "Validate core cybersecurity knowledge and skills.", type: "certification", timeframe: "2-3 Months" },
      { title: "Security Tools & Technologies", description: "Familiarize with firewalls, IDS/IPS, SIEM tools (e.g., Splunk), EDR, vulnerability scanners.", type: "skill", timeframe: "2-3 Months" },
      { title: "Ethical Hacking & Penetration Testing Basics", description: "Understand common attack vectors and basic pentesting methodologies (e.g., using Kali Linux tools).", type: "study", timeframe: "3-4 Months" },
      { title: "Incident Response & Forensics Basics", description: "Learn the incident response lifecycle and basic digital forensics techniques.", type: "study", timeframe: "1-2 Months" },
      { title: "Participate in CTFs & Security Labs", description: "Practice skills in Capture The Flag competitions (e.g., TryHackMe, HackTheBox) and build a home security lab.", type: "project", timeframe: "Ongoing" },
      { title: "Consider CySA+ or CEH Certification (Optional)", description: "Pursue more advanced cybersecurity certifications as you gain experience.", type: "certification", timeframe: "3-6 Months per cert" }
    ]
  },
  "devops-engineer": {
    careerId: "devops-engineer",
    items: [
      { title: "Linux Fundamentals & Shell Scripting", description: "Master Linux command line, system administration basics, and scripting (Bash, Python).", type: "study", timeframe: "2-3 Months" },
      { title: "Version Control with Git", description: "Become proficient in Git workflows, branching strategies, and platforms like GitHub/GitLab.", type: "skill", timeframe: "1 Month" },
      { title: "CI/CD Principles & Tools", description: "Learn concepts of Continuous Integration/Continuous Deployment and tools like Jenkins, GitLab CI, or GitHub Actions.", type: "study", timeframe: "2-3 Months" },
      { title: "Containerization (Docker)", description: "Master Docker for building, shipping, and running applications in containers.", type: "study", timeframe: "1-2 Months" },
      { title: "Container Orchestration (Kubernetes)", description: "Learn Kubernetes for deploying, scaling, and managing containerized applications.", type: "study", timeframe: "2-3 Months" },
      { title: "Infrastructure as Code (IaC)", description: "Learn Terraform for provisioning infrastructure and Ansible/Chef/Puppet for configuration management.", type: "study", timeframe: "2-3 Months" },
      { title: "Cloud Platform Proficiency (AWS/Azure/GCP)", description: "Understand how to implement DevOps practices and use relevant services on a major cloud provider.", type: "study", timeframe: "2-3 Months" },
      { title: "Monitoring & Logging Tools", description: "Familiarize with tools like Prometheus, Grafana, ELK Stack for system observability.", type: "skill", timeframe: "1-2 Months" }
    ]
  },
  "full-stack-developer": {
    careerId: "full-stack-developer",
    items: [
      { title: "Frontend Fundamentals (HTML, CSS, JavaScript)", description: "Master the core technologies for building user interfaces, including responsive design and modern JS (ES6+).", type: "study", timeframe: "2-3 Months" },
      { title: "Learn a Frontend Framework/Library", description: "Become proficient in React, Angular, or Vue.js for building dynamic UIs.", type: "study", timeframe: "2-3 Months" },
      { title: "Backend Programming Language & Framework", description: "Choose and master a backend stack (e.g., Node.js/Express, Python/Django/Flask, Java/Spring Boot, Ruby/Rails).", type: "study", timeframe: "3-4 Months" },
      { title: "Database Management (SQL & NoSQL)", description: "Learn to design schemas, write queries, and manage both relational (PostgreSQL, MySQL) and NoSQL (MongoDB) databases.", type: "study", timeframe: "2 Months" },
      { title: "API Design & Development (RESTful, GraphQL)", description: "Learn to design, build, and consume APIs for communication between frontend and backend.", type: "skill", timeframe: "1-2 Months" },
      { title: "Version Control (Git & GitHub/GitLab)", description: "Essential for code management and collaboration.", type: "skill", timeframe: "1 Month" },
      { title: "Build a Full-Stack Portfolio Application", description: "Develop a complete application integrating frontend, backend, database, and user authentication.", type: "project", timeframe: "2-3 Months" },
      { title: "Deployment & Basic Cloud Concepts", description: "Learn to deploy applications to platforms like Heroku, Netlify, Vercel, or basic cloud services (AWS EC2, S3).", type: "study", timeframe: "1 Month" }
    ]
  },
  "ui-ux-designer": {
    careerId: "ui-ux-designer",
    items: [
      { title: "UX Design Fundamentals", description: "Learn user research methods, personas, user flows, journey mapping, information architecture, wireframing, and usability testing.", type: "study", timeframe: "2-3 Months" },
      { title: "UI Design Principles", description: "Understand visual hierarchy, color theory, typography, layout, grid systems, and interaction design principles.", type: "study", timeframe: "2 Months" },
      { title: "Master Design & Prototyping Tools", description: "Become proficient in Figma (industry standard), Adobe XD, or Sketch for wireframing, UI design, and interactive prototyping.", type: "skill", timeframe: "2-3 Months" },
      { title: "Develop a Strong Design Portfolio", description: "Create 3-5 detailed case studies showcasing your UX research, design process, UI solutions, and problem-solving skills for different projects.", type: "project", timeframe: "3-4 Months" },
      { title: "Understanding of Accessibility (WCAG)", description: "Learn to design inclusive products for users with disabilities.", type: "study", timeframe: "1 Month" },
      { title: "Basic HTML/CSS (Optional but helpful)", description: "Understand the fundamentals of web structure and styling to better collaborate with developers.", type: "study", timeframe: "1 Month" },
      { title: "Google UX Design Professional Certificate (Optional)", description: "A comprehensive program covering UX design principles and practices.", type: "certification", timeframe: "4-6 Months" },
      { title: "Seek Feedback & Iterate", description: "Continuously seek feedback on your designs and practice an iterative design process.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "business-analyst-it": {
    careerId: "business-analyst-it",
    items: [
      { title: "Business Analysis Fundamentals", description: "Understand the role of a BA, BA process, stakeholders, and requirements lifecycle.", type: "study", timeframe: "1-2 Months" },
      { title: "Requirements Elicitation & Documentation", description: "Learn techniques (interviews, workshops, surveys) and how to write BRDs, FRSs, Use Cases, User Stories.", type: "study", timeframe: "2-3 Months" },
      { title: "Process Modeling (BPMN, Flowcharts)", description: "Learn to analyze and document business processes (as-is, to-be).", type: "skill", timeframe: "1-2 Months" },
      { title: "Agile and Scrum Methodologies", description: "Understand agile principles and the BA's role in a Scrum team.", type: "study", timeframe: "1 Month" },
      { title: "Data Analysis Basics (Excel, SQL)", description: "Learn to use data for understanding business problems and supporting recommendations.", type: "skill", timeframe: "1-2 Months" },
      { title: "UML and System Modeling (Optional)", description: "Learn basic UML diagrams (e.g., activity, sequence) for system analysis.", type: "study", timeframe: "1 Month" },
      { title: "IIBA ECBA or CCBA Certification (Optional)", description: "Entry-level or intermediate certifications for business analysts.", type: "certification", timeframe: "2-4 Months prep" },
      { title: "Work on a Case Study or Simulated Project", description: "Apply BA techniques to a hypothetical business problem and document the process.", type: "project", timeframe: "1 Month" }
    ]
  },
  "database-administrator": {
    careerId: "database-administrator",
    items: [
      { title: "Database Fundamentals & SQL Mastery", description: "Deep understanding of relational database concepts, normalization, and advanced SQL (queries, DDL, DML, DCL).", type: "study", timeframe: "2-3 Months" },
      { title: "Choose a Database System & Learn Its Administration", description: "Specialize in Oracle, MySQL, SQL Server, PostgreSQL, or a NoSQL DB like MongoDB. Learn installation, configuration, and architecture.", type: "study", timeframe: "3-4 Months" },
      { title: "Database Design & Modeling", description: "Learn to design efficient, scalable, and secure database schemas.", type: "skill", timeframe: "1-2 Months" },
      { title: "Backup, Recovery, and Disaster Recovery Planning", description: "Master techniques for database backup, restore, and ensuring business continuity.", type: "study", timeframe: "2-3 Months" },
      { title: "Database Security Management", description: "Learn user access control, roles, permissions, encryption, and auditing.", type: "study", timeframe: "1-2 Months" },
      { title: "Performance Tuning & Optimization", description: "Learn to identify performance bottlenecks, optimize queries, and manage database resources.", type: "skill", timeframe: "2-3 Months" },
      { title: "Database-Specific Certification (e.g., Oracle OCP, Microsoft Certified: Azure Database Administrator)", description: "Validate your skills on a specific database technology.", type: "certification", timeframe: "3-4 Months prep" },
      { title: "Scripting for Automation (Shell, Python, or PowerShell)", description: "Learn to automate routine DBA tasks.", type: "skill", timeframe: "1-2 Months" }
    ]
  },

  // --- Healthcare ---
  "doctor": {
    careerId: "doctor",
    items: [
      { title: "Complete 10+2 (Science Stream with PCB)", description: "Physics, Chemistry, Biology (PCB) are essential for medical entrance exams.", type: "study", timeframe: "2 Years" },
      { title: "Qualify NEET-UG (National Eligibility cum Entrance Test)", description: "Pass the national level entrance examination for admission to MBBS.", type: "certification", timeframe: "1-2 Years prep" },
      { title: "MBBS Degree Program", description: "Complete the 5.5-year Bachelor of Medicine, Bachelor of Surgery program, including a 1-year compulsory rotatory internship.", type: "study", timeframe: "5.5 Years" },
      { title: "Obtain Medical Council Registration", description: "Register with the National Medical Commission (NMC) or State Medical Council to practice.", type: "certification", timeframe: "Post MBBS" },
      { title: "Consider Postgraduate Specialization (MD/MS/DNB via NEET-PG)", description: "Pursue specialization in fields like General Medicine, Surgery, Pediatrics, etc.", type: "study", timeframe: "3 Years" },
      { title: "Gain Clinical Experience / Residency", description: "Work in hospitals/clinics, often as part of PG training, to develop practical skills.", type: "project", timeframe: "During PG" },
      { title: "Continuous Medical Education (CME)", description: "Engage in ongoing learning to stay updated with medical advancements throughout career.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "nurse": {
    careerId: "nurse",
    items: [
      { title: "Complete 10+2 (Science Stream preferred)", description: "Physics, Chemistry, Biology provides a good foundation.", type: "study", timeframe: "2 Years" },
      { title: "B.Sc. Nursing or GNM Diploma", description: "Complete a Bachelor of Science in Nursing (4 years) or General Nursing and Midwifery diploma (3-3.5 years).", type: "study", timeframe: "3-4 Years" },
      { title: "Register with State Nursing Council", description: "Obtain a license to practice as a Registered Nurse (RN) or Registered Nurse and Registered Midwife (RNRM).", type: "certification", timeframe: "Post Degree/Diploma" },
      { title: "Gain Clinical Experience", description: "Work in various hospital departments or clinics to develop practical nursing skills.", type: "project", timeframe: "1-2 Years" },
      { title: "Develop Core Nursing Skills", description: "Patient assessment, medication administration, IV therapy, wound care, critical thinking, empathy.", type: "skill", timeframe: "Ongoing" },
      { title: "Consider Specialization (Post-Basic B.Sc. or M.Sc. Nursing)", description: "Specialize in areas like Critical Care, Pediatrics, Oncology, Psychiatric Nursing.", type: "study", timeframe: "1-2 Years" },
      { title: "Communication & Interpersonal Skills", description: "Essential for patient interaction, family counseling, and teamwork.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "medical-lab-technician": {
    careerId: "medical-lab-technician",
    items: [
      { title: "Complete 10+2 (Science Stream with PCB/PCM)", description: "Science background is essential.", type: "study", timeframe: "2 Years" },
      { title: "Diploma in MLT (DMLT) or B.Sc. in MLT", description: "Complete a 2-year diploma or a 3-year Bachelor's degree in Medical Laboratory Technology.", type: "study", timeframe: "2-3 Years" },
      { title: "Learn Laboratory Techniques", description: "Master sample collection, processing, testing procedures (hematology, microbiology, biochemistry), and equipment operation.", type: "skill", timeframe: "During study" },
      { title: "Internship/Practical Training", description: "Gain hands-on experience in a clinical laboratory setting under supervision.", type: "project", timeframe: "6 Months - 1 Year" },
      { title: "Quality Control & Safety Protocols", description: "Understand and implement lab safety, quality assurance, and infection control procedures.", type: "study", timeframe: "1 Month (integrated)" },
      { title: "State Paramedical Council Registration (if applicable)", description: "Register to practice in some states.", type: "certification", timeframe: "Post course" },
      { title: "Develop Attention to Detail & Accuracy", description: "Crucial for reliable diagnostic testing.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "pharmacist": {
    careerId: "pharmacist",
    items: [
      { title: "Complete 10+2 (Science Stream with PCB/PCM)", description: "Essential for pharmacy entrance.", type: "study", timeframe: "2 Years" },
      { title: "D.Pharm or B.Pharm Degree", description: "Complete a 2-year Diploma in Pharmacy or a 4-year Bachelor of Pharmacy degree.", type: "study", timeframe: "2-4 Years" },
      { title: "Register with State Pharmacy Council", description: "Obtain a license to practice as a registered pharmacist.", type: "certification", timeframe: "Post Degree/Diploma" },
      { title: "Understand Pharmacology & Dispensing", description: "Master knowledge of drugs, their uses, side effects, interactions, and proper dispensing practices.", type: "skill", timeframe: "During study & practice" },
      { title: "Gain Practical Experience (Retail/Hospital Pharmacy)", description: "Internships or work experience in a pharmacy setting.", type: "project", timeframe: "6 Months - 1 Year" },
      { title: "Patient Counseling Skills", description: "Learn to effectively communicate medication information to patients.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Consider Pharm.D (Doctor of Pharmacy)", description: "A 6-year program for more clinical roles and patient care responsibilities.", type: "study", timeframe: "6 Years (if chosen directly)" }
    ]
  },
  "physiotherapist": {
    careerId: "physiotherapist",
    items: [
      { title: "Complete 10+2 (Science Stream with PCB)", description: "Biology is essential for physiotherapy.", type: "study", timeframe: "2 Years" },
      { title: "Bachelor of Physiotherapy (BPT)", description: "Complete a 4.5-year degree program, including a compulsory 6-month internship.", type: "study", timeframe: "4.5 Years" },
      { title: "Register with Physiotherapy Council", description: "Register with the Indian Association of Physiotherapists (IAP) or relevant state council.", type: "certification", timeframe: "Post BPT" },
      { title: "Master Manual Therapy & Exercise Prescription", description: "Learn various hands-on techniques, therapeutic exercises, and electrotherapy modalities.", type: "skill", timeframe: "During BPT & workshops" },
      { title: "Gain Diverse Clinical Experience", description: "Work in hospitals, clinics, sports facilities, or rehabilitation centers.", type: "project", timeframe: "During internship & 1-2 Years post BPT" },
      { title: "Develop Patient Assessment & Treatment Planning Skills", description: "Accurately diagnose and create effective rehabilitation plans.", type: "skill", timeframe: "Ongoing" },
      { title: "Consider Master of Physiotherapy (MPT)", description: "Specialize in areas like Orthopedics, Neurology, Sports, Cardiopulmonary.", type: "study", timeframe: "2 Years" }
    ]
  },
  // ... (Roadmaps for radiologist, surgeon, medical-transcriptionist, dentist, veterinarian, medical-representative)
  "radiologist": {
    careerId: "radiologist",
    items: [
      { title: "MBBS Degree & Internship", description: "Complete foundational medical education and compulsory internship.", type: "study", timeframe: "5.5 Years" },
      { title: "Qualify NEET-PG for MD/DNB (Radiodiagnosis)", description: "Secure a postgraduate seat in Radiology.", type: "certification", timeframe: "1-2 Years prep" },
      { title: "MD/DNB in Radiodiagnosis", description: "Complete 3-year specialization in medical imaging techniques and interpretation.", type: "study", timeframe: "3 Years" },
      { title: "Master Various Imaging Modalities", description: "Gain expertise in X-ray, CT, MRI, Ultrasound, Mammography, and basic interventional procedures.", type: "skill", timeframe: "During PG" },
      { title: "Develop Strong Image Interpretation Skills", description: "Accurately diagnose conditions based on medical images.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Continuous Learning in Imaging Tech & AI", description: "Stay updated with new technologies, AI applications, and diagnostic approaches.", type: "skill", timeframe: "Ongoing" },
      { title: "Consider Fellowships (Optional)", description: "Further specialize in Interventional Radiology, Neuroradiology, etc.", type: "study", timeframe: "1-2 Years" }
    ]
  },
  "surgeon": {
    careerId: "surgeon",
    items: [
      { title: "MBBS Degree & Internship", description: "Complete foundational medical education and compulsory internship.", type: "study", timeframe: "5.5 Years" },
      { title: "Qualify NEET-PG for MS/DNB (General Surgery or Speciality)", description: "Secure a postgraduate seat in a surgical branch.", type: "certification", timeframe: "1-2 Years prep" },
      { title: "MS/DNB in Surgery", description: "Complete 3-year specialization in General Surgery or a direct surgical speciality.", type: "study", timeframe: "3 Years" },
      { title: "Develop Foundational & Advanced Surgical Skills", description: "Gain extensive hands-on experience in performing and assisting various surgical procedures under supervision.", type: "skill", timeframe: "During PG & Senior Residency" },
      { title: "Consider Super-specialization (M.Ch./DrNB)", description: "Further specialize in fields like Cardiothoracic, Neurosurgery, Plastic Surgery, Urology, etc.", type: "study", timeframe: "3 Years" },
      { title: "Attend Surgical Workshops & Conferences", description: "Continuously refine surgical techniques, learn new procedures, and stay updated.", type: "skill", timeframe: "Ongoing" },
      { title: "Develop Decision-Making & Leadership in OR", description: "Crucial for managing surgical teams and patient outcomes.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "medical-transcriptionist": {
    careerId: "medical-transcriptionist",
    items: [
      { title: "Complete 10+2 or Graduation", description: "Good command of English is important.", type: "study", timeframe: "N/A" },
      { title: "Medical Terminology, Anatomy & Physiology Course", description: "Understand medical terms, body systems, and common medical conditions.", type: "study", timeframe: "3-6 Months" },
      { title: "Medical Transcription Training Program", description: "Learn transcription software, formatting, and practice with diverse medical dictations.", type: "study", timeframe: "6-12 Months" },
      { title: "Develop High Typing Speed & Accuracy", description: "Achieve good WPM with minimal errors.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Enhance Listening & Comprehension Skills", description: "Understand various accents and medical specialties.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Familiarity with HIPAA & Data Privacy", description: "Understand regulations regarding patient health information.", type: "study", timeframe: "1 Month (integrated)" },
      { title: "Consider CHDS Certification (Optional)", description: "Certified Healthcare Documentation Specialist can enhance prospects.", type: "certification", timeframe: "2-3 Months prep" }
    ]
  },
  "dentist": {
    careerId: "dentist",
    items: [
      { title: "Complete 10+2 (Science Stream with PCB)", description: "Biology is essential for dental entrance.", type: "study", timeframe: "2 Years" },
      { title: "Qualify NEET-UG (for BDS admission)", description: "Pass the national level entrance examination.", type: "certification", timeframe: "1-2 Years prep" },
      { title: "Bachelor of Dental Surgery (BDS)", description: "Complete the 5-year degree program including a 1-year compulsory rotatory internship.", type: "study", timeframe: "5 Years" },
      { title: "Register with State Dental Council", description: "Obtain a license to practice dentistry in India.", type: "certification", timeframe: "Post BDS" },
      { title: "Gain Clinical Experience", description: "Work in a dental clinic or hospital, assisting or managing cases.", type: "project", timeframe: "During internship & 1-2 Years post BDS" },
      { title: "Master Core Dental Procedures", description: "Proficiency in diagnostics, fillings, extractions, scaling, root canal treatments.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Consider Master of Dental Surgery (MDS)", description: "Specialize in areas like Orthodontics, Endodontics, Prosthodontics, Oral Surgery via NEET-MDS.", type: "study", timeframe: "3 Years" }
    ]
  },
  "veterinarian": {
    careerId: "veterinarian",
    items: [
      { title: "Complete 10+2 (Science Stream with PCB)", description: "Biology is essential for veterinary entrance.", type: "study", timeframe: "2 Years" },
      { title: "Qualify State/National Veterinary Entrance Exam (e.g., NEET for some states, AIPVT previously)", description: "Pass the entrance examination for B.V.Sc & A.H.", type: "certification", timeframe: "1-2 Years prep" },
      { title: "Bachelor of Veterinary Science & Animal Husbandry (B.V.Sc & A.H.)", description: "Complete the 5.5-year degree program including internship.", type: "study", timeframe: "5.5 Years" },
      { title: "Register with Veterinary Council of India (VCI) or State Council", description: "Obtain a license to practice veterinary medicine.", type: "certification", timeframe: "Post Degree" },
      { title: "Gain Clinical Experience (Small/Large Animals)", description: "Work in veterinary clinics, hospitals, government dispensaries, or farms.", type: "project", timeframe: "During internship & 1-2 Years post degree" },
      { title: "Master Diagnostic, Medical & Surgical Skills for Animals", description: "Develop proficiency in treating various species.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Consider Master of Veterinary Science (M.V.Sc)", description: "Specialize in Surgery, Medicine, Pathology, Animal Nutrition, etc.", type: "study", timeframe: "2 Years" }
    ]
  },
  "medical-representative": {
    careerId: "medical-representative",
    items: [
      { title: "Bachelor's Degree (B.Pharm, B.Sc. Life Sciences preferred)", description: "A science background is advantageous for understanding medical products.", type: "study", timeframe: "3-4 Years" },
      { title: "Develop Strong Product Knowledge", description: "Undergo company training to learn about pharmaceuticals/medical devices, indications, and contraindications.", type: "skill", timeframe: "1-2 Months (intensive training)" },
      { title: "Master Sales, Persuasion & Communication Skills", description: "Effectively present product benefits to healthcare professionals (doctors, pharmacists).", type: "skill", timeframe: "Ongoing practice" },
      { title: "Understand Medical Terminology & Healthcare Ecosystem", description: "Familiarize with common medical terms and how the healthcare industry operates.", type: "study", timeframe: "1-2 Months" },
      { title: "Build & Maintain Relationships with Healthcare Professionals", description: "Develop a strong professional network in your assigned territory.", type: "project", timeframe: "Ongoing" },
      { title: "Territory Management & Sales Target Achievement", description: "Plan routes, manage sales data, and strive to meet sales goals.", type: "skill", timeframe: "On-the-job learning" },
      { title: "Interpersonal & Networking Skills Development", description: "Crucial for building rapport and trust.", type: "skill", timeframe: "Ongoing" }
    ]
  },

  // --- Finance ---
  "accountant": {
    careerId: "accountant",
    items: [
      { title: "Bachelor's Degree in Commerce (B.Com) or Accounting", description: "Obtain a foundational degree in accounting principles.", type: "study", timeframe: "3 Years" },
      { title: "Learn Accounting Software (Tally, QuickBooks, Zoho Books)", description: "Master software for bookkeeping, financial statements, and GST compliance.", type: "skill", timeframe: "2-3 Months" },
      { title: "Understand Indian Tax Laws (GST, Income Tax) & Financial Reporting", description: "Study current tax regulations and accounting standards (Ind AS).", type: "study", timeframe: "3-6 Months" },
      { title: "Internship or Entry-Level Accounting Role", description: "Gain practical experience in bookkeeping, reconciliation, GST filing, and finalization of accounts.", type: "project", timeframe: "6-12 Months" },
      { title: "Develop Analytical & Problem-Solving Skills", description: "Analyze financial data and identify discrepancies or areas for improvement.", type: "skill", timeframe: "Ongoing" },
      { title: "Consider Professional Certification (CA Inter, CMA Inter)", description: "Enhance qualifications for career advancement.", type: "certification", timeframe: "Varies" }
    ]
  },
  "financial-analyst": {
    careerId: "financial-analyst",
    items: [
      { title: "Degree in Finance, Economics, Commerce, or Business", description: "Obtain a relevant bachelor's or master's degree.", type: "study", timeframe: "3-5 Years" },
      { title: "Develop Strong Excel & Financial Modeling Skills", description: "Master spreadsheet software for financial analysis, forecasting, and valuation.", type: "skill", timeframe: "3-6 Months" },
      { title: "Learn Valuation Techniques & Financial Statement Analysis", description: "Understand DCF, comparable company analysis, ratio analysis, and interpreting financial reports.", type: "study", timeframe: "3-6 Months" },
      { title: "Understand Capital Markets, Investments & Corporate Finance", description: "Learn about stocks, bonds, derivatives, and financial decision-making.", type: "study", timeframe: "Ongoing" },
      { title: "CFA Program Level I (Chartered Financial Analyst)", description: "Begin the globally recognized CFA designation for advanced financial knowledge.", type: "certification", timeframe: "6-9 Months prep" },
      { title: "Analyze Financial Statements & Market Data Projects", description: "Build projects involving company analysis, investment research, or industry reports.", type: "project", timeframe: "Ongoing" },
      { title: "Develop Presentation & Communication Skills", description: "Effectively communicate complex financial information.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "investment-banker": {
    careerId: "investment-banker",
    items: [
      { title: "Degree from a Top-Tier University (Finance, Economics, Engineering)", description: "Graduate from a prestigious institution. Maintain a high GPA.", type: "study", timeframe: "3-4 Years" },
      { title: "Master Excel & Financial Modeling", description: "Develop exceptional skills in building complex financial models (LBO, M&A, DCF).", type: "skill", timeframe: "6-12 Months (intensive)" },
      { title: "Secure Competitive Internships at Investment Banks or PE Firms", description: "Gain exposure, network, and prove your capabilities during summer breaks.", type: "project", timeframe: "Multiple Summers" },
      { title: "Deep Understanding of M&A, Capital Markets, Valuation", description: "Gain knowledge of corporate finance, IPOs, bond issuance, deal structuring.", type: "study", timeframe: "1-2 Years (often during MBA)" },
      { title: "MBA from a Premier B-School (IIMs, ISB) - Highly Recommended", description: "Often a prerequisite for front-end roles in major IBs.", type: "study", timeframe: "2 Years" },
      { title: "Develop Strong Analytical, Communication & Negotiation Skills", description: "Essential for deal-making and client interaction.", type: "skill", timeframe: "Ongoing" },
      { title: "Networking & Industry Knowledge", description: "Build a strong professional network and stay updated on market trends.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "tax-consultant": {
    careerId: "tax-consultant",
    items: [
      { title: "Degree in Commerce (B.Com), Law (LLB), or CA/CS/CMA", description: "Obtain a relevant educational background focusing on accounting and law.", type: "study", timeframe: "3-5 Years" },
      { title: "In-depth Knowledge of Indian Tax Laws", description: "Master Direct Taxes (Income Tax Act) and Indirect Taxes (GST, Customs).", type: "study", timeframe: "1-2 Years (intensive)" },
      { title: "Tax Software Proficiency", description: "Learn to use tax preparation, filing, and research software (e.g., ClearTax, Taxmann).", type: "skill", timeframe: "2-3 Months" },
      { title: "Practical Experience in Tax Filing & Advisory", description: "Work with a CA firm, tax consultancy, or in-house tax department. Articleship for CA provides this.", type: "project", timeframe: "1-3 Years" },
      { title: "Stay Updated with Tax Amendments, Circulars & Case Laws", description: "Continuously track changes in tax regulations and judicial precedents.", type: "skill", timeframe: "Ongoing" },
      { title: "Develop Analytical & Client Communication Skills", description: "Effectively advise clients on tax planning and compliance.", type: "skill", timeframe: "Ongoing" },
      { title: "Consider Diploma in Taxation Law (DTL) (Optional)", description: "For specialized knowledge.", type: "certification", timeframe: "1 Year" }
    ]
  },
  "auditor": {
    careerId: "auditor",
    items: [
      { title: "Degree in Accounting or Finance (CA highly preferred for statutory audit)", description: "Obtain strong academic grounding in accounting and auditing principles.", type: "study", timeframe: "3-5 Years" },
      { title: "Understand Auditing Standards (SAs in India) & Procedures", description: "Learn Standards on Auditing, ethical guidelines, and audit methodologies.", type: "study", timeframe: "6-12 Months (during CA or specific courses)" },
      { title: "Develop Analytical, Investigative & Skepticism Skills", description: "Learn to examine financial records critically for accuracy, completeness, and compliance.", type: "skill", timeframe: "Ongoing" },
      { title: "Gain Experience in an Audit Firm (Articleship for CA)", description: "Participate in statutory, internal, tax, or systems audits.", type: "project", timeframe: "2-3 Years (articleship)" },
      { title: "Knowledge of Internal Controls & Risk Assessment", description: "Understand how to evaluate and test internal control systems.", type: "study", timeframe: "During training" },
      { title: "Consider Certifications like CISA or CIA (Optional)", description: "Specialize in IT audits (CISA) or internal audits (CIA) if interested.", type: "certification", timeframe: "3-6 Months prep" },
      { title: "Communication & Reporting Skills", description: "Clearly document audit findings and communicate with management/clients.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "chartered-accountant": {
    careerId: "chartered-accountant",
    items: [
      { title: "Register for CA Foundation / Direct Entry", description: "Start the CA journey with ICAI after 12th or Graduation.", type: "study", timeframe: "N/A" },
      { title: "Pass CA Foundation Exam (if applicable)", description: "Clear the first level of the CA course.", type: "certification", timeframe: "4-6 Months prep" },
      { title: "Pass CA Intermediate Exam (Both Groups)", description: "Clear the second level covering core accounting, tax, law, audit.", type: "certification", timeframe: "9-18 Months prep" },
      { title: "Complete Articleship Training (3 Years)", description: "Undergo practical training under a practicing CA, covering audit, tax, accounts.", type: "project", timeframe: "3 Years" },
      { title: "Complete AICITSS (Advanced IT and Soft Skills Training)", description: "Attend mandatory training programs by ICAI.", type: "study", timeframe: "Varies" },
      { title: "Pass CA Final Exam (Both Groups)", description: "Clear the final level covering advanced topics to qualify as a CA.", type: "certification", timeframe: "6-12 Months prep post articleship" },
      { title: "Become a Member of ICAI", description: "Formalize your membership with the Institute of Chartered Accountants of India.", type: "certification", timeframe: "Post CA Final" }
    ]
  },
  "insurance-agent": {
    careerId: "insurance-agent",
    items: [
      { title: "Complete 10+2 or Graduation", description: "Meet the minimum educational qualification. Graduation is often preferred.", type: "study", timeframe: "Varies" },
      { title: "Pass IRDAI Agent Pre-Recruitment Exam (IC38)", description: "Obtain certification from the Insurance Regulatory and Development Authority of India.", type: "certification", timeframe: "1-2 Months prep" },
      { title: "Understand Various Insurance Products", description: "Learn about Life Insurance (Term, Endowment, ULIPs) and General Insurance (Health, Motor, Home).", type: "study", timeframe: "1 Month (during training)" },
      { title: "Develop Strong Sales, Persuasion & Networking Skills", description: "Effectively communicate benefits and build a client base.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Master Client Relationship Management & After-Sales Service", description: "Provide ongoing support and maintain long-term client relationships.", type: "skill", timeframe: "Ongoing" },
      { title: "Achieve Sales Targets & Build a Client Portfolio", description: "Focus on consistent performance and ethical practices.", type: "project", timeframe: "Ongoing" },
      { title: "Continuous Product & Regulation Training", description: "Stay updated with new insurance products and IRDAI guidelines.", type: "study", timeframe: "Ongoing" }
    ]
  },

  // --- Sales and Marketing ---
  "marketing-manager": {
    careerId: "marketing-manager",
    items: [
      { title: "Bachelor's or Master's in Marketing/Business (MBA preferred)", description: "Obtain a relevant degree. MBA with Marketing specialization is common.", type: "study", timeframe: "3-5 Years" },
      { title: "Gain Experience in Marketing Roles", description: "Start as Marketing Executive, Digital Marketer, Brand Executive. Build a foundation in various marketing functions.", type: "project", timeframe: "3-5 Years" },
      { title: "Develop Strategic Thinking & Campaign Management", description: "Learn to plan, execute, analyze, and optimize marketing campaigns across channels.", type: "skill", timeframe: "Ongoing" },
      { title: "Master Marketing Analytics & Reporting Tools", description: "Use data (Google Analytics, CRM data, social media analytics) to inform decisions and demonstrate ROI.", type: "skill", timeframe: "Ongoing" },
      { title: "Understand Digital Marketing Channels", description: "Proficiency in SEO, SEM, SMM, Email Marketing, Content Marketing. Stay updated with trends.", type: "study", timeframe: "Ongoing" },
      { title: "Leadership & Team Management Skills", description: "Effectively lead and motivate marketing teams as you progress.", type: "skill", timeframe: "Develop with experience" },
      { title: "Budget Management & Vendor Negotiation", description: "Learn to manage marketing budgets and negotiate with agencies/vendors.", type: "skill", timeframe: "On-the-job" }
    ]
  },
  "sales-executive": {
    careerId: "sales-executive",
    items: [
      { title: "Bachelor's Degree (Any Stream, Business/Marketing preferred)", description: "A degree can be helpful, but strong skills are key.", type: "study", timeframe: "3 Years (optional)" },
      { title: "Develop Excellent Communication & Interpersonal Skills", description: "Master persuasion, negotiation, active listening, and relationship building.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Understand Sales Techniques, Funnels & Closing Strategies", description: "Learn about different sales methodologies (e.g., SPIN, Challenger) and the sales process.", type: "study", timeframe: "1-3 Months" },
      { title: "Gain Thorough Product/Service Knowledge", description: "Deeply learn what you are selling and its value proposition.", type: "skill", timeframe: "Ongoing" },
      { title: "Practice Lead Generation, Prospecting & Presentation Skills", description: "Actively work on core sales activities to build a pipeline and present effectively.", type: "project", timeframe: "Ongoing" },
      { title: "Familiarity with CRM Software (Salesforce, Zoho CRM)", description: "Learn to manage leads, track interactions, and analyze sales data.", type: "skill", timeframe: "1 Month" },
      { title: "Resilience & Target Orientation", description: "Develop the ability to handle rejection and stay motivated to achieve sales goals.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "digital-marketing-specialist": {
    careerId: "digital-marketing-specialist",
    items: [
      { title: "Fundamentals of Digital Marketing", description: "Understand SEO, SEM (PPC), Social Media Marketing (SMM), Content Marketing, Email Marketing.", type: "study", timeframe: "2-3 Months" },
      { title: "Master Digital Marketing Tools", description: "Gain proficiency in Google Analytics, Google Ads, Facebook Ads Manager, SEO tools (SEMrush/Ahrefs), Email Platforms (Mailchimp).", type: "skill", timeframe: "3-6 Months" },
      { title: "Google Digital Marketing & E-commerce Certificate / HubSpot Certifications", description: "Get certified in digital marketing fundamentals and specific channels.", type: "certification", timeframe: "2-4 Months" },
      { title: "Build a Portfolio of Digital Marketing Projects", description: "Run sample campaigns, optimize a website for SEO, manage social media accounts, create content.", type: "project", timeframe: "2-3 Months" },
      { title: "Develop Analytical Skills for Campaign Data", description: "Learn to track KPIs, analyze results (A/B testing), and optimize campaigns for better performance.", type: "skill", timeframe: "Ongoing" },
      { title: "Content Creation & Curation Skills", description: "Learn to create engaging text, image, and basic video content for different platforms.", type: "skill", timeframe: "2-3 Months" },
      { title: "Stay Updated with Digital Trends & Algorithms", description: "Digital marketing is ever-evolving; continuous learning is key.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "customer-service-representative": {
    careerId: "customer-service-representative",
    items: [
      { title: "Develop Excellent Communication Skills", description: "Master verbal (clarity, tone) and written (grammar, conciseness) communication, and active listening.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Product/Service Knowledge Training", description: "Thoroughly understand the company's offerings to provide accurate assistance.", type: "study", timeframe: "1-2 Weeks (initial)" },
      { title: "Learn CRM Software & Ticketing Systems", description: "Become proficient in tools like Zendesk, Salesforce Service Cloud, or company-specific systems.", type: "skill", timeframe: "1 Month" },
      { title: "Problem-Solving & Empathy Training", description: "Learn to resolve customer issues effectively and handle inquiries with patience and understanding.", type: "skill", timeframe: "Ongoing training" },
      { title: "Practice Handling Difficult Customers & De-escalation", description: "Learn techniques to manage challenging situations professionally.", type: "skill", timeframe: "On-the-job & workshops" },
      { title: "Time Management & Multitasking", description: "Efficiently handle multiple customer interactions across different channels if required.", type: "skill", timeframe: "Ongoing" },
      { title: "Understand Company Policies & Procedures", description: "Adhere to guidelines for refunds, exchanges, complaints, etc.", type: "study", timeframe: "Initial training" }
    ]
  },
  "retail-store-manager": {
    careerId: "retail-store-manager",
    items: [
      { title: "Gain Retail Sales Experience", description: "Start as a Sales Associate to understand customer interaction and store basics.", type: "project", timeframe: "1-2 Years" },
      { title: "Develop Leadership & Team Management Skills", description: "Progress to roles like Team Lead or Assistant Manager. Learn to train, motivate, and manage staff.", type: "skill", timeframe: "2-3 Years" },
      { title: "Inventory Management & Merchandising", description: "Learn stock control, ordering, visual merchandising, and loss prevention techniques.", type: "study", timeframe: "Ongoing, on-the-job" },
      { title: "Customer Service Excellence & Complaint Resolution", description: "Master skills to ensure high levels of customer satisfaction and handle issues effectively.", type: "skill", timeframe: "Ongoing" },
      { title: "Understand Retail Operations & Financials", description: "Learn about P&L statements, sales targets, budgeting, and store KPIs.", type: "study", timeframe: "1-2 Years (experience based)" },
      { title: "Bachelor's Degree in Business/Retail (Optional but helpful)", description: "Formal education can provide a theoretical foundation.", type: "study", timeframe: "3 Years" },
      { title: "Health, Safety & Compliance Training", description: "Understand and implement store safety protocols and legal compliance.", type: "study", timeframe: "Integrated" }
    ]
  },

  // --- Hospitality and Tourism ---
  "hotel-manager": {
    careerId: "hotel-manager",
    items: [
      { title: "Degree/Diploma in Hotel Management (IHM or similar)", description: "Obtain formal education in hospitality operations, F&B, front office, and housekeeping.", type: "study", timeframe: "3-4 Years" },
      { title: "Gain Experience in Various Hotel Departments", description: "Work in Front Office, F&B Service, Housekeeping, and potentially Sales/Marketing to understand all aspects.", type: "project", timeframe: "3-5 Years (rotational training/entry roles)" },
      { title: "Develop Leadership & Staff Management Skills", description: "Learn to recruit, train, schedule, motivate, and manage a diverse hotel team.", type: "skill", timeframe: "Ongoing, through supervisory roles" },
      { title: "Customer Service & Guest Relations Mastery", description: "Focus on ensuring exceptional guest experiences and handling complaints professionally.", type: "skill", timeframe: "Ongoing" },
      { title: "Financial Management & Revenue Optimization", description: "Understand budgeting, P&L statements, cost control, and revenue management strategies for hotels.", type: "study", timeframe: "1-2 Years (on-the-job or courses)" },
      { title: "Proficiency in Hotel Management Software (PMS, POS)", description: "Learn Property Management Systems, Point of Sale systems, and reservation systems.", type: "skill", timeframe: "On-the-job" },
      { title: "Problem-Solving & Crisis Management", description: "Develop skills to handle operational challenges and unexpected guest issues.", type: "skill", timeframe: "Experience-based" }
    ]
  },
  "travel-agent": {
    careerId: "travel-agent",
    items: [
      { title: "Diploma/Degree in Travel & Tourism Management", description: "Formal training provides industry knowledge, GDS basics, and destination information.", type: "study", timeframe: "1-3 Years" },
      { title: "Master GDS (Amadeus, Sabre, Galileo)", description: "Become proficient in Global Distribution Systems for flight, hotel, and car rental bookings.", type: "skill", timeframe: "3-6 Months (intensive training)" },
      { title: "Develop Strong Geographical & Destination Knowledge", description: "Learn about popular and niche travel destinations, visa requirements, and local customs.", type: "skill", timeframe: "Ongoing research" },
      { title: "Excellent Communication, Sales & Customer Service Skills", description: "Understand client needs, provide tailored travel solutions, and handle queries effectively.", type: "skill", timeframe: "Ongoing" },
      { title: "Itinerary Planning & Package Creation", description: "Learn to design and customize travel packages for different client types.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Supplier Relationship Management", description: "Build relationships with airlines, hotels, tour operators to get good deals.", type: "skill", timeframe: "On-the-job" },
      { title: "IATA Certification (Optional)", description: "Internationally recognized certification for travel professionals.", type: "certification", timeframe: "Varies" }
    ]
  },
  "chef": {
    careerId: "chef",
    items: [
      { title: "Culinary Degree/Diploma (IHM or reputed culinary school)", description: "Formal training in cooking techniques, food safety, and kitchen management.", type: "study", timeframe: "1-3 Years" },
      { title: "Master Fundamental Cooking Techniques & Cuisines", description: "Develop strong skills in various cooking methods (sautéing, braising, grilling) and diverse cuisines.", type: "skill", timeframe: "During training & early career" },
      { title: "Gain Experience in Professional Kitchens (Commis, DCDP, CDP)", description: "Work your way up the kitchen hierarchy, learning from experienced chefs in different sections.", type: "project", timeframe: "3-5 Years" },
      { title: "Develop Knife Skills & Precision", description: "Essential for efficient and high-quality food preparation.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Understand Menu Planning, Food Costing & Inventory Management", description: "Learn to design menus, control costs, and manage kitchen supplies.", type: "study", timeframe: "On-the-job or specialized courses" },
      { title: "Hygiene, Sanitation & Food Safety (HACCP)", description: "Master standards for a safe and clean kitchen operation.", type: "certification", timeframe: "Integrated/Short course" },
      { title: "Leadership & Kitchen Team Management (for Sous Chef/Head Chef)", description: "Develop skills to lead, train, and motivate kitchen staff.", type: "skill", timeframe: "Develop with experience" }
    ]
  },
  "event-manager": {
    careerId: "event-manager",
    items: [
      { title: "Degree/Diploma in Event Management, Hospitality, PR, or Marketing", description: "Formal education provides structured knowledge of event planning and execution.", type: "study", timeframe: "1-3 Years" },
      { title: "Gain Practical Experience (Volunteering, Internships, Assisting)", description: "Start with smaller events (college fests, local gatherings) to build portfolio and skills.", type: "project", timeframe: "1-2 Years" },
      { title: "Develop Strong Organizational & Project Management Skills", description: "Master timelines, budgets, vendor coordination, logistics, and risk assessment.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Vendor Management & Negotiation Skills", description: "Learn to source, select, and negotiate with venues, caterers, decorators, A/V suppliers, etc.", type: "skill", timeframe: "On-the-job" },
      { title: "Excellent Communication, Interpersonal & Problem-Solving Abilities", description: "Effectively manage clients, teams, vendors, and handle unexpected challenges.", type: "skill", timeframe: "Ongoing" },
      { title: "Budgeting & Financial Management for Events", description: "Learn to create and manage event budgets, track expenses, and ensure profitability.", type: "study", timeframe: "On-the-job or short courses" },
      { title: "Consider CMP (Certified Meeting Professional) (Optional)", description: "Globally recognized certification for event professionals.", type: "certification", timeframe: "Varies" }
    ]
  },

  // --- Arts and Media ---
  "graphic-designer": {
    careerId: "graphic-designer",
    items: [
      { title: "Learn Design Principles (Color Theory, Typography, Layout, Composition)", description: "Understand the fundamentals of visual communication and aesthetics.", type: "study", timeframe: "3-6 Months" },
      { title: "Master Design Software (Adobe Creative Suite: Photoshop, Illustrator, InDesign; Figma/Sketch for UI)", description: "Develop proficiency in industry-standard tools.", type: "skill", timeframe: "6-12 Months (intensive practice)" },
      { title: "Build a Strong & Diverse Design Portfolio", description: "Showcase creativity and skills through various projects (logos, branding, web graphics, print, UI mockups).", type: "project", timeframe: "Ongoing" },
      { title: "Understand Branding & Marketing Concepts", description: "Learn how design supports brand identity, marketing goals, and target audiences.", type: "study", timeframe: "2-3 Months" },
      { title: "Develop Drawing & Illustration Skills (Optional but beneficial)", description: "Enhances creative capabilities.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Seek Internships, Freelance Projects, or Design Challenges", description: "Gain real-world experience, client feedback, and exposure.", type: "project", timeframe: "Multiple opportunities" },
      { title: "Stay Updated with Design Trends & New Software", description: "The design field is dynamic; continuous learning is vital.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "content-writer": {
    careerId: "content-writer",
    items: [
      { title: "Develop Excellent Writing, Grammar & Editing Skills", description: "Master clear, concise, engaging, and error-free writing.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Learn Different Writing Styles & Formats", description: "Blogs, articles, web copy, SEO writing, social media content, scripts, ad copy, technical writing.", type: "skill", timeframe: "3-6 Months" },
      { title: "Understand SEO Principles for Content", description: "Learn keyword research, on-page optimization, and writing content that ranks.", type: "study", timeframe: "1-2 Months" },
      { title: "Build a Portfolio of Diverse Writing Samples", description: "Showcase versatility, quality of work, and niche expertise if any (e.g., tech, finance, travel).", type: "project", timeframe: "Ongoing" },
      { title: "Master Research, Fact-Checking & Citing Sources", description: "Ensure accuracy, credibility, and originality in your content.", type: "skill", timeframe: "Ongoing" },
      { title: "Familiarity with CMS (WordPress) & Basic HTML (Optional)", description: "Understand how to publish and manage content online.", type: "skill", timeframe: "1 Month" },
      { title: "Develop Storytelling & Audience Engagement Techniques", description: "Learn to create content that resonates with the target audience.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "journalist": {
    careerId: "journalist",
    items: [
      { title: "Bachelor's/Master's in Journalism/Mass Communication", description: "Formal education in reporting, media ethics, law, and writing.", type: "study", timeframe: "3-5 Years" },
      { title: "Develop Strong Writing, Interviewing & Reporting Skills", description: "Master core competencies for print, broadcast, or digital media.", type: "skill", timeframe: "During study & internships" },
      { title: "Understand Media Ethics, Law & Fact-Checking", description: "Learn principles of responsible journalism and information verification.", type: "study", timeframe: "During degree" },
      { title: "Gain Experience through Internships (Newspapers, TV, Digital Media)", description: "Build practical skills, a portfolio of published work, and industry contacts.", type: "project", timeframe: "Multiple opportunities" },
      { title: "Stay Updated with Current Affairs & Develop a Niche (Beat)", description: "Cultivate expertise in areas like politics, sports, business, investigative, or specific social issues.", type: "skill", timeframe: "Ongoing" },
      { title: "Learn Multimedia Skills (Basic Photo/Video, Audio Editing, Social Media Reporting)", description: "Adapt to the evolving digital media landscape.", type: "skill", timeframe: "2-3 Months" },
      { title: "Build a Professional Network", description: "Connect with sources, editors, and other journalists.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "video-editor": {
    careerId: "video-editor",
    items: [
      { title: "Learn Video Editing Principles (Storytelling, Pacing, Continuity, Composition, Sound Design)", description: "Understand the art and craft of assembling footage into a coherent narrative.", type: "study", timeframe: "3-4 Months" },
      { title: "Master Video Editing Software (Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve)", description: "Develop proficiency in industry-standard non-linear editing (NLE) tools.", type: "skill", timeframe: "4-6 Months (intensive practice)" },
      { title: "Understand Video Formats, Codecs, Resolution, Frame Rates & Color Correction/Grading", description: "Learn technical aspects of video post-production for various platforms.", type: "study", timeframe: "1-2 Months" },
      { title: "Build a Strong Demo Reel/Portfolio", description: "Showcase skills with diverse video content (short films, docs, vlogs, ads, music videos).", type: "project", timeframe: "Ongoing" },
      { title: "Practice Editing Different Video Types & Develop Rhythm/Timing", description: "Gain versatility and meet deadlines.", type: "project", timeframe: "Ongoing" },
      { title: "Learn Basic Motion Graphics & VFX (Adobe After Effects)", description: "Add polish and creativity to edits.", type: "skill", timeframe: "2-3 Months" },
      { title: "Understand Audio Editing & Mixing Basics", description: "Crucial for professional video output.", type: "skill", timeframe: "1-2 Months" }
    ]
  },
  "photographer": {
    careerId: "photographer",
    items: [
      { title: "Understand Photography Fundamentals (Exposure Triangle, Composition, Lighting, Focus)", description: "Master basics of capturing technically sound and aesthetically pleasing images.", type: "study", timeframe: "2-3 Months" },
      { title: "Learn DSLR/Mirrorless Cameras, Lenses & Equipment", description: "Become proficient with professional photography gear and settings.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Master Photo Editing Software (Adobe Lightroom, Photoshop)", description: "Learn post-processing techniques for enhancing, retouching, and organizing images.", type: "skill", timeframe: "3-6 Months" },
      { title: "Develop a Specialization (Portrait, Wedding, Wildlife, Product, Fashion, Event)", description: "Find your niche and hone skills and style.", type: "skill", timeframe: "Ongoing exploration" },
      { title: "Build a Strong Portfolio Showcasing Your Best Work", description: "Create a compelling collection of high-quality images in your chosen specialty.", type: "project", timeframe: "Ongoing" },
      { title: "Practice Different Lighting Techniques (Natural, Studio)", description: "Understand how light shapes an image.", type: "skill", timeframe: "Ongoing" },
      { title: "Understand Business Aspects (Pricing, Marketing, Client Communication) if Freelancing", description: "Learn to manage your photography business effectively.", type: "study", timeframe: "2-3 Months" }
    ]
  },
  "animator": {
    careerId: "animator",
    items: [
      { title: "Learn Principles of Animation (Timing, Spacing, Weight, Squash & Stretch, etc.)", description: "Understand the 12 core concepts that bring characters and objects to life.", type: "study", timeframe: "3-6 Months" },
      { title: "Develop Strong Drawing, Sketching & Storyboarding Skills", description: "Visualize scenes, plan animation sequences, and create appealing character designs.", type: "skill", timeframe: "Ongoing practice (crucial)" },
      { title: "Master Animation Software (Maya/Blender for 3D; Toon Boom Harmony/Adobe Animate for 2D; After Effects for Motion Graphics)", description: "Develop proficiency in tools based on your chosen path.", type: "skill", timeframe: "6-18 Months (intensive)" },
      { title: "Create a Compelling Demo Reel", description: "Showcase your best animation pieces (character animation, walk cycles, lip-sync, motion graphics). Tailor to desired roles.", type: "project", timeframe: "Ongoing" },
      { title: "Consider a Degree/Diploma in Animation", description: "Formal education provides structured learning, mentorship, and industry connections.", type: "study", timeframe: "2-4 Years" },
      { title: "Understand Rigging & Character Setup (for 3D)", description: "Learn how to prepare 3D models for animation.", type: "study", timeframe: "2-3 Months" },
      { title: "Practice Different Animation Styles & Techniques", description: "Gain versatility and continuously refine your skills.", type: "project", timeframe: "Ongoing" }
    ]
  },
  "film-director": {
    careerId: "film-director",
    items: [
      { title: "Study Film History, Theory, Cinematography & Major Directors", description: "Understand the art, craft, and language of filmmaking.", type: "study", timeframe: "1-2 Years (self-study/film school)" },
      { title: "Learn Screenwriting, Storytelling Structure & Script Analysis", description: "Develop ability to create compelling narratives and interpret scripts.", type: "skill", timeframe: "Ongoing practice & study" },
      { title: "Gain Hands-On Experience in Various Crew Roles (AD, Editor, Cinematographer's Assistant, Production Assistant)", description: "Understand all aspects of film production from different perspectives.", type: "project", timeframe: "Several years" },
      { title: "Direct Short Films, Music Videos, or Independent Projects", description: "Build a portfolio, develop your directorial voice, and learn to work with actors and crew.", type: "project", timeframe: "Ongoing, start small" },
      { title: "Develop Leadership, Communication, Visionary & Problem-Solving Skills", description: "Effectively lead a film crew, articulate your vision, and navigate production challenges.", type: "skill", timeframe: "Ongoing" },
      { title: "Understand Acting Techniques & Working with Actors", description: "Learn how to elicit strong performances.", type: "study", timeframe: "Workshops/Experience" },
      { title: "Network with Writers, Producers, Actors & Film Professionals", description: "Build relationships crucial for getting projects made.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "fashion-designer": {
    careerId: "fashion-designer",
    items: [
      { title: "Degree/Diploma in Fashion Design (NIFT, Pearl Academy, etc.)", description: "Formal training in design principles, garment construction, pattern making, and industry practices.", type: "study", timeframe: "3-4 Years" },
      { title: "Master Sketching, Illustration, Pattern Making, Draping & Garment Construction", description: "Develop strong technical skills to bring designs to life.", type: "skill", timeframe: "During study & continuous practice" },
      { title: "Learn Fashion CAD Software (Adobe Illustrator, CorelDRAW, CLO 3D, Tukatech)", description: "Use digital tools for design, pattern making, and virtual prototyping.", type: "skill", timeframe: "3-6 Months" },
      { title: "Develop a Strong & Unique Design Aesthetic & Portfolio", description: "Showcase creativity, vision, and collections through a well-curated portfolio (sketches, finished garments).", type: "project", timeframe: "Ongoing" },
      { title: "Understand Textiles, Fabrics, Embellishments, Trends & Market Demands", description: "Stay updated with industry innovations, sustainability, and consumer preferences.", type: "study", timeframe: "Ongoing research" },
      { title: "Gain Industry Experience through Internships (Designers, Fashion Houses, Export Units)", description: "Learn practical aspects of the fashion business, production, and merchandising.", type: "project", timeframe: "6-12 Months+" },
      { title: "Business & Marketing Basics for Fashion (Optional, for own label)", description: "Understand branding, pricing, and marketing if planning to launch a brand.", type: "study", timeframe: "2-3 Months" }
    ]
  },

  // --- Government Services ---
  "ias-officer": {
    careerId: "ias-officer",
    items: [
      { title: "Bachelor's Degree (Any Stream)", description: "Complete a graduation degree from a recognized university.", type: "study", timeframe: "3-4 Years" },
      { title: "In-depth Preparation for UPSC Civil Services Exam (CSE)", description: "Comprehensive study of General Studies (History, Geography, Polity, Economy, Sci&Tech, Environment, Current Affairs) and chosen Optional Subject.", type: "study", timeframe: "1-3 Years (intensive)" },
      { title: "Clear UPSC CSE - Preliminary Exam", description: "Qualify the objective-type GS Paper I and CSAT (Paper II - qualifying).", type: "certification", timeframe: "Part of exam cycle" },
      { title: "Clear UPSC CSE - Main Exam", description: "Qualify written exams including Essay, GS I-IV, Optional Subject Papers I & II, and qualifying language papers.", type: "certification", timeframe: "Part of exam cycle" },
      { title: "Clear UPSC CSE - Personality Test (Interview)", description: "Successfully complete the final stage assessing suitability for civil services.", type: "certification", timeframe: "Part of exam cycle" },
      { title: "Develop Strong General Awareness & Analytical Skills", description: "Continuous study of current affairs, history, polity, economy.", type: "skill", timeframe: "Ongoing" },
      { title: "Writing Practice (Essays, Answers)", description: "Crucial for mains examination.", type: "skill", timeframe: "Ongoing during prep" }
    ]
  },
  "bank-po": {
    careerId: "bank-po",
    items: [
      { title: "Bachelor's Degree (Any Stream)", description: "Complete graduation from a recognized university. Specific percentage may be required.", type: "study", timeframe: "3-4 Years" },
      { title: "Prepare for Bank PO Exams (IBPS PO, SBI PO, RRB PO)", description: "Focus on Quantitative Aptitude, Reasoning Ability, English Language, General/Banking/Financial Awareness, Computer Knowledge.", type: "study", timeframe: "6-12 Months" },
      { title: "Clear Preliminary & Main Examinations", description: "Successfully pass the multiple stages of the online selection process.", type: "certification", timeframe: "During exam cycle" },
      { title: "Prepare for Group Discussion (GD) & Personal Interview (PI)", description: "Develop communication skills, current affairs knowledge, and understanding of the banking sector.", type: "skill", timeframe: "1-2 Months" },
      { title: "Understand Banking Products & Financial Services", description: "Gain knowledge about loans, deposits, digital banking, RBI guidelines, etc.", type: "study", timeframe: "Ongoing during prep" },
      { title: "Improve Current Affairs & Banking Awareness", description: "Read newspapers, financial magazines, and RBI publications.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "police-officer": { // e.g., Sub-Inspector
    careerId: "police-officer",
    items: [
      { title: "Bachelor's Degree (Any Stream)", description: "Complete graduation from a recognized university.", type: "study", timeframe: "3-4 Years" },
      { title: "Physical Fitness Training", description: "Prepare for Physical Efficiency Test (PET) and Physical Standard Test (PST) - running, jumps, height, chest.", type: "skill", timeframe: "3-6 Months (consistent training)" },
      { title: "Prepare for State PSC/SSC CPO/UPSC CAPF (AC) Written Exams", description: "Study General Knowledge, Current Affairs, Reasoning, Maths, relevant laws (IPC, CrPC, Evidence Act), and specific exam syllabus.", type: "study", timeframe: "6-18 Months" },
      { title: "Clear Written Examination", description: "Pass the objective/descriptive tests.", type: "certification", timeframe: "During exam cycle" },
      { title: "Pass PET & PST", description: "Meet the required physical fitness criteria.", type: "certification", timeframe: "During selection process" },
      { title: "Prepare for Interview/Personality Test (if applicable)", description: "Focus on communication, situational judgment, and general awareness.", type: "skill", timeframe: "1-2 Months" },
      { title: "Understand Basic Laws & Police Procedures", description: "Familiarize with IPC, CrPC, and basic police working.", type: "study", timeframe: "During prep" }
    ]
  },
  "government-scientist": {
    careerId: "government-scientist",
    items: [
      { title: "Bachelor's/Master's in Science/Engineering (Relevant to specific agency like ISRO, DRDO, CSIR, ICAR)", description: "Degree in Physics, Chemistry, Maths, CS, Mechanical, ECE, Aerospace, Agriculture, etc.", type: "study", timeframe: "4-6 Years" },
      { title: "Qualify Competitive Exams (e.g., ISRO ICRB, DRDO SET, CSIR-NET, ICAR-NET, GATE)", description: "Pass national-level exams for entry into scientific/technical positions.", type: "certification", timeframe: "6-12 Months prep" },
      { title: "Develop Strong Fundamentals in Specialized Domain", description: "Deep understanding of core subjects relevant to the specific role.", type: "skill", timeframe: "Ongoing" },
      { title: "Research Experience (Projects, Internships, Thesis)", description: "Gain practical experience in a research lab or relevant industry, especially for M.Tech/Ph.D. level entries.", type: "project", timeframe: "During M.Tech/Ph.D." },
      { title: "Prepare for Technical Interviews &/or Skill Tests", description: "Demonstrate in-depth subject knowledge and problem-solving abilities.", type: "skill", timeframe: "2-3 Months prep" },
      { title: "Stay Updated with Scientific Advancements & National Missions", description: "Continuous learning relevant to the organization's focus.", type: "skill", timeframe: "Ongoing" },
      { title: "Consider Ph.D. for Advanced Research Roles", description: "Often required for higher scientific positions.", type: "study", timeframe: "3-5 Years" }
    ]
  },
  "teacher-government-school": {
    careerId: "teacher-government-school",
    items: [
      { title: "Bachelor's Degree (B.A./B.Sc./B.Com in relevant teaching subject)", description: "Obtain a graduation degree in the subject you intend to teach.", type: "study", timeframe: "3 Years" },
      { title: "Bachelor of Education (B.Ed.)", description: "Complete a professional teaching qualification program.", type: "study", timeframe: "2 Years" },
      { title: "Qualify Teacher Eligibility Test (TET - State level or CTET - Central level)", description: "Pass the mandatory eligibility test for teaching in government schools.", type: "certification", timeframe: "3-6 Months prep" },
      { title: "Prepare for State PSC/District Selection Committee (DSC) Teacher Recruitment Exams", description: "Study subject-specific content, teaching methodology, child psychology, general knowledge, and current affairs.", type: "study", timeframe: "6-12 Months" },
      { title: "Develop Strong Classroom Management & Pedagogical Skills", description: "Learn effective teaching techniques and manage diverse learners.", type: "skill", timeframe: "During B.Ed. & practice" },
      { title: "Understand Government School Curriculum & Policies", description: "Familiarize with the educational framework, RTE Act, and specific board requirements.", type: "study", timeframe: "Ongoing" }
    ]
  },
  "defense-officer": {
    careerId: "defense-officer",
    items: [
      { title: "Meet Eligibility Criteria (Education: 10+2 for NDA, Graduation for CDS/AFCAT; Age; Physical Standards)", description: "Varies by entry scheme (NDA, CDS, AFCAT, Technical Entry).", type: "study", timeframe: "Varies" },
      { title: "Rigorous Physical Fitness Training", description: "Prepare for demanding physical tests (running, obstacles, endurance).", type: "skill", timeframe: "6-12 Months (consistent)" },
      { title: "Prepare for Written Examination (NDA, CDS, AFCAT)", description: "Study subjects like Maths, English, General Knowledge, Reasoning, Military Aptitude.", type: "study", timeframe: "6-12 Months" },
      { title: "SSB Interview Preparation", description: "Focus on Officer Like Qualities (OLQs), psychological tests, group tasks, interview, and current affairs.", type: "skill", timeframe: "3-6 Months (intensive prep)" },
      { title: "Clear SSB Interview (5-day process) & Medical Examination", description: "Successfully pass the Services Selection Board tests and meet medical standards.", type: "certification", timeframe: "During selection" },
      { title: "Develop General Awareness & Leadership Qualities", description: "Read widely, stay informed, and cultivate leadership traits.", type: "skill", timeframe: "Ongoing" }
    ]
  },

  // --- Psychology and Counselling ---
  "clinical-psychologist": {
    careerId: "clinical-psychologist",
    items: [
      { title: "Bachelor's Degree in Psychology (B.A./B.Sc.)", description: "Obtain a foundational degree with a strong focus on psychology subjects.", type: "study", timeframe: "3 Years" },
      { title: "Master's Degree in Clinical Psychology (M.A./M.Sc.)", description: "Gain advanced knowledge in psychopathology, assessment, and therapeutic interventions.", type: "study", timeframe: "2 Years" },
      { title: "M.Phil in Clinical Psychology (RCI Recognized)", description: "Complete a 2-year intensive program with supervised clinical training, essential for RCI license.", type: "study", timeframe: "2 Years" },
      { title: "Obtain Rehabilitation Council of India (RCI) License", description: "Register with RCI to legally practice as a Clinical Psychologist in India.", type: "certification", timeframe: "Post M.Phil" },
      { title: "Gain Supervised Clinical Experience & Internships", description: "Accumulate practical experience in assessment, diagnosis, and psychotherapy under supervision.", type: "project", timeframe: "During Masters & M.Phil" },
      { title: "Develop Therapeutic Skills (CBT, DBT, Psychodynamic) & Diagnostic Acumen (DSM, ICD)", description: "Master various therapeutic modalities and diagnostic systems.", type: "skill", timeframe: "Ongoing learning & practice" },
      { title: "Ethical Practice & Continuous Learning", description: "Adhere to ethical guidelines and stay updated with research.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "counselling-psychologist": {
    careerId: "counselling-psychologist",
    items: [
      { title: "Bachelor's Degree in Psychology (B.A./B.Sc.)", description: "Obtain a foundational degree in psychology.", type: "study", timeframe: "3 Years" },
      { title: "Master's Degree in Counselling Psychology or Applied Psychology (M.A./M.Sc.)", description: "Gain specialized knowledge in counselling theories, techniques, and ethics.", type: "study", timeframe: "2 Years" },
      { title: "PG Diploma in Counselling (Optional, for focused training)", description: "Some may opt for a diploma for specific skill enhancement or if their Master's was less specialized.", type: "study", timeframe: "1 Year" },
      { title: "Gain Supervised Counselling Experience (Internships, Practicum)", description: "Practice counselling skills under the guidance of experienced professionals in various settings.", type: "project", timeframe: "1-2 Years (often part of Master's/Diploma)" },
      { title: "Develop Core Counselling Skills (Active Listening, Empathy, Rapport Building)", description: "Master essential competencies for effective counselling.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Familiarize with Various Counselling Approaches (Person-Centered, CBT, Solution-Focused, REBT)", description: "Learn and apply different therapeutic models.", type: "study", timeframe: "Ongoing learning" },
      { title: "Ethical Practice & Self-Care", description: "Understand ethical guidelines and importance of self-care for counselors.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "industrial-organizational-psychologist": {
    careerId: "industrial-organizational-psychologist",
    items: [
      { title: "Bachelor's Degree in Psychology", description: "Obtain a foundational degree, preferably with some exposure to organizational behavior or statistics.", type: "study", timeframe: "3 Years" },
      { title: "Master's Degree in Industrial/Organizational Psychology or Applied Psychology (I/O specialization)", description: "Gain specialized knowledge in personnel psychology, organizational behavior, psychometrics, leadership, and research methods.", type: "study", timeframe: "2 Years" },
      { title: "Develop Skills in Psychometric Testing, Survey Design, Statistical Analysis (SPSS/R)", description: "Learn to use tools and techniques for organizational assessment, employee selection, and research.", type: "skill", timeframe: "During Masters" },
      { title: "Gain Practical Experience through Internships (HR Depts, Consulting Firms, Research Projects)", description: "Apply I/O psychology principles in real-world settings (e.g., selection, training, OD).", type: "project", timeframe: "6-12 Months" },
      { title: "Understand Organizational Development, Talent Management, Employee Well-being Strategies", description: "Learn about interventions to improve organizational effectiveness and employee experience.", type: "study", timeframe: "Ongoing" },
      { title: "Communication & Consulting Skills", description: "Effectively present findings and recommendations to organizational stakeholders.", type: "skill", timeframe: "Ongoing" },
      { title: "Consider PhD for Advanced Research or Academic Roles (Optional)", description: "A doctorate can open doors to more specialized or research-focused positions.", type: "study", timeframe: "3-5 Years" }
    ]
  },
  "school-psychologist": { // Also covers School Counselor in India context
    careerId: "school-psychologist",
    items: [
      { title: "Bachelor's Degree in Psychology", description: "Obtain a foundational degree in psychology.", type: "study", timeframe: "3 Years" },
      { title: "Master's Degree in Psychology (Child/School/Counselling Psychology specialization)", description: "Gain knowledge relevant to child development, learning, and socio-emotional issues.", type: "study", timeframe: "2 Years" },
      { title: "PG Diploma in Guidance and Counselling or School Counselling (Often required/preferred)", description: "Complete specialized training for working in school settings, focusing on assessment and intervention.", type: "study", timeframe: "1 Year" },
      { title: "Gain Experience with Children & Adolescents (Internships in Schools, Child Guidance Clinics)", description: "Develop practical skills in assessment, counselling, and intervention strategies.", type: "project", timeframe: "6-12 Months (part of diploma/masters)" },
      { title: "Understand Child Development, Learning Disabilities, Behavioural Issues & Inclusive Education", description: "Learn to identify and support students with diverse needs.", type: "study", timeframe: "Ongoing" },
      { title: "Develop Intervention, Counselling & Collaboration Skills (with teachers, parents, admin)", description: "Effectively support students' academic, social, and emotional well-being.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Knowledge of School Systems & Policies", description: "Understand the educational environment and relevant regulations.", type: "study", timeframe: "Integrated" }
    ]
  },

  // --- Education and Teaching ---
  "school-teacher": {
    careerId: "school-teacher",
    items: [
      { title: "Bachelor's Degree (B.A./B.Sc./B.Com in relevant teaching subject)", description: "Obtain a graduation degree in the subject you intend to teach.", type: "study", timeframe: "3 Years" },
      { title: "Bachelor of Education (B.Ed.)", description: "Complete a professional teaching qualification program focusing on pedagogy and methodology.", type: "study", timeframe: "2 Years" },
      { title: "Qualify Teacher Eligibility Test (TET/CTET)", description: "Pass state or central teacher eligibility tests (mandatory for govt. schools, preferred for private).", type: "certification", timeframe: "3-6 Months prep" },
      { title: "Develop Strong Subject Matter Expertise & Pedagogical Skills", description: "Master your subject and learn effective teaching methodologies, classroom management.", type: "skill", timeframe: "During B.Ed. & ongoing" },
      { title: "Gain Teaching Experience (Student teaching, Trainee teacher, Tutoring)", description: "Practice teaching in real classroom settings.", type: "project", timeframe: "During B.Ed. & early career" },
      { title: "Classroom Management & Communication Skills", description: "Effectively manage a classroom, engage students, and communicate with parents.", type: "skill", timeframe: "Ongoing practice" },
      { title: "Continuous Professional Development", description: "Attend workshops, seminars, and courses to update teaching skills.", type: "study", timeframe: "Ongoing" }
    ]
  },
  "college-professor": {
    careerId: "college-professor",
    items: [
      { title: "Master's Degree in Specialization", description: "Obtain a postgraduate degree in your chosen academic field with a good academic record (often >55%).", type: "study", timeframe: "2 Years" },
      { title: "Qualify National Eligibility Test (NET - UGC/CSIR) or State Eligibility Test (SET)", description: "Essential eligibility criteria for assistant professorship in Indian universities/colleges.", type: "certification", timeframe: "6-12 Months prep" },
      { title: "Doctorate (Ph.D.) in the relevant discipline", description: "Often required for promotion, permanent positions, and research-intensive roles. Conduct original research and write a thesis.", type: "study", timeframe: "3-5 Years post Master's" },
      { title: "Develop Research & Publication Skills", description: "Engage in academic research, publish in reputed peer-reviewed journals, and write grant proposals.", type: "skill", timeframe: "During Ph.D. & ongoing" },
      { title: "Gain Teaching Experience (Ad-hoc, Guest Lecturer, Teaching Assistant during Ph.D.)", description: "Seek opportunities to teach at the college/university level.", type: "project", timeframe: "Varies" },
      { title: "Attend & Present at Academic Conferences/Seminars", description: "Share research, network with peers, and stay updated in your field.", type: "skill", timeframe: "Ongoing" },
      { title: "Develop Curriculum Design & Mentoring Skills", description: "Design courses and guide students in their academic pursuits.", type: "skill", timeframe: "Develop with experience" }
    ]
  },
  "tuition-teacher": {
    careerId: "tuition-teacher",
    items: [
      { title: "Strong Subject Matter Expertise (Bachelor's/Master's in relevant subject)", description: "Deep understanding of the subject(s) you plan to teach. Higher education is preferred.", type: "study", timeframe: "Based on education" },
      { title: "Develop Effective Teaching & Explanation Skills", description: "Ability to break down complex concepts, make learning engaging, and adapt to different learning paces.", type: "skill", timeframe: "Practice & feedback" },
      { title: "Understand Different Learning Styles & Curriculum (CBSE, ICSE, State Board)", description: "Tailor your approach to meet individual student needs and align with their school curriculum.", type: "study", timeframe: "1-2 Months self-study/research" },
      { title: "Create Customized Lesson Plans, Practice Materials & Assessments", description: "Develop resources to support student learning, track progress, and prepare for exams.", type: "project", timeframe: "Ongoing" },
      { title: "Build Strong Rapport with Students & Maintain Communication with Parents", description: "Foster a positive learning environment and keep parents informed about progress and areas of improvement.", type: "skill", timeframe: "Ongoing" },
      { title: "Time Management & Organizational Skills", description: "Manage schedules for multiple students effectively if teaching independently.", type: "skill", timeframe: "Ongoing" },
      { title: "Patience & Motivational Skills", description: "Encourage students and help them overcome learning challenges.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "academic-researcher": {
    careerId: "academic-researcher",
    items: [
      { title: "Master's Degree in Chosen Field with Research Focus", description: "Strong academic foundation and initial research experience (e.g., Master's thesis).", type: "study", timeframe: "2 Years" },
      { title: "Qualify National Level Exams (NET/GATE/JRF for Ph.D. admission & fellowships)", description: "Secure eligibility and funding for doctoral research.", type: "certification", timeframe: "6-12 Months prep" },
      { title: "Enroll in and Complete a Ph.D. Program", description: "Conduct original, in-depth research under a supervisor, write a thesis, and defend it successfully.", type: "study", timeframe: "3-6 Years" },
      { title: "Develop Advanced Research Methodology, Critical Analysis & Academic Writing Skills", description: "Master quantitative/qualitative methods, statistical tools, and scholarly writing.", type: "skill", timeframe: "During Ph.D." },
      { title: "Publish Research Papers in Peer-Reviewed Journals & Present at Conferences", description: "Disseminate research findings, contribute to the academic community, and build a research profile.", type: "project", timeframe: "Ongoing during and post-Ph.D." },
      { title: "Grant Writing & Funding Acquisition Skills (for Post-doc/Independent Researcher)", description: "Learn to write compelling research proposals to secure funding.", type: "skill", timeframe: "Develop post-Ph.D." },
      { title: "Consider Post-Doctoral Research (Optional)", description: "Gain additional specialized research experience, often abroad or in a different institution.", type: "study", timeframe: "1-3 Years" }
    ]
  },

  // --- Engineering (Core Branches) ---
  "mechanical-engineer": {
    careerId: "mechanical-engineer",
    items: [
      { title: "Bachelor's Degree in Mechanical Engineering (B.E./B.Tech)", description: "Obtain a foundational degree in mechanical principles, design, thermodynamics, and manufacturing.", type: "study", timeframe: "4 Years" },
      { title: "Learn CAD/CAM/CAE Software (AutoCAD, SolidWorks, CATIA, ANSYS, MATLAB)", description: "Master design, analysis, simulation, and manufacturing software.", type: "skill", timeframe: "3-6 Months (intensive training)" },
      { title: "Deepen Understanding of Core Subjects", description: "Strengthen knowledge in Thermodynamics, Fluid Mechanics, Material Science, Manufacturing Processes, Machine Design, Control Systems.", type: "study", timeframe: "During degree & beyond" },
      { title: "Undertake Industry Internships or Projects (Design, Manufacturing, R&D)", description: "Gain practical experience in areas like automotive, thermal, robotics, or industrial machinery.", type: "project", timeframe: "3-6 Months (multiple if possible)" },
      { title: "Develop Problem-Solving & Analytical Skills", description: "Apply engineering principles to solve real-world mechanical problems and optimize designs.", type: "skill", timeframe: "Ongoing" },
      { title: "Consider GATE for PSUs/M.Tech or Specialization", description: "Enhance expertise for specialized roles (Robotics, Automotive, Thermal, Mechatronics) or public sector jobs.", type: "certification", timeframe: "6-12 Months prep for GATE" },
      { title: "Familiarity with Industry Standards & Codes", description: "Understand relevant safety and design standards (e.g., ASME, ISO).", type: "study", timeframe: "Integrated" }
    ]
  },
  "civil-engineer": {
    careerId: "civil-engineer",
    items: [
      { title: "Bachelor's Degree in Civil Engineering (B.E./B.Tech)", description: "Obtain a degree in structural design, construction, transportation, geotechnical, and environmental engineering.", type: "study", timeframe: "4 Years" },
      { title: "Learn Design & Analysis Software (AutoCAD, STAAD.Pro, Revit, ETABS, Civil 3D, Primavera/MS Project)", description: "Master tools for structural design, drafting, BIM, and project management.", type: "skill", timeframe: "3-6 Months (intensive training)" },
      { title: "Gain Expertise in Core Areas", description: "Deepen knowledge in Structural Analysis, Geotechnical Engineering, Transportation Engineering, Water Resources, Construction Management.", type: "study", timeframe: "During degree & beyond" },
      { title: "Site Experience through Internships or Projects", description: "Gain practical knowledge of construction processes, project execution, quality control, and site supervision.", type: "project", timeframe: "3-6 Months (multiple if possible)" },
      { title: "Understand Building Codes, IS Codes & Contract Management", description: "Familiarize with Indian Standard Codes, NBC, and construction contract principles.", type: "study", timeframe: "Ongoing" },
      { title: "Consider Professional Engineer (PE) License, M.Tech, or PMP Certification", description: "Enhance credentials for advanced roles in design, research, or project management.", type: "certification", timeframe: "Varies" },
      { title: "Surveying & Quantity Estimation Skills", description: "Learn basic surveying techniques and how to estimate material quantities.", type: "skill", timeframe: "During degree" }
    ]
  },
  "electrical-engineer": {
    careerId: "electrical-engineer",
    items: [
      { title: "Bachelor's Degree in Electrical Engineering (B.E./B.Tech)", description: "Obtain a degree focusing on electrical systems, electronics, power systems, and control systems.", type: "study", timeframe: "4 Years" },
      { title: "Learn Circuit Design, Simulation Software & CAD (SPICE, Multisim, MATLAB/Simulink, AutoCAD Electrical, ETAP)", description: "Master tools for designing, analyzing, and documenting electrical systems.", type: "skill", timeframe: "3-6 Months" },
      { title: "Understand Power Systems (Generation, Transmission, Distribution), Control Systems, Electronics, Microcontrollers, Machines", description: "Deepen knowledge in core electrical subjects.", type: "study", timeframe: "During degree & beyond" },
      { title: "Gain Experience with PLC Programming, SCADA & Automation (for industrial roles)", description: "Learn to program and implement control systems for industrial applications.", type: "skill", timeframe: "2-4 Months" },
      { title: "Work on Projects (Power Systems, Renewable Energy, Embedded Systems, Control Automation)", description: "Apply theoretical knowledge to practical problems through mini-projects or internships.", type: "project", timeframe: "Ongoing" },
      { title: "Consider GATE for PSUs/M.Tech or Specialized Certifications", description: "Enhance expertise in automation, power systems, or renewable energy. GATE for public sector jobs.", type: "certification", timeframe: "Varies" },
      { title: "Knowledge of Electrical Safety Standards & Regulations", description: "Understand and adhere to safety protocols (e.g., IE Rules).", type: "study", timeframe: "Integrated" }
    ]
  },
  "chemical-engineer": {
    careerId: "chemical-engineer",
    items: [
      { title: "Bachelor's Degree in Chemical Engineering (B.E./B.Tech)", description: "Obtain a degree focusing on chemical processes, plant design, thermodynamics, and material science.", type: "study", timeframe: "4 Years" },
      { title: "Master Process Simulation Software (ASPEN Plus, HYSYS, CHEMCAD, DWSIM)", description: "Learn tools for designing, optimizing, and simulating chemical processes and plant operations.", type: "skill", timeframe: "3-6 Months" },
      { title: "Understand Core Subjects (Unit Operations, Thermodynamics, Reaction Engineering, Mass Transfer, Process Control, Fluid Mechanics)", description: "Gain in-depth knowledge of fundamental chemical engineering principles.", type: "study", timeframe: "During degree & beyond" },
      { title: "Internships in Chemical Plants, Refineries, Pharmaceutical, Petrochemical, or R&D Labs", description: "Gain practical experience in process operations, design, safety, or research.", type: "project", timeframe: "3-6 Months (multiple if possible)" },
      { title: "Develop Knowledge of Industrial Safety (HAZOP, LOPA), Environmental Regulations & Process Safety Management (PSM)", description: "Understand and adhere to safety and compliance standards in chemical industries.", type: "study", timeframe: "Ongoing" },
      { title: "Consider GATE for PSUs/M.Tech or Specialized Certifications", description: "Enhance qualifications for public sector jobs, R&D, or advanced roles in process design/safety.", type: "certification", timeframe: "Varies" },
      { title: "Data Analysis & Optimization Skills", description: "Learn to analyze plant data for process improvement and optimization.", type: "skill", timeframe: "Develop with experience" }
    ]
  },

  // --- Legal Services ---
  "lawyer-advocate": {
    careerId: "lawyer-advocate",
    items: [
      { title: "Complete Bachelor of Laws (LLB) Degree (3-year after graduation or 5-year integrated after 10+2)", description: "Obtain the foundational law degree from a Bar Council of India (BCI) recognized institution.", type: "study", timeframe: "3 or 5 Years" },
      { title: "Enroll with a State Bar Council", description: "Register as an advocate with the respective State Bar Council.", type: "certification", timeframe: "Post-LLB" },
      { title: "Pass All India Bar Examination (AIBE)", description: "Qualify the AIBE conducted by BCI to receive 'Certificate of Practice'.", type: "certification", timeframe: "Within 2 years of enrollment" },
      { title: "Develop Legal Research & Drafting Skills", description: "Master ability to research case law, statutes, and draft legal documents (pleadings, contracts, opinions).", type: "skill", timeframe: "Ongoing practice" },
      { title: "Gain Practical Experience (Internships, Junior under a Senior Advocate, or Join a Law Firm)", description: "Learn court procedures, client handling, and choose a specialization (Civil, Criminal, Corporate, IPR, Tax).", type: "project", timeframe: "2-5 Years (initial grounding)" },
      { title: "Argumentation & Court Craft Skills", description: "Develop effective presentation and argumentation skills for court appearances.", type: "skill", timeframe: "Experience-based" },
      { title: "Stay Updated with Legal Amendments & Judgments", description: "Continuous learning is crucial in the dynamic legal field.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "legal-consultant": {
    careerId: "legal-consultant",
    items: [
      { title: "Bachelor of Laws (LLB) Degree", description: "Obtain a foundational law degree.", type: "study", timeframe: "3 or 5 Years" },
      { title: "Master of Laws (LLM) in a Specialized Area (Corporate Law, IPR, International Law, Tax Law, etc.)", description: "Gain advanced expertise in a niche area of law. This is often crucial.", type: "study", timeframe: "1-2 Years" },
      { title: "Significant Practical Experience in the Chosen Specialization", description: "Develop deep domain knowledge and a track record of providing expert advice, often as a lawyer or in-house counsel first.", type: "project", timeframe: "5-10+ Years" },
      { title: "Develop Strong Analytical, Advisory & Legal Drafting Skills", description: "Provide insightful legal opinions, risk assessments, and draft specialized agreements & policies.", type: "skill", timeframe: "Ongoing" },
      { title: "Build a Reputation for Expertise & a Strong Professional Network", description: "Establish credibility and connections within your specialized legal field. Publish articles or speak at conferences.", type: "skill", timeframe: "Ongoing" },
      { title: "Excellent Communication, Negotiation & Client Management Skills", description: "Effectively advise businesses or individuals and manage client expectations for consulting engagements.", type: "skill", timeframe: "Ongoing" },
      { title: "Business Acumen & Industry Knowledge", description: "Understand the business context of legal issues in your specialization.", type: "skill", timeframe: "Develop with experience" }
    ]
  },

  // --- Architecture and Design ---
  "architect": {
    careerId: "architect",
    items: [
      { title: "Bachelor of Architecture (B.Arch)", description: "Complete a 5-year professional degree program from a Council of Architecture (COA) recognized institution.", type: "study", timeframe: "5 Years" },
      { title: "Register with the Council of Architecture (COA)", description: "Obtain a license to practice as an architect in India.", type: "certification", timeframe: "Post B.Arch" },
      { title: "Master Architectural Design Software (AutoCAD, Revit, SketchUp, Rhino, Lumion, V-Ray)", description: "Develop proficiency in 2D drafting, 3D modeling, BIM, and visualization tools.", type: "skill", timeframe: "During degree & beyond" },
      { title: "Develop a Strong Portfolio (Academic & Professional Projects)", description: "Showcase your design philosophy, technical skills, creative solutions, and detailed drawings.", type: "project", timeframe: "Ongoing" },
      { title: "Gain Practical Experience (Internships, Junior Architect Roles)", description: "Learn project execution, site management, building codes, client interaction, and coordination with consultants.", type: "project", timeframe: "1-3 Years post B.Arch" },
      { title: "Understand Building Materials, Construction Techniques, Sustainability & Urban Planning", description: "Develop a holistic approach to architectural design and execution.", type: "study", timeframe: "Ongoing learning" },
      { title: "Project Management & Client Communication Skills", description: "Essential for managing projects and client relationships.", type: "skill", timeframe: "Develop with experience" }
    ]
  },
  "interior-designer": {
    careerId: "interior-designer",
    items: [
      { title: "Degree/Diploma in Interior Design or Interior Architecture", description: "Obtain formal education in space planning, design principles, materials, and drafting.", type: "study", timeframe: "1-4 Years (Diploma/Degree)" },
      { title: "Master Design Software (AutoCAD, SketchUp, 3ds Max, V-Ray, Revit Interior, Adobe Photoshop/Illustrator)", description: "Develop proficiency in 2D drafting, 3D modeling, rendering, and presentation tools.", type: "skill", timeframe: "6-12 Months (intensive practice)" },
      { title: "Understand Space Planning, Ergonomics, Color Theory, Lighting Design, Materials & Furnishings", description: "Gain in-depth knowledge of creating functional, safe, and aesthetically pleasing interiors.", type: "study", timeframe: "During course & ongoing" },
      { title: "Develop a Strong Portfolio of Interior Design Projects (Residential, Commercial, Retail)", description: "Showcase design concepts, execution, style, and problem-solving through diverse projects.", type: "project", timeframe: "Ongoing" },
      { title: "Gain Practical Experience (Internships, Junior Designer Roles)", description: "Learn client interaction, site visits, vendor management, material sourcing, and project execution.", type: "project", timeframe: "1-2 Years" },
      { title: "Client Communication & Project Management Skills", description: "Effectively translate client needs into design solutions, manage budgets, and coordinate projects.", type: "skill", timeframe: "Ongoing" },
      { title: "Knowledge of Building Codes & Local Regulations", description: "Ensure designs comply with relevant safety and accessibility standards.", type: "study", timeframe: "Integrated" }
    ]
  },

  // --- Agriculture ---
  "agricultural-scientist": {
    careerId: "agricultural-scientist",
    items: [
      { title: "Bachelor of Science (B.Sc.) in Agriculture or Horticulture", description: "Obtain a foundational degree in agricultural sciences.", type: "study", timeframe: "4 Years" },
      { title: "Master of Science (M.Sc.) in a Specialization (Agronomy, Soil Science, Plant Breeding, Entomology, Pathology)", description: "Gain advanced knowledge and research skills in a specific agricultural domain.", type: "study", timeframe: "2 Years" },
      { title: "Qualify ICAR NET/ARS Exam or State Eligibility Test (SET)", description: "For eligibility as Assistant Professor/Lecturer or Scientist positions in ICAR and State Agricultural Universities (SAUs).", type: "certification", timeframe: "6-12 Months prep" },
      { title: "Develop Strong Research Methodology, Data Analysis & Lab/Field Experimentation Skills", description: "Master scientific research tools and techniques in agriculture.", type: "skill", timeframe: "During M.Sc./Ph.D." },
      { title: "Doctorate (Ph.D.) for Advanced Research Roles (Often required)", description: "Conduct original research and contribute significantly to agricultural science.", type: "study", timeframe: "3-5 Years post M.Sc." },
      { title: "Publish Research Papers & Present at Conferences", description: "Disseminate research findings and contribute to the scientific community.", type: "project", timeframe: "Ongoing during Ph.D. & beyond" },
      { title: "Grant Writing Skills (for senior roles)", description: "Learn to secure funding for research projects.", type: "skill", timeframe: "Develop with experience" }
    ]
  },
  "farm-manager": {
    careerId: "farm-manager",
    items: [
      { title: "Degree/Diploma in Agriculture, Agri-Business Management, or related field (Practical experience is key)", description: "Formal education provides theoretical knowledge; hands-on experience is vital.", type: "study", timeframe: "2-4 Years (optional)" },
      { title: "Gain Extensive Practical Farming Experience", description: "Hands-on experience in crop cultivation (specific to region/crop type), livestock rearing, irrigation, and farm machinery operation.", type: "project", timeframe: "Several years" },
      { title: "Knowledge of Crop Science, Soil Health, Pest & Disease Management, Livestock Husbandry", description: "Understand best practices for sustainable and productive farming, including local conditions.", type: "skill", timeframe: "Ongoing learning" },
      { title: "Understand Farm Economics, Budgeting, Record Keeping & Marketing", description: "Manage farm finances, resources, analyze profitability, and market agricultural produce effectively.", type: "study", timeframe: "1-2 Years (self-study/courses)" },
      { title: "Develop Leadership, Labour Management & Problem-Solving Skills", description: "Effectively manage farm workers, make timely decisions, and address operational challenges (weather, pests, market fluctuations).", type: "skill", timeframe: "On-the-job" },
      { title: "Familiarity with Modern Farming Techniques, Precision Agriculture & Sustainable Practices", description: "Stay updated with innovations to improve efficiency, sustainability, and yield.", type: "skill", timeframe: "Ongoing research & adoption" },
      { title: "Understanding of Government Schemes & Subsidies for Agriculture", description: "Leverage available support for farm development.", type: "study", timeframe: "Ongoing" }
    ]
  },

  // --- Logistics and Supply Chain ---
  "logistics-manager": {
    careerId: "logistics-manager",
    items: [
      { title: "Degree in Supply Chain Management, Logistics, Business Admin, or Industrial Engineering", description: "Obtain relevant education in SCM principles.", type: "study", timeframe: "3-4 Years" },
      { title: "Gain Experience in Logistics Operations (Warehouse, Transportation, Inventory, Freight Forwarding)", description: "Start as Logistics Coordinator, Supervisor, or Analyst.", type: "project", timeframe: "3-5+ Years" },
      { title: "Understand End-to-End Supply Chain, Inventory Management & Transportation Modes", description: "Optimize goods flow, manage stock, select appropriate transport (road, rail, air, sea).", type: "study", timeframe: "Ongoing" },
      { title: "Develop Planning, Organizing, Problem-Solving & Negotiation Skills", description: "Manage complex logistics networks efficiently and cost-effectively.", type: "skill", timeframe: "Ongoing" },
      { title: "Learn Logistics Software (TMS, WMS, ERP systems like SAP SCM)", description: "Use technology for operations, visibility, and decision-making.", type: "skill", timeframe: "2-4 Months training/experience" },
      { title: "Knowledge of Customs Regulations & International Trade (Incoterms) (for import/export roles)", description: "Ensure compliance with trade laws and documentation.", type: "study", timeframe: "If applicable" },
      { title: "Consider Certifications (CILT, APICS CSCP) (Optional)", description: "Validate expertise and enhance career prospects.", type: "certification", timeframe: "Varies" }
    ]
  },
  "supply-chain-analyst": {
    careerId: "supply-chain-analyst",
    items: [
      { title: "Degree in Supply Chain Management, Logistics, Business Analytics, Industrial Engineering, or Operations Research", description: "Obtain a degree with a strong quantitative and analytical focus.", type: "study", timeframe: "3-4 Years" },
      { title: "Develop Strong Analytical & Data Management Skills (Advanced Excel, SQL, Python/R for data analysis)", description: "Learn to collect, clean, analyze, and interpret supply chain data.", type: "skill", timeframe: "3-6 Months" },
      { title: "Understanding of Supply Chain Principles (Demand Forecasting, Inventory Optimization, Network Design, Procurement)", description: "Gain theoretical knowledge of SCM concepts and modeling techniques.", type: "study", timeframe: "During degree & ongoing" },
      { title: "Familiarity with ERP Systems (SAP SCM/APO, Oracle SCM Cloud) & SCM Software/Tools", description: "Learn to use software for planning, execution, and analysis.", type: "skill", timeframe: "2-3 Months training/experience" },
      { title: "Data Visualization Skills (Tableau, Power BI)", description: "Present supply chain insights effectively through dashboards and reports.", type: "skill", timeframe: "1-2 Months" },
      { title: "Internships or Projects in Supply Chain, Logistics, or Operations Analysis", description: "Apply analytical skills to real-world SCM problems (e.g., inventory optimization, route planning).", type: "project", timeframe: "3-6 Months" },
      { title: "Consider Certifications (APICS CSCP, SCPro™ from CSCMP)", description: "Validate your expertise and enhance career prospects.", type: "certification", timeframe: "3-6 Months prep" }
    ]
  },

  // --- Social Work and Community Services ---
  "social-worker": {
    careerId: "social-worker",
    items: [
      { title: "Bachelor of Social Work (BSW)", description: "Obtain a foundational degree with supervised fieldwork focusing on social issues, human behavior, and intervention methods.", type: "study", timeframe: "3 Years" },
      { title: "Master of Social Work (MSW) for advanced roles or specialization", description: "Specialize in areas like Medical & Psychiatric Social Work, Community Development, Child Welfare, Criminology.", type: "study", timeframe: "2 Years" },
      { title: "Develop Strong Empathy, Active Listening, Communication & Counselling Skills", description: "Build rapport and effectively support individuals, families, and communities.", type: "skill", timeframe: "Ongoing practice & supervision" },
      { title: "Extensive Field Work & Internships (NGOs, Hospitals, Schools, Govt. Agencies)", description: "Gain practical experience in diverse settings and with various vulnerable populations.", type: "project", timeframe: "During BSW/MSW" },
      { title: "Understand Social Issues, Human Behavior, Social Policies & Community Development Principles", description: "Develop a strong theoretical and practical understanding of social work.", type: "study", timeframe: "Ongoing" },
      { title: "Knowledge of Relevant Laws, Resources & Advocacy Techniques", description: "Learn to navigate systems and advocate for client rights and needs.", type: "skill", timeframe: "Ongoing" },
      { title: "Case Management & Documentation Skills", description: "Maintain accurate records and manage client cases effectively.", type: "skill", timeframe: "Integrated" }
    ]
  },
  "ngo-coordinator": {
    careerId: "ngo-coordinator",
    items: [
      { title: "Bachelor's Degree (Social Work, Sociology, Development Studies, Public Policy, or any relevant field)", description: "A degree related to social sciences or management is beneficial.", type: "study", timeframe: "3 Years" },
      { title: "Gain Experience in the Social Sector (Volunteering, Entry-Level Roles in NGOs)", description: "Understand NGO operations, challenges, community engagement, and project lifecycles.", type: "project", timeframe: "1-3 Years" },
      { title: "Develop Project Management, Planning & Implementation Skills", description: "Learn to design, execute, monitor, and evaluate social projects (using tools like Logframes).", type: "skill", timeframe: "3-6 Months training/practice" },
      { title: "Strong Communication, Networking & Community Mobilization Abilities", description: "Effectively engage with beneficiaries, stakeholders, donors, and government agencies.", type: "skill", timeframe: "Ongoing" },
      { title: "Learn Grant Writing, Fundraising & Resource Management Techniques", description: "Secure funding and manage resources (financial, human) for NGO programs.", type: "skill", timeframe: "On-the-job learning or workshops" },
      { title: "Understanding of Social Issues, M&E (Monitoring & Evaluation) Frameworks & Reporting", description: "Measure project impact, ensure accountability, and report to stakeholders.", type: "study", timeframe: "Ongoing" },
      { title: "Leadership & Team Coordination Skills", description: "Manage project teams and volunteers effectively.", type: "skill", timeframe: "Develop with experience" }
    ]
  },

  // --- Human Resources ---
  "hr-manager": {
    careerId: "hr-manager",
    items: [
      { title: "Bachelor's Degree (MBA in HR or Master's in HR/Psychology often preferred)", description: "Obtain relevant education in HR, business, or psychology.", type: "study", timeframe: "3-5 Years" },
      { title: "Gain Progressive Experience in HR Functions", description: "Start as HR Executive/Specialist (Recruitment, Payroll, ER, T&D) and grow into broader roles.", type: "project", timeframe: "5-8+ Years" },
      { title: "In-depth Understanding of Indian Labor Laws & Compliance", description: "Ensure HR practices align with legal and statutory obligations (PF, ESI, Gratuity, POSH, etc.).", type: "study", timeframe: "Ongoing learning & updates" },
      { title: "Develop Strong Interpersonal, Communication, Conflict Resolution & Leadership Skills", description: "Effectively manage employee relations, organizational development, and lead HR teams.", type: "skill", timeframe: "Ongoing" },
      { title: "Proficiency in HRMS/HRIS Software & Data Analytics for HR", description: "Use technology for HR operations, reporting, and strategic decision-making.", type: "skill", timeframe: "Ongoing learning" },
      { title: "Strategic HR Management & Organizational Development", description: "Learn about workforce planning, change management, and OD interventions.", type: "study", timeframe: "Through experience/MBA" },
      { title: "Consider HR Certifications (SHRM-SCP, SPHRi, or specialized Indian certifications)", description: "Enhance credentials and knowledge in strategic HR.", type: "certification", timeframe: "3-6 Months prep" }
    ]
  },
  "recruitment-specialist": {
    careerId: "recruitment-specialist",
    items: [
      { title: "Bachelor's Degree (HR, Business, Psychology, or any field with good communication skills)", description: "A degree is generally expected.", type: "study", timeframe: "3 Years" },
      { title: "Develop Strong Sourcing & Candidate Engagement Skills", description: "Learn to find passive/active candidates using job portals (Naukri, LinkedIn), social media, boolean search, networking.", type: "skill", timeframe: "1-3 Months (initial), ongoing refinement" },
      { title: "Excellent Communication (Verbal & Written) & Interpersonal Skills", description: "Effectively interact with candidates, hiring managers, build rapport, and write compelling job descriptions.", type: "skill", timeframe: "Ongoing" },
      { title: "Understanding of Interviewing Techniques, Candidate Assessment & Selection Processes", description: "Learn behavioral interviewing, competency-based assessment, and evaluating candidate suitability.", type: "study", timeframe: "1-2 Months training & practice" },
      { title: "Familiarity with Applicant Tracking Systems (ATS) & Recruitment Metrics", description: "Use technology to manage the recruitment lifecycle (e.g., time-to-fill, source effectiveness).", type: "skill", timeframe: "1 Month learning curve" },
      { title: "Build Industry Knowledge & Talent Networks (if specializing)", description: "Understand the talent landscape and build connections in your domain (e.g., IT, Sales, Finance).", type: "skill", timeframe: "Ongoing" },
      { title: "Negotiation & Offer Management Skills", description: "Learn to effectively manage salary negotiations and candidate offers.", type: "skill", timeframe: "On-the-job" }
    ]
  },

  // --- Aerospace and Space Exploration ---
  "aerospace-engineer": {
    careerId: "aerospace-engineer",
    items: [
      { title: "B.E./B.Tech in Aerospace/Aeronautical Engineering", description: "Complete a specialized degree from a reputed institution focusing on aerodynamics, propulsion, structures, and flight mechanics.", type: "study", timeframe: "4 Years" },
      { title: "Master CAD/CAE/CFD Software (CATIA, SolidWorks, ANSYS, MATLAB, OpenFOAM)", description: "Develop proficiency in design, analysis, and simulation tools crucial for aerospace applications.", type: "skill", timeframe: "6-12 Months (intensive)" },
      { title: "Strong Foundation in Core Aerospace Subjects", description: "Deepen understanding of aerodynamics, propulsion systems, flight mechanics, aircraft/spacecraft structures, and control systems.", type: "study", timeframe: "During degree & beyond" },
      { title: "Internships/Projects with Aerospace Organizations (ISRO, DRDO, HAL, NAL, Private Aerospace Companies)", description: "Gain practical experience in aircraft/spacecraft design, manufacturing, testing, or R&D.", type: "project", timeframe: "3-6 Months (multiple if possible)" },
      { title: "Consider GATE for M.Tech (Specialization) or PSU Jobs", description: "Advanced degrees in Aerodynamics, Propulsion, Structures, or GATE scores can open more specialized opportunities.", type: "certification", timeframe: "6-12 Months prep (GATE)" },
      { title: "Develop System Integration & Testing Skills", description: "Understand how different aerospace components work together and how to validate their performance.", type: "skill", timeframe: "Develop with experience" },
      { title: "Stay Updated with Aerospace Technologies & Materials", description: "Continuous learning is essential in this rapidly advancing field.", type: "skill", timeframe: "Ongoing" }
    ]
  },
  "astrophysicist-astronomer": {
    careerId: "astrophysicist-astronomer",
    items: [
      { title: "B.Sc. in Physics or Astronomy/Astrophysics", description: "Obtain a strong foundational degree in physics, mathematics, and ideally some astronomy.", type: "study", timeframe: "3 Years" },
      { title: "M.Sc. in Physics, Astronomy, or Astrophysics", description: "Gain advanced knowledge in theoretical and observational astrophysics, cosmology, and instrumentation.", type: "study", timeframe: "2 Years" },
      { title: "Qualify National Level Exams (CSIR-UGC NET JRF in Physical Sciences, JEST, GATE in Physics)", description: "Essential for Ph.D. admissions and fellowships in premier Indian research institutions.", type: "certification", timeframe: "6-12 Months prep" },
      { title: "Doctorate (Ph.D.) in Astrophysics or Astronomy", description: "Conduct original research, analyze astronomical data (from telescopes like GMRT, AstroSat), or develop theoretical models. Publish findings.", type: "study", timeframe: "4-6 Years post M.Sc." },
      { title: "Develop Strong Mathematical, Programming (Python, C++, IDL) & Data Analysis Skills", description: "Essential for handling large astronomical datasets, performing simulations, and modeling.", type: "skill", timeframe: "During M.Sc./Ph.D." },
      { title: "Gain Research Experience with Telescopes, Observational Data or Theoretical Modeling", description: "Contribute to research projects, learn data reduction techniques, and present findings.", type: "project", timeframe: "During Ph.D. & Post-doc" },
      { title: "Grant Writing & Collaboration Skills (for advanced roles)", description: "Secure research funding and collaborate with international teams.", type: "skill", timeframe: "Develop post-Ph.D." }
    ]
  },
  "satellite-engineer": {
    careerId: "satellite-engineer",
    items: [
      { title: "B.E./B.Tech in ECE, Aerospace, Mechanical, CS, or related engineering field", description: "Obtain a relevant engineering degree with strong fundamentals.", type: "study", timeframe: "4 Years" },
      { title: "Consider M.Tech/M.S. (Satellite Technology, RF/Microwave, Space Systems, Control Systems)", description: "Specialized knowledge is often preferred for core roles in ISRO or private space tech companies.", type: "study", timeframe: "2 Years" },
      { title: "Understand Satellite Subsystems (Payload, Power, Communication, AOCS, Thermal Control, Structures)", description: "Gain knowledge of how different parts of a satellite function and interact.", type: "study", timeframe: "During Master's or specialized courses" },
      { title: "Develop Skills in RF Design, Embedded Systems, Control System Design, Thermal Analysis, Orbital Mechanics", description: "Skill requirements vary based on specific role (payload, AOCS, communication engineer).", type: "skill", timeframe: "Varies by specialization" },
      { title: "Experience with Satellite Design/Simulation Software (STK, MATLAB, GMAT, Ansys HFSS/Maxwell)", description: "Learn tools for mission analysis, subsystem design, and simulation.", type: "skill", timeframe: "3-6 Months" },
      { title: "Projects/Internships with Space Agencies (ISRO), Satellite Manufacturing Companies, or Research Institutions", description: "Gain hands-on experience in satellite development, testing, or operations.", type: "project", timeframe: "3-6 Months+" },
      { title: "Knowledge of Space Environment & Testing Standards", description: "Understand challenges of operating in space and relevant testing protocols.", type: "study", timeframe: "Integrated" }
    ]
  },
  "rocket-scientist-propulsion": {
    careerId: "rocket-scientist-propulsion",
    items: [
      { title: "B.E./B.Tech in Mechanical, Aerospace, or Chemical Engineering", description: "A strong foundation in relevant engineering disciplines, especially thermodynamics and fluid mechanics.", type: "study", timeframe: "4 Years" },
      { title: "M.Tech/M.S. or Ph.D. in Propulsion, Aerospace Engineering (Propulsion focus), or Combustion", description: "Advanced specialized knowledge is highly recommended for R&D roles.", type: "study", timeframe: "2-5 Years" },
      { title: "Strong Understanding of Thermodynamics, Fluid Dynamics, Combustion, Heat Transfer & Rocket Propulsion Principles", description: "Master core scientific and engineering principles behind rocket engines.", type: "study", timeframe: "During degrees" },
      { title: "Knowledge of Rocket Engine Types (Solid, Liquid, Cryogenic, Hybrid) & Their Design/Performance", description: "Understand intricacies of various propulsion systems and propellants.", type: "study", timeframe: "During Master's/Ph.D." },
      { title: "Experience with CFD & Propulsion Analysis Software (ANSYS Fluent, CEA, OpenFOAM, in-house codes)", description: "Learn tools for simulating and analyzing rocket engine performance and combustion.", type: "skill", timeframe: "6-12 Months" },
      { title: "Research Projects, Internships, or Thesis Work on Propulsion Systems/Components (at ISRO, DRDO, research labs)", description: "Gain practical experience in design, analysis, or testing of propulsion systems.", type: "project", timeframe: "During M.Tech/Ph.D." },
      { title: "Knowledge of High-Energy Materials & Safety Protocols", description: "Understand handling and safety aspects of propellants and energetic materials.", type: "study", timeframe: "Integrated" }
    ]
  }
};

export const getRoadmapByCareer = (careerId: string): RoadmapItem[] => {
  return roadmaps[careerId]?.items || [];
};