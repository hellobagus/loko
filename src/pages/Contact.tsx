import React from 'react';
import Animated from '../components/ui/Animated';
import ContactForm from '../components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | LOKO Agency</title>
        <meta name="description" content="Get in touch with LOKO Agency for creative, marketing, construction, and event solutions tailored to your needs." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:max-w-3xl mx-auto text-gray-300">
            Get in touch with our team to discuss how we can help with your next project
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Animated direction="left">
              <div>
                <span className="text-primary font-medium">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">We'd Love to Hear From You</h2>
                <p className="text-gray-600 mb-8">
                  Whether you have a question about our services, want to request a quote, or just want to say hello, we're here to help. Fill out the form, and our team will get back to you as soon as possible.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        123 Business Street, Suite 100<br />
                        Metropolis City, MC 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                          +1 (234) 567-890
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@lokoagency.com" className="hover:text-primary transition-colors">
                          info@lokoagency.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Service-specific contacts */}
                <div className="bg-light-gray p-6 rounded-lg">
                  <h3 className="font-bold mb-4">Department-Specific Contacts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-start">
                        <div className={`w-8 h-8 bg-${service.color}/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0`}>
                          <span className={`text-${service.color} text-xs font-bold`}>
                            {service.name.charAt(5)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium">{service.name}</h4>
                          <a 
                            href={`mailto:${service.id.toLowerCase()}@lokoagency.com`} 
                            className="text-sm text-gray-600 hover:text-primary transition-colors"
                          >
                            {service.id.toLowerCase()}@lokoagency.com
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Animated>
            
            <Animated direction="right">
              <ContactForm />
            </Animated>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-light-gray">
        <div className="container mx-auto">
          <Animated direction="up">
            <div className="text-center mb-14">
              <h2 className="section-title">Find Us</h2>
              <p className="section-subtitle">
                Visit our office to meet the team and discuss your project in person
              </p>
            </div>
          </Animated>
          
          <Animated direction="up" delay={0.1}>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              {/* Placeholder for Google Maps (in a real implementation, you would use the Google Maps API) */}
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center p-8">
                  Google Maps Embed would go here<br/>
                  <span className="text-sm">123 Business Street, Suite 100, Metropolis City, MC 12345</span>
                </p>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="section">
        <div className="container mx-auto">
          <Animated direction="up">
            <div className="text-center mb-14">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Explore our full range of services to find the right solution for your needs
              </p>
            </div>
          </Animated>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Animated key={service.id} direction="up" delay={index * 0.1 % 0.5}>
                <Link 
                  to={`/services/${service.id}`}
                  className={`block bg-white p-6 rounded-lg shadow-md border-l-4 border-${service.color} hover:shadow-lg transition-shadow`}
                >
                  <h3 className={`text-xl font-bold mb-2 text-${service.color}`}>{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className={`text-${service.color} font-medium`}>
                    Learn more →
                  </span>
                </Link>
              </Animated>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;