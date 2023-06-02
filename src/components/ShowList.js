

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchShows } from '../api';
import './ShowList.css'; 
import parse from 'html-react-parser';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows().then(data => {
      setShows(data);
      console.log(data)
    });
  }, []);

  return (
    <div className="show">
  
      <div className='card'>
      {shows.map(show => (
        <div className="show-item" key={show.show.id}>
           <img src={show.show.image.medium} alt={show.show.name}/>
          <h3>{show.show.name}</h3>
          
          {parse(show.show.summary)}
         
          <Link to={`/summary/${show.show.id}`}>View Summary</Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ShowList;
