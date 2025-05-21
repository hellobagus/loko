import React from 'react';
import { Link } from 'react-router-dom';
import Animated from '../ui/Animated';
import { Award, Users, ThumbsUp, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { 
      icon: <Award className="text-primary mb-2" size={28} />, 
      value: '9+', 
      label: 'Years Experience' 
    },
    { 
      icon: <Users className="text-primary mb-2" size={28} />, 
      value: '50+', 
      label: 'Team Members' 
    },
    { 
      icon: <ThumbsUp className="text-primary mb-2" size={28} />, 
      value: '200+', 
      label: 'Happy Clients' 
    },
    { 
      icon: <Clock className="text-primary mb-2" size={28} />, 
      value: '500+', 
      label: 'Projects Completed' 
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Animated direction="left" duration={0.7}>
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="LOKO Agency Team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg md:p-8">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      {stat.icon}
                      <h4 className="text-2xl md:text-3xl font-bold">{stat.value}</h4>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Animated>

          <Animated direction="right" duration={0.7}>
            <div className="lg:pl-8">
              <span className="text-primary font-medium">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your One-Stop Creative Solution Partner</h2>
              
              <p className="text-gray-600 mb-6">
                LOKO Agency was founded in 2015 with a simple mission: to provide businesses with comprehensive creative solutions under one roof. What began as a small design studio has evolved into a full-service agency with expertise across multiple disciplines.
              </p>
              
              <p className="text-gray-600 mb-8">
                Our team of 50+ creative professionals brings together diverse skills and perspectives to deliver exceptional results for every client. We believe in collaborative partnerships, innovative thinking, and measurable outcomes. Whatever your needs - from brand design to event planning, web development to construction - LOKO has the expertise to bring your vision to life.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn btn-primary">
                  Learn More
                </Link>
                <Link to="/team" className="btn btn-outline">
                  Meet Our Team
                </Link>
              </div>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default About;