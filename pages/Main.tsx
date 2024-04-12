"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import EventCountdown from '@/components/EventCountdown/EventCountdown';
import About from '@/components/About/About';
import Tracks from '@/components/Tracks/Tracks';
import Mentors from '@/components/Mentors/Mentors';
import EventTimeline from '@/components/EventTimeline/EventTimeline';
import FAQ from '@/components/FAQ/FAQ';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>TechTrek 2.0 | IEEE SRMIST</title>
        <meta name="description" content="Empower Computer Science and Engineering students to innovate and create impactful solutions using cutting-edge technologies in a supportive online environment. Join PROTOCOL 1.0 hackathon now!" />
        <meta name="keywords" content="PROTOCOL 1.0, hackathon, IEEE SRMIST, computer science, engineering, innovation, technology" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Navbar />
      <Hero />
      <EventCountdown />
      <About />
      <Tracks />
      <Mentors />
      <EventTimeline />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;