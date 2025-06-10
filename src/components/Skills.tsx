
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      percentage: 95,
      skills: ["Python", "OpenRefine", "Power BI", "Google Data Looker Studio", "Roboflow", "SQL"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "AI Engineering", 
      percentage: 85,
      skills: ["Machine Learning", "Deep Learning", "Fine Tuning LLMs","Retrieval Augmented Generation"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Web Deployment and Mantainence",
      percentage: 75,
      skills: ["Github", "Vercel", "Netlify"],
      color: "from-green-400 to-cyan-500"
    },
    {
            title: "Other Services",
      percentage: 75,
      skills: ["Data Annotation using Roboflow", "Data Wrangling", "Web Scraping"],
      color: "from-green-400 to-cyan-500"

    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">My Awesome </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              I provide expert services in data related projects. With my skills of data analysis, 
              machine learning, deep learning, data annotation, I empower clients in turning their 
              raw data into actionable insights.
            </p>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              I provide expert services in web deployment using Vercel and Github. I have worked with multiple clients
              in converting no code websites to HTML, CSS, JS websites. I have helped vibe coders deploy and fix AI Generated
              Websites.

            </p>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Furthermore, I have offered mentorships to my university juniors and guided them in the development of their
              DBMS Business Management Applications susing QT Creator. I have delievered workshops on Github and Excel to a wide
              range of audiences.
            </p>
            
            
          </div>
          
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <span className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.percentage}%
                  </span>
                </div>
                
                <Progress 
                  value={category.percentage} 
                  className="h-2 mb-4"
                />
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${category.color} text-white hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
