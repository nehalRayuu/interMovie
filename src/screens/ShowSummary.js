import React,{useEffect ,useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import './ShowSummary.css'; 
import parse from 'html-react-parser';
const ShowSummary = () => {
  const [movie,setMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData()
   
}, [])
// console.log(id)
const getData = async() => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const data = await response.json();
 console.log(data)
  setMovie(data)
    
    // console.log(movie.name +" ---movie")
}

  // const handleBookTicket = () => {

  //   const showDetails = {
  //     id: movie.id, 
  //     name: movie.name, 
      
  //   };
  //   // localStorage.setItem('showDetails', JSON.stringify(showDetails));
  // };

  return (
  <div className='show-page'>
    <div className="show-summary">
      <div className='show-details'>
        <img className='show-image' src={ movie && movie.image ? movie.image.original : "" } alt={movie.name} />
            
      <h3>Show ID: {id}</h3>
      
      <ul className='show-list-h'>
         <h3>Tags : </h3>
          { movie && movie.genres && movie.genres.map((item,id)=>(
          <li className='show-li' key={id}>{item} </li> 
        ))
        } 
      
       
      
        
       </ul>
       
      <h1>{parse(`${movie.name}`)} </h1>
       {parse(`${movie.summary}`)} 
      
      <Link to={`/booking/${movie.id}`}>
        <button className="book-ticket-btn" >Book Ticket</button>
      </Link>
    </div>
    </div>
    </div>
  );
};

export default ShowSummary;

