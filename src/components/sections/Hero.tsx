import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden hero-gradient min-h-[90vh] flex items-center">
      <div className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              Creative Solutions for Your Business
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Bring Your Vision <br className="hidden md:block" />
              <span className="text-gradient">to Life</span> with LOKO
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We're a full-service creative agency delivering exceptional design, development, marketing, construction, and event solutions tailored to your unique needs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/services" className="btn btn-primary">
                Explore Our Services
              </Link>
              
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
                <ChevronRight className="ml-1" size={18} />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] md:h-[500px] flex justify-center"
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="LOKO Agency Team" 
                className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover rounded-full shadow-2xl z-10 relative"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-20 -left-8 w-16 h-16 bg-design rounded-lg -rotate-12 opacity-80"></div>
              <div className="absolute bottom-10 -right-6 w-20 h-20 bg-web rounded-full opacity-80"></div>
              <div className="absolute -top-8 right-16 w-12 h-12 bg-event rounded-lg rotate-12 opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="hidden md:block absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full"></div>
      <div className="hidden md:block absolute bottom-12 -left-12 w-48 h-48 bg-accent/5 rounded-full"></div>
    </section>
  );
};

export default Hero;