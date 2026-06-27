export const PROJECTS_DATA = [
  {
    id: "anemia-analytics",
    title: "Clinical Healthcare Analytics & Anemia Prediction",
    category: "Machine Learning",
    description: "An interactive clinical analytics tool and predictor that uses standard blood metrics (Hemoglobin, MCV, MCH, MCHC) to diagnose anemia with 94% accuracy.",
    extendedDescription: "This project provides a cost-effective, real-time screening mechanism for early medical decision support, specifically targeted towards clinics in underserved regions. It integrates statistical modeling, feature correlation mapping, and a production-grade predictive engine.",
    problem: "Traditional diagnostic processes can be slow, expensive, and inaccessible in remote areas, delaying treatment for individuals experiencing chronic iron deficiency.",
    solution: "Trained an ensemble machine learning classifier using patient clinical blood indices (MCH, MCV, MCHC, Hemoglobin) and built a real-time diagnostics dashboard featuring patient risk distributions.",
    outcome: "Achieved a 94.2% prediction accuracy and a 0.95 F1-score. Integrated a correlation analyzer to demonstrate how Hemoglobin and MCV act as the strongest diagnostic indicators.",
    techStack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Flask"],
    metrics: ["94.2% Diagnosis Accuracy", "0.95 F1-Score", "Sub-10ms Inference Speed"],
    interactiveSim: true,
  },
  {
    id: "sales-etl-pipeline",
    title: "Kaggle Sales EDA & Interactive ETL Pipeline",
    category: "Data Analytics",
    description: "A comprehensive Data Analytics project analyzing a Kaggle retail dataset using Pandas, NumPy, Matplotlib, Seaborn, and SQL, integrating automated Excel reports and interactive Power BI insights.",
    extendedDescription: "This end-to-end project ingests raw retail sales logs from a popular Kaggle dataset, applies robust Python ETL processes to clean null values and format datetimes, conducts exploratory data analysis (EDA) using Matplotlib/Seaborn distributions, and prepares structured tables for relational SQL queries and Power BI dashboards.",
    problem: "Kaggle retail logs contain null entries, misaligned regional keys, and unstructured timestamps, making immediate sales reporting or trend plotting highly inaccurate.",
    solution: "Developed an automated Python script utilizing Pandas and NumPy to clean and transform records. Structured relational tables in MySQL, generated analytical plots in Seaborn, and exported processed feeds directly into Power BI and Excel.",
    outcome: "Created 5 interactive Power BI views, modeled seasonal sales peaks, and plotted correlation heatmaps identifying a 4.2% discrepancy in regional discounting structures.",
    techStack: ["Python", "Pandas", "NumPy", "SQL (MySQL)", "Power BI", "Excel", "Matplotlib", "Seaborn"],
    metrics: ["5+ Interactive Dashboard Tabs", "100% Kaggle Data Cleaned", "Sub-second ETL Processing Time"],
    interactiveSim: true,
  },
  {
    id: "ai-voice-assistant",
    title: "AI-Powered NLP Intent Classifier & Assistant",
    category: "NLP / AI",
    description: "Voice-enabled NLP virtual assistant that parses spoken natural language, extracts intent, and triggers automated system pipelines with fallback intelligence.",
    extendedDescription: "A fully functioning AI assistant with robust Speech-to-Text translation. It uses advanced NLP matching algorithms for zero-shot intent classifications, resolving queries locally or querying larger LLMs when needed.",
    problem: "Traditional customer interaction interfaces require rigid, structured inputs, leading to poor user satisfaction and high friction.",
    solution: "Developed a speech-to-text pipeline, created an active rule-based NLP parser for intent classification, and layered a secure LLM API gateway to handle open-ended context resolution.",
    outcome: "Successfully automated 85% of standard user action requests, with an average intent matching confidence of over 92% and local sub-100ms response times.",
    techStack: ["Python", "LangChain", "REST APIs", "SpeechRecognition", "JSON Web Tokens"],
    metrics: ["85% Intent Automation", "92%+ Intent Classification Confidence", "<120ms local processing latency"],
    interactiveSim: false,
  },
  {
    id: "lung-disease-cnn",
    title: "Deep Learning Diagnostic Classifier for Lung Diseases",
    category: "Machine Learning",
    description: "A Deep Learning computer vision model utilizing custom CNN architecture and transfer learning (ResNet50/VGG16) to classify chest X-ray images for respiratory health anomalies.",
    extendedDescription: "Designed for high-throughput image diagnostic screening, this project preprocesses and classifies radiographic images into healthy and diseased classes, optimizing image contrast, resizing, and implementing data augmentations.",
    problem: "Expert radiologist review is a scarce resource in critical situations, leading to treatment queues for acute lung conditions.",
    solution: "Leveraged transfer learning models to train on 5,000+ public chest radiograph scans, incorporating progressive image resizing, contrast stretching (CLAHE), and dropout regularization.",
    outcome: "Maintained a high sensitivity rate of 96% in detecting abnormal lung patterns, ensuring a low false-negative rate, which is vital for clinical safety.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    metrics: ["96% Diagnostic Sensitivity", "91.8% Overall Classification Accuracy", "Reduced diagnostic pipeline latency"],
    interactiveSim: false,
  }
];

export const EXPERIENCES_DATA = [
  {
    id: "exp-qspiders",
    role: "Data Analytics Intern",
    company: "QSpiders",
    period: "Feb 2026 - Present",
    location: "Noida, India",
    description: "Working hands-on with enterprise analytics, building SQL databases, and modeling business solutions using scientific Python libraries.",
    achievements: [
      "Designed and optimized relational databases using MySQL, composing complex subqueries, window functions, and Common Table Expressions (CTEs) for commercial trend analysis.",
      "Engineered automated data clean-up pipelines using Pandas and NumPy, cutting data preparation and pre-processing cycles by 35%.",
      "Formulated informative data visualizations using Matplotlib and Seaborn, translating raw operational variables into visual dashboards for corporate insights.",
      "Conducted extensive regression analysis and feature engineering to discover core revenue growth levers."
    ],
    skillsGained: ["MySQL", "Pandas", "NumPy", "Matplotlib", "Advanced Excel", "Business Insights"]
  },
  {
    id: "exp-smartbridge",
    role: "Machine Learning Engineer Intern",
    company: "SmartBridge (in collaboration with Google for Developers)",
    period: "Jun 2025 - Aug 2025",
    location: "Remote (India Edu Program)",
    description: "Collaborated on designing machine learning models and evaluating diagnostic and prediction accuracy for real-world projects.",
    achievements: [
      "Spearheaded data cleaning, normalization, and outlier removal pipelines for high-dimensional dataset preparation.",
      "Trained and tuned classification and regression algorithms, implementing cross-validation to ensure model robustness against overfitting.",
      "Evaluated machine learning solutions using rigorous scientific metrics (ROC-AUC, Precision-Recall curve, Confusion Matrix) to achieve high deployment reliability."
    ],
    skillsGained: ["Machine Learning", "Model Evaluation", "Scikit-Learn", "Hyperparameter Tuning"]
  },
  {
    id: "exp-codesoft",
    role: "AI Training Intern",
    company: "Codesoft",
    period: "Aug 2024 - Sep 2024",
    location: "Remote",
    description: "Immersed in deep learning and natural language processing, developing smart conversational architectures.",
    achievements: [
      "Mastered and implemented core Supervised and Unsupervised Learning paradigms on real-world datasets.",
      "Built a highly-responsive speech-enabled AI assistant integrating NLP intent-recognition and custom system APIs.",
      "Applied text preprocessing techniques including Tokenization, TF-IDF, Lemmatization, and Word Embeddings."
    ],
    skillsGained: ["Natural Language Processing (NLP)", "Supervised Learning", "Unsupervised Learning", "Deep Learning"]
  }
];

export const SKILLS_DATA = [
  {
    title: "Data Analytics Stack",
    icon: "BarChart3",
    skills: [
      { name: "Advanced SQL (CTEs, Joins, Window Functions)", level: 92, info: "Expertly craft nested CTEs, analytical window queries, and indices." },
      { name: "Pandas & NumPy", level: 90, info: "Manipulate large dataframes, pivot tables, clean-up nulls, and outliers." },
      { name: "Data Visualization (Matplotlib / Seaborn)", level: 88, info: "Generate beautiful statistical correlation matrices, histograms, and trend-lines." },
      { name: "Advanced Excel (Pivot, VLOOKUP, PowerQuery)", level: 85, info: "Sift through sales files, audit formulas, and clean unstructured tables." }
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: "Brain",
    skills: [
      { name: "Supervised & Unsupervised ML", level: 88, info: "Robust tree models, ensemble models, clustering (K-Means), and regressors." },
      { name: "Natural Language Processing (NLP)", level: 85, info: "Intent parsing, sentiment classifiers, tokenization pipelines." },
      { name: "Deep Learning (CNN / TensorFlow)", level: 80, info: "Build convolutional networks for image diagnostics & transfer learning." },
      { name: "LangChain & RAG Pipelines", level: 82, info: "Create AI agents backed by customized document knowledge bases." }
    ]
  },
  {
    title: "Programming & Databases",
    icon: "Database",
    skills: [
      { name: "Python", level: 90, info: "Primary scripting language used for full-scale ML & analysis pipelines." },
      { name: "SQL (MySQL / PostgreSQL)", level: 88, info: "Design robust relational schemas, optimize indexes, write performant store procs." },
      { name: "Java & C++", level: 82, info: "Solid fundamentals in object-oriented programming and memory layouts." },
      { name: "React", level: 85, info: "Build modern, highly reactive UI views, reusable components, and interactive dashboards." }
    ]
  },
  {
    title: "Computer Science Fundamentals",
    icon: "Binary",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: 85, info: "Strong mastery of Arrays, Trees, Graphs, and Dynamic Programming." },
      { name: "Problem Solving", level: 90, info: "Solved 300+ LeetCode problems and 250+ GFG coding challenges." }
    ]
  }
];

export const MOCK_DATABASE = [
  { transaction_id: "TX-1001", product_category: "Office Supplies", order_date: "2025-01-10", region: "Central", sales_amount: 89.50, quantity: 3, discount_percent: 5.0 },
  { transaction_id: "TX-1002", product_category: "Technology", order_date: "2025-01-15", region: "East", sales_amount: 520.00, quantity: 2, discount_percent: 10.0 },
  { transaction_id: "TX-1003", product_category: "Furniture", order_date: "2025-02-01", region: "West", sales_amount: 450.00, quantity: 1, discount_percent: 15.0 },
  { transaction_id: "TX-1004", product_category: "Technology", order_date: "2025-01-20", region: "South", sales_amount: 95.00, quantity: 5, discount_percent: 0.0 },
  { transaction_id: "TX-1005", product_category: "Office Supplies", order_date: "2025-02-12", region: "Central", sales_amount: 35.00, quantity: 12, discount_percent: 20.0 },
  { transaction_id: "TX-1006", product_category: "Furniture", order_date: "2025-01-05", region: "East", sales_amount: 110.00, quantity: 4, discount_percent: 0.0 },
  { transaction_id: "TX-1007", product_category: "Technology", order_date: "2025-02-20", region: "West", sales_amount: 278.20, quantity: 1, discount_percent: 5.0 },
  { transaction_id: "TX-1008", product_category: "Office Supplies", order_date: "2025-03-01", region: "South", sales_amount: 55.00, quantity: 8, discount_percent: 0.0 },
  { transaction_id: "TX-1009", product_category: "Furniture", order_date: "2025-01-18", region: "Central", sales_amount: 600.00, quantity: 3, discount_percent: 25.0 },
  { transaction_id: "TX-1010", product_category: "Technology", order_date: "2025-02-05", region: "East", sales_amount: 105.00, quantity: 2, discount_percent: 0.0 },
  { transaction_id: "TX-1011", product_category: "Office Supplies", order_date: "2025-03-10", region: "West", sales_amount: 42.00, quantity: 10, discount_percent: 0.0 },
  { transaction_id: "TX-1012", product_category: "Furniture", order_date: "2025-01-25", region: "South", sales_amount: 185.00, quantity: 2, discount_percent: 10.0 },
  { transaction_id: "TX-1013", product_category: "Technology", order_date: "2025-02-15", region: "Central", sales_amount: 1300.00, quantity: 1, discount_percent: 15.0 },
  { transaction_id: "TX-1014", product_category: "Office Supplies", order_date: "2025-03-05", region: "East", sales_amount: 68.00, quantity: 6, discount_percent: 0.0 },
  { transaction_id: "TX-1015", product_category: "Furniture", order_date: "2025-02-28", region: "West", sales_amount: 229.90, quantity: 3, discount_percent: 20.0 }
];

export const SQL_PLAYGROUND_QUERIES = [
  {
    id: "q-regional-sales",
    title: "Regional Sales & Discount Distribution Analysis",
    description: "Calculate total sales, average discount, and total items ordered grouped by geographical region from the Kaggle dataset.",
    sql: `SELECT \n  region,\n  SUM(sales_amount) as total_sales_revenue,\n  ROUND(AVG(discount_percent), 2) as average_discount_rate,\n  SUM(quantity) as total_items_sold\nFROM transactions\nGROUP BY region\nORDER BY total_sales_revenue DESC;`,
    explanation: "This analytic query highlights regions driving the highest revenue and compares average regional discount rates. It showcases the use of aggregation functions (`SUM`, `AVG`) and regional grouping."
  },
  {
    id: "q-tech-perf",
    title: "High-Value Technology Performance Audit",
    description: "Extract active transactions of Technology products with sales exceeding $100, ordered by total sales.",
    sql: `SELECT \n  transaction_id,\n  order_date,\n  region,\n  sales_amount,\n  quantity\nFROM transactions\nWHERE product_category = 'Technology' AND sales_amount > 100.00\nORDER BY sales_amount DESC;`,
    explanation: "Standard data filtering query used to isolate high-value technology items. Demonstrates clean data filtering, multiple conditional columns, and descending ordering."
  },
  {
    id: "q-unit-pricing",
    title: "Unit Revenue & Discount Impact Matrix",
    description: "Evaluate the average pricing per unit and track the correlation with the discount percentage.",
    sql: `SELECT \n  transaction_id,\n  product_category,\n  sales_amount,\n  quantity,\n  ROUND(sales_amount / quantity, 2) as unit_price,\n  discount_percent\nFROM transactions\nORDER BY unit_price DESC;`,
    explanation: "A custom analytical feature-engineering query creating a new metric `unit_price` by dividing sales by quantity. Ideal for retail analysts to evaluate product profit margin tiers."
  },
  {
    id: "q-sales-trend",
    title: "Monthly Sales Revenue Trends",
    description: "Segment and count transactions over order dates to map monthly revenue growth curves.",
    sql: `SELECT \n  SUBSTR(order_date, 1, 7) as sales_month,\n  COUNT(*) as total_orders,\n  SUM(sales_amount) as gross_monthly_revenue\nFROM transactions\nGROUP BY sales_month\nORDER BY sales_month ASC;`,
    explanation: "Allows BI analysts to map month-over-month (MoM) sales trends and evaluate sales spikes. Uses string parsing (`SUBSTR`), count aggregates, and logical grouping."
  }
];
