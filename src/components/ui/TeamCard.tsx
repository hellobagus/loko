import React from 'react';
import { TeamMember } from '../../types';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative overflow-hidden h-80">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-gray-600 mb-2">{member.role}</p>
        <p className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-3">
          {member.department}
        </p>
        
        <p className="text-gray-600 text-sm mb-4">
          {member.bio.length > 120 ? `${member.bio.substring(0, 120)}...` : member.bio}
        </p>
        
        <div className="flex space-x-3">
          {member.social.linkedin && (
            <a 
              href={member.social.linkedin} 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <Linkedin size={18} />
            </a>
          )}
          
          {member.social.twitter && (
            <a 
              href={member.social.twitter} 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label={`${member.name}'s Twitter profile`}
            >
              <Twitter size={18} />
            </a>
          )}
          
          {member.social.instagram && (
            <a 
              href={member.social.instagram} 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label={`${member.name}'s Instagram profile`}
            >
              <Instagram size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;