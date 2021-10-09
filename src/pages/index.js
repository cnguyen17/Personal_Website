import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

import {
  homeObjOne,
  // projectOne,
  // projectTwo,
  Contact,
} from '../components/InfoSection/Data';

import Resume from '../components/Resume';
import {Experience} from '../components/Resume/Data';
import MSUKonnect from '../components/MSUKonnect';
import {projectOne,projectTwo,} from '../components/MSUKonnect/Data';


import Services from '../components/Services';
import Internships from '../components/Internships';


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Resume {...Experience}/>
      <Services />
      <MSUKonnect {...projectOne} />
      <MSUKonnect {...projectTwo} />
      <Internships/>
      <InfoSection {...Contact} />
      <Footer />
    </>
  );
}

export default Home;
