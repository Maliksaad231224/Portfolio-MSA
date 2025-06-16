
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const subjects = [
    "Data Wrangling",
    "Data Annotation",
    "API Development",
    "Website Deployment",
    "Dashboard Design",
    "Machine Learning",
    "Data Science"
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Talk
            </span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    First Name
                  </label>
                  <Input 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Last Name
                  </label>
                  <Input 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-4">
                  Select Subject?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {subjects.map((subject, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox 
                        id={subject}
                        className="border-slate-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                      />
                      <label 
                        htmlFor={subject}
                        className="text-sm text-slate-300 cursor-pointer hover:text-white transition-colors"
                      >
                        {subject}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 min-h-32"
                  placeholder="Write your message..."
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-3 rounded-full hover:scale-105 transition-all duration-300">
                <Send className="w-5 h-5 mr-2" />
                Let's Talk
              </Button>
            </form>
          </div>
            
            {/* Footer */}
            <div className="text-center text-slate-400">
              <p>© 2025 Malik Saad Ahmed. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
