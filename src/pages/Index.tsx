
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900">
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-transparent to-emerald-900/50 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-900/30 via-transparent to-teal-900/30 animate-pulse delay-1000"></div>
        
        {/* Moving gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-bounce delay-2000" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-bounce delay-4000" style={{ animationDuration: '12s' }}></div>
        </div>
        
        {/* Subtle animated mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.1),transparent_50%)] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent_50%)] animate-pulse delay-2000"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
