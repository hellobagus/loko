import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceType } from '../../types';
import { ChevronRight } from 'lucide-react';
import * as icons from 'lucide-react';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = (icons as any)[service.icon.charAt(0).toUpperCase() + service.icon.slice(1)] || icons.Zap;
  
  return (
    <div className={`service-card p-6 h-full flex flex-col`}>
      <div className={`w-14 h-14 rounded-lg mb-5 flex items-center justify-center text-white bg-${service.color}`}>
        <IconComponent size={24} />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{service.name}</h3>
      
      <p className="text-gray-600 mb-5 flex-grow">
        {service.description}
      </p>
      
      <Link 
        to={`/services/${service.id}`} 
        className={`inline-flex items-center font-medium text-${service.color} hover:underline mt-2`}
      >
        Learn more
        <ChevronRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;