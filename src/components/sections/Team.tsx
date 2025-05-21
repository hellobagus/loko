import React from 'react';
import Animated from '../ui/Animated';
import TeamCard from '../ui/TeamCard';
import { teamMembers } from '../../data/team';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  // Only show first 3 team members on homepage
  const featuredTeamMembers = teamMembers.slice(0, 3);

  return (
    <section id="team" className="section bg-light-gray">
      <div className="container mx-auto">
        <Animated direction="up">
          <div className="text-center mb-14">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Our talented professionals bring diverse expertise and a passion for excellence to every project
            </p>
          </div>
        </Animated>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTeamMembers.map((member, index) => (
            <Animated key={member.id} direction="up" delay={index * 0.1} duration={0.6}>
              <TeamCard member={member} />
            </Animated>
          ))}
        </div>

        <Animated direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <Link to="/team" className="btn btn-primary">
              View All Team Members
            </Link>
          </div>
        </Animated>
      </div>
    </section>
  );
};

export default Team;