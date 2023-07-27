import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/Searchbar';
import Footer from '../components/Footer';
import { data } from '../../data';
const Home = () => {
  return (
    <div>
      
      
      <SearchBar />
      <Hero />
      <Footer />

      {/* Rest of the page content */}
    </div>
  );
};

export default Home;
