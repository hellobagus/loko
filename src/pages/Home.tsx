import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Team from '../components/sections/Team';
import ContactCTA from '../components/sections/ContactCTA';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>LOKO Agency - Creative Solutions for Your Business</title>
        <meta name="description" content="LOKO Agency offers premium design, photography, web development, digital marketing, construction, and event services to help your business succeed." />
      </Helmet>

      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Team />
      <ContactCTA />
    </>
  );
};

export default Home;