import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Initialize express
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory or file-based store for contact messages
const MESSAGES_FILE = path.join(process.cwd(), "contacts.json");
const initMessagesFile = () => {
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), "utf-8");
  }
};
initMessagesFile();

// Dynamic initialize Google GenAI SDK to avoid caching a MOCK_KEY when a real key is provided later
let aiClient = null;
let lastApiKey = null;

const getAiClient = () => {
  const currentKey = process.env.GEMINI_API_KEY;
  if (!aiClient || currentKey !== lastApiKey) {
    lastApiKey = currentKey;
    if (!currentKey) {
      console.warn("WARNING: GEMINI_API_KEY is not defined in environment variables. Gemini features will run in mock mode.");
    }
    aiClient = new GoogleGenAI({
      apiKey: currentKey || "MOCK_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
};

// System instruction to guide the "AI Twin" chatbot
const SYSTEM_INSTRUCTION = `
You are the interactive AI Professional Twin of Harsh Vardhan Tiwari, a highly motivated and skilled Data Analyst and Machine Learning Engineer. 
Your purpose is to chat with recruiters, hiring managers, and portfolio visitors, presenting Harsh's qualifications, skills, and background in the best possible light.

Tone and Guidelines:
- Professional, confident, friendly, humble, yet enthusiastic.
- Speak in the first person ("I", "my") as if you are Harsh himself, or as "My AI Twin" representing him. Mention you are Harsh's AI counterpart trained on his real resume.
- Keep responses highly concise, structured (using bullet points), and scannable. Never write massive walls of text.
- Match explanations to the user's focus (Data Analytics, Machine Learning, Database engineering).
- If asked about contact info, provide his real details: Email: tharshvardhan2@gmail.com, Phone: +91 8470924614, LinkedIn: linkedin.com/in/harsh-vardhan-tiwari-6432a9250, GitHub: github.com/Deghost214, Leetcode: leetcode.com/u/codewith_harsh.

Harsh's Profile Details:
- Education:
  * Bachelor of Technology in Computer Science and Engineering, Abdul Kalam Technical University (AKTU), Lucknow (2022-2026), 7.2 CGPA.
  * Senior Secondary / 12th: S R P N I C Handia Prayagraj (July 2021) - 81.6%.
  * Higher Secondary / 10th: P T R D Mishra I C Khaptiha Prayagraj (April 2019) - 79.33%.
- Professional Experience:
  * Data Analytics Intern at QSpiders, Noida (Feb 2026 - Present): Developing data preparation pipelines, performing advanced SQL queries (CTEs, joins, subqueries, windows), using Pandas, NumPy, and Matplotlib for cohort analysis, business trend visualization, and statistical modeling.
  * Machine Learning Engineer Intern at SmartBridge (Google Developers Program) (Jun 2025 - Aug 2025): Designed data preprocessing pipelines, optimized hyperparameters, and evaluated classification models for enterprise analytics.
  * AI Training Intern at Codesoft (Aug 2024 - Sep 2024): Built an NLP-based smart assistant, learned supervised/unsupervised machine learning, deep learning, and text preprocessing.
- Core Technical Skills:
  * Programming Languages: Python, SQL, Java, C++, JavaScript.
  * Databases: MySQL, PostgreSQL.
  * Data Analysis Stack: Advanced Excel, Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn.
  * AI/ML Stack: NLP, Deep Learning (CNNs), RAG, LangChain, REST APIs.
  * Core Computer Science: Data Structures & Algorithms (Arrays, Trees, Graphs, Dynamic Programming), problem-solving.
- Achievements:
  * Solved 300+ LeetCode problems (LeetCode Profile: codewith_harsh).
  * Solved 250+ GFG (GeeksforGeeks) problems.
  * Competed in Vultr Cloud Innovate Hackathon via GFG.
  * Google Cybersecurity Professional Certification (Coursera).
- Key Projects:
  1. Anemia Detection System (Data Analysis & ML): Designed an ensemble prediction model using clinical blood parameters (Hemoglobin, MCV, MCH, MCHC). Achieved 94% accuracy, helping screen anemia efficiently.
  2. Lung Disease Diagnostic System (CNN & Deep Learning): Preprocessed and classified chest X-ray images using CNNs (ResNet/VGG transfer learning) for early detection.
  3. Voice-Enabled AI Virtual Assistant (NLP): Formulated a speech-to-text pipeline with intent detection, custom action triggers, and OpenAI GPT fallback integration.
  4. Kaggle Sales EDA & Interactive ETL Pipeline (Data Analytics): Cleaned and preprocessed unstructured Kaggle retail transaction data using Pandas/NumPy, executed complex SQL analysis for business metrics, plotted statistical trend distributions with Matplotlib/Seaborn, and built an interactive Power BI and Excel reporting system.

If visitors ask complex queries, relate them to Harsh's skills. If they ask about salary or location, mention that he is open to competitive offers, especially for Data Analyst, Associate Data Scientist, or ML developer roles in Delhi NCR (Noida, Gurgaon), Bangalore, or Remote.
`;

// API Routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const keyExists = !!process.env.GEMINI_API_KEY;

    if (!keyExists) {
      // Mock mode fallback response
      let mockReply = "Hello! I'm Harsh's AI twin."
      const msgLower = message.toLowerCase();
      if (msgLower.includes("project") || msgLower.includes("anemia") || msgLower.includes("lung") || msgLower.includes("sales") || msgLower.includes("kaggle")) {
        mockReply += "I've built several core projects: \n- *Kaggle Sales EDA & Interactive ETL Pipeline* (Python Pandas/NumPy cleaning, SQL analytics, Seaborn trend plotting, and Power BI/Excel dashboards)\n- *Anemia Detection Model* (94% accuracy using clinical blood parameters in Scikit-Learn)\n- *Lung Disease CNN Classifier* (automated ResNet chest X-ray diagnosis)\n- *AI Voice Assistant* (STT and NLP pipeline).";
      } else if (msgLower.includes("skill") || msgLower.includes("python") || msgLower.includes("sql") || msgLower.includes("excel")) {
        mockReply += "My skills include Python, advanced SQL, Pandas, NumPy, Seaborn, Matplotlib, Excel, Scikit-Learn, and Power BI. I have solved 300+ LeetCode problems and 250+ GFG problems!";
      } else if (msgLower.includes("experience") || msgLower.includes("work") || msgLower.includes("intern")) {
        mockReply += "I am currently a Data Analytics Intern at QSpiders in Noida. I also previously did ML and NLP internships at SmartBridge (Google Developers Program) and Codesoft!";
      } else {
        mockReply += "I would love to help answer questions about my skills in Excel, Power BI, SQL, Python, machine learning, or details about my internships. How can I help you today?";
      }
      return res.json({ reply: mockReply });
    }

    const ai = getAiClient();
    
    // Convert incoming history structure into Gemini compatible contents array
    const contents = [];
    if (history && Array.isArray(history)) {
      history.slice(-10).forEach((h) => {
        contents.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }],
        });
      });
    }
    contents.push({ role: "user", parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I apologize, but I couldn't formulate a response right now. Please feel free to ask again!";
    res.json({ reply: replyText });
  } catch (err) {
    console.error("Gemini API error:", err);
    // Mock mode fallback response in case of API keys error/leaks
    let mockReply = "Hello! I am Harsh's AI twin.";
    const msgLower = message.toLowerCase();
    if (msgLower.includes("project") || msgLower.includes("anemia") || msgLower.includes("lung") || msgLower.includes("sales") || msgLower.includes("kaggle")) {
      mockReply += "I've built several core projects: \n- *Kaggle Sales EDA & Interactive ETL Pipeline* (Python Pandas/NumPy cleaning, SQL analytics, Seaborn trend plotting, and Power BI/Excel dashboards)\n- *Anemia Detection Model* (94% accuracy using clinical blood parameters in Scikit-Learn)\n- *Lung Disease CNN Classifier* (automated ResNet chest X-ray diagnosis)\n- *AI Voice Assistant* (STT and NLP pipeline).";
    } else if (msgLower.includes("skill") || msgLower.includes("python") || msgLower.includes("sql") || msgLower.includes("excel")) {
      mockReply += "My skills include Python, advanced SQL, Pandas, NumPy, Seaborn, Matplotlib, Excel, Scikit-Learn, and Power BI. I have solved 300+ LeetCode problems and 250+ GFG problems!";
    } else if (msgLower.includes("experience") || msgLower.includes("work") || msgLower.includes("intern")) {
      mockReply += "I am currently a Data Analytics Intern at QSpiders in Noida. I also previously did ML and NLP internships at SmartBridge (Google Developers Program) and Codesoft!";
    } else {
      mockReply += "I would love to help answer questions about my skills in Excel, Power BI, SQL, Python, machine learning, or details about my internships. How can I help you today?";
    }
    res.json({ reply: mockReply });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      company: company || "N/A",
      message,
      timestamp: new Date().toISOString(),
    };

    // Save message to JSON file
    let messages = [];
    try {
      const data = fs.readFileSync(MESSAGES_FILE, "utf-8");
      messages = JSON.parse(data);
    } catch (e) {
      messages = [];
    }
    messages.push(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");

    // Generate an automatic AI reply for the user based on their contact submission
    let autoReply = `Hi ${name}! Thank you so much for reaching out to me. Your message has been successfully logged! `;
    
    const keyExists = !!process.env.GEMINI_API_KEY;
    if (keyExists) {
      try {
        const ai = getAiClient();
        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: `A visitor named ${name} from ${company || "their company"} just sent me a portfolio message: "${message}". Please write a very brief (2-3 sentence) warm, personalized, professional auto-reply as Harsh's AI Twin, thanking them, acknowledging their message, and inviting them to review my project showcase and interactive simulators. Keep it highly polite.`,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.8,
          }
        });
        if (response.text) {
          autoReply = response.text;
        }
      } catch (e) {
        console.error("Failed to generate AI custom reply", e);
        autoReply += `I will personally review your message and get back to you at ${email} as soon as possible. (Note: Running in offline fallback mode). In the meantime, feel free to try out the interactive clinical parameters slider in my Anemia Detection simulator or run the Kaggle Sales EDA pipeline simulator in my projects above!`;
      }
    } else {
      autoReply += `I will personally review your message and get back to you at ${email} as soon as possible. In the meantime, feel free to try out the interactive clinical parameters slider in my Anemia Detection simulator or run the Kaggle Sales EDA pipeline simulator above!`;
    }

    res.json({ success: true, message: "Your message has been received!", autoReply });
  } catch (err) {
    console.error("Contact API error:", err);
    res.status(500).json({ error: "Failed to process message." });
  }
});

// Serve list of contacts (helpful for user verification/interactive test)
app.get("/api/contacts", (req, res) => {
  try {
    const data = fs.readFileSync(MESSAGES_FILE, "utf-8");
    res.json(JSON.parse(data));
  } catch (e) {
    res.json([]);
  }
});

// Setup Vite Dev Server / Static Assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully booted on port ${PORT}`);
    console.log(`Live application available at http://localhost:${PORT}`);
  });
}

startServer();
