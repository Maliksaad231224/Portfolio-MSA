
import { Database, Brain, BarChart3, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Dataset Reconciliation",
      projects: "6+ Projects",
      description: "Expert data cleaning, deduplication, recounciliation and matching services for large datasets",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Wrangling & Web Scraping",
      projects: "4+ Projects", 
      description: "Transform raw data into structured, analysis-ready formats for smooth usage and analysis",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Web Deployment and Website Mantainence",
      projects: "10+ Projects",
      description: "Deploying HTML, CSS, JS, ReactJS, NextJS Websites on github and Vercel with custom domains",
      gradient: "from-green-400 to-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">My Awesome </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              I offer services in Machine learning, deep learning, data wrangling, data cleaning,
              data analysis, dashboard creation using Power BI and Google Looker Studio.
            </p>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              I also offer my services in deploying complex websites to cloud or any server. I also specialize
              in converting no code webistes to HTML, CSS, JS websites for smooth deployment on Github or Vercel.
            </p>
          
          </div>
          
          <div className="space-y-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <span className="text-slate-400 text-sm">{service.projects}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                </div>
                <p className="text-slate-300 mt-4 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
