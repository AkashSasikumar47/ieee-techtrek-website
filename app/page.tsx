"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Winners from './components/Winners/Winners';
import Sponsors from './components/Sponsors/Sponsors';
import About from './components/About/About';
import AboutTechTrek from './components/AboutTechTrek/AboutTechTrek';
import Speakers from './components/Speakers/Speakers';
import Mentors from './components/Mentors/Mentors';
import Workflow from './components/Workflow/Workflow';
import EventTimeline from './components/EventTimeline/EventTimeline';
import FAQ from './components/FAQ/FAQ';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>

      <Head>
        <title>TechTrek | Code Your Commerce Canvas</title>
        <meta name="description" content="Join TechTrek, the inaugural hackathon by IEEE SRM. Code your E-commerce website, collaborate, and innovate with like-minded enthusiasts." />
        <meta name="keywords" content="TechTrek, IEEE SRMIST, hackathon, ideation, opportunities" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logo/apple-touch-icon.png" />

        <meta name="author" content="Akash Sasikumar" />
        <meta property="og:title" content="TechTrek | Code Your Commerce Canvas" />
        <meta property="og:description" content="Join TechTrek, the inaugural hackathon by IEEE SRM. Code your E-commerce website, collaborate, and innovate with like-minded enthusiasts." />
        <meta property="og:image" content="/img/TechTrek_Banner.png" />
        <meta property="og:url" content="https://techtrek.ieeesrmist.com" />
      </Head>

      <Navbar />
      <Hero />
      <Winners />
      <Sponsors />
      <About />
      <AboutTechTrek />
      <Speakers />
      <Mentors />
      <Workflow />
      <EventTimeline />
      <FAQ />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePage;