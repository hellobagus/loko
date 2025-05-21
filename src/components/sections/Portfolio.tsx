import React, { useState } from 'react';
import Animated from '../ui/Animated';
import PortfolioCard from '../ui/PortfolioCard';
import { portfolioItems } from '../../data/portfolio';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const categories = ['all', 'design', 'jepret', 'webApp', 'marketing', 'konstruksi', 'event'];
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredItems = activeCategory === 'all' 
    ? portfolioItems.slice(0, 6) // Limit to 6 items on homepage
    : portfolioItems.filter(item => item.category === activeCategory).slice(0, 6);

  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto">
        <Animated direction="up">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Portfolio</h2>
            <p className="section-subtitle">
              Explore our recent projects and see how we've helped clients achieve their goals
            </p>
          </div>
        </Animated>

        <Animated direction="up" delay={0.1}>
          <div className="flex justify-center flex-wrap gap-2 mb-10">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All' : 
                 category === 'webApp' ? 'Web & App' :
                 category === 'jepret' ? 'Photography' :
                 category === 'konstruksi' ? 'Construction' :
                 category === 'event' ? 'Events' :
                 category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </Animated>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Animated key={item.id} direction="up" delay={index * 0.1} duration={0.5}>
              <PortfolioCard item={item} />
            </Animated>
          ))}
        </div>

        <Animated direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </Animated>
      </div>
    </section>
  );
};

export default Portfolio;