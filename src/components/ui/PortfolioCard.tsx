import React from 'react';
import { PortfolioItem } from '../../types';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="portfolio-item relative overflow-hidden rounded-lg group">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="portfolio-overlay flex-col p-6">
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-white/90 text-sm mb-3">{item.description}</p>
        <div className="mt-auto">
          <span className="inline-block px-3 py-1 bg-white/20 rounded text-white text-xs mb-2">
            {item.category.toUpperCase()}
          </span>
          {item.link && (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-white hover:text-accent text-sm"
            >
              View Project <ExternalLink size={14} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;