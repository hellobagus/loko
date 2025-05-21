import React from 'react';
import { Link } from 'react-router-dom';
import Animated from '../ui/Animated';
import { ChevronRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-primary">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-12 right-12 w-48 h-48 bg-white/5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <Animated direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
          </Animated>
          
          <Animated direction="up" delay={0.1}>
            <p className="text-white/90 text-lg mb-8">
              Contact us today to discuss how LOKO can help bring your vision to life.
              Our team of experts is ready to collaborate with you on your next project.
            </p>
          </Animated>
          
          <Animated direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-white/90"
              >
                Contact Us
              </Link>
              
              <Link 
                to="/services" 
                className="btn border-2 border-white text-white hover:bg-white/10"
              >
                Explore Services
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;