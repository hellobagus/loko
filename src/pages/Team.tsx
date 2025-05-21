import React from 'react';
import { teamMembers } from '../data/team';
import Animated from '../components/ui/Animated';
import TeamCard from '../components/ui/TeamCard';
import { Helmet } from 'react-helmet-async';

const Team: React.FC = () => {
  // Group team members by department
  const departments = teamMembers.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }
    acc[member.department].push(member);
    return acc;
  }, {} as Record<string, typeof teamMembers>);

  return (
    <>
      <Helmet>
        <title>Our Team | LOKO Agency</title>
        <meta name="description" content="Meet the talented professionals behind LOKO Agency's creative and technical services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl md:max-w-3xl mx-auto text-gray-300">
            Meet the talented professionals who bring creativity, expertise, and passion to every project
          </p>
        </div>
      </section>

      {/* Team Members by Department */}
      <section className="section">
        <div className="container mx-auto">
          <Animated direction="up">
            <div className="text-center mb-14">
              <h2 className="section-title">Meet the LOKO Family</h2>
              <p className="section-subtitle">
                Our diverse team of experts work together to deliver exceptional results
              </p>
            </div>
          </Animated>

          {Object.entries(departments).map(([department, members], deptIndex) => (
            <div key={department} className="mb-20 last:mb-0">
              <Animated direction="up" delay={deptIndex * 0.1}>
                <h2 className={`text-2xl font-bold mb-8 pb-2 border-b-2 border-${members[0].department.split(' ')[1].toLowerCase()}`}>
                  {department}
                </h2>
              </Animated>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                  <Animated key={member.id} direction="up" delay={(index * 0.1) % 0.5}>
                    <TeamCard member={member} />
                  </Animated>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Animated direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
                <p className="text-white/90 mb-6">
                  We're always looking for talented individuals who share our passion for creativity and excellence. If you're interested in joining the LOKO family, we'd love to hear from you.
                </p>
                <p className="text-white/90 mb-8">
                  We offer a collaborative work environment, opportunities for professional growth, and the chance to work on exciting projects across various industries.
                </p>
                <a href="mailto:careers@lokoagency.com" className="btn bg-white text-primary hover:bg-white/90">
                  Explore Careers
                </a>
              </div>
            </Animated>
            
            <Animated direction="right">
              <div className="bg-white/10 p-6 md:p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Current Openings</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors">
                    <h4 className="font-bold">Senior Graphic Designer</h4>
                    <p className="text-white/80 text-sm">LOKO DESAIN • Full-time</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors">
                    <h4 className="font-bold">Web Developer</h4>
                    <p className="text-white/80 text-sm">LOKO WEB & APP • Full-time</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors">
                    <h4 className="font-bold">Digital Marketing Specialist</h4>
                    <p className="text-white/80 text-sm">LOKO DIGITAL MARKETING • Full-time</p>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition-colors">
                    <h4 className="font-bold">Event Coordinator</h4>
                    <p className="text-white/80 text-sm">LOKO EVENT & GATHERING • Full-time</p>
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="section">
        <div className="container mx-auto">
          <Animated direction="up">
            <div className="text-center mb-14">
              <h2 className="section-title">Our Culture</h2>
              <p className="section-subtitle">
                The values and principles that shape our work environment and drive our success
              </p>
            </div>
          </Animated>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Animated direction="up">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold mb-3">Creativity</h3>
                <p className="text-gray-600">
                  We foster an environment where creative thinking is encouraged and innovation thrives. We believe in pushing boundaries and exploring new ideas.
                </p>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of teamwork and collaboration. By working together across disciplines, we deliver more comprehensive and effective solutions.
                </p>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold mb-3">Growth</h3>
                <p className="text-gray-600">
                  We're committed to personal and professional growth. We invest in our team's development and create opportunities for advancement.
                </p>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do. Our commitment to quality and attention to detail sets us apart from the competition.
                </p>
              </div>
            </Animated>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;