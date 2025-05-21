import React from 'react';
import Animated from '../components/ui/Animated';
import { Award, Target, Users, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award size={32} className="text-primary" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project we undertake, delivering outcomes that exceed expectations.'
    },
    {
      icon: <Target size={32} className="text-primary" />,
      title: 'Innovation',
      description: 'We embrace innovative approaches and creative solutions to stay ahead in a rapidly evolving landscape.'
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, working closely with our clients to achieve shared goals.'
    },
    {
      icon: <Settings size={32} className="text-primary" />,
      title: 'Adaptability',
      description: 'We maintain flexibility and adaptability to meet the unique challenges each project presents.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | LOKO Agency</title>
        <meta name="description" content="Learn about LOKO Agency's history, mission, values, and the team behind our creative solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-secondary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:max-w-3xl mx-auto text-gray-300">
            Learn about the story, mission, and values that drive our creative agency forward.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Animated direction="left">
              <img 
                src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our Story" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </Animated>
            
            <Animated direction="right">
              <div>
                <span className="text-primary font-medium">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">From Small Studio to Full-Service Agency</h2>
                
                <p className="text-gray-600 mb-4">
                  LOKO Agency was founded in 2015 by a group of passionate creatives who believed in the power of integrated solutions. What started as a small design studio quickly evolved as clients began to request additional services beyond design.
                </p>
                
                <p className="text-gray-600 mb-4">
                  Recognizing the opportunity to provide a more comprehensive approach, we expanded our team and services to cover all aspects of creative and technical solutions. By 2018, we had established ourselves as a full-service agency with capabilities spanning design, photography, web development, digital marketing, construction, and events.
                </p>
                
                <p className="text-gray-600">
                  Today, LOKO Agency comprises over 50 specialists across six distinct service divisions, all working collaboratively to deliver integrated solutions that drive results. Our growth has been fueled by our commitment to excellence, innovative thinking, and genuine partnerships with our clients.
                </p>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-light-gray">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Animated direction="up">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-primary text-2xl font-bold">M</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses through creative solutions that drive growth, enhance brand presence, and create meaningful connections with their audience. We strive to be a true partner to our clients, understanding their unique challenges and delivering tailored solutions that exceed expectations.
                </p>
              </div>
            </Animated>
            
            <Animated direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-primary text-2xl font-bold">V</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be recognized as the leading creative agency that seamlessly integrates diverse services to provide holistic solutions. We envision a future where businesses can access all their creative and technical needs through a single, trusted partner, allowing them to focus on their core operations while we handle the rest.
                </p>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container mx-auto">
          <Animated direction="up">
            <div className="text-center mb-14">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">
                The principles that guide our work, shape our culture, and define our relationships with clients
              </p>
            </div>
          </Animated>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Animated key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </Animated>
            ))}
          </div>
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
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Join Our Team" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </Animated>
          </div>
        </div>
      </section>

      {/* Brands We've Worked With */}
      <section className="section">
        <div className="container mx-auto">
          <Animated direction="up">
            <div className="text-center mb-14">
              <h2 className="section-title">Brands We've Worked With</h2>
              <p className="section-subtitle">
                Trusted by businesses of all sizes across various industries
              </p>
            </div>
          </Animated>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* These would be replaced with actual brand logos */}
            <Animated direction="up">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold">Brand 1</div>
            </Animated>
            <Animated direction="up" delay={0.1}>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold">Brand 2</div>
            </Animated>
            <Animated direction="up" delay={0.2}>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold">Brand 3</div>
            </Animated>
            <Animated direction="up" delay={0.3}>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold">Brand 4</div>
            </Animated>
            <Animated direction="up" delay={0.4}>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold">Brand 5</div>
            </Animated>
            <Animated direction="up" delay={0.5}>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold">Brand 6</div>
            </Animated>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;