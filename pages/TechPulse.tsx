"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Winners from '@/components/Winners/Winners';
import Sponsors from '@/components/Sponsors/Sponsors';
import About from '@/components/About/About';
import AboutTechTrek from '@/components/AboutTechTrek/AboutTechTrek';
import Speakers from '@/components/Speakers/Speakers';
import Workflow from '@/components/Workflow/Workflow';
import EventTimeline from '@/components/EventTimeline/EventTimeline';
import Mentors from '@/components/Mentors/Mentors';
import FAQ from '@/components/FAQ/FAQ';
import Testimonial from '@/components/Testimonial/Testimonial';
import Footer from '@/components/Footer/Footer';

import '../app/globals.css';

const TechPulse: React.FC = () => {
    return (
        <div>

            <Head>
                <title>TechPulse</title>
            </Head>

            <Navbar />
            <Hero />
            <Winners />
            <Sponsors />
            <About />
            <AboutTechTrek />
            <Speakers />
            <Workflow />
            <EventTimeline />
            <Mentors />
            <FAQ />
            <Testimonial />
            <Footer />

        </div>
    );
};

export default TechPulse;