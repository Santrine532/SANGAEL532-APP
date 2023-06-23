import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* Rest of the page content */}
    </div>
  );
};

export default Home;