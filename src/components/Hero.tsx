
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Mail, Star } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background elements with blue-green theme */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
         <div className="order-2 lg:order-1 flex justify-center">
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-pulse"></div>
    <div className="relative w-80 h-80 bg-slate-800 rounded-full p-2 overflow-hidden">
      <img 
        src="/images/saad1.jpg" 
        alt="Malik Saad Ahmed"
        className="w-full h-full object-cover rounded-full hover:scale-95 transition-transform duration-300"
      />
    </div>
  </div>
</div>
 
          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300">awansaad6927@gmail.com</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Malik Saad Ahmed
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl animate-fade-in">
              A passionate <span className="text-cyan-400 font-semibold">Data Professional</span> with expertise in 
              data analysis, AI engineering, and turning complex data into actionable insights.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in">
              <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300">
                HIRE ME!
              </Button>
              <Button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
              >
                VIEW WORK
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in">
              <a href="https://github.com/Maliksaad231224" target="_blank" rel="noopener noreferrer" 
                 className="group flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-slate-700/50 transition-all duration-300">
                <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                <span className="text-slate-300 group-hover:text-white">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/malik-saad-ahmed-93404a318/" target="_blank" rel="noopener noreferrer"
                 className="group flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-blue-600/50 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-blue-400" />
                <span className="text-slate-300 group-hover:text-blue-400">LinkedIn</span>
              </a>
              <a href="https://www.fiverr.com/saad231224?source=gig_page&gigs=slug%3Ado-data-wrangling-data-cleaning-using-python-openrefine-6a00%2Cpckg_id%3A1" target="_blank" rel="noopener noreferrer"
                 className="group flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-green-600/50 transition-all duration-300">
                <Star className="w-5 h-5 text-slate-300 group-hover:text-green-400" />
                <span className="text-slate-300 group-hover:text-green-400">Fiverr</span>
              </a>
              <a href="images\Malik_Saad_Ahmed_CV.pdf" target="_blank" rel="noopener noreferrer"
                 className="group flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-emerald-600/50 transition-all duration-300">
                <FileText className="w-5 h-5 text-slate-300 group-hover:text-emerald-400" />
                <span className="text-slate-300 group-hover:text-emerald-400">CV</span>
              </a>
            </div>
            
            {/* Experience Badge */}
            <div className="mt-8 inline-flex items-center gap-4 bg-slate-800/30 backdrop-blur-sm p-4 rounded-2xl animate-fade-in">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">2+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
