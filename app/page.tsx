"use client";

import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Sponsors from './components/Sponsors/Sponsors';
import About from './components/About/About';
import AboutHactrix from './components/AboutHactrix/AboutHactrix';
import Speakers from './components/Speakers/Speakers';
import Mentors from './components/Mentors/Mentors';
import Workflow from './components/Workflow/Workflow';
import FAQ from './components/FAQ/FAQ';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div className='dark bg-black'>

      <Navbar />

      <Hero />
      <Sponsors />
      <About />
      <AboutHactrix />
      <Speakers />
      <Mentors />
      <Workflow />
      <FAQ />
      <Testimonial />

      <Footer />

    </div>
  );
};

export default HomePage;