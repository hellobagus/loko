import React from 'react';
import { Link } from 'react-router-dom';
import Animated from '../ui/Animated';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="section bg-light-gray">
      <div className="container mx-auto">
        <Animated direction="up">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              We offer comprehensive solutions across multiple disciplines to meet all your business needs
            </p>
          </div>
        </Animated>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Animated key={service.id} direction="up" delay={index * 0.1} duration={0.6}>
              <ServiceCard service={service} index={index} />
            </Animated>
          ))}
        </div>
        
        <Animated direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </Animated>
      </div>
    </section>
  );
};

export default Services;