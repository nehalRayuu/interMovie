

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const { id } = useParams();
  
  const [movie,setMovie] = useState([]);
  const [formData, setFormData] = useState({
    id: id,
    name: '',
    email: '',
    numberOfTickets: '',
  });

  
  useEffect(() => {
   
    getData()
   
}, [])
  // console.log(formData.id +"form data")
const getData = async() => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const data = await response.json();
  // console.log(data)

  setMovie(data)
    
    
}



  const handleSubmit = event => {
    event.preventDefault();
  
    localStorage.setItem('formData', JSON.stringify(formData));
  };
  
 
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  for (let x in localStorage){
    console.log(localStorage[x] + 'str values');
}

  return (
    <div className="booking-form-container">
      <h1>Booking Form for movie id : {movie.id} and name : {movie.name}</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <label  className='form-label' htmlFor="name">Name</label>
        <input className='form-input' type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />

        <label className='form-label' htmlFor="email">Email</label>
        <input className='form-input' type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />

        

        <label  className='form-label' htmlFor="numberOfTickets">Number of Tickets</label>
        <input className='form-input' type="number" id="numberOfTickets" name="numberOfTickets" placeholder="Enter the number of tickets" value={formData.numberOfTickets} onChange={handleInputChange} required />
       
        <button className='btn' type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;

