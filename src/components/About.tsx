
const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-2xl"></div>
            <img 
              src="images\saad.jpg"
              alt="Malik Saad Ahmed"
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">This is </span>
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Malik Saad Ahmed
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300">
              <p className="leading-relaxed">
                I am working as a freelance data analyst right now. I turn your raw data into actionable
                insights and provide deep insights for smooth decision making.
              </p>
               <p className="leading-relaxed">
             Furthermore, I also provide services in web deployment and website maintenance using GitHub and Vercel. With my small team of skilled web developers and data analysts, I have retained multiple clients who offer regular projects and have become satisfied customers.
              </p>
              <p className="leading-relaxed">
                With my strong analytical and data analysis skills, I will provide expert data
                wrangling, data annotation, dashboard and database design services for your business
                and organization.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50">
                <h4 className="text-cyan-400 font-semibold mb-2">Education</h4>
                <p className="text-sm text-slate-300">Bachelor of AI from Air University</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50">
                <h4 className="text-teal-400 font-semibold mb-2">Experience</h4>
                <p className="text-sm text-slate-300">AI Engineer & Data Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
