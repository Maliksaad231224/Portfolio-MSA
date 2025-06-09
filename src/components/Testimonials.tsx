
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
const testimonials = [
  {
    name: "hansvpraag",
    location: "Spain",
    feedback:
      "Malik did a good job but it is quite difficult to improve the SEO from websites made in React JS. I still appreciate the effort of him and his quick response time. Thank you and will hire again as promised.",
    rating: 4.3,
  },
  {
    name: "hansvpraag",
    location: "Spain",
    feedback:
      "Very good, managed to fix problems and help with email sending in code. There were problems between front-end and back-end coordination in my project. Definitely worthy, Malik is an exceptional programmer.",
    rating: 4.3,
  },
  {
    name: "bush916",
    location: "United States",
    feedback:
      "Malik provided an exceptional eye for detail while working with my very complex data set. Proactive and efficient approach. Well done!",
    rating: 5,
  },
  {
    name: "hansvpraag",
    location: "Spain",
    feedback:
      "Very kind and professional, helped me deploy on GitHub and fixed complex errors very quickly. Also taught me to improve my coding skills. Will definitely hire again.",
    rating: 5,
  },
  {
    name: "d3dynastyinc",
    location: "United States",
    feedback: "GREAT MAN. GREAT SERVICE!",
    rating: 5,
  },
  {
    name: "amber_bobby",
    location: "United Kingdom",
    feedback:
      "Professional, helpful and knows IT very well. Super quick and excels in his work.",
    rating: 5,
  },
  {
    name: "bradomskiwilbe",
    location: "Italy",
    feedback: "Great work! Amazing.",
    rating: 5,
  },
  {
    name: "pgervais8",
    location: "France",
    feedback:
      "It was nice working with Malik. Responsive and understanding of the submitted request. Thank you.",
    rating: 4.7,
  },
  {
    name: "eric_bff",
    location: "Germany",
    feedback:
      "Amazing job done by Malik once again. Fast & high quality deliverable. Malik brings tailor-made solutions. Highly recommended!",
    rating: 4,
  },
  {
    name: "acoronel09",
    location: "United States",
    feedback: "Malik is amazing, he knows what he does.",
    rating: 5,
  },
  {
    name: "fanninmathew",
    location: "United States",
    feedback:
      "I gave Malik a large dataset of 200 medical images for annotation. The annotated images are of high accuracy. I highly recommend him.",
    rating: 5,
  },
  {
    name: "eric_bff",
    location: "Germany",
    feedback:
      "I requested help of Malik with cleaning huge dataset (360 x 11900) to make them match for further analysis. And... miracle! Dataset matched perfectly!",
    rating: 4.3,
  },
  {
    name: "nicolaspesola",
    location: "United States",
    feedback: "Great work, fast delivery.",
    rating: 5,
  },
  {
    name: "wasgeurtjenl",
    location: "Netherlands",
    feedback:
      "Thank you for your hard work. Would hire again and recommend if you have similar work.",
    rating: 5,
  },
  {
    name: "justin_delv",
    location:"United Kingdom",
    feedback:"A great fiverr agent, worked quickly and efficiently on our project. A very reliable guy, one to be trusted. If you have a data issue, this guys is the one to reach out to, if you want it to be a good project.",
    rating:5
  },
];
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-lg mb-4 block">Client Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">What </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Clients Say?
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 group"
            >
<div className="flex items-center gap-1 mb-4">
  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
  ))}
</div>              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-cyan-400/30" />
                <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
                  "{testimonial.feedback}"
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <span className="text-slate-400 text-sm">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
