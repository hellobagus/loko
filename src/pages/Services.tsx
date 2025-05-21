import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import Animated from '../components/ui/Animated';
import { Helmet } from 'react-helmet';
import * as icons from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | LOKO Agency</title>
        <meta name="description" content="Explore the comprehensive range of creative and professional services offered by LOKO Agency." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:max-w-3xl mx-auto text-gray-300">
            Comprehensive creative solutions tailored to your unique business needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container mx-auto">
          <Animated direction="up">
            <div className="text-center mb-14">
              <h2 className="section-title">What We Offer</h2>
              <p className="section-subtitle">
                Our diverse range of services designed to meet all your business needs under one roof
              </p>
            </div>
          </Animated>

          <div className="grid gap-12">
            {services.map((service, index) => {
              const IconComponent = (icons as any)[service.icon.charAt(0).toUpperCase() + service.icon.slice(1)] || icons.Zap;
              const isEven = index % 2 === 0;

              return (
                <div key={service.id}>
                  <Animated direction={isEven ? 'left' : 'right'}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className={`p-8 rounded-lg border-l-4 border-${service.color} bg-white shadow-lg`}>
                          <div className="flex items-center mb-4">
                            <div className={`w-12 h-12 rounded-full bg-${service.color}/20 flex items-center justify-center mr-4`}>
                              <IconComponent className={`text-${service.color}`} size={24} />
                            </div>
                            <h3 className={`text-2xl font-bold text-${service.color}`}>{service.name}</h3>
                          </div>
                          
                          <p className="text-gray-600 mb-6">
                            {service.description}
                          </p>
                          
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3">Key Features:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <svg className={`w-4 h-4 text-${service.color} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <Link 
                            to={`/services/${service.id}`} 
                            className={`btn bg-${service.color} text-white hover:bg-${service.color}/90`}
                          >
                            Learn More & Get a Quote
                          </Link>
                        </div>
                      </div>
                      
                      <div className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative rounded-lg overflow-hidden shadow-xl">
                          <div className="aspect-w-16 aspect-h-9">
                            <img 
                              src={`https://images.pexels.com/photos/${1000000 + index * 100000}/pexels-photo-${1000000 + index * 100000}.jpeg?auto=compress&cs=tinysrgb&w=800`} 
                              alt={service.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                              }}
                            />
                          </div>
                          <div className={`absolute inset-0 bg-gradient-to-t from-${service.color}/80 to-transparent opacity-60`}></div>
                        </div>
                      </div>
                    </div>
                  </Animated>
                  
                  {index < services.length - 1 && (
                    <div className="my-16 border-b border-gray-200"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light-gray">
        <div className="container mx-auto">
          <Animated direction="up">
            <div className="text-center mb-14">
              <h2 className="section-title">Why Choose LOKO?</h2>
              <p className="section-subtitle">
                Discover the advantages of working with our integrated agency
              </p>
            </div>
          </Animated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Animated direction="up">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">One-Stop Solution</h3>
                <p className="text-gray-600">
                  Access all the creative and professional services your business needs under one roof, eliminating the need to coordinate multiple vendors.
                </p>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Work with dedicated professionals who are specialists in their fields, bringing expertise and experience to every project.
                </p>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Efficiency</h3>
                <p className="text-gray-600">
                  Streamlined processes and integrated workflows ensure faster project completion with consistent quality across all deliverables.
                </p>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Rigorous quality control measures and attention to detail ensure that every project meets our high standards of excellence.
                </p>
              </div>
            </Animated>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;