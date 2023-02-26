import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Social from '../../components/social/Social';
import HomeOutlet from '../home/Home.Outlet';
import AboutOutlet from '../about/About.Outlet';
import ExperienceOutlet from '../experience/Experience.Outlet';
import ContactOutlet from '../contact/Contact.Outlet';

function Landing() {
  return (
    <div>
        <Navbar />
        <HomeOutlet />
        <AboutOutlet />
        <ExperienceOutlet /> 
        <ContactOutlet />
        <Social />
    </div>
  )
}

export default Landing