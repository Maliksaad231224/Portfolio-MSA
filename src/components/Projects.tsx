
import { ExternalLink, Github, Database, BarChart3, Brain, Globe, Shield, Zap } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
const initialProjects = [
  {
    title: "Therapy Chatbot using DialoGPT",
    description:
      "Developed a therapy chatbot using DialoGPT fine-tuned on a Q&A dataset. Used SFTTrainer from Transformers with 5 epochs. Streamlit was used for the frontend.",
    tech: ["DialoGPT", "Transformers", "Streamlit", "NLP"],
    category: "AI Engineering",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-pink-400 to-red-500"
  },
  {
    title: "RAG-Based Personal Counsellor Chatbot",
    description:
      "Built a personalized RAG chatbot using Langchain, Pinecone, and Flask. Data was scraped from TED Talks and converted to transcripts. Used LLMs like Deepseek, GROK, LLAMA, Mistral, and Gemma 2. Evaluated using TextStat and ROUGE.",
    tech: ["Langchain", "Pinecone", "Flask", "Deepseek", "Mistral", "LLMs"],
    category: "AI Engineering",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-purple-400 to-indigo-500"
  },
  {
    title: "Programming Habits Power BI Report",
    description:
      "Created a Power BI report from survey data collected from 748 students across universities. Analyzed stress, anxiety, work ethics, and behavior. Data was ingested via a RESTful API.",
    tech: ["Power BI", "Survey Data", "REST API", "Data Visualization"],
    category: "Data Analysis",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "AI Web Scraper using Deepseek-r1 and Selenium",
    description:
      "Developed a web scraping tool using Selenium and Deepseek-r1 to extract and parse HTML content automatically from websites.",
    tech: ["Deepseek-r1", "Selenium", "Automation", "Web Scraping"],
    category: "Automation",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-blue-500 to-violet-500"
  }
];
const additionalProjects = [
  {
    title: "South Africa ID Card Text Classification",
    description: "Built an LSTM-based text classifier on a South African ID card dataset to categorize and interpret card-related information.",
    tech: ["LSTM", "Text Classification", "TensorFlow", "NLP"],
    category: "Deep Learning",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-green-400 to-emerald-500"
  },
  {
    title: "Software House Management System",
    description: "Designed and implemented a complete software house management system for handling projects, teams, tasks, and finances.",
    tech: ["Python", "SQL", "Flask", "Project Management"],
    category: "Software Engineering",
    icon: <Brain  className="w-6 h-6" />,
    gradient: "from-teal-400 to-cyan-500"
  },
  {
    title: "Lexicon-Based Sentiment Analysis in C++",
    description: "Implemented a lexicon-based sentiment analysis engine in C++ for text classification using sentiment word dictionaries.",
    tech: ["C++", "Sentiment Analysis", "Lexicon-based NLP"],
    category: "AI Engineering",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-blue-400 to-purple-400"
  },
   {
    title: "Agile Story Point Estimation using Unsupervised Learning",
    description: "Developed a research Project to assign agile story points to tasks data obtained from Github and Plane",
    tech: ["Python", "NLP", "Unsupervised Learning Algorithms"],
    category: "Machine Learning",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-blue-400 to-purple-400"
  },
     {
    title: "Agentic Chess using MinMax Algorithm",
    description: "Developed a Player vs AI Chess using MinMax Algorithm and Greedy algorithm",
    tech: ["Python", "Artificial Intelligence", "Data Structures and Algorithms"],
    category:  "Artificial Intelligence",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-blue-400 to-purple-400"
  }

];

  const displayedProjects = showAllProjects 
    ? [...initialProjects, ...additionalProjects] 
    : initialProjects;

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-3000"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full opacity-40 animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-emerald-400 rounded-full opacity-50 animate-bounce delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-lg mb-4 block">Featured Work</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">My Data </span>
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Transforming complex data into actionable insights through innovative analysis and machine learning solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <div>
                  <span className="text-sm text-slate-400">{project.category}</span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-slate-700/50 text-cyan-300 rounded-full text-sm hover:bg-slate-600/50 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 transform"
          >
            {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
