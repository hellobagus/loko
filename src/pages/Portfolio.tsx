import React, { useState, useEffect } from 'react';
import { portfolioItems } from '../data/portfolio';
import Animated from '../components/ui/Animated';
import PortfolioCard from '../components/ui/PortfolioCard';
import { Helmet } from 'react-helmet';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [isLoading, setIsLoading] = useState(false);
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'design', name: 'Design' },
    { id: 'jepret', name: 'Photography' },
    { id: 'webApp', name: 'Web & App' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'konstruksi', name: 'Construction' },
    { id: 'event', name: 'Events' }
  ];
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (activeCategory === 'all') {
        setFilteredItems(portfolioItems);
      } else {
        setFilteredItems(portfolioItems.filter(item => item.category === activeCategory));
      }
      setIsLoading(false);
    }, 300);
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Portfolio | LOKO Agency</title>
        <meta name="description" content="Explore LOKO Agency's portfolio of creative and professional projects across design, photography, web development, marketing, construction, and events." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:max-w-3xl mx-auto text-gray-300">
            Explore our work and discover how we've helped businesses achieve their goals
          </p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section">
        <div className="container mx-auto">
          <Animated direction="up">
            <div className="flex justify-center flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-white font-medium'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </Animated>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Animated key={item.id} direction="up" delay={index * 0.1 % 0.5} duration={0.5}>
                  <PortfolioCard item={item} />
                </Animated>
              ))}
              
              {filteredItems.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No projects found</h3>
                  <p className="text-gray-600">
                    We don't have any projects in this category yet. Please check back later or explore other categories.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section bg-light-gray">
        <div className="container mx-auto">
          <Animated direction="up">
            <div className="text-center mb-14">
              <h2 className="section-title">Client Testimonials</h2>
              <p className="section-subtitle">
                What our clients say about working with LOKO Agency
              </p>
            </div>
          </Animated>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Animated direction="up">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold">John Doe</h4>
                    <p className="text-sm text-gray-600">CEO, Tech Startup</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The LOKO Web & App team delivered our product beyond our expectations. Their attention to detail and technical expertise made our vision a reality. Highly recommend!"
                </p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    JS
                  </div>
                  <div>
                    <h4 className="font-bold">Jane Smith</h4>
                    <p className="text-sm text-gray-600">Marketing Director, Retail Brand</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "LOKO DESAIN transformed our brand identity and helped us stand out in a crowded market. Their creative solutions and strategic approach drove real business results."
                </p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    RL
                  </div>
                  <div>
                    <h4 className="font-bold">Robert Lee</h4>
                    <p className="text-sm text-gray-600">Event Manager, Corporate Firm</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The LOKO EVENT & GATHERING team executed our company retreat flawlessly. Their attention to detail, creativity, and professionalism made the event a huge success."
                </p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;