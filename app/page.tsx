"use client";

import React from 'react';
import Head from 'next/head';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import AboutTechTrek from './components/AboutTechTrek/AboutTechTrek';
import Speakers from './components/Speakers/Speakers';
import Mentors from './components/Mentors/Mentors';
import EventTimeline from './components/EventTimeline/EventTimeline';
import FAQ from './components/FAQ/FAQ';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>TechTrek | IEEE SRMIST</title>
        <meta name="description" content="Join TechTrek, the inaugural hackathon by IEEE SRM. Code your E-commerce website, collaborate, and innovate with like-minded enthusiasts." />
        <meta name="keywords" content="TechTrek, IEEE SRMIST, hackathon, ideation, opportunities" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Hero />
      <About />
      <AboutTechTrek />
      <Speakers />
      <Mentors />
      <EventTimeline />
      <FAQ />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePage;