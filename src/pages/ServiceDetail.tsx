import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import Animated from '../components/ui/Animated';
import ServiceForm from '../components/forms/ServiceForm';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { portfolioItems } from '../data/portfolio';
import PortfolioCard from '../components/ui/PortfolioCard';
import ContactCTA from '../components/sections/ContactCTA';
import * as icons from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Service not found</h2>
        <p className="mb-6">The service you're looking for doesn't exist or may have been moved.</p>
        <Link to="/services" className="btn btn-primary">
          View All Services
        </Link>
      </div>
    );
  }

  const IconComponent = (icons as any)[service.icon.charAt(0).toUpperCase() + service.icon.slice(1)] || icons.Zap;
  
  // Get related portfolio items
  const relatedPortfolio = portfolioItems.filter(item => item.category === service.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{service.name} | LOKO Agency</title>
        <meta name="description" content={service.description} />
      </Helmet>

      {/* Hero Section */}
      <section className={`relative py-32 bg-${service.color} text-white`}>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent mix-blend-multiply"></div>
        <div className="container mx-auto relative z-10">
          <button 
            onClick={() => navigate('/services')} 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </button>
          
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
              <IconComponent className="text-white" size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.name}</h1>
          </div>
          
          <p className="text-xl md:max-w-3xl text-white/90">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Animated direction="up">
                <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
                <p className="text-gray-600 mb-8">
                  Our {service.name.toLowerCase()} services are designed to meet your specific needs and help you achieve your goals. With our expert team and proven processes, we deliver results that make a difference for your business.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex">
                      <div className={`h-12 w-12 rounded-full bg-${service.color}/10 flex items-center justify-center flex-shrink-0`}>
                        <svg className={`w-6 h-6 text-${service.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-lg">{feature}</h3>
                        <p className="text-gray-600 mt-1">
                          {/* Generic description based on feature name */}
                          {`Professional ${feature.toLowerCase()} services tailored to your specific needs and requirements.`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-light-gray p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <div>
                        <h4 className="font-semibold">Discovery & Analysis</h4>
                        <p className="text-gray-600">We start by understanding your needs, goals, and challenges to create a tailored strategy.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <div>
                        <h4 className="font-semibold">Strategy & Planning</h4>
                        <p className="text-gray-600">Our team develops a comprehensive plan with clear deliverables, timelines, and milestones.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <div>
                        <h4 className="font-semibold">Implementation & Execution</h4>
                        <p className="text-gray-600">We bring your project to life with attention to detail and commitment to quality.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <div>
                        <h4 className="font-semibold">Review & Refinement</h4>
                        <p className="text-gray-600">We review progress regularly, making adjustments as needed to ensure optimal results.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">5</span>
                      <div>
                        <h4 className="font-semibold">Delivery & Support</h4>
                        <p className="text-gray-600">We deliver the final product and provide ongoing support to ensure your continued success.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </Animated>
              
              {/* Related Portfolio */}
              {relatedPortfolio.length > 0 && (
                <Animated direction="up" delay={0.2}>
                  <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-6">Related Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {relatedPortfolio.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                      ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                      <Link to="/portfolio" className="btn btn-outline">
                        View All Projects
                        <ExternalLink size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </Animated>
              )}
            </div>
            
            <Animated direction="right">
              <div>
                <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                <ServiceForm service={service} />
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light-gray">
        <div className="container mx-auto">
          <Animated direction="up">
            <div className="text-center mb-14">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Common questions about our {service.name.toLowerCase()} services
              </p>
            </div>
          </Animated>
          
          <div className="max-w-3xl mx-auto">
            <Animated direction="up">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">What is the typical timeline for a {service.name.toLowerCase()} project?</h3>
                  <p className="text-gray-600">
                    Project timelines vary based on scope and complexity. A typical {service.name.toLowerCase()} project can take anywhere from a few weeks to several months. We'll provide a detailed timeline during our initial consultation.
                  </p>
                </div>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">How do you price your {service.name.toLowerCase()} services?</h3>
                  <p className="text-gray-600">
                    Our pricing is based on the scope, complexity, and timeline of each project. We provide detailed quotes after understanding your specific requirements to ensure transparency and value for your investment.
                  </p>
                </div>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Do you offer ongoing support after project completion?</h3>
                  <p className="text-gray-600">
                    Yes, we provide ongoing support and maintenance options for all our services. We believe in building long-term relationships with our clients and ensuring the continued success of your projects.
                  </p>
                </div>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">How do we get started with LOKO for our {service.name.toLowerCase()} needs?</h3>
                  <p className="text-gray-600">
                    Getting started is easy! Simply fill out the quote request form on this page, and our team will contact you within 24 hours to schedule an initial consultation to discuss your project in detail.
                  </p>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>
      
      <ContactCTA />
    </>
  );
};

export default ServiceDetail;