

import React from 'react';
import ShowList from '../components/ShowList';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-screen">
      <h1>Home Screen</h1>
      <ShowList />
    </div>
  );
};

export default Home;
