
import { useEffect, useState } from "react";

const Stats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    retention: 0
  });

  useEffect(() => {
    const animateCount = (target: number, key: keyof typeof counts) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    };

    // Trigger animations after component mounts
    setTimeout(() => {
      animateCount(20, 'projects');
      animateCount(85, 'retention');
    }, 500);
  }, []);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
            <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              {counts.projects}+
            </div>
            <p className="text-slate-300 text-lg">Top Client Projects Completed</p>
          </div>
          
          <div className="text-center p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 group">
            <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              {counts.retention}%
            </div>
            <p className="text-slate-300 text-lg">Client Retention Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
